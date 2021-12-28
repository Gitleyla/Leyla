import ccxtpro
from pprint import pprint
from asyncio import run


print('CCXT Pro Version:', ccxtpro.__version__)


async def main():
    exchange = ccxtpro.binance({
        'apiKey': 'YOUR_API_KEY',
        'secret': 'YOUR_SECRET',
    })

    markets = await exchange.load_markets()

    # exchange.verbose = True  # uncomment for debugging purposes if necessary

    symbol = 'ETH/BTC'
    type = 'limit'  # or 'market'
    side = 'sell'  # or 'buy'
    amount = 1.0
    price = 0.060154  # or None

    order = await exchange.create_order(symbol, type, side, amount, price)
    canceled = await exchange.cancel_order(order['id'], order['symbol'])

    pprint(canceled)

    await exchange.close()


run(main())

