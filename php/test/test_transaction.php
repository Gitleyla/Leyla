<?php
namespace ccxt;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
// ----------------------------------------------------------------------------


//  ---------------------------------------------------------------------------

function test_transaction($exchange, $transaction, $code, $now) {
    assert ($transaction);
    assert (($transaction['id'] === null) || (gettype($transaction['id']) === 'string'));
    assert ((is_float($transaction['timestamp']) || is_int($transaction['timestamp'])));
    assert ($transaction['timestamp'] > 1230940800000); // 03 Jan 2009 - first block
    assert ($transaction['timestamp'] < $now);
    assert (is_array($transaction) && array_key_exists('updated', $transaction));
    assert (is_array($transaction) && array_key_exists('address', $transaction));
    assert (is_array($transaction) && array_key_exists('tag', $transaction));
    assert (is_array($transaction) && array_key_exists('txid', $transaction));
    assert ($transaction['datetime'] === $exchange->iso8601 ($transaction['timestamp']));
    assert (($transaction['status'] === 'ok') || ($transaction['status'] === 'pending') || ($transaction['status'] === 'canceled'));
    assert ($transaction['currency'] === $code);
    assert (gettype($transaction['type']) === 'string');
    assert ($transaction['type'] === 'deposit' || $transaction['type'] === 'withdrawal');
    assert ((is_float($transaction['amount']) || is_int($transaction['amount'])));
    assert ($transaction['amount'] >= 0);
    if ($transaction['fee']) {
        assert ((is_float($transaction['fee']['cost']) || is_int($transaction['fee']['cost'])));
        if ($transaction['fee']['cost'] !== 0) {
            assert (gettype($transaction['fee']['currency']) === 'string');
        }
    }
    assert ($transaction->info);
}

