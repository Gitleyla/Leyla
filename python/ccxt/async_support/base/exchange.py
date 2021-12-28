# -*- coding: utf-8 -*-

# -----------------------------------------------------------------------------

__version__ = '1.18.34'

# -----------------------------------------------------------------------------

import asyncio
import concurrent
import socket
import time
import math
import random
import certifi
import aiohttp
import ssl
import sys
import yarl

# -----------------------------------------------------------------------------

from ccxt.async_support.base.throttle import throttle

# -----------------------------------------------------------------------------

from ccxt.base.errors import ExchangeError
from ccxt.base.errors import AuthenticationError
from ccxt.base.errors import ExchangeNotAvailable
from ccxt.base.errors import RequestTimeout
from ccxt.base.errors import NotSupported

# -----------------------------------------------------------------------------

from ccxt.base.exchange import Exchange as BaseExchange

# -----------------------------------------------------------------------------

__all__ = [
    'BaseExchange',
    'Exchange',
]

# -----------------------------------------------------------------------------


class Exchange(BaseExchange):

    def __init__(self, config={}):
        if 'asyncio_loop' in config:
            self.asyncio_loop = config['asyncio_loop']
        self.asyncio_loop = self.asyncio_loop or asyncio.get_event_loop()
        self.own_session = 'session' not in config
        self.cafile = config.get('cafile', certifi.where())
        self.open()
        super(Exchange, self).__init__(config)
        self.init_rest_rate_limiter()

    def init_rest_rate_limiter(self):
        self.throttle = throttle(self.extend({
            'loop': self.asyncio_loop,
        }, self.tokenBucket))

    def __del__(self):
        if self.session is not None:
            self.logger.warning(self.id + " requires to release all resources with an explicit call to the .close() coroutine. If you are creating the exchange instance from within your async coroutine, add exchange.close() to your code into a place when you're done with the exchange and don't need the exchange instance anymore (at the end of your async coroutine).")

    if sys.version_info >= (3, 5):
        async def __aenter__(self):
            self.open()
            return self

        async def __aexit__(self, exc_type, exc, tb):
            await self.close()

    def open(self):
        if self.own_session and self.session is None:
            # Create our SSL context object with our CA cert file
            context = ssl.create_default_context(cafile=self.cafile)
            # Pass this SSL context to aiohttp and create a TCPConnector
            connector = aiohttp.TCPConnector(ssl=context, loop=self.asyncio_loop)
            self.session = aiohttp.ClientSession(loop=self.asyncio_loop, connector=connector, trust_env=self.aiohttp_trust_env)

    async def close(self):
        if self.session is not None:
            if self.own_session:
                await self.session.close()
            self.session = None

    async def wait_for_token(self):
        while self.rateLimitTokens <= 1:
            # if self.verbose:
            #     print('Waiting for tokens: Exchange: {0}'.format(self.id))
            self.add_new_tokens()
            seconds_delays = [0.001, 0.005, 0.022, 0.106, 0.5]
            delay = random.choice(seconds_delays)
            await asyncio.sleep(delay)
        self.rateLimitTokens -= 1

    def add_new_tokens(self):
        # if self.verbose:
        #     print('Adding new tokens: Exchange: {0}'.format(self.id))
        now = time.monotonic()
        time_since_update = now - self.rateLimitUpdateTime
        new_tokens = math.floor((0.8 * 1000.0 * time_since_update) / self.rateLimit)
        if new_tokens > 1:
            self.rateLimitTokens = min(self.rateLimitTokens + new_tokens, self.rateLimitMaxTokens)
            self.rateLimitUpdateTime = now

    async def fetch2(self, path, api='public', method='GET', params={}, headers=None, body=None):
        """A better wrapper over request for deferred signing"""
        if self.enableRateLimit:
            await self.throttle()
        self.lastRestRequestTimestamp = self.milliseconds()
        request = self.sign(path, api, method, params, headers, body)
        return await self.fetch(request['url'], request['method'], request['headers'], request['body'])

    async def fetch(self, url, method='GET', headers=None, body=None):
        """Perform a HTTP request and return decoded JSON data"""
        request_headers = self.prepare_request_headers(headers)
        url = self.proxy + url

        if self.verbose:
            print("\nRequest:", method, url, headers, body)
        self.logger.debug("%s %s, Request: %s %s", method, url, headers, body)

        encoded_body = body.encode() if body else None
        session_method = getattr(self.session, method.lower())

        response = None
        http_response = None
        json_response = None
        try:
            async with session_method(yarl.URL(url, encoded=True),
                                      data=encoded_body,
                                      headers=request_headers,
                                      timeout=(self.timeout / 1000),
                                      proxy=self.aiohttp_proxy) as response:
                http_response = await response.text()
                json_response = self.parse_json(http_response)
                headers = response.headers
                if self.enableLastHttpResponse:
                    self.last_http_response = http_response
                if self.enableLastResponseHeaders:
                    self.last_response_headers = headers
                if self.enableLastJsonResponse:
                    self.last_json_response = json_response
                if self.verbose:
                    print("\nResponse:", method, url, response.status, headers, http_response)
                self.logger.debug("%s %s, Response: %s %s %s", method, url, response.status, headers, http_response)

        except socket.gaierror as e:
            self.raise_error(ExchangeNotAvailable, url, method, e, None)

        except concurrent.futures._base.TimeoutError as e:
            self.raise_error(RequestTimeout, method, url, e, None)

        except aiohttp.client_exceptions.ClientConnectionError as e:
            self.raise_error(ExchangeNotAvailable, url, method, e, None)

        except aiohttp.client_exceptions.ClientError as e:  # base exception class
            self.raise_error(ExchangeError, url, method, e, None)

        self.handle_errors(response.status, response.reason, url, method, headers, http_response, json_response)
        self.handle_rest_response(http_response, json_response, url, method, headers, body)
        return json_response

    async def load_markets(self, reload=False, params={}):
        if not reload:
            if self.markets:
                if not self.markets_by_id:
                    return self.set_markets(self.markets)
                return self.markets
        markets = await self.fetch_markets(params)
        currencies = None
        if self.has['fetchCurrencies']:
            currencies = await self.fetch_currencies()
        return self.set_markets(markets, currencies)

    async def fetch_fees(self):
        trading = {}
        funding = {}
        try:
            trading = await self.fetch_trading_fees()
        except AuthenticationError:
            pass
        except AttributeError:
            pass

        try:
            funding = await self.fetch_funding_fees()
        except AuthenticationError:
            pass
        except AttributeError:
            pass

        return {
            'trading': trading,
            'funding': funding,
        }

    async def load_fees(self):
        await self.load_markets()
        self.populate_fees()
        if not (self.has['fetchTradingFees'] or self.has['fetchFundingFees']):
            return self.fees

        fetched_fees = await self.fetch_fees()
        if fetched_fees['funding']:
            self.fees['funding']['fee_loaded'] = True
        if fetched_fees['trading']:
            self.fees['trading']['fee_loaded'] = True

        self.fees = self.deep_extend(self.fees, fetched_fees)
        return self.fees

    async def fetch_markets(self, params={}):
        # markets are returned as a list
        # currencies are returned as a dict
        # this is for historical reasons
        # and may be changed for consistency later
        return self.to_array(self.markets)

    async def fetch_currencies(self, params={}):
        # markets are returned as a list
        # currencies are returned as a dict
        # this is for historical reasons
        # and may be changed for consistency later
        return self.currencies

    async def fetch_order_status(self, id, symbol=None, params={}):
        order = await self.fetch_order(id, symbol, params)
        return order['status']

    async def fetch_partial_balance(self, part, params={}):
        balance = await self.fetch_balance(params)
        return balance[part]

    async def fetch_l2_order_book(self, symbol, limit=None, params={}):
        orderbook = await self.fetch_order_book(symbol, limit, params)
        return self.extend(orderbook, {
            'bids': self.sort_by(self.aggregate(orderbook['bids']), 0, True),
            'asks': self.sort_by(self.aggregate(orderbook['asks']), 0),
        })

    async def perform_order_book_request(self, market, limit=None, params={}):
        raise NotSupported(self.id + ' performOrderBookRequest not supported yet')

    async def fetch_order_book(self, symbol, limit=None, params={}):
        await self.load_markets()
        market = self.market(symbol)
        orderbook = await self.perform_order_book_request(market, limit, params)
        return self.parse_order_book(orderbook, market, limit, params)

    async def fetch_ohlcv(self, symbol, timeframe='1m', since=None, limit=None, params={}):
        if not self.has['fetchTrades']:
            self.raise_error(NotSupported, details='fetch_ohlcv() not implemented yet')
        await self.load_markets()
        trades = await self.fetch_trades(symbol, since, limit, params)
        return self.build_ohlcv(trades, timeframe, since, limit)

    async def fetchOHLCV(self, symbol, timeframe='1m', since=None, limit=None, params={}):
        return await self.fetch_ohlcv(symbol, timeframe, since, limit, params)

    async def fetch_full_tickers(self, symbols=None, params={}):
        return await self.fetch_tickers(symbols, params)

    async def edit_order(self, id, symbol, *args):
        if not self.enableRateLimit:
            self.raise_error(ExchangeError, details='updateOrder() requires enableRateLimit = true')
        await self.cancel_order(id, symbol)
        return await self.create_order(symbol, *args)

    async def load_trading_limits(self, symbols=None, reload=False, params={}):
        if self.has['fetchTradingLimits']:
            if reload or not('limitsLoaded' in list(self.options.keys())):
                response = await self.fetch_trading_limits(symbols)
                for i in range(0, len(symbols)):
                    symbol = symbols[i]
                    self.markets[symbol] = self.deep_extend(self.markets[symbol], response[symbol])
                self.options['limitsLoaded'] = self.milliseconds()
        return self.markets
