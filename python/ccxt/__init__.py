# -*- coding: utf-8 -*-

"""CCXT: CryptoCurrency eXchange Trading Library"""

"""
MIT License

Copyright (c) 2017 Igor Kroitor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""

# ----------------------------------------------------------------------------

__version__ = '1.11.67'

# ----------------------------------------------------------------------------

from ccxt.base.exchange import Exchange                     # noqa: F401

from ccxt.base import errors                                # noqa: F401
from ccxt.base.errors import BaseError                      # noqa: F401
from ccxt.base.errors import ExchangeError                  # noqa: F401
from ccxt.base.errors import NotSupported                   # noqa: F401
from ccxt.base.errors import AuthenticationError            # noqa: F401
from ccxt.base.errors import InvalidNonce                   # noqa: F401
from ccxt.base.errors import InsufficientFunds              # noqa: F401
from ccxt.base.errors import InvalidOrder                   # noqa: F401
from ccxt.base.errors import OrderNotFound                  # noqa: F401
from ccxt.base.errors import OrderNotCached                 # noqa: F401
from ccxt.base.errors import CancelPending                  # noqa: F401
from ccxt.base.errors import NetworkError                   # noqa: F401
from ccxt.base.errors import DDoSProtection                 # noqa: F401
from ccxt.base.errors import RequestTimeout                 # noqa: F401
from ccxt.base.errors import ExchangeNotAvailable           # noqa: F401
from ccxt.base.errors import InvalidAddress                 # noqa: F401

from ccxt._1broker import _1broker                          # noqa: F401
from ccxt._1btcxe import _1btcxe                            # noqa: F401
from ccxt.acx import acx                                    # noqa: F401
from ccxt.allcoin import allcoin                            # noqa: F401
from ccxt.anxpro import anxpro                              # noqa: F401
from ccxt.bibox import bibox                                # noqa: F401
from ccxt.binance import binance                            # noqa: F401
from ccxt.bit2c import bit2c                                # noqa: F401
from ccxt.bitbay import bitbay                              # noqa: F401
from ccxt.bitcoincoid import bitcoincoid                    # noqa: F401
from ccxt.bitfinex import bitfinex                          # noqa: F401
from ccxt.bitfinex2 import bitfinex2                        # noqa: F401
from ccxt.bitflyer import bitflyer                          # noqa: F401
from ccxt.bithumb import bithumb                            # noqa: F401
from ccxt.bitlish import bitlish                            # noqa: F401
from ccxt.bitmarket import bitmarket                        # noqa: F401
from ccxt.bitmex import bitmex                              # noqa: F401
from ccxt.bitso import bitso                                # noqa: F401
from ccxt.bitstamp import bitstamp                          # noqa: F401
from ccxt.bitstamp1 import bitstamp1                        # noqa: F401
from ccxt.bittrex import bittrex                            # noqa: F401
from ccxt.bitz import bitz                                  # noqa: F401
from ccxt.bl3p import bl3p                                  # noqa: F401
from ccxt.bleutrade import bleutrade                        # noqa: F401
from ccxt.braziliex import braziliex                        # noqa: F401
from ccxt.btcbox import btcbox                              # noqa: F401
from ccxt.btcchina import btcchina                          # noqa: F401
from ccxt.btcexchange import btcexchange                    # noqa: F401
from ccxt.btcmarkets import btcmarkets                      # noqa: F401
from ccxt.btctradeim import btctradeim                      # noqa: F401
from ccxt.btctradeua import btctradeua                      # noqa: F401
from ccxt.btcturk import btcturk                            # noqa: F401
from ccxt.btcx import btcx                                  # noqa: F401
from ccxt.bxinth import bxinth                              # noqa: F401
from ccxt.ccex import ccex                                  # noqa: F401
from ccxt.cex import cex                                    # noqa: F401
from ccxt.chbtc import chbtc                                # noqa: F401
from ccxt.chilebit import chilebit                          # noqa: F401
from ccxt.cobinhood import cobinhood                        # noqa: F401
from ccxt.coincheck import coincheck                        # noqa: F401
from ccxt.coinegg import coinegg                            # noqa: F401
from ccxt.coinexchange import coinexchange                  # noqa: F401
from ccxt.coinfloor import coinfloor                        # noqa: F401
from ccxt.coingi import coingi                              # noqa: F401
from ccxt.coinmarketcap import coinmarketcap                # noqa: F401
from ccxt.coinmate import coinmate                          # noqa: F401
from ccxt.coinsecure import coinsecure                      # noqa: F401
from ccxt.coinspot import coinspot                          # noqa: F401
from ccxt.coolcoin import coolcoin                          # noqa: F401
from ccxt.cryptopia import cryptopia                        # noqa: F401
from ccxt.dsx import dsx                                    # noqa: F401
from ccxt.exmo import exmo                                  # noqa: F401
from ccxt.flowbtc import flowbtc                            # noqa: F401
from ccxt.foxbit import foxbit                              # noqa: F401
from ccxt.fybse import fybse                                # noqa: F401
from ccxt.fybsg import fybsg                                # noqa: F401
from ccxt.gatecoin import gatecoin                          # noqa: F401
from ccxt.gateio import gateio                              # noqa: F401
from ccxt.gdax import gdax                                  # noqa: F401
from ccxt.gemini import gemini                              # noqa: F401
from ccxt.getbtc import getbtc                              # noqa: F401
from ccxt.hitbtc import hitbtc                              # noqa: F401
from ccxt.hitbtc2 import hitbtc2                            # noqa: F401
from ccxt.huobi import huobi                                # noqa: F401
from ccxt.huobicny import huobicny                          # noqa: F401
from ccxt.huobipro import huobipro                          # noqa: F401
from ccxt.independentreserve import independentreserve      # noqa: F401
from ccxt.itbit import itbit                                # noqa: F401
from ccxt.jubi import jubi                                  # noqa: F401
from ccxt.kraken import kraken                              # noqa: F401
from ccxt.kucoin import kucoin                              # noqa: F401
from ccxt.kuna import kuna                                  # noqa: F401
from ccxt.lakebtc import lakebtc                            # noqa: F401
from ccxt.liqui import liqui                                # noqa: F401
from ccxt.livecoin import livecoin                          # noqa: F401
from ccxt.luno import luno                                  # noqa: F401
from ccxt.lykke import lykke                                # noqa: F401
from ccxt.mercado import mercado                            # noqa: F401
from ccxt.mixcoins import mixcoins                          # noqa: F401
from ccxt.nova import nova                                  # noqa: F401
from ccxt.okcoincny import okcoincny                        # noqa: F401
from ccxt.okcoinusd import okcoinusd                        # noqa: F401
from ccxt.okex import okex                                  # noqa: F401
from ccxt.paymium import paymium                            # noqa: F401
from ccxt.poloniex import poloniex                          # noqa: F401
from ccxt.qryptos import qryptos                            # noqa: F401
from ccxt.quadrigacx import quadrigacx                      # noqa: F401
from ccxt.quoinex import quoinex                            # noqa: F401
from ccxt.southxchange import southxchange                  # noqa: F401
from ccxt.surbitcoin import surbitcoin                      # noqa: F401
from ccxt.therock import therock                            # noqa: F401
from ccxt.tidex import tidex                                # noqa: F401
from ccxt.urdubit import urdubit                            # noqa: F401
from ccxt.vaultoro import vaultoro                          # noqa: F401
from ccxt.vbtc import vbtc                                  # noqa: F401
from ccxt.virwox import virwox                              # noqa: F401
from ccxt.wex import wex                                    # noqa: F401
from ccxt.xbtce import xbtce                                # noqa: F401
from ccxt.yobit import yobit                                # noqa: F401
from ccxt.yunbi import yunbi                                # noqa: F401
from ccxt.zaif import zaif                                  # noqa: F401
from ccxt.zb import zb                                      # noqa: F401

exchanges = [
    '_1broker',
    '_1btcxe',
    'acx',
    'allcoin',
    'anxpro',
    'bibox',
    'binance',
    'bit2c',
    'bitbay',
    'bitcoincoid',
    'bitfinex',
    'bitfinex2',
    'bitflyer',
    'bithumb',
    'bitlish',
    'bitmarket',
    'bitmex',
    'bitso',
    'bitstamp',
    'bitstamp1',
    'bittrex',
    'bitz',
    'bl3p',
    'bleutrade',
    'braziliex',
    'btcbox',
    'btcchina',
    'btcexchange',
    'btcmarkets',
    'btctradeim',
    'btctradeua',
    'btcturk',
    'btcx',
    'bxinth',
    'ccex',
    'cex',
    'chbtc',
    'chilebit',
    'cobinhood',
    'coincheck',
    'coinegg',
    'coinexchange',
    'coinfloor',
    'coingi',
    'coinmarketcap',
    'coinmate',
    'coinsecure',
    'coinspot',
    'coolcoin',
    'cryptopia',
    'dsx',
    'exmo',
    'flowbtc',
    'foxbit',
    'fybse',
    'fybsg',
    'gatecoin',
    'gateio',
    'gdax',
    'gemini',
    'getbtc',
    'hitbtc',
    'hitbtc2',
    'huobi',
    'huobicny',
    'huobipro',
    'independentreserve',
    'itbit',
    'jubi',
    'kraken',
    'kucoin',
    'kuna',
    'lakebtc',
    'liqui',
    'livecoin',
    'luno',
    'lykke',
    'mercado',
    'mixcoins',
    'nova',
    'okcoincny',
    'okcoinusd',
    'okex',
    'paymium',
    'poloniex',
    'qryptos',
    'quadrigacx',
    'quoinex',
    'southxchange',
    'surbitcoin',
    'therock',
    'tidex',
    'urdubit',
    'vaultoro',
    'vbtc',
    'virwox',
    'wex',
    'xbtce',
    'yobit',
    'yunbi',
    'zaif',
    'zb',
]

base = [
    'Exchange',
    'exchanges',
]

__all__ = base + errors.__all__ + exchanges
