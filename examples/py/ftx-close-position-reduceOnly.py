# -*- coding: utf-8 -*-

import os
import sys
from pprint import pprint

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(root + '/python')

import ccxt  # noqa: E402

print('CCXT Version:', ccxt.__version__)


exchange = ccxt.ftx({
    'enableRateLimit': True,
    'apiKey': 'YOUR_API_KEY',
    'secret': 'YOUR_SECRET',
})

exchange.load_markets()

# exchange.verbose = True  # uncomment for debugging purposes if necessary

symbol = 'BTC-PERP'  # change for your symbol
positions = exchange.fetch_positions()
positions_by_symbol = exchange.index_by(positions, 'symbol')
position = exchange.safe_value(positions_by_symbol, symbol)

if position is None:
    print('You do not have an open', symbol, 'position')

type = 'market'
side = 'sell' if position['side'] == 'long' else 'buy'
amount = position['contracts']
price = None
params = {
    'reduceOnly': True
}
order = exchange.create_order(symbol, type, side, amount, price, params)
pprint(order)
