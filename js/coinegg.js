'use strict';

//  ---------------------------------------------------------------------------

const Exchange = require ('./base/Exchange');
const { ExchangeError, AuthenticationError, InvalidNonce, InsufficientFunds, InvalidOrder, OrderNotFound, DDoSProtection } = require ('./base/errors');

//  ---------------------------------------------------------------------------

module.exports = class coinegg extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'coinegg',
            'name': 'CoinEgg',
            'countries': [ 'CN', 'UK' ],
            'has': {
                'fetchOrder': true,
                'fetchOrders': true,
                'fetchOpenOrders': 'emulated',
                'fetchMyTrades': true,
                'fetchTickers': true,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/36770310-adfa764e-1c5a-11e8-8e09-449daac3d2fb.jpg',
                'api': {
                    'web': 'https://www.coinegg.com/coin',
                    'rest': 'https://api.coinegg.com/api/v1',
                },
                'www': 'https://www.coinegg.com',
                'doc': 'https://www.coinegg.com/explain.api.html',
                'fees': 'https://www.coinegg.com/fee.html',
            },
            'api': {
                'web': {
                    'get': [
                        '{quote}/allcoin',
                        '{quote}/trends',
                        '{quote}/{base}/order',
                        '{quote}/{base}/trades',
                        '{quote}/{base}/depth.js',
                    ],
                },
                'public': {
                    'get': [
                        'ticker/{quote}',
                        'depth/{quote}',
                        'orders/{quote}',
                    ],
                },
                'private': {
                    'get': [
                        'balance',
                    ],
                    'post': [
                        'trade_add/{quote}',
                        'trade_cancel/{quote}',
                        'trade_view/{quote}',
                        'trade_list/{quote}',
                    ],
                },
            },
            'fees': {
                'trading': {
                    'maker': 0.1 / 100,
                    'taker': 0.1 / 100,
                },
                'funding': {
                    'withdraw': {
                        'BTC': 0.008,
                        'BCH': 0.002,
                        'LTC': 0.001,
                        'ETH': 0.01,
                        'ETC': 0.01,
                        'NEO': 0,
                        'QTUM': '1%',
                        'XRP': '1%',
                        'DOGE': '1%',
                        'LSK': '1%',
                        'XAS': '1%',
                        'BTS': '1%',
                        'GAME': '1%',
                        'GOOC': '1%',
                        'NXT': '1%',
                        'IFC': '1%',
                        'DNC': '1%',
                        'BLK': '1%',
                        'VRC': '1%',
                        'XPM': '1%',
                        'VTC': '1%',
                        'TFC': '1%',
                        'PLC': '1%',
                        'EAC': '1%',
                        'PPC': '1%',
                        'FZ': '1%',
                        'ZET': '1%',
                        'RSS': '1%',
                        'PGC': '1%',
                        'SKT': '1%',
                        'JBC': '1%',
                        'RIO': '1%',
                        'LKC': '1%',
                        'ZCC': '1%',
                        'MCC': '1%',
                        'QEC': '1%',
                        'MET': '1%',
                        'YTC': '1%',
                        'HLB': '1%',
                        'MRYC': '1%',
                        'MTC': '1%',
                        'KTC': 0,
                    },
                },
            },
            'exceptions': {
                '103': AuthenticationError,
                '104': AuthenticationError,
                '105': AuthenticationError,
                '106': InvalidNonce,
                '200': InsufficientFunds,
                '201': InvalidOrder,
                '202': InvalidOrder,
                '203': OrderNotFound,
                '402': DDoSProtection,
            },
        });
    }

    async fetchMarkets () {
        let quoteIds = [ 'btc', 'usc' ];
        let result = [];
        for (let b = 0; b < quoteIds.length; b++) {
            let quoteId = quoteIds[b];
            let bases = await this.webGetQuoteAllcoin ({
                'quote': quoteId,
            });
            let baseIds = Object.keys (bases);
            let numBaseIds = baseIds.length;
            if (numBaseIds < 1)
                throw new ExchangeError (this.id + ' fetchMarkets() failed for ' + quoteId);
            for (let i = 0; i < baseIds.length; i++) {
                let baseId = baseIds[i];
                let market = bases[baseId];
                let base = baseId.toUpperCase ();
                let quote = quoteId.toUpperCase ();
                base = this.commonCurrencyCode (base);
                quote = this.commonCurrencyCode (quote);
                let id = baseId + quoteId;
                let symbol = base + '/' + quote;
                let precision = {
                    'amount': 8,
                    'price': 8,
                };
                let lot = Math.pow (10, -precision['amount']);
                result.push ({
                    'id': id,
                    'symbol': symbol,
                    'base': base,
                    'quote': quote,
                    'baseId': baseId,
                    'quoteId': quoteId,
                    'active': true,
                    'lot': lot,
                    'precision': precision,
                    'limits': {
                        'amount': {
                            'min': lot,
                            'max': Math.pow (10, precision['amount']),
                        },
                        'price': {
                            'min': Math.pow (10, -precision['price']),
                            'max': Math.pow (10, precision['price']),
                        },
                        'cost': {
                            'min': undefined,
                            'max': undefined,
                        },
                    },
                    'info': market,
                });
            }
        }
        return result;
    }

    parseTicker (ticker, market = undefined) {
        let symbol = market['symbol'];
        let timestamp = this.milliseconds ();
        return {
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'high': parseFloat (ticker['high']),
            'low': parseFloat (ticker['low']),
            'bid': parseFloat (ticker['buy']),
            'ask': parseFloat (ticker['sell']),
            'vwap': undefined,
            'open': undefined,
            'close': undefined,
            'first': undefined,
            'last': parseFloat (ticker['last']),
            'change': this.safeFloat (ticker, 'change'),
            'percentage': undefined,
            'average': undefined,
            'baseVolume': parseFloat (ticker['vol']),
            'quoteVolume': this.safeFloat (ticker, 'quoteVol'),
            'info': ticker,
        };
    }

    async fetchTicker (symbol, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let ticker = await this.publicGetTickerQuote (this.extend ({
            'coin': market['baseId'],
            'quote': market['quoteId'],
        }, params));
        return this.parseTicker (ticker, market);
    }

    async fetchTickers (symbols = undefined, params = {}) {
        await this.loadMarkets ();
        let quoteIds = [ 'btc', 'usc' ];
        let result = {};
        for (let b = 0; b < quoteIds.length; b++) {
            let quoteId = quoteIds[b];
            let tickers = await this.webGetQuoteAllcoin ({
                'quote': quoteId,
            });
            let baseIds = Object.keys (tickers);
            if (!baseIds.length) {
                throw new ExchangeError ('fetchTickers failed');
            }
            for (let i = 0; i < baseIds.length; i++) {
                let baseId = baseIds[i];
                let ticker = tickers[baseId];
                let id = baseId + quoteId;
                let market = this.marketsById[id];
                let symbol = market['symbol'];
                result[symbol] = this.parseTicker ({
                    'high': ticker[4],
                    'low': ticker[5],
                    'buy': ticker[2],
                    'sell': ticker[3],
                    'last': ticker[1],
                    'change': ticker[8],
                    'vol': ticker[6],
                    'quoteVol': ticker[7],
                }, market);
            }
        }
        return result;
    }

    async fetchOrderBook (symbol, limit = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let orderbook = await this.publicGetDepthQuote (this.extend ({
            'coin': market['baseId'],
            'quote': market['quoteId'],
        }, params));
        return this.parseOrderBook (orderbook);
    }

    parseTrade (trade, market = undefined) {
        let timestamp = parseInt (trade['date']) * 1000;
        let price = parseFloat (trade['price']);
        let amount = parseFloat (trade['amount']);
        let symbol = market['symbol'];
        let cost = this.costToPrecision (symbol, price * amount);
        return {
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'symbol': symbol,
            'id': this.safeString (trade, 'tid'),
            'order': undefined,
            'type': 'limit',
            'side': trade['type'],
            'price': price,
            'amount': amount,
            'cost': cost,
            'fee': undefined,
            'info': trade,
        };
    }

    async fetchTrades (symbol, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let trades = await this.publicGetOrdersQuote (this.extend ({
            'coin': market['baseId'],
            'quote': market['quoteId'],
        }, params));
        return this.parseTrades (trades, market, since, limit);
    }

    async fetchBalance (params = {}) {
        await this.loadMarkets ();
        let balances = await this.privateGetBalance (params);
        let result = { 'info': balances };
        balances = this.omit (balances['data'], 'uid');
        let rows = Object.keys (balances);
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let [ id, type ] = row.split ('_');
            id = id.toUpperCase ();
            type = type.toUpperCase ();
            let currency = this.commonCurrencyCode (id);
            if (currency in this.currencies) {
                if (!(currency in result)) {
                    result[currency] = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined,
                    };
                }
                type = (type === 'LOCK' ? 'used' : 'free');
                result[currency][type] = parseFloat (balances[row]);
            }
        }
        let currencies = Object.keys (result);
        for (let i = 0; i < currencies.length; i++) {
            let currency = currencies[i];
            result[currency]['total'] = this.sum (result[currency]['free'], result[currency]['used']);
        }
        return this.parseBalance (result);
    }

    parseOrder (order, market = undefined) {
        let symbol = market['symbol'];
        let timestamp = this.parse8601 (order['datetime']);
        let price = parseFloat (order['price']);
        let amount = parseFloat (order['amount_original']);
        let remaining = parseFloat (order['amount_outstanding']);
        let filled = amount - remaining;
        let status = this.safeString (order, 'status');
        if (status === 'cancelled') {
            status = 'canceled';
        } else {
            status = remaining ? 'open' : 'closed';
        }
        let info = this.safeValue (order, 'info', order);
        return {
            'id': this.safeString (order, 'id'),
            'datetime': this.iso8601 (timestamp),
            'timestamp': timestamp,
            'status': status,
            'symbol': symbol,
            'type': 'limit',
            'side': order['type'],
            'price': price,
            'cost': undefined,
            'amount': amount,
            'filled': filled,
            'remaining': remaining,
            'trades': undefined,
            'fee': undefined,
            'info': info,
        };
    }

    async createOrder (symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let response = await this.privatePostTradeAddQuote (this.extend ({
            'coin': market['baseId'],
            'quote': market['quoteId'],
            'type': side,
            'amount': amount,
            'price': price,
        }, params));
        if (!response['status']) {
            throw new InvalidOrder (this.json (response));
        }
        let id = response['id'];
        let order = this.parseOrder ({
            'id': id,
            'datetime': this.ymdhms (this.milliseconds ()),
            'amount_original': amount,
            'amount_outstanding': amount,
            'price': price,
            'type': side,
            'info': response,
        }, market);
        this.orders[id] = order;
        return order;
    }

    async cancelOrder (id, symbol = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let response = await this.privatePostTradeCancelQuote (this.extend ({
            'id': id,
            'coin': market['baseId'],
            'quote': market['quoteId'],
        }, params));
        if (!response['status']) {
            throw new ExchangeError (this.json (response));
        }
        return response;
    }

    async fetchOrder (id, symbol = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let response = await this.privatePostTradeViewQuote (this.extend ({
            'id': id,
            'coin': market['baseId'],
            'quote': market['quoteId'],
        }, params));
        return this.parseOrder (response['data'], market);
    }

    async fetchOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let request = {
            'coin': market['baseId'],
            'quote': market['quoteId'],
        };
        if (typeof since !== 'undefined')
            request['since'] = since / 1000;
        let orders = await this.privatePostTradeListQuote (this.extend (request, params));
        return this.parseOrders (orders['data'], market, since, limit);
    }

    async fetchOpenOrders (symbol = undefined, since = undefined, limit = undefined, params = {}) {
        let result = await this.fetchOrders (symbol, since, limit, this.extend ({
            'type': 'open',
        }, params));
        return result;
    }

    nonce () {
        return this.milliseconds ();
    }

    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let apiType = 'rest';
        if (api === 'web') {
            apiType = api;
        }
        let url = this.urls['api'][apiType] + '/' + this.implodeParams (path, params);
        let query = this.omit (params, this.extractParams (path));
        if (api === 'public' || api === 'web') {
            if (api === 'web')
                query['t'] = this.nonce ();
            if (Object.keys (query).length)
                url += '?' + this.urlencode (query);
        } else {
            this.checkRequiredCredentials ();
            query = this.urlencode (this.extend ({
                'key': this.apiKey,
                'nonce': this.nonce (),
            }, query));
            let secret = this.hash (this.secret);
            let signature = this.hmac (this.encode (query), this.encode (secret));
            query += '&' + 'signature=' + signature;
            if (method === 'GET') {
                url += '?' + query;
            } else {
                headers = {
                    'Content-type': 'application/x-www-form-urlencoded',
                };
                body = query;
            }
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }

    handleErrors (code, reason, url, method, headers, body) {
        let errorMessages = {
            '100': 'Required parameters can not be empty',
            '101': 'Illegal parameter',
            '102': 'coin does not exist',
            '103': 'Key does not exist',
            '104': 'Signature does not match',
            '105': 'Insufficient permissions',
            '106': 'Request expired(nonce error)',
            '200': 'Lack of balance',
            '201': 'Too small for the number of trading',
            '202': 'Price must be in 0 - 1000000',
            '203': 'Order does not exist',
            '204': 'Pending order amount must be above 0.001 BTC',
            '205': 'Restrict pending order prices',
            '206': 'Decimal place error',
            '401': 'System error',
            '402': 'Requests are too frequent',
            '403': 'Non-open API',
            '404': 'IP restriction does not request the resource',
            '405': 'Currency transactions are temporarily closed',
        };
        // checks against error codes
        if (typeof body === 'string') {
            if (body.length > 0) {
                if (body[0] === '{') {
                    let response = JSON.parse (body);
                    let error = this.safeString (response, 'code');
                    let message = this.safeString (errorMessages, code, 'Error');
                    if (typeof error !== 'undefined') {
                        if (error in this.exceptions) {
                            throw new this.exceptions[error] (this.id + ' ' + message);
                        } else {
                            throw new ExchangeError (this.id + message);
                        }
                    }
                }
            }
        }
    }
};
