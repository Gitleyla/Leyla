# -*- coding: utf-8 -*-

import asyncio
import os
import sys

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(root + '/python')

import ccxt.async as ccxt  # noqa: E402


async def main(exchange, symbol):
    while True:
        print('--------------------------------------------------------------')
        print(exchange.iso8601(exchange.milliseconds()), 'fetching', symbol, 'ticker from', exchange.name)
        # this can be any call really
        ticker = await exchange.fetch_order_book(symbol)
        print(exchange.iso8601(exchange.milliseconds()), 'fetched', symbol, 'ticker from', exchange.name)
        print(ticker)


# you can set enableRateLimit = True to enable the built-in rate limiter
# this way you request rate will never hit the limit of an exchange
# the library will throttle your requests to avoid that

exchange = ccxt.gdax({
    'enableRateLimit': True,  # this option enables the built-in rate limiter
})

asyncio.get_event_loop().run_until_complete(main(exchange, 'LTC/USD'))
