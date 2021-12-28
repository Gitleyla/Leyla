<?php

$root = dirname (dirname (dirname (__FILE__)));

include $root . '/ccxt.php';

date_default_timezone_set ('UTC');

// this example shows how to convert from CCXT OHLCV format to TradingView format
// and back from TradingView to OHLCV for various charting purposes/applications

$id = 'bittrex';
$symbol = 'ETH/BTC';

// instantiate the exchange by id
$exchange = '\\ccxt\\' . $id;
$exchange = new $exchange (array (
    'enableRateLimit' => true,
));

// OHLCV format by default
$ohlcv = $exchange->fetch_ohlcv ($symbol);

// convert OHLCV → TradingView
$trading_view = $exchange->convert_ohlcv_to_trading_view ($ohlcv);

// convert TradingView → OHCLV
$restored_ohlcvs = $exchange->convert_trading_view_to_ohlcv ($trading_view);

print_r ($restored_ohlcvs);

?>