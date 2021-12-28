# CCXT – CryptoCurrency eXchange Trading Library

[![Build Status](https://travis-ci.org/kroitor/ccxt.svg?branch=master)](https://travis-ci.org/kroitor/ccxt) [![npm](https://img.shields.io/npm/v/ccxt.svg)](https://npmjs.com/package/ccxt) [![PyPI](https://img.shields.io/pypi/v/ccxt.svg)](https://pypi.python.org/pypi/ccxt) [![NPM Downloads](https://img.shields.io/npm/dm/ccxt.svg)](https://www.npmjs.com/package/ccxt) [![Scrutinizer Code Quality](https://img.shields.io/scrutinizer/g/kroitor/ccxt.svg)](https://scrutinizer-ci.com/g/kroitor/ccxt/?branch=master) [![Try ccxt on RunKit](https://badge.runkitcdn.com/ccxt.svg)](https://npm.runkit.com/ccxt) [![Supported Exchanges](https://img.shields.io/badge/exchanges-70-blue.svg)](https://github.com/kroitor/ccxt/wiki/Exchange-Markets)

A JavaScript / Python / PHP library for cryptocurrency trading and e-commerce with support for many bitcoin/ether/altcoin exchange markets and merchant APIs.

The ccxt library is used to connect and trade with cryptocurrency / altcoin exchanges and payment processing services worldwide. It provides quick access to market data for storage, analysis, visualization, indicator development, algorithmic trading, strategy backtesting, bot programming, webshop integration and related software engineering. It is intented to be used by coders, developers and financial analysts to build trading algorithms on top of it.

Current featurelist:

- support for many exchange markets, even more upcoming soon
- fully implemented public and private APIs for all exchanges
- all currencies, altcoins and symbols, prices, order books, trades, tickers, etc...
- optional normalised data for cross-market or cross-currency analytics and arbitrage
- an out-of-the box unified all-in-one API extremely easy to integrate

[ccxt on GitHub](https://github.com/kroitor/ccxt) | [Install](#install) | [Usage](#usage) | [Manual](https://github.com/kroitor/ccxt/wiki) | [Examples](https://github.com/kroitor/ccxt/tree/master/examples) | [Contributing](#contributing) | [**Public Offer**](#public-offer)

## Supported Cryptocurrency Exchange Markets

The ccxt library currently supports the following 70 cryptocurrency exchange markets and trading APIs:

|                                                                                                                      | id            | name                                                 | ver | doc                                                                                         | countries                               |
|----------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------|:---:|:-------------------------------------------------------------------------------------------:|-----------------------------------------|
|![_1broker](https://user-images.githubusercontent.com/1294454/27766021-420bd9fc-5ecb-11e7-8ed6-56d0081efed2.jpg)      | _1broker      | [1Broker](https://1broker.com)                       | 2   | [API](https://1broker.com/?c=en/content/api-documentation)                                  | US                                      |
|![_1btcxe](https://user-images.githubusercontent.com/1294454/27766049-2b294408-5ecc-11e7-85cc-adaff013dc1a.jpg)       | _1btcxe       | [1BTCXE](https://1btcxe.com)                         | *   | [API](https://1btcxe.com/api-docs.php)                                                      | Panama                                  |
|![anxpro](https://user-images.githubusercontent.com/1294454/27765983-fd8595da-5ec9-11e7-82e3-adb3ab8c2612.jpg)        | anxpro        | [ANXPro](https://anxpro.com)                         | 2   | [API](https://anxpro.com/pages/api)                                                         | Japan, Singapore, Hong Kong, New Zealand|
|![bit2c](https://user-images.githubusercontent.com/1294454/27766119-3593220e-5ece-11e7-8b3a-5a041f6bcc3f.jpg)         | bit2c         | [Bit2C](https://www.bit2c.co.il)                     | *   | [API](https://www.bit2c.co.il/home/api)                                                     | Israel                                  |
|![bitbay](https://user-images.githubusercontent.com/1294454/27766132-978a7bd8-5ece-11e7-9540-bc96d1e9bbb8.jpg)        | bitbay        | [BitBay](https://bitbay.net)                         | *   | [API](https://bitbay.net/public-api)                                                        | Poland, EU                              |
|![bitbays](https://user-images.githubusercontent.com/1294454/27808599-983687d2-6051-11e7-8d95-80dfcbe5cbb4.jpg)       | bitbays       | [BitBays](https://bitbays.com)                       | 1   | [API](https://bitbays.com/help/api/)                                                        | China, UK, Hong Kong, Australia, Canada |
|![bitcoincoid](https://user-images.githubusercontent.com/1294454/27766138-043c7786-5ecf-11e7-882b-809c14f38b53.jpg)   | bitcoincoid   | [Bitcoin.co.id](https://www.bitcoin.co.id)           | *   | [API](https://vip.bitcoin.co.id/downloads/BITCOINCOID-API-DOCUMENTATION.pdf)                | Indonesia                               |
|![bitfinex](https://user-images.githubusercontent.com/1294454/27766244-e328a50c-5ed2-11e7-947b-041416579bb3.jpg)      | bitfinex      | [Bitfinex](https://www.bitfinex.com)                 | 1   | [API](https://bitfinex.readme.io/v1/docs)                                                   | US                                      |
|![bitflyer](https://user-images.githubusercontent.com/1294454/28051642-56154182-660e-11e7-9b0d-6042d1e6edd8.jpg)      | bitflyer      | [bitFlyer](https://bitflyer.jp)                      | 1   | [API](https://bitflyer.jp/API)                                                              | Japan                                   |
|![bitlish](https://user-images.githubusercontent.com/1294454/27766275-dcfc6c30-5ed3-11e7-839d-00a846385d0b.jpg)       | bitlish       | [bitlish](https://bitlish.com)                       | 1   | [API](https://bitlish.com/api)                                                              | UK, EU, Russia                          |
|![bitmarket](https://user-images.githubusercontent.com/1294454/27767256-a8555200-5ef9-11e7-96fd-469a65e2b0bd.jpg)     | bitmarket     | [BitMarket](https://www.bitmarket.pl)                | *   | [API](https://www.bitmarket.net/docs.php?file=api_public.html)                              | Poland, EU                              |
|![bitmex](https://user-images.githubusercontent.com/1294454/27766319-f653c6e6-5ed4-11e7-933d-f0bc3699ae8f.jpg)        | bitmex        | [BitMEX](https://www.bitmex.com)                     | 1   | [API](https://www.bitmex.com/app/apiOverview)                                               | Seychelles                              |
|![bitso](https://user-images.githubusercontent.com/1294454/27766335-715ce7aa-5ed5-11e7-88a8-173a27bb30fe.jpg)         | bitso         | [Bitso](https://bitso.com)                           | 3   | [API](https://bitso.com/api_info)                                                           | Mexico                                  |
|![bitstamp](https://user-images.githubusercontent.com/1294454/27786377-8c8ab57e-5fe9-11e7-8ea4-2b05b6bcceec.jpg)      | bitstamp      | [Bitstamp](https://www.bitstamp.net)                 | 2   | [API](https://www.bitstamp.net/api)                                                         | UK                                      |
|![bittrex](https://user-images.githubusercontent.com/1294454/27766352-cf0b3c26-5ed5-11e7-82b7-f3826b7a97d8.jpg)       | bittrex       | [Bittrex](https://bittrex.com)                       | 1.1 | [API](https://bittrex.com/Home/Api)                                                         | US                                      |
|![bl3p](https://user-images.githubusercontent.com/1294454/28501752-60c21b82-6feb-11e7-818b-055ee6d0e754.jpg)          | bl3p          | [BL3P](https://bl3p.eu)                              | 1   | [API](https://github.com/BitonicNL/bl3p-api/tree/master/docs)                               | Netherlands, EU                         |
|![btcchina](https://user-images.githubusercontent.com/1294454/27766368-465b3286-5ed6-11e7-9a11-0f6467e1d82b.jpg)      | btcchina      | [BTCChina](https://www.btcchina.com)                 | 1   | [API](https://www.btcchina.com/apidocs)                                                     | China                                   |
|![btce](https://user-images.githubusercontent.com/1294454/27843225-1b571514-611a-11e7-9208-2641a560b561.jpg)          | btce          | [BTC-e](https://btc-e.com)                           | 3   | [API](https://btc-e.com/api/3/docs)                                                         | Bulgaria, Russia                        |
|![btcexchange](https://user-images.githubusercontent.com/1294454/27993052-4c92911a-64aa-11e7-96d8-ec6ac3435757.jpg)   | btcexchange   | [BTCExchange](https://www.btcexchange.ph)            | *   | [API](https://github.com/BTCTrader/broker-api-docs)                                         | Philippines                             |
|![btctradeua](https://user-images.githubusercontent.com/1294454/27941483-79fc7350-62d9-11e7-9f61-ac47f28fcd96.jpg)    | btctradeua    | [BTC Trade UA](https://btc-trade.com.ua)             | *   | [API](https://docs.google.com/document/d/1ocYA0yMy_RXd561sfG3qEPZ80kyll36HUxvCRe5GbhE/edit) | Ukraine                                 |
|![btcturk](https://user-images.githubusercontent.com/1294454/27992709-18e15646-64a3-11e7-9fa2-b0950ec7712f.jpg)       | btcturk       | [BTCTurk](https://www.btcturk.com)                   | *   | [API](https://github.com/BTCTrader/broker-api-docs)                                         | Turkey                                  |
|![btcx](https://user-images.githubusercontent.com/1294454/27766385-9fdcc98c-5ed6-11e7-8f14-66d5e5cd47e6.jpg)          | btcx          | [BTCX](https://btc-x.is)                             | 1   | [API](https://btc-x.is/custom/api-document.html)                                            | Iceland, US, EU                         |
|![bter](https://user-images.githubusercontent.com/1294454/27980479-cfa3188c-6387-11e7-8191-93fc4184ba5c.jpg)          | bter          | [Bter](https://bter.com)                             | 2   | [API](https://bter.com/api2)                                                                | British Virgin Islands, China           |
|![bxinth](https://user-images.githubusercontent.com/1294454/27766412-567b1eb4-5ed7-11e7-94a8-ff6a3884f6c5.jpg)        | bxinth        | [BX.in.th](https://bx.in.th)                         | *   | [API](https://bx.in.th/info/api)                                                            | Thailand                                |
|![ccex](https://user-images.githubusercontent.com/1294454/27766433-16881f90-5ed8-11e7-92f8-3d92cc747a6c.jpg)          | ccex          | [C-CEX](https://c-cex.com)                           | *   | [API](https://c-cex.com/?id=api)                                                            | Germany, EU                             |
|![cex](https://user-images.githubusercontent.com/1294454/27766442-8ddc33b0-5ed8-11e7-8b98-f786aef0f3c9.jpg)           | cex           | [CEX.IO](https://cex.io)                             | *   | [API](https://cex.io/cex-api)                                                               | UK, EU, Cyprus, Russia                  |
|![chbtc](https://user-images.githubusercontent.com/1294454/28555659-f0040dc2-7109-11e7-9d99-688a438bf9f4.jpg)         | chbtc         | [CHBTC](https://trade.chbtc.com/api)                 | 1   | [API](https://www.chbtc.com/i/developer)                                                    | China                                   |
|![chilebit](https://user-images.githubusercontent.com/1294454/27991414-1298f0d8-647f-11e7-9c40-d56409266336.jpg)      | chilebit      | [ChileBit](https://chilebit.net)                     | 1   | [API](https://blinktrade.com/docs)                                                          | Chile                                   |
|![coincheck](https://user-images.githubusercontent.com/1294454/27766464-3b5c3c74-5ed9-11e7-840e-31b32968e1da.jpg)     | coincheck     | [coincheck](https://coincheck.com)                   | *   | [API](https://coincheck.com/documents/exchange/api)                                         | Japan, Indonesia                        |
|![coingi](https://user-images.githubusercontent.com/1294454/28619707-5c9232a8-7212-11e7-86d6-98fe5d15cc6e.jpg)        | coingi        | [Coingi](https://coingi.com)                         | *   | [API](http://docs.coingi.apiary.io/)                                                        | Panama, Bulgaria, China, US             |
|![coinmarketcap](https://user-images.githubusercontent.com/1294454/28244244-9be6312a-69ed-11e7-99c1-7c1797275265.jpg) | coinmarketcap | [CoinMarketCap](https://coinmarketcap.com)           | 1   | [API](https://coinmarketcap.com/api)                                                        | US                                      |
|![coinmate](https://user-images.githubusercontent.com/1294454/27811229-c1efb510-606c-11e7-9a36-84ba2ce412d8.jpg)      | coinmate      | [CoinMate](https://coinmate.io)                      | *   | [API](http://docs.coinmate.apiary.io)                                                       | UK, Czech Republic                      |
|![coinsecure](https://user-images.githubusercontent.com/1294454/27766472-9cbd200a-5ed9-11e7-9551-2267ad7bac08.jpg)    | coinsecure    | [Coinsecure](https://coinsecure.in)                  | 1   | [API](https://api.coinsecure.in)                                                            | India                                   |
|![coinspot](https://user-images.githubusercontent.com/1294454/28208429-3cacdf9a-6896-11e7-854e-4c79a772a30f.jpg)      | coinspot      | [CoinSpot](https://www.coinspot.com.au)              | *   | [API](https://www.coinspot.com.au/api)                                                      | Australia                               |
|![dsx](https://user-images.githubusercontent.com/1294454/27990275-1413158a-645a-11e7-931c-94717f7510e3.jpg)           | dsx           | [DSX](https://dsx.uk)                                | *   | [API](https://api.dsx.uk)                                                                   | UK                                      |
|![exmo](https://user-images.githubusercontent.com/1294454/27766491-1b0ea956-5eda-11e7-9225-40d67b481b8d.jpg)          | exmo          | [EXMO](https://exmo.me)                              | 1   | [API](https://exmo.me/ru/api_doc)                                                           | Spain, Russia                           |
|![flowbtc](https://user-images.githubusercontent.com/1294454/28162465-cd815d4c-67cf-11e7-8e57-438bea0523a2.jpg)       | flowbtc       | [flowBTC](https://trader.flowbtc.com)                | 1   | [API](http://www.flowbtc.com.br/api/)                                                       | Brazil                                  |
|![foxbit](https://user-images.githubusercontent.com/1294454/27991413-11b40d42-647f-11e7-91ee-78ced874dd09.jpg)        | foxbit        | [FoxBit](https://foxbit.exchange)                    | 1   | [API](https://blinktrade.com/docs)                                                          | Brazil                                  |
|![fybse](https://user-images.githubusercontent.com/1294454/27766512-31019772-5edb-11e7-8241-2e675e6797f1.jpg)         | fybse         | [FYB-SE](https://www.fybse.se)                       | *   | [API](http://docs.fyb.apiary.io)                                                            | Sweden                                  |
|![fybsg](https://user-images.githubusercontent.com/1294454/27766513-3364d56a-5edb-11e7-9e6b-d5898bb89c81.jpg)         | fybsg         | [FYB-SG](https://www.fybsg.com)                      | *   | [API](http://docs.fyb.apiary.io)                                                            | Singapore                               |
|![gatecoin](https://user-images.githubusercontent.com/1294454/28646817-508457f2-726c-11e7-9eeb-3528d2413a58.jpg)      | gatecoin      | [Gatecoin](https://gatecoin.com)                     | *   | [API](https://gatecoin.com/api)                                                             | Hong Kong                               |
|![gdax](https://user-images.githubusercontent.com/1294454/27766527-b1be41c6-5edb-11e7-95f6-5b496c469e2c.jpg)          | gdax          | [GDAX](https://www.gdax.com)                         | *   | [API](https://docs.gdax.com)                                                                | US                                      |
|![gemini](https://user-images.githubusercontent.com/1294454/27816857-ce7be644-6096-11e7-82d6-3c257263229c.jpg)        | gemini        | [Gemini](https://gemini.com)                         | 1   | [API](https://docs.gemini.com/rest-api)                                                     | US                                      |
|![hitbtc](https://user-images.githubusercontent.com/1294454/27766555-8eaec20e-5edc-11e7-9c5b-6dc69fc42f5e.jpg)        | hitbtc        | [HitBTC](https://hitbtc.com)                         | 1   | [API](https://hitbtc.com/api)                                                               | Hong Kong                               |
|![huobi](https://user-images.githubusercontent.com/1294454/27766569-15aa7b9a-5edd-11e7-9e7f-44791f4ee49c.jpg)         | huobi         | [Huobi](https://www.huobi.com)                       | 3   | [API](https://github.com/huobiapi/API_Docs_en/wiki)                                         | China                                   |
|![itbit](https://user-images.githubusercontent.com/1294454/27822159-66153620-60ad-11e7-89e7-005f6d7f3de0.jpg)         | itbit         | [itBit](https://www.itbit.com)                       | 1   | [API](https://api.itbit.com/docs)                                                           | US                                      |
|![jubi](https://user-images.githubusercontent.com/1294454/27766581-9d397d9a-5edd-11e7-8fb9-5d8236c0e692.jpg)          | jubi          | [jubi.com](https://www.jubi.com)                     | 1   | [API](https://www.jubi.com/help/api.html)                                                   | China                                   |
|![kraken](https://user-images.githubusercontent.com/1294454/27766599-22709304-5ede-11e7-9de1-9f33732e1509.jpg)        | kraken        | [Kraken](https://www.kraken.com)                     | 0   | [API](https://www.kraken.com/en-us/help/api)                                                | US                                      |
|![lakebtc](https://user-images.githubusercontent.com/1294454/28074120-72b7c38a-6660-11e7-92d9-d9027502281d.jpg)       | lakebtc       | [LakeBTC](https://www.lakebtc.com)                   | 2   | [API](https://www.lakebtc.com/s/api)                                                        | US                                      |
|![livecoin](https://user-images.githubusercontent.com/1294454/27980768-f22fc424-638a-11e7-89c9-6010a54ff9be.jpg)      | livecoin      | [LiveCoin](https://www.livecoin.net)                 | *   | [API](https://www.livecoin.net/api?lang=en)                                                 | US, UK, Russia                          |
|![liqui](https://user-images.githubusercontent.com/1294454/27982022-75aea828-63a0-11e7-9511-ca584a8edd74.jpg)         | liqui         | [Liqui](https://liqui.io)                            | 3   | [API](https://liqui.io/api)                                                                 | Ukraine                                 |
|![luno](https://user-images.githubusercontent.com/1294454/27766607-8c1a69d8-5ede-11e7-930c-540b5eb9be24.jpg)          | luno          | [luno](https://www.luno.com)                         | 1   | [API](https://www.luno.com/en/api)                                                          | UK, Singapore, South Africa             |
|![mercado](https://user-images.githubusercontent.com/1294454/27837060-e7c58714-60ea-11e7-9192-f05e86adb83f.jpg)       | mercado       | [Mercado Bitcoin](https://www.mercadobitcoin.com.br) | 3   | [API](https://www.mercadobitcoin.com.br/api-doc)                                            | Brazil                                  |
|![okcoincny](https://user-images.githubusercontent.com/1294454/27766792-8be9157a-5ee5-11e7-926c-6d69b8d3378d.jpg)     | okcoincny     | [OKCoin CNY](https://www.okcoin.cn)                  | 1   | [API](https://www.okcoin.cn/rest_getStarted.html)                                           | China                                   |
|![okcoinusd](https://user-images.githubusercontent.com/1294454/27766791-89ffb502-5ee5-11e7-8a5b-c5950b68ac65.jpg)     | okcoinusd     | [OKCoin USD](https://www.okcoin.com)                 | 1   | [API](https://www.okcoin.com/rest_getStarted.html)                                          | China, US                               |
|![paymium](https://user-images.githubusercontent.com/1294454/27790564-a945a9d4-5ff9-11e7-9d2d-b635763f2f24.jpg)       | paymium       | [Paymium](https://www.paymium.com)                   | 1   | [API](https://github.com/Paymium/api-documentation)                                         | France, EU                              |
|![poloniex](https://user-images.githubusercontent.com/1294454/27766817-e9456312-5ee6-11e7-9b3c-b628ca5626a5.jpg)      | poloniex      | [Poloniex](https://poloniex.com)                     | *   | [API](https://poloniex.com/support/api/)                                                    | US                                      |
|![quadrigacx](https://user-images.githubusercontent.com/1294454/27766825-98a6d0de-5ee7-11e7-9fa4-38e11a2c6f52.jpg)    | quadrigacx    | [QuadrigaCX](https://www.quadrigacx.com)             | 2   | [API](https://www.quadrigacx.com/api_info)                                                  | Canada                                  |
|![quoine](https://user-images.githubusercontent.com/1294454/27766844-9615a4e8-5ee8-11e7-8814-fcd004db8cdd.jpg)        | quoine        | [QUOINE](https://www.quoine.com)                     | 2   | [API](https://developers.quoine.com)                                                        | Japan, Singapore, Vietnam               |
|![southxchange](https://user-images.githubusercontent.com/1294454/27838912-4f94ec8a-60f6-11e7-9e5d-bbf9bd50a559.jpg)  | southxchange  | [SouthXchange](https://www.southxchange.com)         | *   | [API](https://www.southxchange.com/Home/Api)                                                | Argentina                               |
|![surbitcoin](https://user-images.githubusercontent.com/1294454/27991511-f0a50194-6481-11e7-99b5-8f02932424cc.jpg)    | surbitcoin    | [SurBitcoin](https://surbitcoin.com)                 | 1   | [API](https://blinktrade.com/docs)                                                          | Venezuela                               |
|![therock](https://user-images.githubusercontent.com/1294454/27766869-75057fa2-5ee9-11e7-9a6f-13e641fa4707.jpg)       | therock       | [TheRockTrading](https://therocktrading.com)         | 1   | [API](https://api.therocktrading.com/doc/v1/index.html)                                     | Malta                                   |
|![urdubit](https://user-images.githubusercontent.com/1294454/27991453-156bf3ae-6480-11e7-82eb-7295fe1b5bb4.jpg)       | urdubit       | [UrduBit](https://urdubit.com)                       | 1   | [API](https://blinktrade.com/docs)                                                          | Pakistan                                |
|![vaultoro](https://user-images.githubusercontent.com/1294454/27766880-f205e870-5ee9-11e7-8fe2-0d5b15880752.jpg)      | vaultoro      | [Vaultoro](https://www.vaultoro.com)                 | 1   | [API](https://api.vaultoro.com)                                                             | Switzerland                             |
|![vbtc](https://user-images.githubusercontent.com/1294454/27991481-1f53d1d8-6481-11e7-884e-21d17e7939db.jpg)          | vbtc          | [VBTC](https://vbtc.exchange)                        | 1   | [API](https://blinktrade.com/docs)                                                          | Vietnam                                 |
|![virwox](https://user-images.githubusercontent.com/1294454/27766894-6da9d360-5eea-11e7-90aa-41f2711b7405.jpg)        | virwox        | [VirWoX](https://www.virwox.com)                     | *   | [API](https://www.virwox.com/developers.php)                                                | Austria                                 |
|![xbtce](https://user-images.githubusercontent.com/1294454/28059414-e235970c-662c-11e7-8c3a-08e31f78684b.jpg)         | xbtce         | [xBTCe](https://www.xbtce.com)                       | 1   | [API](https://www.xbtce.com/tradeapi)                                                       | Russia                                  |
|![yobit](https://user-images.githubusercontent.com/1294454/27766910-cdcbfdae-5eea-11e7-9859-03fea873272d.jpg)         | yobit         | [YoBit](https://www.yobit.net)                       | 3   | [API](https://www.yobit.net/en/api/)                                                        | Russia                                  |
|![yunbi](https://user-images.githubusercontent.com/1294454/28570548-4d646c40-7147-11e7-9cf6-839b93e6d622.jpg)         | yunbi         | [YUNBI](https://yunbi.com)                           | 2   | [API](https://yunbi.com/documents/api/guide)                                                | China                                   |
|![zaif](https://user-images.githubusercontent.com/1294454/27766927-39ca2ada-5eeb-11e7-972f-1b4199518ca6.jpg)          | zaif          | [Zaif](https://zaif.jp)                              | 1   | [API](http://techbureau-api-document.readthedocs.io/ja/latest/index.html)                   | Japan                                   |

The list above is updated frequently, new crypto markets, altcoin exchanges, bug fixes, API endpoints are introduced and added on regular basis. See the [Manual](https://github.com/kroitor/ccxt/wiki) for details. If you don't find a cryptocurrency exchange market in the list above and/or want another market to be added, post or send us a link to it by opening an issue here on GitHub or via email.

The library is under MIT license, that means it's absolutely free for any developer to build commercial and opensource software on top of it, but use it at your own risk with no warranties, as is.

Developer team is open to collaboration and available for hiring and outsourcing. If you're interested in integrating this software into an existing project or in developing new opensource and commercial projects we welcome you to read our [Public Offer](#public-offer).

## Install

This library is shipped as a single-file (all-in-one module) implementation with minimalistic dependencies and requirements.

The main file is:

- `ccxt.js` in JavaScript ([ccxt for Node.js](http://npmjs.com/package/ccxt) and web browsers)
- `ccxt/__init__.py` in Python (works in both Python 2 and 3, [ccxt in PyPI](https://pypi.python.org/pypi/ccxt))
- `ccxt.php` in PHP

The easiest way to install the ccxt library is to use builtin package managers. 

You can also clone it into your project directory from [ccxt GitHub repository](https://github.com/kroitor/ccxt):

```shell
git clone https://github.com/kroitor/ccxt.git
```

An alternative way of installing this library into your code is to copy a single `ccxt.*` file manually into your working directory with language extension appropriate for your environment. 

### Node.js (npm)

[ccxt crypto trading library in npm](http://npmjs.com/package/ccxt)

```shell
npm install ccxt
```

Node version of the ccxt library requires [crypto-js](https://www.npmjs.com/package/crypto-js) and [node-fetch](https://www.npmjs.com/package/node-fetch), both of them are installed automatically by npm.

```JavaScript
var ccxt = require ('ccxt')
console.log (ccxt.market) // print all available markets
```

### Python

[ccxt algotrading library in PyPI](https://pypi.python.org/pypi/ccxt)

```shell
pip install ccxt
```

Python version of the ccxt library does not require any additional dependencies and uses builtin modules only.

```Python
import ccxt
print (ccxt.markets) # print a list of all available market classes
```

### PHP

```shell
git clone https://github.com/kroitor/ccxt.git
```

The ccxt library in PHP requires common PHP modules:
- cURL
- mbstring (using UTF-8 is highly recommended)
- PCRE
- iconv

```PHP
include "ccxt.php";
var_dump (\cxxt\Market::$markets); // print a list of all available market classes
```

### Web Browsers

The ccxt library can also be used in web browser client-side JavaScript for various purposes. 

```shell
git clone https://github.com/kroitor/ccxt.git
```

The client-side JavaScript version also requires CryptoJS. Download and unpack [CryptoJS](https://code.google.com/archive/p/crypto-js/) into your working directory or clone [CryptoJS from GitHub](https://github.com/sytelus/CryptoJS).

```shell
git clone https://github.com/sytelus/CryptoJS
```

Finally, add links to CryptoJS components and ccxt to your HTML page code:

```HTML
<script src="crypto-js/rollups/sha256.js"></script>
<script src="crypto-js/rollups/hmac-sha256.js"></script>
<script src="crypto-js/rollups/hmac-sha512.js"></script>
<script src="crypto-js/components/enc-base64-min.js"></script>
<script src="crypto-js/components/enc-utf16-min.js"></script>

<script type="text/javascript" src="ccxt.js"></script>
<script type="text/javascript">
    // print all available markets
    document.addEventListener ('DOMContentLoaded', () => console.log (ccxt))
</script>
```

## Usage

### Intro

The ccxt library consists of a public part and a private part. Anyone can use the public part out-of-the-box immediately after installation. Public APIs open access to public information from all exchange markets without registering user accounts and without having API keys. 

Public APIs include the following:

- market data
- instruments/trading pairs
- price feeds (exchange rates)
- order books
- trade history
- tickers
- OHLC(V) for charting
- other public endpoints

For trading with private APIs you need to obtain API keys from/to exchange markets. It often means registering with exchange markets and creating API keys with your account. Most exchanges require personal info or identification. Some kind of verification may be necessary as well. If you want to trade you need to register yourself, this library will not create accounts or API keys for you. Some exchange APIs expose interface methods for registering an account from within the code itself, but most of exchanges don't. You have to sign up and create API keys with their websites.

Private APIs allow the following:

- manage personal account info
- query account balances
- trade by making market and limit orders
- deposit and withdraw fiat and crypto funds
- query personal orders
- get ledger history
- transfer funds between accounts
- use merchant services

This library implements full public and private REST APIs for all exchanges. WebSocket and FIX implementations in JavaScript, PHP, Python and other languages coming soon.

The ccxt library supports both camelcase notation (preferred in JavaScript) and underscore notation (preferred in Python and PHP), therefore all methods can be called in either notation or coding style in any language.

```
// both of these notations work in JavaScript/Python/PHP
market.methodName ()  // camelcase pseudocode
market.method_name () // underscore pseudocode
```

See the [Manual](https://github.com/kroitor/ccxt/wiki) for more details.

### JavaScript

```JavaScript
'use strict';
var ccxt = require ('ccxt')

;(() => async function () {

    let kraken    = new ccxt.kraken ()
    let bitfinex  = new ccxt.bitfinex ({ verbose: true })
    let huobi     = new ccxt.huobi ()
    let okcoinusd = new ccxt.okcoinusd ({
        apiKey: 'YOUR_PUBLIC_API_KEY',
        secret: 'YOUR_SECRET_PRIVATE_KEY',
    })

    let krakenProducts = await kraken.loadProducts ()

    console.log (kraken.id,    krakenProducts)
    console.log (bitfinex.id,  await bitfinex.loadProducts  ())
    console.log (huobi.id,     await huobi.loadProducts ())

    console.log (kraken.id,    await kraken.fetchOrderBook (kraken.symbols[0]))
    console.log (bitfinex.id,  await bitfinex.fetchTicker ('BTC/USD'))
    console.log (huobi.id,     await huobi.fetchTrades ('ETH/CNY'))

    console.log (okcoinusd.id, await okcoinusd.fetchBalance ())

    // sell 1 BTC/USD for market price, sell a bitcoin for dollars immediately
    console.log (okcoinusd.id, await okcoinusd.createMarketSellOrder ('BTC/USD', 1))

    // buy 1 BTC/USD for $2500, you pay $2500 and receive 1 BTC when the order is closed
    console.log (okcoinusd.id, await okcoinusd.createLimitBuyOrder ('BTC/USD', 1, 2500.00))

}) ()
```

### Python

```Python
# coding=utf-8

import ccxt

hitbtc = ccxt.hitbtc ({ 'verbose': True })
bitmex = ccxt.bitmex ()
huobi  = ccxt.huobi ()
exmo   = ccxt.exmo ({
    'apiKey': 'YOUR_PUBLIC_API_KEY',
    'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

hitbtc_products = hitbtc.load_products ()

print (hitbtc.id, hitbtc_products)
print (bitmex.id, bitmex.load_products ())
print (huobi.id,  huobi.load_products ())

print (hitbtc.fetch_order_book (hitbtc.symbols[0]))
print (bitmex.fetch_ticker ('BTC/USD'))
print (huobi.fetch_trades ('LTC/CNY'))

print (exmo.fetch_balance ())

# sell one BTC/USD for market price and receive $ right now
print (exmo.id, exmo.create_market_sell_order ('BTC/USD', 1))

# limit buy BTC/EUR, you pay €2500 and receive 1 BTC when the order is closed
print (exmo.id, exmo.create_limit_buy_order ('BTC/EUR', 1, 2500.00))

```

### PHP

```PHP
include 'ccxt.php';

$poloniex = new \ccxt\poloniex  ();
$bittrex  = new \ccxt\bittrex   (array ('verbose' => true));
$quoine   = new \ccxt\zaif      ();
$zaif     = new \ccxt\quoine    (array (
    'apiKey' => 'YOUR_PUBLIC_API_KEY',
    'secret' => 'YOUR_SECRET_PRIVATE_KEY',
));

$poloniex_products = $poloniex->load_products ();

var_dump ($poloniex_products);
var_dump ($bittrex->load_products ());
var_dump ($quoine->load_products ());

var_dump ($poloniex->fetch_order_book ($poloniex->symbols[0]));
var_dump ($bittrex->fetch_trades ('BTC/USD'));
var_dump ($quoine->fetch_ticker ('ETH/EUR'));
var_dump ($zaif->fetch_ticker ('BTC/JPY'));

var_dump ($zaif->fetch_balance ());

// sell 1 BTC/JPY for market price, you pay ¥ and receive BTC immediately
var_dump ($zaif->id, $zaif->create_market_sell_order ('BTC/JPY', 1));

// buy BTC/JPY, you receive 1 BTC for ¥285000 when the order closes
var_dump ($zaif->id, $zaif->create_limit_buy_order ('BTC/JPY', 1, 285000));

```

## Contributing

Please read the [CONTRIBUTING](https://github.com/kroitor/ccxt/blob/master/CONTRIBUTING.md) document before making changes that you would like adopted in the code.

## Public Offer

Developer team is open to collaboration and available for hiring and outsourcing. 

We can:

- implement a cryptocurrency trading strategy for you
- integrate APIs for any exchange markets you want
- create bots for algorithmic trading, arbitrage, scalping and HFT
- perform backtesting and data crunching
- implement any kind of protocol including REST, WebSockets, FIX, proprietary and legacy standards...
- actually directly integrate btc/altcoin blockchain or transaction graph into your system
- program a matching engine for your own bitcoin/altcoin exchange
- create a trading terminal for desktops, phones and pads (for web and native OSes)
- do all of the above in any of the following languages/environments: Javascript, Node.js, PHP, C, C++, C#, Python, Java, ObjectiveC, Linux, FreeBSD, MacOS, iOS, Windows

We implement bots, algorithmic trading software and strategies by your design. Costs for implementing a basic trading strategy are low (starting from a few coins) and depend on your requirements.

We are coders, not investors, so we ABSOLUTELY DO NOT do any kind of financial or trading advisory neither we invent profitable strategies to make you a fortune out of thin air.  We guarantee the stability of the bot or trading software, but we cannot guarantee the profitability of your strategy nor can we protect you from natural financial risks and economic losses. Exact rules for the trading strategy is up to the trader/investor himself. We charge a fix flat price in cryptocurrency for our programming services and for implementing your requirements in software.

Please, contact us on GitHub or by email if you're interested in integrating this software into an existing project or in developing new opensource and commercial projects. Questions are welcome.

## Contact Us

| Name          | Email                  | URL                        |
|---------------|------------------------|----------------------------|
| Igor Kroitor  | igor.kroitor@gmail.com | https://github.com/kroitor |
| Vitaly Gordon | rocket.mind@gmail.com  | https://github.com/xpl     |
