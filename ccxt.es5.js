"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectValues(obj) {
    var values = [];
    var keys = Object.keys(obj);

    for (var k = 0; k < keys.length; ++k) values.push(obj[keys[k]]);

    return values;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

    //-----------------------------------------------------------------------------

    var version = '1.1.101';
    var isNode = typeof window === 'undefined';
    var isReactNative = false;

    try {

        var reactNative = require('react-native');
        isReactNative = reactNative != undefined;
    } catch (e) {

        isReactNative = false;
    }

    //-----------------------------------------------------------------------------

    var CCXTError = function (_Error) {
        _inherits(CCXTError, _Error);

        function CCXTError(message) {
            _classCallCheck(this, CCXTError);

            // a workaround to make `instanceof CCXTError` work in ES5
            var _this = _possibleConstructorReturn(this, (CCXTError.__proto__ || Object.getPrototypeOf(CCXTError)).call(this, message));

            _this.constructor = CCXTError;
            _this.__proto__ = CCXTError.prototype;
            _this.message = message;
            return _this;
        }

        return CCXTError;
    }(Error);

    var DDoSProtectionError = function (_CCXTError) {
        _inherits(DDoSProtectionError, _CCXTError);

        function DDoSProtectionError(message) {
            _classCallCheck(this, DDoSProtectionError);

            var _this2 = _possibleConstructorReturn(this, (DDoSProtectionError.__proto__ || Object.getPrototypeOf(DDoSProtectionError)).call(this, message));

            _this2.constructor = DDoSProtectionError;
            _this2.__proto__ = DDoSProtectionError.prototype;
            _this2.message = message;
            return _this2;
        }

        return DDoSProtectionError;
    }(CCXTError);

    var TimeoutError = function (_CCXTError2) {
        _inherits(TimeoutError, _CCXTError2);

        function TimeoutError(message) {
            _classCallCheck(this, TimeoutError);

            var _this3 = _possibleConstructorReturn(this, (TimeoutError.__proto__ || Object.getPrototypeOf(TimeoutError)).call(this, message));

            _this3.constructor = TimeoutError;
            _this3.__proto__ = TimeoutError.prototype;
            _this3.message = message;
            return _this3;
        }

        return TimeoutError;
    }(CCXTError);

    var AuthenticationError = function (_CCXTError3) {
        _inherits(AuthenticationError, _CCXTError3);

        function AuthenticationError(message) {
            _classCallCheck(this, AuthenticationError);

            var _this4 = _possibleConstructorReturn(this, (AuthenticationError.__proto__ || Object.getPrototypeOf(AuthenticationError)).call(this, message));

            _this4.constructor = AuthenticationError;
            _this4.__proto__ = AuthenticationError.prototype;
            _this4.message = message;
            return _this4;
        }

        return AuthenticationError;
    }(CCXTError);

    var NotAvailableError = function (_CCXTError4) {
        _inherits(NotAvailableError, _CCXTError4);

        function NotAvailableError(message) {
            _classCallCheck(this, NotAvailableError);

            var _this5 = _possibleConstructorReturn(this, (NotAvailableError.__proto__ || Object.getPrototypeOf(NotAvailableError)).call(this, message));

            _this5.constructor = NotAvailableError;
            _this5.__proto__ = NotAvailableError.prototype;
            _this5.message = message;
            return _this5;
        }

        return NotAvailableError;
    }(CCXTError);

    var MarketNotAvailableError = function (_NotAvailableError) {
        _inherits(MarketNotAvailableError, _NotAvailableError);

        function MarketNotAvailableError(message) {
            _classCallCheck(this, MarketNotAvailableError);

            var _this6 = _possibleConstructorReturn(this, (MarketNotAvailableError.__proto__ || Object.getPrototypeOf(MarketNotAvailableError)).call(this, message));

            _this6.constructor = MarketNotAvailableError;
            _this6.__proto__ = MarketNotAvailableError.prototype;
            _this6.message = message;
            return _this6;
        }

        return MarketNotAvailableError;
    }(NotAvailableError);

    var EndpointNotAvailableError = function (_NotAvailableError2) {
        _inherits(EndpointNotAvailableError, _NotAvailableError2);

        function EndpointNotAvailableError(message) {
            _classCallCheck(this, EndpointNotAvailableError);

            var _this7 = _possibleConstructorReturn(this, (EndpointNotAvailableError.__proto__ || Object.getPrototypeOf(EndpointNotAvailableError)).call(this, message));

            _this7.constructor = EndpointNotAvailableError;
            _this7.__proto__ = EndpointNotAvailableError.prototype;
            _this7.message = message;
            return _this7;
        }

        return EndpointNotAvailableError;
    }(NotAvailableError);

    var OrderBookNotAvailableError = function (_NotAvailableError3) {
        _inherits(OrderBookNotAvailableError, _NotAvailableError3);

        function OrderBookNotAvailableError(message) {
            _classCallCheck(this, OrderBookNotAvailableError);

            var _this8 = _possibleConstructorReturn(this, (OrderBookNotAvailableError.__proto__ || Object.getPrototypeOf(OrderBookNotAvailableError)).call(this, message));

            _this8.constructor = OrderBookNotAvailableError;
            _this8.__proto__ = OrderBookNotAvailableError.prototype;
            _this8.message = message;
            return _this8;
        }

        return OrderBookNotAvailableError;
    }(NotAvailableError);

    var TickerNotAvailableError = function (_NotAvailableError4) {
        _inherits(TickerNotAvailableError, _NotAvailableError4);

        function TickerNotAvailableError(message) {
            _classCallCheck(this, TickerNotAvailableError);

            var _this9 = _possibleConstructorReturn(this, (TickerNotAvailableError.__proto__ || Object.getPrototypeOf(TickerNotAvailableError)).call(this, message));

            _this9.constructor = TickerNotAvailableError;
            _this9.__proto__ = TickerNotAvailableError.prototype;
            _this9.message = message;
            return _this9;
        }

        return TickerNotAvailableError;
    }(NotAvailableError);

    //-----------------------------------------------------------------------------
    // utility helpers

    var sleep = function sleep(ms) {
        return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
        });
    };

    var timeout = function timeout(ms, promise) {
        return Promise.race([promise, sleep(ms).then(function () {
            throw new TimeoutError('request timed out');
        })]);
    };

    var capitalize = function capitalize(string) {
        return string.length ? string.charAt(0).toUpperCase() + string.slice(1) : string;
    };

    var keysort = function keysort(object) {
        var result = {};
        Object.keys(object).sort().forEach(function (key) {
            return result[key] = object[key];
        });
        return result;
    };

    var extend = function extend() {
        var _arguments = arguments;

        var result = {};
        for (var i = 0; i < arguments.length; i++) {
            if (_typeof(arguments[i]) === 'object') Object.keys(arguments[i]).forEach(function (key) {
                return result[key] = _arguments[i][key];
            });
        }return result;
    };

    var omit = function omit(object) {
        var result = extend(object);
        for (var i = 1; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string') delete result[arguments[i]];else if (Array.isArray(arguments[i])) for (var k = 0; k < arguments[i].length; k++) {
                delete result[arguments[i][k]];
            }
        }return result;
    };

    var indexBy = function indexBy(array, key) {
        var result = {};
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (typeof element[key] != 'undefined') {
                result[element[key]] = element;
            }
        }
        return result;
    };

    var sortBy = function sortBy(array, key) {
        var descending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        descending = descending ? -1 : 1;
        return array.sort(function (a, b) {
            return a[key] < b[key] ? -descending : a[key] > b[key] ? descending : 0;
        });
    };

    var flatten = function flatten(array) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        for (var i = 0, length = array.length; i < length; i++) {
            var value = array[i];
            if (Array.isArray(value)) {
                flatten(value, result);
            } else {
                result.push(value);
            }
        }
        return result;
    };

    var unique = function unique(array) {
        return array.filter(function (value, index, self) {
            return self.indexOf(value) == index;
        });
    };

    var pluck = function pluck(array, key) {
        return array.filter(function (element) {
            return typeof element[key] != 'undefined';
        }).map(function (element) {
            return element[key];
        });
    };

    var urlencode = function urlencode(object) {
        // this is related to the Kraken workaround, see issues #52 and #23
        return qs.stringify(object);
    };

    var sum = function sum() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var result = args.filter(function (arg) {
            return typeof arg != 'undefined';
        });
        return result.length > 0 ? result.reduce(function (sum, value) {
            return sum + value;
        }, 0) : undefined;
    };

    //-----------------------------------------------------------------------------
    // platform-specific code (Node.js / Web Browsers)

    if (isNode) {

        var crypto = module.require('crypto');
        var CryptoJS = module.require('crypto-js');
        var fetch = module.require('node-fetch');
        var qs = module.require('qs');
    } else if (isReactNative) {

        var crypto = require('crypto');
        var CryptoJS = require('crypto-js');
        var fetch = window.fetch;
        var qs = require('qs');
    } else {

        // a quick fetch polyfill

        var fetch = function fetch(url, options) {
            var verbose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


            return new Promise(function (resolve, reject) {

                if (verbose) console.log(url, options);

                var xhr = new XMLHttpRequest();
                var method = options.method || 'GET';

                xhr.open(method, url, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) resolve(xhr.responseText);else {
                            // [403, 404, ...].indexOf (xhr.status) >= 0
                            throw new Error(method, url, xhr.status, xhr.responseText);
                        }
                    }
                };

                if (typeof options.headers != 'undefined') for (var header in options.headers) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }xhr.send(options.body);
            });
        };
    }

    //-----------------------------------------------------------------------------
    // string ←→ binary ←→ base64 conversion routines

    var stringToBinary = function stringToBinary(string) {
        return CryptoJS.enc.Latin1.parse(string);
    };

    var stringToBase64 = function stringToBase64(string) {
        return CryptoJS.enc.Latin1.parse(string).toString(CryptoJS.enc.Base64);
    };

    var utf16ToBase64 = function utf16ToBase64(string) {
        return CryptoJS.enc.Utf16.parse(string).toString(CryptoJS.enc.Base64);
    };

    var base64ToBinary = function base64ToBinary(string) {
        return CryptoJS.enc.Base64.parse(string);
    };

    var base64ToString = function base64ToString(string) {
        return CryptoJS.enc.Base64.parse(string).toString(CryptoJS.enc.Utf8);
    };

    // url-safe-base64 without equals signs, with + replaced by - and slashes replaced by underscores
    var urlencodeBase64 = function urlencodeBase64(base64string) {
        return base64string.replace(/[=]+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    };

    //-----------------------------------------------------------------------------
    // cryptography

    var hash = function hash(request) {
        var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'md5';
        var digest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';

        var encoding = digest === 'binary' ? 'Latin1' : capitalize(digest);
        return CryptoJS[hash.toUpperCase()](request).toString(CryptoJS.enc[encoding]);
    };

    var hmac = function hmac(request, secret) {
        var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sha256';
        var digest = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hex';

        var encoding = digest === 'binary' ? 'Latin1' : capitalize(digest);
        return CryptoJS['Hmac' + hash.toUpperCase()](request, secret).toString(CryptoJS.enc[capitalize(encoding)]);
    };

    //-----------------------------------------------------------------------------
    // a special case for Kraken, until we find a better workaround
    // this breaks down the support for browsers, see issues #52 and #23

    var signForKraken = function signForKraken(path, request, secret, nonce) {
        var secret_buffer = new Buffer(secret, 'base64');
        var hash = new crypto.createHash('sha256');
        var hmac = new crypto.createHmac('sha512', secret_buffer);
        var hash_digest = hash.update(nonce + request).digest('binary');
        var hmac_digest = hmac.update(path + hash_digest, 'binary').digest('base64');
        return hmac_digest;
    };

    //-----------------------------------------------------------------------------
    // a JSON Web Token authentication method

    var jwt = function jwt(request, secret) {
        var alg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HS256';
        var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sha256';

        var encodedHeader = urlencodeBase64(stringToBase64(JSON.stringify({ 'alg': alg, 'typ': 'JWT' })));
        var encodedData = urlencodeBase64(stringToBase64(JSON.stringify(request)));
        var token = [encodedHeader, encodedData].join('.');
        var signature = urlencodeBase64(utf16ToBase64(hmac(token, secret, hash, 'utf16')));
        return [token, signature].join('.');
    };

    //-----------------------------------------------------------------------------
    // the base class

    var Market = function Market(config) {
        var _this14 = this;

        this.hash = hash;
        this.hmac = hmac;
        // a special case until we find a better workaround, see issues #52 and #23
        this.signForKraken = signForKraken;
        this.jwt = jwt; // JSON Web Token
        this.stringToBinary = stringToBinary;
        this.stringToBase64 = stringToBase64;
        this.base64ToBinary = base64ToBinary;
        this.base64ToString = base64ToString;
        this.utf16ToBase64 = utf16ToBase64;
        this.urlencode = urlencode;
        this.omit = omit;
        this.pluck = pluck;
        this.unique = unique;
        this.extend = extend;
        this.flatten = flatten;
        this.indexBy = indexBy;
        this.sortBy = sortBy;
        this.keysort = keysort;
        this.capitalize = capitalize;
        this.json = JSON.stringify;
        this.sum = sum;

        this.encode = function (string) {
            return string;
        };
        this.decode = function (string) {
            return string;
        };

        this.init = function () {
            var _this10 = this;

            if (isNode) this.nodeVersion = process.version.match(/\d+\.\d+.\d+/)[0];

            if (this.api) Object.keys(this.api).forEach(function (type) {
                Object.keys(_this10.api[type]).forEach(function (method) {
                    var urls = _this10.api[type][method];

                    var _loop = function _loop() {
                        var url = urls[i].trim();
                        var splitPath = url.split(/[^a-zA-Z0-9]/);

                        var uppercaseMethod = method.toUpperCase();
                        var lowercaseMethod = method.toLowerCase();
                        var camelcaseMethod = capitalize(lowercaseMethod);
                        var camelcaseSuffix = splitPath.map(capitalize).join('');
                        var underscoreSuffix = splitPath.map(function (x) {
                            return x.trim().toLowerCase();
                        }).filter(function (x) {
                            return x.length > 0;
                        }).join('_');

                        if (camelcaseSuffix.indexOf(camelcaseMethod) === 0) camelcaseSuffix = camelcaseSuffix.slice(camelcaseMethod.length);

                        if (underscoreSuffix.indexOf(lowercaseMethod) === 0) underscoreSuffix = underscoreSuffix.slice(lowercaseMethod.length);

                        var camelcase = type + camelcaseMethod + capitalize(camelcaseSuffix);
                        var underscore = type + '_' + lowercaseMethod + '_' + underscoreSuffix;

                        var f = function f(params) {
                            return _this10.request(url, type, uppercaseMethod, params);
                        };

                        _this10[camelcase] = f;
                        _this10[underscore] = f;
                    };

                    for (var i = 0; i < urls.length; i++) {
                        _loop();
                    }
                });
            });
        };

        this.fetch = function (url) {
            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';

            var _this11 = this;

            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;


            if (isNode) {
                headers = extend({
                    'User-Agent': 'ccxt/' + version + ' (+https://github.com/kroitor/ccxt)' + ' Node.js/' + this.nodeVersion + ' (JavaScript)'
                }, headers);
            }

            if (this.proxy.length) headers = extend({ 'Origin': '*' }, headers);

            var options = { 'method': method, 'headers': headers, 'body': body };

            url = this.proxy + url;

            if (this.verbose) console.log(this.id, url, options);

            return timeout(this.timeout, fetch(url, options).catch(function (e) {
                if (isNode) {
                    throw new MarketNotAvailableError([_this11.id, method, url, e.type, e.message].join(' '));
                }
                throw e; // rethrow all unknown errors
            }).then(function (response) {
                if (typeof response == 'string') return response;
                return response.text().then(function (text) {
                    if (response.status == 200) return text;
                    var error = undefined;
                    var details = undefined;
                    if ([429].indexOf(response.status) >= 0) {
                        error = DDoSProtectionError;
                    } else if ([500, 501, 502, 404, 525].indexOf(response.status) >= 0) {
                        error = MarketNotAvailableError;
                    } else if ([400, 403, 405, 503].indexOf(response.status) >= 0) {
                        var ddosProtection = text.match(/cloudflare|incapsula/i);
                        if (ddosProtection) {
                            error = DDoSProtectionError;
                        } else {
                            error = MarketNotAvailableError;
                            details = '(possible reasons: ' + ['invalid API keys', 'bad or old nonce', 'market down or offline', 'on maintenance', 'DDoS protection', 'rate-limiting in effect'].join(', ') + ')';
                        }
                    } else if ([408, 504].indexOf(response.status) >= 0) {
                        error = TimeoutError;
                    } else if ([401, 422, 511].indexOf(response.status) >= 0) {
                        error = AuthenticationError;
                        details = text;
                    } else {
                        error = Error;
                        details = 'Unknown Error';
                    }
                    throw new error([_this11.id, method, url, response.status, response.statusText, details].join(' '));
                });
            }).then(function (response) {
                return _this11.handleResponse(url, method, headers, response);
            }));
        };

        this.handleResponse = function (url) {
            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;


            try {

                return JSON.parse(body);
            } catch (e) {

                var maintenance = body.match(/offline|unavailable|maintain|maintenance|maintenancing/i);
                var ddosProtection = body.match(/cloudflare|incapsula|overload/i);

                if (e instanceof SyntaxError) {

                    var error = MarketNotAvailableError;
                    var details = 'not accessible from this location at the moment';
                    if (maintenance) details = 'offline, on maintenance or unreachable from this location at the moment';
                    if (ddosProtection) error = DDoSProtectionError;
                    throw new error([this.id, method, url, details].join(' '));
                }

                if (this.verbose) console.log(this.id, method, url, 'error', e, "response body:\n'" + body + "'");

                throw e;
            }
        };

        this.set_products = this.setProducts = function (products) {
            var values = _objectValues(products);
            this.products = indexBy(values, 'symbol');
            this.productsById = indexBy(products, 'id');
            this.products_by_id = this.productsById;
            this.symbols = Object.keys(this.products);
            var base = this.pluck(values.filter(function (product) {
                return 'base' in product;
            }), 'base');
            var quote = this.pluck(values.filter(function (product) {
                return 'quote' in product;
            }), 'quote');
            this.currencies = this.unique(base.concat(quote));
            return this.products;
        };

        this.load_products = this.loadProducts = function () {
            var _this12 = this;

            var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!reload && this.products) {
                if (!this.productsById) {
                    return new Promise(function (resolve, reject) {
                        return resolve(_this12.setProducts(_this12.products));
                    });
                }
                return new Promise(function (resolve, reject) {
                    return resolve(_this12.products);
                });
            }
            return this.fetchProducts().then(function (products) {
                return _this12.setProducts(products);
            });
        };

        this.fetch_products = this.fetchProducts = function () {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
                return resolve(_this13.products);
            });
        };

        this.commonCurrencyCode = function (currency) {
            return currency === 'XBT' ? 'BTC' : currency;
        };

        this.product = function (product) {
            return typeof product === 'string' && typeof this.products != 'undefined' && typeof this.products[product] != 'undefined' ? this.products[product] : product;
        };

        this.product_id = this.productId = function (product) {
            return this.product(product).id || product;
        };

        this.symbol = function (product) {
            return this.product(product).symbol || product;
        };

        this.extract_params = this.extractParams = function (string) {
            var re = /{([a-zA-Z0-9_]+?)}/g;
            var matches = [];
            var match = void 0;
            while (match = re.exec(string)) {
                matches.push(match[1]);
            }return matches;
        };

        this.implode_params = this.implodeParams = function (string, params) {
            for (var property in params) {
                string = string.replace('{' + property + '}', params[property]);
            }return string;
        };

        this.create_limit_buy_order = this.createLimitBuyOrder = function (product, amount, price) {
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            return this.createOrder(product, 'limit', 'buy', amount, price, params);
        };

        this.create_limit_sell_order = this.createLimitSellOrder = function (product, amount, price) {
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            return this.createOrder(product, 'limit', 'sell', amount, price, params);
        };

        this.create_market_buy_order = this.createMarketBuyOrder = function (product, amount) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.createOrder(product, 'market', 'buy', amount, undefined, params);
        };

        this.create_market_sell_order = this.createMarketSellOrder = function (product, amount) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.createOrder(product, 'market', 'sell', amount, undefined, params);
        };

        this.iso8601 = function (timestamp) {
            return new Date(timestamp).toISOString();
        };
        this.parse8601 = Date.parse;
        this.seconds = function () {
            return Math.floor(_this14.milliseconds() / 1000);
        };
        this.microseconds = function () {
            return Math.floor(_this14.milliseconds() * 1000);
        };
        this.milliseconds = Date.now;
        this.nonce = this.seconds;
        this.id = undefined;
        this.rateLimit = 2000; // milliseconds = seconds * 1000
        this.timeout = 10000; // milliseconds = seconds * 1000
        this.verbose = false;
        this.twofa = false; // two-factor authentication
        this.yyyymmddhhmmss = function (timestamp) {
            var date = new Date(timestamp);
            var yyyy = date.getUTCFullYear();
            var MM = date.getUTCMonth();
            var dd = date.getUTCDay();
            var hh = date.getUTCHours();
            var mm = date.getUTCMinutes();
            var ss = date.getUTCSeconds();
            MM = MM < 10 ? '0' + MM : MM;
            dd = dd < 10 ? '0' + dd : dd;
            hh = hh < 10 ? '0' + hh : hh;
            mm = mm < 10 ? '0' + mm : mm;
            ss = ss < 10 ? '0' + ss : ss;
            return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
        };

        // prepended to URL, like https://proxy.com/https://exchange.com/api...
        this.proxy = '';

        for (var property in config) {
            this[property] = config[property];
        }this.fetch_balance = this.fetchBalance;
        this.fetch_order_book = this.fetchOrderBook;
        this.fetch_ticker = this.fetchTicker;
        this.fetch_trades = this.fetchTrades;

        this.init();
    };

    //=============================================================================

    var _1broker = {

        'id': '_1broker',
        'name': '1Broker',
        'countries': 'US',
        'rateLimit': 1500,
        'version': 'v2',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766021-420bd9fc-5ecb-11e7-8ed6-56d0081efed2.jpg',
            'api': 'https://1broker.com/api',
            'www': 'https://1broker.com',
            'doc': 'https://1broker.com/?c=en/content/api-documentation'
        },
        'api': {
            'private': {
                'get': ['market/bars', 'market/categories', 'market/details', 'market/list', 'market/quotes', 'market/ticks', 'order/cancel', 'order/create', 'order/open', 'position/close', 'position/close_cancel', 'position/edit', 'position/history', 'position/open', 'position/shared/get', 'social/profile_statistics', 'social/profile_trades', 'user/bitcoin_deposit_address', 'user/details', 'user/overview', 'user/quota_status', 'user/transaction_log']
            }
        },

        fetchCategories: function fetchCategories() {
            var categories,
                _this15 = this;

            return Promise.resolve().then(function () {
                return _this15.privateGetMarketCategories();
            }).then(function (_resp) {
                categories = _resp;

                return categories['response'];
            });
        },
        fetchProducts: function fetchProducts() {
            function _recursive() {
                if (c < categories.length) {
                    return Promise.resolve().then(function () {
                        category = categories[c];
                        return this_.privateGetMarketList({
                            'category': category.toLowerCase()
                        });
                    }).then(function (_resp) {
                        products = _resp;

                        for (p = 0; p < products['response'].length; p++) {
                            product = products['response'][p];
                            id = product['symbol'];
                            symbol = undefined;
                            base = undefined;
                            quote = undefined;

                            if (category == 'FOREX' || category == 'CRYPTO') {
                                symbol = product['name'];
                                parts = symbol.split('/');

                                base = parts[0];
                                quote = parts[1];
                            } else {
                                base = id;
                                quote = 'USD';
                                symbol = base + '/' + quote;
                            }
                            result.push({
                                'id': id,
                                'symbol': symbol,
                                'base': base,
                                'quote': quote,
                                'info': product
                            });
                        }
                        c++;
                        return _recursive();
                    });
                }
            }

            var this_,
                categories,
                result,
                c,
                category,
                products,
                p,
                product,
                id,
                symbol,
                base,
                quote,
                parts,
                _this16 = this;

            return Promise.resolve().then(function () {
                this_ = _this16; // workaround for Babel bug (not passing `this` to _recursive() call)

                return _this16.fetchCategories();
            }).then(function (_resp) {
                categories = _resp;
                result = [];
                c = 0;
                return _recursive();
            }).then(function () {
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var balance,
                response,
                result,
                c,
                currency,
                _this20 = this;

            return Promise.resolve().then(function () {
                return _this20.privateGetUserOverview();
            }).then(function (_resp) {
                balance = _resp;
                response = balance['response'];
                result = { 'info': response };

                for (c = 0; c < _this20.currencies.length; c++) {
                    currency = _this20.currencies[c];

                    result[currency] = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };
                }
                result['BTC']['free'] = parseFloat(response['balance']);
                result['BTC']['total'] = result['BTC']['free'];
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                bidPrice,
                askPrice,
                bid,
                ask,
                _this21 = this;

            return Promise.resolve().then(function () {
                return _this21.privateGetMarketQuotes({
                    'symbols': _this21.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['response'][0];
                timestamp = _this21.parse8601(orderbook['updated']);
                bidPrice = parseFloat(orderbook['bid']);
                askPrice = parseFloat(orderbook['ask']);
                bid = [bidPrice, undefined];
                ask = [askPrice, undefined];

                return {
                    'timestamp': timestamp,
                    'datetime': _this21.iso8601(timestamp),
                    'bids': [bid],
                    'asks': [ask]
                };
            });
        },
        fetchTicker: function fetchTicker(product) {
            var result,
                orderbook,
                ticker,
                timestamp,
                _this22 = this;

            return Promise.resolve().then(function () {
                return _this22.privateGetMarketBars({
                    'symbol': _this22.productId(product),
                    'resolution': 60,
                    'limit': 1
                });
            }).then(function (_resp) {
                result = _resp;
                return _this22.fetchOrderBook(product);
            }).then(function (_resp) {
                orderbook = _resp;
                ticker = result['response'][0];
                timestamp = _this22.parse8601(ticker['date']);

                return {
                    'timestamp': timestamp,
                    'datetime': _this22.iso8601(timestamp),
                    'high': parseFloat(ticker['h']),
                    'low': parseFloat(ticker['l']),
                    'bid': orderbook['bids'][0][0],
                    'ask': orderbook['asks'][0][0],
                    'vwap': undefined,
                    'open': parseFloat(ticker['o']),
                    'close': parseFloat(ticker['c']),
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': undefined
                };
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'symbol': this.productId(product),
                'margin': amount,
                'direction': side == 'sell' ? 'short' : 'long',
                'leverage': 1,
                'type': side
            };
            if (type == 'limit') order['price'] = price;else order['type'] += '_market';
            return this.privateGetOrderCreate(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostOrderCancel({ 'order_id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            if (!this.apiKey) throw new AuthenticationError(this.id + ' requires apiKey for all requests');
            var url = this.urls['api'] + '/' + this.version + '/' + path + '.php';
            var query = this.extend({ 'token': this.apiKey }, params);
            url += '?' + this.urlencode(query);
            return this.fetch(url, method);
        }
    };

    //-----------------------------------------------------------------------------

    var cryptocapital = {

        'id': 'cryptocapital',
        'name': 'Crypto Capital',
        'comment': 'Crypto Capital API',
        'countries': 'PA', // Panama
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27993158-7a13f140-64ac-11e7-89cc-a3b441f0b0f8.jpg',
            'www': 'https://cryptocapital.co',
            'doc': 'https://github.com/cryptocap'
        },
        'api': {
            'public': {
                'get': ['stats', 'historical-prices', 'order-book', 'transactions']
            },
            'private': {
                'post': ['balances-and-info', 'open-orders', 'user-transactions', 'btc-deposit-address/get', 'btc-deposit-address/new', 'deposits/get', 'withdrawals/get', 'orders/new', 'orders/edit', 'orders/cancel', 'orders/status', 'withdrawals/new']
            }
        },
        'products': {},

        fetchBalance: function fetchBalance() {
            var response,
                balance,
                result,
                c,
                currency,
                account,
                _this23 = this;

            return Promise.resolve().then(function () {
                return _this23.privatePostBalancesAndInfo();
            }).then(function (_resp) {
                response = _resp;
                balance = response['balances-and-info'];
                result = { 'info': balance };

                for (c = 0; c < _this23.currencies.length; c++) {
                    currency = _this23.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balance['available']) {
                        account['free'] = parseFloat(balance['available'][currency]);
                    }if (currency in balance['on_hold']) {
                        account['used'] = parseFloat(balance['on_hold'][currency]);
                    }account['total'] = _this23.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                _timestamp,
                price,
                amount,
                _this24 = this;

            return Promise.resolve().then(function () {
                return _this24.publicGetOrderBook({
                    'currency': _this24.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['order-book'];
                timestamp = _this24.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this24.iso8601(timestamp)
                };
                sides = { 'bids': 'bid', 'asks': 'ask' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        _timestamp = parseInt(order['timestamp']) * 1000;
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['order_amount']);

                        result[key].push([price, amount, _timestamp]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this25 = this;

            return Promise.resolve().then(function () {
                return _this25.publicGetStats({
                    'currency': _this25.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['stats'];
                timestamp = _this25.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this25.iso8601(timestamp),
                    'high': parseFloat(ticker['max']),
                    'low': parseFloat(ticker['min']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last_price']),
                    'change': parseFloat(ticker['daily_change']),
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['total_btc_traded'])
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTransactions({
                'currency': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'side': side,
                'type': type,
                'currency': this.productId(product),
                'amount': amount
            };
            if (type == 'limit') order['limit_price'] = price;
            return this.privatePostOrdersNew(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostOrdersCancel({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            if (this.id == 'cryptocapital') throw new Error(this.id + ' is an abstract base API for _1btcxe');
            var url = this.urls['api'] + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var query = this.extend({
                    'api_key': this.apiKey,
                    'nonce': this.nonce()
                }, params);
                var request = this.json(query);
                query['signature'] = this.hmac(this.encode(request), this.encode(this.secret));
                body = this.json(query);
                headers = { 'Content-Type': 'application/json' };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var _1btcxe = extend(cryptocapital, {

        'id': '_1btcxe',
        'name': '1BTCXE',
        'countries': 'PA', // Panama
        'comment': 'Crypto Capital API',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766049-2b294408-5ecc-11e7-85cc-adaff013dc1a.jpg',
            'api': 'https://1btcxe.com/api',
            'www': 'https://1btcxe.com',
            'doc': 'https://1btcxe.com/api-docs.php'
        },
        'products': {
            'BTC/USD': { 'id': 'USD', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/EUR': { 'id': 'EUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'BTC/CNY': { 'id': 'CNY', 'symbol': 'BTC/CNY', 'base': 'BTC', 'quote': 'CNY' },
            'BTC/RUB': { 'id': 'RUB', 'symbol': 'BTC/RUB', 'base': 'BTC', 'quote': 'RUB' },
            'BTC/CHF': { 'id': 'CHF', 'symbol': 'BTC/CHF', 'base': 'BTC', 'quote': 'CHF' },
            'BTC/JPY': { 'id': 'JPY', 'symbol': 'BTC/JPY', 'base': 'BTC', 'quote': 'JPY' },
            'BTC/GBP': { 'id': 'GBP', 'symbol': 'BTC/GBP', 'base': 'BTC', 'quote': 'GBP' },
            'BTC/CAD': { 'id': 'CAD', 'symbol': 'BTC/CAD', 'base': 'BTC', 'quote': 'CAD' },
            'BTC/AUD': { 'id': 'AUD', 'symbol': 'BTC/AUD', 'base': 'BTC', 'quote': 'AUD' },
            'BTC/AED': { 'id': 'AED', 'symbol': 'BTC/AED', 'base': 'BTC', 'quote': 'AED' },
            'BTC/BGN': { 'id': 'BGN', 'symbol': 'BTC/BGN', 'base': 'BTC', 'quote': 'BGN' },
            'BTC/CZK': { 'id': 'CZK', 'symbol': 'BTC/CZK', 'base': 'BTC', 'quote': 'CZK' },
            'BTC/DKK': { 'id': 'DKK', 'symbol': 'BTC/DKK', 'base': 'BTC', 'quote': 'DKK' },
            'BTC/HKD': { 'id': 'HKD', 'symbol': 'BTC/HKD', 'base': 'BTC', 'quote': 'HKD' },
            'BTC/HRK': { 'id': 'HRK', 'symbol': 'BTC/HRK', 'base': 'BTC', 'quote': 'HRK' },
            'BTC/HUF': { 'id': 'HUF', 'symbol': 'BTC/HUF', 'base': 'BTC', 'quote': 'HUF' },
            'BTC/ILS': { 'id': 'ILS', 'symbol': 'BTC/ILS', 'base': 'BTC', 'quote': 'ILS' },
            'BTC/INR': { 'id': 'INR', 'symbol': 'BTC/INR', 'base': 'BTC', 'quote': 'INR' },
            'BTC/MUR': { 'id': 'MUR', 'symbol': 'BTC/MUR', 'base': 'BTC', 'quote': 'MUR' },
            'BTC/MXN': { 'id': 'MXN', 'symbol': 'BTC/MXN', 'base': 'BTC', 'quote': 'MXN' },
            'BTC/NOK': { 'id': 'NOK', 'symbol': 'BTC/NOK', 'base': 'BTC', 'quote': 'NOK' },
            'BTC/NZD': { 'id': 'NZD', 'symbol': 'BTC/NZD', 'base': 'BTC', 'quote': 'NZD' },
            'BTC/PLN': { 'id': 'PLN', 'symbol': 'BTC/PLN', 'base': 'BTC', 'quote': 'PLN' },
            'BTC/RON': { 'id': 'RON', 'symbol': 'BTC/RON', 'base': 'BTC', 'quote': 'RON' },
            'BTC/SEK': { 'id': 'SEK', 'symbol': 'BTC/SEK', 'base': 'BTC', 'quote': 'SEK' },
            'BTC/SGD': { 'id': 'SGD', 'symbol': 'BTC/SGD', 'base': 'BTC', 'quote': 'SGD' },
            'BTC/THB': { 'id': 'THB', 'symbol': 'BTC/THB', 'base': 'BTC', 'quote': 'THB' },
            'BTC/TRY': { 'id': 'TRY', 'symbol': 'BTC/TRY', 'base': 'BTC', 'quote': 'TRY' },
            'BTC/ZAR': { 'id': 'ZAR', 'symbol': 'BTC/ZAR', 'base': 'BTC', 'quote': 'ZAR' }
        }
    });

    //-----------------------------------------------------------------------------

    var anxpro = {

        'id': 'anxpro',
        'name': 'ANXPro',
        'countries': ['JP', 'SG', 'HK', 'NZ'],
        'version': '2',
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27765983-fd8595da-5ec9-11e7-82e3-adb3ab8c2612.jpg',
            'api': 'https://anxpro.com/api',
            'www': 'https://anxpro.com',
            'doc': 'https://anxpro.com/pages/api'
        },
        'api': {
            'public': {
                'get': ['{currency_pair}/money/ticker', '{currency_pair}/money/depth/full', '{currency_pair}/money/trade/fetch']
            },
            'private': {
                'post': ['{currency_pair}/money/order/add', '{currency_pair}/money/order/cancel', '{currency_pair}/money/order/quote', '{currency_pair}/money/order/result', '{currency_pair}/money/orders', 'money/{currency}/address', 'money/{currency}/send_simple', 'money/info', 'money/trade/list', 'money/wallet/history']
            }
        },
        'products': {
            'BTC/USD': { 'id': 'BTCUSD', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/HKD': { 'id': 'BTCHKD', 'symbol': 'BTC/HKD', 'base': 'BTC', 'quote': 'HKD' },
            'BTC/EUR': { 'id': 'BTCEUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'BTC/CAD': { 'id': 'BTCCAD', 'symbol': 'BTC/CAD', 'base': 'BTC', 'quote': 'CAD' },
            'BTC/AUD': { 'id': 'BTCAUD', 'symbol': 'BTC/AUD', 'base': 'BTC', 'quote': 'AUD' },
            'BTC/SGD': { 'id': 'BTCSGD', 'symbol': 'BTC/SGD', 'base': 'BTC', 'quote': 'SGD' },
            'BTC/JPY': { 'id': 'BTCJPY', 'symbol': 'BTC/JPY', 'base': 'BTC', 'quote': 'JPY' },
            'BTC/GBP': { 'id': 'BTCGBP', 'symbol': 'BTC/GBP', 'base': 'BTC', 'quote': 'GBP' },
            'BTC/NZD': { 'id': 'BTCNZD', 'symbol': 'BTC/NZD', 'base': 'BTC', 'quote': 'NZD' },
            'LTC/BTC': { 'id': 'LTCBTC', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'DOGE/BTC': { 'id': 'DOGEBTC', 'symbol': 'DOGE/BTC', 'base': 'DOGE', 'quote': 'BTC' },
            'STR/BTC': { 'id': 'STRBTC', 'symbol': 'STR/BTC', 'base': 'STR', 'quote': 'BTC' },
            'XRP/BTC': { 'id': 'XRPBTC', 'symbol': 'XRP/BTC', 'base': 'XRP', 'quote': 'BTC' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balance,
                currencies,
                result,
                c,
                currency,
                account,
                wallet,
                _this26 = this;

            return Promise.resolve().then(function () {
                return _this26.privatePostMoneyInfo();
            }).then(function (_resp) {
                response = _resp;
                balance = response['data'];
                currencies = Object.keys(balance['Wallets']);
                result = { 'info': balance };

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balance['Wallets']) {
                        wallet = balance['Wallets'][currency];

                        account['free'] = parseFloat(wallet['Available_Balance']['value']);
                        account['total'] = parseFloat(wallet['Balance']['value']);
                        account['used'] = account['total'] - account['free'];
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                t,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this27 = this;

            return Promise.resolve().then(function () {
                return _this27.publicGetCurrencyPairMoneyDepthFull({
                    'currency_pair': _this27.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['data'];
                t = parseInt(orderbook['dataUpdateTime']);
                timestamp = parseInt(t / 1000);
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this27.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['amount']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                t,
                timestamp,
                _this28 = this;

            return Promise.resolve().then(function () {
                return _this28.publicGetCurrencyPairMoneyTicker({
                    'currency_pair': _this28.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['data'];
                t = parseInt(ticker['dataUpdateTime']);
                timestamp = parseInt(t / 1000);

                return {
                    'timestamp': timestamp,
                    'datetime': _this28.iso8601(timestamp),
                    'high': parseFloat(ticker['high']['value']),
                    'low': parseFloat(ticker['low']['value']),
                    'bid': parseFloat(ticker['buy']['value']),
                    'ask': parseFloat(ticker['sell']['value']),
                    'vwap': parseFloat(ticker['vwap']['value']),
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']['value']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['avg']['value']),
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']['value'])
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            var error = this.id + ' switched off the trades endpoint, see their docs at http://docs.anxv2.apiary.io/reference/market-data/currencypairmoneytradefetch-disabled';
            throw new EndpointNotAvailableError(error);
            return this.publicGetCurrencyPairMoneyTradeFetch({
                'currency_pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'currency_pair': this.productId(product),
                'amount_int': amount,
                'type': side
            };
            if (type == 'limit') order['price_int'] = price;
            return this.privatePostCurrencyPairOrderAdd(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCurrencyPairOrderCancel({ 'oid': id });
        },
        nonce: function nonce() {
            return this.milliseconds();
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var request = this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            var url = this.urls['api'] + '/' + this.version + '/' + request;
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({ 'nonce': nonce }, query));
                var secret = this.base64ToBinary(this.secret);
                var auth = request + "\0" + body;
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Rest-Key': this.apiKey,
                    'Rest-Sign': this.hmac(this.encode(auth), secret, 'sha512', 'base64')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bit2c = {

        'id': 'bit2c',
        'name': 'Bit2C',
        'countries': 'IL', // Israel
        'rateLimit': 3000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766119-3593220e-5ece-11e7-8b3a-5a041f6bcc3f.jpg',
            'api': 'https://www.bit2c.co.il',
            'www': 'https://www.bit2c.co.il',
            'doc': ['https://www.bit2c.co.il/home/api', 'https://github.com/OferE/bit2c']
        },
        'api': {
            'public': {
                'get': ['Exchanges/{pair}/Ticker', 'Exchanges/{pair}/orderbook', 'Exchanges/{pair}/trades']
            },
            'private': {
                'post': ['Account/Balance', 'Account/Balance/v2', 'Merchant/CreateCheckout', 'Order/AccountHistory', 'Order/AddCoinFundsRequest', 'Order/AddFund', 'Order/AddOrder', 'Order/AddOrderMarketPriceBuy', 'Order/AddOrderMarketPriceSell', 'Order/CancelOrder', 'Order/MyOrders', 'Payment/GetMyId', 'Payment/Send']
            }
        },
        'products': {
            'BTC/NIS': { 'id': 'BtcNis', 'symbol': 'BTC/NIS', 'base': 'BTC', 'quote': 'NIS' },
            'LTC/BTC': { 'id': 'LtcBtc', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'LTC/NIS': { 'id': 'LtcNis', 'symbol': 'LTC/NIS', 'base': 'LTC', 'quote': 'NIS' }
        },

        fetchBalance: function fetchBalance() {
            var balance,
                result,
                c,
                currency,
                account,
                available,
                _this29 = this;

            return Promise.resolve().then(function () {
                return _this29.privatePostAccountBalanceV2();
            }).then(function (_resp) {
                balance = _resp;
                result = { 'info': balance };

                for (c = 0; c < _this29.currencies.length; c++) {
                    currency = _this29.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balance) {
                        available = 'AVAILABLE_' + currency;

                        account['free'] = balance[available];
                        account['total'] = balance[currency];
                        account['used'] = account['total'] - account['free'];
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _timestamp2,
                _this30 = this;

            return Promise.resolve().then(function () {
                return _this30.publicGetExchangesPairOrderbook({
                    'pair': _this30.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this30.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this30.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order[0];
                        amount = order[1];
                        _timestamp2 = order[2] * 1000;

                        result[side].push([price, amount, _timestamp2]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this31 = this;

            return Promise.resolve().then(function () {
                return _this31.publicGetExchangesPairTicker({
                    'pair': _this31.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this31.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this31.iso8601(timestamp),
                    'high': parseFloat(ticker['h']),
                    'low': parseFloat(ticker['l']),
                    'bid': undefined,
                    'ask': undefined,
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['ll']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['av']),
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['a'])
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetExchangesPairTrades({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePostOrderAddOrder';
            var order = {
                'Amount': amount,
                'Pair': this.productId(product)
            };
            if (type == 'market') {
                method += 'MarketPrice' + this.capitalize(side);
            } else {
                order['Price'] = price;
                order['Total'] = amount * price;
                order['IsBid'] = side == 'buy';
            }
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostOrderCancelOrder({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.implodeParams(path, params);
            if (type == 'public') {
                url += '.json';
            } else {
                var nonce = this.nonce();
                var query = this.extend({ 'nonce': nonce }, params);
                body = this.urlencode(query);
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'key': this.apiKey,
                    'sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512', 'base64')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitbay = {

        'id': 'bitbay',
        'name': 'BitBay',
        'countries': ['PL', 'EU'], // Poland
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766132-978a7bd8-5ece-11e7-9540-bc96d1e9bbb8.jpg',
            'www': 'https://bitbay.net',
            'api': {
                'public': 'https://bitbay.net/API/Public',
                'private': 'https://bitbay.net/API/Trading/tradingApi.php'
            },
            'doc': ['https://bitbay.net/public-api', 'https://bitbay.net/account/tab-api', 'https://github.com/BitBayNet/API']
        },
        'api': {
            'public': {
                'get': ['{id}/all', '{id}/market', '{id}/orderbook', '{id}/ticker', '{id}/trades']
            },
            'private': {
                'post': ['info', 'trade', 'cancel', 'orderbook', 'orders', 'transfer', 'withdraw', 'history', 'transactions']
            }
        },
        'products': {
            'BTC/USD': { 'id': 'BTCUSD', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/EUR': { 'id': 'BTCEUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'BTC/PLN': { 'id': 'BTCPLN', 'symbol': 'BTC/PLN', 'base': 'BTC', 'quote': 'PLN' },
            'LTC/USD': { 'id': 'LTCUSD', 'symbol': 'LTC/USD', 'base': 'LTC', 'quote': 'USD' },
            'LTC/EUR': { 'id': 'LTCEUR', 'symbol': 'LTC/EUR', 'base': 'LTC', 'quote': 'EUR' },
            'LTC/PLN': { 'id': 'LTCPLN', 'symbol': 'LTC/PLN', 'base': 'LTC', 'quote': 'PLN' },
            'LTC/BTC': { 'id': 'LTCBTC', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'ETH/USD': { 'id': 'ETHUSD', 'symbol': 'ETH/USD', 'base': 'ETH', 'quote': 'USD' },
            'ETH/EUR': { 'id': 'ETHEUR', 'symbol': 'ETH/EUR', 'base': 'ETH', 'quote': 'EUR' },
            'ETH/PLN': { 'id': 'ETHPLN', 'symbol': 'ETH/PLN', 'base': 'ETH', 'quote': 'PLN' },
            'ETH/BTC': { 'id': 'ETHBTC', 'symbol': 'ETH/BTC', 'base': 'ETH', 'quote': 'BTC' },
            'LSK/USD': { 'id': 'LSKUSD', 'symbol': 'LSK/USD', 'base': 'LSK', 'quote': 'USD' },
            'LSK/EUR': { 'id': 'LSKEUR', 'symbol': 'LSK/EUR', 'base': 'LSK', 'quote': 'EUR' },
            'LSK/PLN': { 'id': 'LSKPLN', 'symbol': 'LSK/PLN', 'base': 'LSK', 'quote': 'PLN' },
            'LSK/BTC': { 'id': 'LSKBTC', 'symbol': 'LSK/BTC', 'base': 'LSK', 'quote': 'BTC' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balance,
                result,
                c,
                currency,
                account,
                _this32 = this;

            return Promise.resolve().then(function () {
                return _this32.privatePostInfo();
            }).then(function (_resp) {
                response = _resp;
                balance = response['balances'];
                result = { 'info': balance };

                for (c = 0; c < _this32.currencies.length; c++) {
                    currency = _this32.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balance) {
                        account['free'] = parseFloat(balance[currency]['available']);
                        account['used'] = parseFloat(balance[currency]['locked']);
                        account['total'] = _this32.sum(account['free'], account['used']);
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this33 = this;

            return Promise.resolve().then(function () {
                return _this33.publicGetIdOrderbook({
                    'id': _this33.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this33.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this33.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this34 = this;

            return Promise.resolve().then(function () {
                return _this34.publicGetIdTicker({
                    'id': _this34.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this34.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this34.iso8601(timestamp),
                    'high': parseFloat(ticker['max']),
                    'low': parseFloat(ticker['min']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['average']),
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetIdTrades({
                'id': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            return this.privatePostTrade(this.extend({
                'type': side,
                'currency': p['base'],
                'amount': amount,
                'payment_currency': p['quote'],
                'rate': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancel({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            if (type == 'public') {
                url += '/' + this.implodeParams(path, params) + '.json';
            } else {
                body = this.urlencode(this.extend({
                    'method': path,
                    'moment': this.nonce()
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'API-Key': this.apiKey,
                    'API-Hash': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitbays = {

        'id': 'bitbays',
        'name': 'BitBays',
        'countries': ['CN', 'GB', 'HK', 'AU', 'CA'],
        'rateLimit': 1500,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27808599-983687d2-6051-11e7-8d95-80dfcbe5cbb4.jpg',
            'api': 'https://bitbays.com/api',
            'www': 'https://bitbays.com',
            'doc': 'https://bitbays.com/help/api/'
        },
        'api': {
            'public': {
                'get': ['ticker', 'trades', 'depth']
            },
            'private': {
                'post': ['cancel', 'info', 'orders', 'order', 'transactions', 'trade']
            }
        },
        'products': {
            'BTC/USD': { 'id': 'btc_usd', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/CNY': { 'id': 'btc_cny', 'symbol': 'BTC/CNY', 'base': 'BTC', 'quote': 'CNY' },
            'ODS/BTC': { 'id': 'ods_btc', 'symbol': 'ODS/BTC', 'base': 'ODS', 'quote': 'BTC' },
            'LSK/BTC': { 'id': 'lsk_btc', 'symbol': 'LSK/BTC', 'base': 'LSK', 'quote': 'BTC' },
            'LSK/CNY': { 'id': 'lsk_cny', 'symbol': 'LSK/CNY', 'base': 'LSK', 'quote': 'CNY' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balance,
                result,
                c,
                currency,
                lowercase,
                account,
                _this35 = this;

            return Promise.resolve().then(function () {
                return _this35.privatePostInfo();
            }).then(function (_resp) {
                response = _resp;
                balance = response['result']['wallet'];
                result = { 'info': balance };

                for (c = 0; c < _this35.currencies.length; c++) {
                    currency = _this35.currencies[c];
                    lowercase = currency.toLowerCase();
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (lowercase in balance) {
                        account['free'] = parseFloat(balance[lowercase]['avail']);
                        account['used'] = parseFloat(balance[lowercase]['lock']);
                        account['total'] = _this35.sum(account['free'], account['used']);
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this36 = this;

            return Promise.resolve().then(function () {
                return _this36.publicGetDepth({
                    'market': _this36.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['result'];
                timestamp = _this36.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this36.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this37 = this;

            return Promise.resolve().then(function () {
                return _this37.publicGetTicker({
                    'market': _this37.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['result'];
                timestamp = _this37.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this37.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'market': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'market': this.productId(product),
                'op': side,
                'amount': amount
            };
            if (type == 'market') {
                order['order_type'] = 1;
                order['price'] = price;
            } else {
                order['order_type'] = 0;
            }
            return this.privatePostTrade(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancel({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({
                    'nonce': nonce
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.secret, 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitcoincoid = {

        'id': 'bitcoincoid',
        'name': 'Bitcoin.co.id',
        'countries': 'ID', // Indonesia
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766138-043c7786-5ecf-11e7-882b-809c14f38b53.jpg',
            'api': {
                'public': 'https://vip.bitcoin.co.id/api',
                'private': 'https://vip.bitcoin.co.id/tapi'
            },
            'www': 'https://www.bitcoin.co.id',
            'doc': ['https://vip.bitcoin.co.id/downloads/BITCOINCOID-API-DOCUMENTATION.pdf', 'https://vip.bitcoin.co.id/trade_api']
        },
        'api': {
            'public': {
                'get': ['{pair}/ticker', '{pair}/trades', '{pair}/depth']
            },
            'private': {
                'post': ['getInfo', 'transHistory', 'trade', 'tradeHistory', 'openOrders', 'cancelOrder']
            }
        },
        'products': {
            'BTC/IDR': { 'id': 'btc_idr', 'symbol': 'BTC/IDR', 'base': 'BTC', 'quote': 'IDR', 'baseId': 'btc', 'quoteId': 'idr' },
            'BTS/BTC': { 'id': 'bts_btc', 'symbol': 'BTS/BTC', 'base': 'BTS', 'quote': 'BTC', 'baseId': 'bts', 'quoteId': 'btc' },
            'DASH/BTC': { 'id': 'drk_btc', 'symbol': 'DASH/BTC', 'base': 'DASH', 'quote': 'BTC', 'baseId': 'drk', 'quoteId': 'btc' },
            'DOGE/BTC': { 'id': 'doge_btc', 'symbol': 'DOGE/BTC', 'base': 'DOGE', 'quote': 'BTC', 'baseId': 'doge', 'quoteId': 'btc' },
            'ETH/BTC': { 'id': 'eth_btc', 'symbol': 'ETH/BTC', 'base': 'ETH', 'quote': 'BTC', 'baseId': 'eth', 'quoteId': 'btc' },
            'LTC/BTC': { 'id': 'ltc_btc', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC', 'baseId': 'ltc', 'quoteId': 'btc' },
            'NXT/BTC': { 'id': 'nxt_btc', 'symbol': 'NXT/BTC', 'base': 'NXT', 'quote': 'BTC', 'baseId': 'nxt', 'quoteId': 'btc' },
            'STR/BTC': { 'id': 'str_btc', 'symbol': 'STR/BTC', 'base': 'STR', 'quote': 'BTC', 'baseId': 'str', 'quoteId': 'btc' },
            'NEM/BTC': { 'id': 'nem_btc', 'symbol': 'NEM/BTC', 'base': 'NEM', 'quote': 'BTC', 'baseId': 'nem', 'quoteId': 'btc' },
            'XRP/BTC': { 'id': 'xrp_btc', 'symbol': 'XRP/BTC', 'base': 'XRP', 'quote': 'BTC', 'baseId': 'xrp', 'quoteId': 'btc' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balance,
                frozen,
                result,
                c,
                currency,
                lowercase,
                account,
                _this38 = this;

            return Promise.resolve().then(function () {
                return _this38.privatePostGetInfo();
            }).then(function (_resp) {
                response = _resp;
                balance = response['return']['balance'];
                frozen = response['return']['balance_hold'];
                result = { 'info': balance };

                for (c = 0; c < _this38.currencies.length; c++) {
                    currency = _this38.currencies[c];
                    lowercase = currency.toLowerCase();
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (lowercase in balance) {
                        account['free'] = parseFloat(balance[lowercase]);
                    }
                    if (lowercase in frozen) {
                        account['used'] = parseFloat(frozen[lowercase]);
                    }
                    account['total'] = _this38.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this39 = this;

            return Promise.resolve().then(function () {
                return _this39.publicGetPairDepth({
                    'pair': _this39.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this39.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this39.iso8601(timestamp)
                };
                sides = { 'bids': 'buy', 'asks': 'sell' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var pair,
                response,
                ticker,
                timestamp,
                baseVolume,
                quoteVolume,
                _this40 = this;

            return Promise.resolve().then(function () {
                pair = _this40.product(product);
                return _this40.publicGetPairTicker({
                    'pair': pair['id']
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = parseFloat(ticker['server_time']) * 1000;
                baseVolume = 'vol_' + pair['baseId'].toLowerCase();
                quoteVolume = 'vol_' + pair['quoteId'].toLowerCase();

                return {
                    'timestamp': timestamp,
                    'datetime': _this40.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker[baseVolume]),
                    'quoteVolume': parseFloat(ticker[quoteVolume]),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetPairTrades({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            var order = {
                'pair': p['id'],
                'type': side,
                'price': price
            };
            var base = p['base'].toLowerCase();
            order[base] = amount;
            return this.privatePostTrade(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            if (type == 'public') {
                url += '/' + this.implodeParams(path, params);
            } else {
                body = this.urlencode(this.extend({
                    'method': path,
                    'nonce': this.nonce()
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitfinex = {

        'id': 'bitfinex',
        'name': 'Bitfinex',
        'countries': 'US',
        'version': 'v1',
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766244-e328a50c-5ed2-11e7-947b-041416579bb3.jpg',
            'api': 'https://api.bitfinex.com',
            'www': 'https://www.bitfinex.com',
            'doc': ['https://bitfinex.readme.io/v1/docs', 'https://bitfinex.readme.io/v2/docs', 'https://github.com/bitfinexcom/bitfinex-api-node']
        },
        'api': {
            'public': {
                'get': ['book/{symbol}', 'candles/{symbol}', 'lendbook/{currency}', 'lends/{currency}', 'pubticker/{symbol}', 'stats/{symbol}', 'symbols', 'symbols_details', 'today', 'trades/{symbol}']
            },
            'private': {
                'post': ['account_infos', 'balances', 'basket_manage', 'credits', 'deposit/new', 'funding/close', 'history', 'history/movements', 'key_info', 'margin_infos', 'mytrades', 'offer/cancel', 'offer/new', 'offer/status', 'offers', 'order/cancel', 'order/cancel/all', 'order/cancel/multi', 'order/cancel/replace', 'order/new', 'order/new/multi', 'order/status', 'orders', 'position/claim', 'positions', 'summary', 'taken_funds', 'total_taken_funds', 'transfer', 'unused_taken_funds', 'withdraw']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                baseId,
                quoteId,
                base,
                quote,
                symbol,
                _this41 = this;

            return Promise.resolve().then(function () {
                return _this41.publicGetSymbolsDetails();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['pair'].toUpperCase();
                    baseId = id.slice(0, 3);
                    quoteId = id.slice(3, 6);
                    base = baseId;
                    quote = quoteId;
                    // issue #4 Bitfinex names Dash as DSH, instead of DASH

                    if (base == 'DSH') {
                        base = 'DASH';
                    }symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'baseId': baseId,
                        'quoteId': quoteId,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                b,
                account,
                currency,
                uppercase,
                result,
                c,
                _currency,
                _account,
                _this42 = this;

            return Promise.resolve().then(function () {
                return _this42.privatePostBalances();
            }).then(function (_resp) {
                response = _resp;
                balances = {};

                for (b = 0; b < response.length; b++) {
                    account = response[b];

                    if (account['type'] == 'exchange') {
                        currency = account['currency'];
                        // issue #4 Bitfinex names Dash as DSH, instead of DASH

                        if (currency == 'DSH') {
                            currency = 'DASH';
                        }uppercase = currency.toUpperCase();

                        balances[uppercase] = account;
                    }
                }
                result = { 'info': response };

                for (c = 0; c < _this42.currencies.length; c++) {
                    _currency = _this42.currencies[c];
                    _account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (_currency in balances) {
                        _account['free'] = parseFloat(balances[_currency]['available']);
                        _account['total'] = parseFloat(balances[_currency]['amount']);
                        _account['used'] = _account['total'] - _account['free'];
                    }
                    result[_currency] = _account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _timestamp3,
                _this43 = this;

            return Promise.resolve().then(function () {
                return _this43.publicGetBookSymbol({
                    'symbol': _this43.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this43.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this43.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['amount']);
                        _timestamp3 = parseInt(parseFloat(order['timestamp']));

                        result[side].push([price, amount, _timestamp3]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this44 = this;

            return Promise.resolve().then(function () {
                return _this44.publicGetPubtickerSymbol({
                    'symbol': _this44.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = parseFloat(ticker['timestamp']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this44.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last_price']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['mid']),
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradesSymbol({
                'symbol': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'symbol': this.productId(product),
                'amount': amount.toString(),
                'side': side,
                'type': 'exchange ' + type,
                'ocoorder': false,
                'buy_price_oco': 0,
                'sell_price_oco': 0
            };
            if (type == 'market') {
                order['price'] = this.nonce().toString();
            } else {
                order['price'] = price;
            }
            return this.privatePostOrderNew(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostOrderCancel({ 'order_id': id });
        },
        nonce: function nonce() {
            return this.milliseconds();
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var request = '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            var url = this.urls['api'] + request;
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                query = this.extend({
                    'nonce': nonce.toString(),
                    'request': request
                }, query);
                query = this.json(query);
                query = this.encode(query);
                var payload = this.stringToBase64(query);
                var secret = this.encode(this.secret);
                headers = {
                    'X-BFX-APIKEY': this.apiKey,
                    'X-BFX-PAYLOAD': payload,
                    'X-BFX-SIGNATURE': this.hmac(payload, secret, 'sha384')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitflyer = {

        'id': 'bitflyer',
        'name': 'bitFlyer',
        'countries': 'JP',
        'version': 'v1',
        'rateLimit': 500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28051642-56154182-660e-11e7-9b0d-6042d1e6edd8.jpg',
            'api': 'https://api.bitflyer.jp',
            'www': 'https://bitflyer.jp',
            'doc': 'https://bitflyer.jp/API'
        },
        'api': {
            'public': {
                'get': ['getmarkets', // or 'markets'
                'getboard', // or 'board'
                'getticker', // or 'ticker'
                'getexecutions', // or 'executions'
                'gethealth', 'getchats']
            },
            'private': {
                'get': ['getpermissions', 'getbalance', 'getcollateral', 'getcollateralaccounts', 'getaddresses', 'getcoinins', 'getcoinouts', 'getbankaccounts', 'getdeposits', 'getwithdrawals', 'getchildorders', 'getparentorders', 'getparentorder', 'getexecutions', 'getpositions', 'gettradingcommission'],
                'post': ['sendcoin', 'withdraw', 'sendchildorder', 'cancelchildorder', 'sendparentorder', 'cancelparentorder', 'cancelallchildorders']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                currencies,
                base,
                quote,
                symbol,
                numCurrencies,
                _this45 = this;

            return Promise.resolve().then(function () {
                return _this45.publicGetMarkets();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['product_code'];
                    currencies = id.split('_');
                    base = undefined;
                    quote = undefined;
                    symbol = id;
                    numCurrencies = currencies.length;

                    if (numCurrencies == 2) {
                        base = currencies[0];
                        quote = currencies[1];
                        symbol = base + '/' + quote;
                    }
                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                b,
                account,
                currency,
                result,
                c,
                _currency2,
                _account2,
                _this46 = this;

            return Promise.resolve().then(function () {
                return _this46.privateGetBalance();
            }).then(function (_resp) {
                response = _resp;
                balances = {};

                for (b = 0; b < response.length; b++) {
                    account = response[b];
                    currency = account['currency_code'];

                    balances[currency] = account;
                }
                result = { 'info': response };

                for (c = 0; c < _this46.currencies.length; c++) {
                    _currency2 = _this46.currencies[c];
                    _account2 = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (_currency2 in balances) {
                        _account2['total'] = balances[_currency2]['amount'];
                        _account2['free'] = balances[_currency2]['available'];
                        _account2['used'] = _account2['total'] - _account2['free'];
                    }
                    result[_currency2] = _account2;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this47 = this;

            return Promise.resolve().then(function () {
                return _this47.publicGetBoard({
                    'product_code': _this47.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this47.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this47.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['size']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this48 = this;

            return Promise.resolve().then(function () {
                return _this48.publicGetTicker({
                    'product_code': _this48.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this48.parse8601(ticker['timestamp']);

                return {
                    'timestamp': timestamp,
                    'datetime': _this48.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['best_bid']),
                    'ask': parseFloat(ticker['best_ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['ltp']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['volume_by_product']),
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetExecutions({
                'product_code': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'product_code': this.productId(product),
                'child_order_type': type.toUpperCase(),
                'side': side.toUpperCase(),
                'price': price,
                'size': amount
            };
            return this.privatePostSendparentorder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelparentorder(this.extend({
                'parent_order_id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var request = '/' + this.version + '/' + path;
            if (type == 'private') request = '/me' + request;
            var url = this.urls['api'] + request;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce().toString();
                body = this.json(params);
                var auth = [nonce, method, request, body].join('');
                headers = {
                    'ACCESS-KEY': this.apiKey,
                    'ACCESS-TIMESTAMP': nonce,
                    'ACCESS-SIGN': this.hmac(this.encode(auth), this.secret),
                    'Content-Type': 'application/json'
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitlish = {

        'id': 'bitlish',
        'name': 'bitlish',
        'countries': ['GB', 'EU', 'RU'],
        'rateLimit': 1500,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766275-dcfc6c30-5ed3-11e7-839d-00a846385d0b.jpg',
            'api': 'https://bitlish.com/api',
            'www': 'https://bitlish.com',
            'doc': 'https://bitlish.com/api'
        },
        'api': {
            'public': {
                'get': ['instruments', 'ohlcv', 'pairs', 'tickers', 'trades_depth', 'trades_history']
            },
            'private': {
                'post': ['accounts_operations', 'balance', 'cancel_trade', 'cancel_trades_by_ids', 'cancel_all_trades', 'create_bcode', 'create_template_wallet', 'create_trade', 'deposit', 'list_accounts_operations_from_ts', 'list_active_trades', 'list_bcodes', 'list_my_matches_from_ts', 'list_my_trades', 'list_my_trads_from_ts', 'list_payment_methods', 'list_payments', 'redeem_code', 'resign', 'signin', 'signout', 'trade_details', 'trade_options', 'withdraw', 'withdraw_by_id']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                keys,
                p,
                product,
                id,
                symbol,
                _symbol$split,
                _symbol$split2,
                base,
                quote,
                _this49 = this;

            return Promise.resolve().then(function () {
                return _this49.publicGetPairs();
            }).then(function (_resp) {
                products = _resp;
                result = [];
                keys = Object.keys(products);

                for (p = 0; p < keys.length; p++) {
                    product = products[keys[p]];
                    id = product['id'];
                    symbol = product['name'];
                    _symbol$split = symbol.split('/');
                    _symbol$split2 = _slicedToArray(_symbol$split, 2);
                    base = _symbol$split2[0];
                    quote = _symbol$split2[1];
                    // issue #4 bitlish names Dash as DSH, instead of DASH

                    if (base == 'DSH') {
                        base = 'DASH';
                    }symbol = base + '/' + quote;
                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                _this50 = this;

            return Promise.resolve().then(function () {
                p = _this50.product(product);
                return _this50.publicGetTickers();
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers[p['id']];
                timestamp = _this50.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this50.iso8601(timestamp),
                    'high': parseFloat(ticker['max']),
                    'low': parseFloat(ticker['min']),
                    'bid': undefined,
                    'ask': undefined,
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': parseFloat(ticker['first']),
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': undefined,
                    'info': ticker
                };
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this51 = this;

            return Promise.resolve().then(function () {
                return _this51.publicGetTradesDepth({
                    'pair_id': _this51.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = parseInt(parseInt(orderbook['last']) / 1000);
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this51.iso8601(timestamp)
                };
                sides = { 'bids': 'bid', 'asks': 'ask' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['volume']);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradesHistory({
                'pair_id': this.productId(product)
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                result,
                currencies,
                balance,
                c,
                currency,
                account,
                _c,
                _currency3,
                _account3,
                _this52 = this;

            return Promise.resolve().then(function () {
                return _this52.privatePostBalance();
            }).then(function (_resp) {
                response = _resp;
                result = { 'info': response };
                currencies = Object.keys(response);
                balance = {};

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    account = response[currency];

                    currency = currency.toUpperCase();
                    // issue #4 bitlish names Dash as DSH, instead of DASH
                    if (currency == 'DSH') {
                        currency = 'DASH';
                    }balance[currency] = account;
                }
                for (_c = 0; _c < _this52.currencies.length; _c++) {
                    _currency3 = _this52.currencies[_c];
                    _account3 = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (_currency3 in balance) {
                        _account3['free'] = parseFloat(balance[_currency3]['funds']);
                        _account3['used'] = parseFloat(balance[_currency3]['holded']);
                        _account3['total'] = _this52.sum(_account3['free'], _account3['used']);
                    }
                    result[_currency3] = _account3;
                }
                return result;
            });
        },
        signIn: function signIn() {
            return this.privatePostSignin({
                'login': this.login,
                'passwd': this.password
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'pair_id': this.productId(product),
                'dir': side == 'buy' ? 'bid' : 'ask',
                'amount': amount
            };
            if (type == 'limit') order['price'] = price;
            return this.privatePostCreateTrade(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelTrade({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                body = this.json(this.extend({ 'token': this.apiKey }, params));
                headers = { 'Content-Type': 'application/json' };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitmarket = {

        'id': 'bitmarket',
        'name': 'BitMarket',
        'countries': ['PL', 'EU'],
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27767256-a8555200-5ef9-11e7-96fd-469a65e2b0bd.jpg',
            'api': {
                'public': 'https://www.bitmarket.net',
                'private': 'https://www.bitmarket.pl/api2/' // last slash is critical
            },
            'www': ['https://www.bitmarket.pl', 'https://www.bitmarket.net'],
            'doc': ['https://www.bitmarket.net/docs.php?file=api_public.html', 'https://www.bitmarket.net/docs.php?file=api_private.html', 'https://github.com/bitmarket-net/api']
        },
        'api': {
            'public': {
                'get': ['json/{market}/ticker', 'json/{market}/orderbook', 'json/{market}/trades', 'json/ctransfer', 'graphs/{market}/90m', 'graphs/{market}/6h', 'graphs/{market}/1d', 'graphs/{market}/7d', 'graphs/{market}/1m', 'graphs/{market}/3m', 'graphs/{market}/6m', 'graphs/{market}/1y']
            },
            'private': {
                'post': ['info', 'trade', 'cancel', 'orders', 'trades', 'history', 'withdrawals', 'tradingdesk', 'tradingdeskStatus', 'tradingdeskConfirm', 'cryptotradingdesk', 'cryptotradingdeskStatus', 'cryptotradingdeskConfirm', 'withdraw', 'withdrawFiat', 'withdrawPLNPP', 'withdrawFiatFast', 'deposit', 'transfer', 'transfers', 'marginList', 'marginOpen', 'marginClose', 'marginCancel', 'marginModify', 'marginBalanceAdd', 'marginBalanceRemove', 'swapList', 'swapOpen', 'swapClose']
            }
        },
        'products': {
            'BTC/PLN': { 'id': 'BTCPLN', 'symbol': 'BTC/PLN', 'base': 'BTC', 'quote': 'PLN' },
            'BTC/EUR': { 'id': 'BTCEUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'LTC/PLN': { 'id': 'LTCPLN', 'symbol': 'LTC/PLN', 'base': 'LTC', 'quote': 'PLN' },
            'LTC/BTC': { 'id': 'LTCBTC', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'LiteMineX/BTC': { 'id': 'LiteMineXBTC', 'symbol': 'LiteMineX/BTC', 'base': 'LiteMineX', 'quote': 'BTC' },
            'PlnX/BTC': { 'id': 'PlnxBTC', 'symbol': 'PlnX/BTC', 'base': 'PlnX', 'quote': 'BTC' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                data,
                balance,
                result,
                c,
                currency,
                account,
                _this53 = this;

            return Promise.resolve().then(function () {
                return _this53.privatePostInfo();
            }).then(function (_resp) {
                response = _resp;
                data = response['data'];
                balance = data['balances'];
                result = { 'info': data };

                for (c = 0; c < _this53.currencies.length; c++) {
                    currency = _this53.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balance['available']) {
                        account['free'] = balance['available'][currency];
                    }if (currency in balance['blocked']) {
                        account['used'] = balance['blocked'][currency];
                    }account['total'] = _this53.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this54 = this;

            return Promise.resolve().then(function () {
                return _this54.publicGetJsonMarketOrderbook({
                    'market': _this54.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this54.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this54.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this55 = this;

            return Promise.resolve().then(function () {
                return _this55.publicGetJsonMarketTicker({
                    'market': _this55.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this55.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this55.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetJsonMarketTrades({
                'market': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            return this.privatePostTrade(this.extend({
                'market': this.productId(product),
                'type': side,
                'amount': amount,
                'rate': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancel({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            if (type == 'public') {
                url += '/' + this.implodeParams(path + '.json', params);
            } else {
                var nonce = this.nonce();
                var query = this.extend({
                    'tonce': nonce,
                    'method': path
                }, params);
                body = this.urlencode(query);
                headers = {
                    'API-Key': this.apiKey,
                    'API-Hash': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitmex = {

        'id': 'bitmex',
        'name': 'BitMEX',
        'countries': 'SC', // Seychelles
        'version': 'v1',
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766319-f653c6e6-5ed4-11e7-933d-f0bc3699ae8f.jpg',
            'api': 'https://www.bitmex.com',
            'www': 'https://www.bitmex.com',
            'doc': ['https://www.bitmex.com/app/apiOverview', 'https://github.com/BitMEX/api-connectors/tree/master/official-http']
        },
        'api': {
            'public': {
                'get': ['announcement', 'announcement/urgent', 'funding', 'instrument', 'instrument/active', 'instrument/activeAndIndices', 'instrument/activeIntervals', 'instrument/compositeIndex', 'instrument/indices', 'insurance', 'leaderboard', 'liquidation', 'orderBook', 'orderBook/L2', 'quote', 'quote/bucketed', 'schema', 'schema/websocketHelp', 'settlement', 'stats', 'stats/history', 'trade', 'trade/bucketed']
            },
            'private': {
                'get': ['apiKey', 'chat', 'chat/channels', 'chat/connected', 'execution', 'execution/tradeHistory', 'notification', 'order', 'position', 'user', 'user/affiliateStatus', 'user/checkReferralCode', 'user/commission', 'user/depositAddress', 'user/margin', 'user/minWithdrawalFee', 'user/wallet', 'user/walletHistory', 'user/walletSummary'],
                'post': ['apiKey', 'apiKey/disable', 'apiKey/enable', 'chat', 'order', 'order/bulk', 'order/cancelAllAfter', 'order/closePosition', 'position/isolate', 'position/leverage', 'position/riskLimit', 'position/transferMargin', 'user/cancelWithdrawal', 'user/confirmEmail', 'user/confirmEnableTFA', 'user/confirmWithdrawal', 'user/disableTFA', 'user/logout', 'user/logoutAll', 'user/preferences', 'user/requestEnableTFA', 'user/requestWithdrawal'],
                'put': ['order', 'order/bulk', 'user'],
                'delete': ['apiKey', 'order', 'order/all']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                isFuturesContract,
                symbol,
                _this56 = this;

            return Promise.resolve().then(function () {
                return _this56.publicGetInstrumentActive();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['symbol'];
                    base = product['underlying'];
                    quote = product['quoteCurrency'];
                    isFuturesContract = id != base + quote;

                    base = _this56.commonCurrencyCode(base);
                    quote = _this56.commonCurrencyCode(quote);
                    symbol = isFuturesContract ? id : base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                result,
                b,
                balance,
                currency,
                account,
                _this57 = this;

            return Promise.resolve().then(function () {
                return _this57.privateGetUserMargin({ 'currency': 'all' });
            }).then(function (_resp) {
                response = _resp;
                result = { 'info': response };

                for (b = 0; b < response.length; b++) {
                    balance = response[b];
                    currency = balance['currency'].toUpperCase();

                    currency = _this57.commonCurrencyCode(currency);
                    account = {
                        'free': balance['availableMargin'],
                        'used': undefined,
                        'total': balance['amount']
                    };

                    if (currency == 'BTC') {
                        account['free'] = account['free'] * 0.00000001;
                        account['total'] = account['total'] * 0.00000001;
                    }
                    account['used'] = account['total'] - account['free'];
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                o,
                order,
                side,
                amount,
                price,
                _this58 = this;

            return Promise.resolve().then(function () {
                return _this58.publicGetOrderBookL2({
                    'symbol': _this58.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this58.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this58.iso8601(timestamp)
                };

                for (o = 0; o < orderbook.length; o++) {
                    order = orderbook[o];
                    side = order['side'] == 'Sell' ? 'asks' : 'bids';
                    amount = order['size'];
                    price = order['price'];

                    result[side].push([price, amount]);
                }
                result['bids'] = _this58.sortBy(result['bids'], 0, true);
                result['asks'] = _this58.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var request,
                quotes,
                quotesLength,
                quote,
                tickers,
                ticker,
                timestamp,
                _this59 = this;

            return Promise.resolve().then(function () {
                request = {
                    'symbol': _this59.productId(product),
                    'binSize': '1d',
                    'partial': true,
                    'count': 1,
                    'reverse': true
                };
                return _this59.publicGetQuoteBucketed(request);
            }).then(function (_resp) {
                quotes = _resp;
                quotesLength = quotes.length;
                quote = quotes[quotesLength - 1];
                return _this59.publicGetTradeBucketed(request);
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers[0];
                timestamp = _this59.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this59.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(quote['bidPrice']),
                    'ask': parseFloat(quote['askPrice']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': undefined,
                    'close': parseFloat(ticker['close']),
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['homeNotional']),
                    'quoteVolume': parseFloat(ticker['foreignNotional']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrade({
                'symbol': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'symbol': this.productId(product),
                'side': this.capitalize(side),
                'orderQty': amount,
                'ordType': this.capitalize(type)
            };
            if (type == 'limit') order['rate'] = price;
            return this.privatePostOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privateDeleteOrder({ 'orderID': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var query = '/api/' + this.version + '/' + path;
            if (Object.keys(params).length) query += '?' + this.urlencode(params);
            var url = this.urls['api'] + query;
            if (type == 'private') {
                var nonce = this.nonce().toString();
                if (method == 'POST') if (Object.keys(params).length) body = this.json(params);
                var request = [method, query, nonce, body || ''].join('');
                headers = {
                    'Content-Type': 'application/json',
                    'api-nonce': nonce,
                    'api-key': this.apiKey,
                    'api-signature': this.hmac(this.encode(request), this.encode(this.secret))
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitso = {

        'id': 'bitso',
        'name': 'Bitso',
        'countries': 'MX', // Mexico
        'rateLimit': 2000, // 30 requests per minute
        'version': 'v3',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766335-715ce7aa-5ed5-11e7-88a8-173a27bb30fe.jpg',
            'api': 'https://api.bitso.com',
            'www': 'https://bitso.com',
            'doc': 'https://bitso.com/api_info'
        },
        'api': {
            'public': {
                'get': ['available_books', 'ticker', 'order_book', 'trades']
            },
            'private': {
                'get': ['account_status', 'balance', 'fees', 'fundings', 'fundings/{fid}', 'funding_destination', 'kyc_documents', 'ledger', 'ledger/trades', 'ledger/fees', 'ledger/fundings', 'ledger/withdrawals', 'mx_bank_codes', 'open_orders', 'order_trades/{oid}', 'orders/{oid}', 'user_trades', 'user_trades/{tid}', 'withdrawals/', 'withdrawals/{wid}'],
                'post': ['bitcoin_withdrawal', 'debit_card_withdrawal', 'ether_withdrawal', 'orders', 'phone_number', 'phone_verification', 'phone_withdrawal', 'spei_withdrawal'],
                'delete': ['orders/{oid}', 'orders/all']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                symbol,
                _symbol$split3,
                _symbol$split4,
                base,
                quote,
                _this60 = this;

            return Promise.resolve().then(function () {
                return _this60.publicGetAvailableBooks();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['payload'].length; p++) {
                    product = products['payload'][p];
                    id = product['book'];
                    symbol = id.toUpperCase().replace('_', '/');
                    _symbol$split3 = symbol.split('/');
                    _symbol$split4 = _slicedToArray(_symbol$split3, 2);
                    base = _symbol$split4[0];
                    quote = _symbol$split4[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                b,
                balance,
                currency,
                account,
                _this61 = this;

            return Promise.resolve().then(function () {
                return _this61.privateGetBalance();
            }).then(function (_resp) {
                response = _resp;
                balances = response['payload']['balances'];
                result = { 'info': response };

                for (b = 0; b < balances.length; b++) {
                    balance = balances[b];
                    currency = balance['currency'].toUpperCase();
                    account = {
                        'free': parseFloat(balance['available']),
                        'used': parseFloat(balance['locked']),
                        'total': parseFloat(balance['total'])
                    };

                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this62 = this;

            return Promise.resolve().then(function () {
                return _this62.publicGetOrderBook({
                    'book': _this62.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['payload'];
                timestamp = _this62.parse8601(orderbook['updated_at']);
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this62.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['amount']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this63 = this;

            return Promise.resolve().then(function () {
                return _this63.publicGetTicker({
                    'book': _this63.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['payload'];
                timestamp = _this63.parse8601(ticker['created_at']);

                return {
                    'timestamp': timestamp,
                    'datetime': _this63.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'book': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'book': this.productId(product),
                'side': side,
                'type': type,
                'major': amount
            };
            if (type == 'limit') order['price'] = price;
            return this.privatePostOrders(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privateDeleteOrders({ 'oid': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var query = '/' + this.version + '/' + this.implodeParams(path, params);
            var url = this.urls['api'] + query;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                if (Object.keys(params).length) body = this.json(params);
                var nonce = this.nonce().toString();
                var request = [nonce, method, query, body || ''].join('');
                var signature = this.hmac(this.encode(request), this.encode(this.secret));
                var auth = this.apiKey + ':' + nonce + ':' + signature;
                headers = { 'Authorization': "Bitso " + auth };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bitstamp = {

        'id': 'bitstamp',
        'name': 'Bitstamp',
        'countries': 'GB',
        'rateLimit': 1000,
        'version': 'v2',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27786377-8c8ab57e-5fe9-11e7-8ea4-2b05b6bcceec.jpg',
            'api': 'https://www.bitstamp.net/api',
            'www': 'https://www.bitstamp.net',
            'doc': 'https://www.bitstamp.net/api'
        },
        'api': {
            'public': {
                'get': ['order_book/{id}/', 'ticker_hour/{id}/', 'ticker/{id}/', 'transactions/{id}/']
            },
            'private': {
                'post': ['balance/', 'balance/{id}/', 'buy/{id}/', 'buy/market/{id}/', 'cancel_order/', 'liquidation_address/info/', 'liquidation_address/new/', 'open_orders/all/', 'open_orders/{id}/', 'sell/{id}/', 'sell/market/{id}/', 'transfer-from-main/', 'transfer-to-main/', 'user_transactions/', 'user_transactions/{id}/', 'withdrawal/cancel/', 'withdrawal/open/', 'withdrawal/status/', 'xrp_address/', 'xrp_withdrawal/']
            }
        },
        'products': {
            'BTC/USD': { 'id': 'btcusd', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/EUR': { 'id': 'btceur', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'EUR/USD': { 'id': 'eurusd', 'symbol': 'EUR/USD', 'base': 'EUR', 'quote': 'USD' },
            'XRP/USD': { 'id': 'xrpusd', 'symbol': 'XRP/USD', 'base': 'XRP', 'quote': 'USD' },
            'XRP/EUR': { 'id': 'xrpeur', 'symbol': 'XRP/EUR', 'base': 'XRP', 'quote': 'EUR' },
            'XRP/BTC': { 'id': 'xrpbtc', 'symbol': 'XRP/BTC', 'base': 'XRP', 'quote': 'BTC' },
            'LTC/USD': { 'id': 'ltcusd', 'symbol': 'LTC/USD', 'base': 'LTC', 'quote': 'USD' },
            'LTC/EUR': { 'id': 'ltceur', 'symbol': 'LTC/EUR', 'base': 'LTC', 'quote': 'EUR' },
            'LTC/BTC': { 'id': 'ltcbtc', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' }
        },

        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this64 = this;

            return Promise.resolve().then(function () {
                return _this64.publicGetOrderBookId({
                    'id': _this64.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = parseInt(orderbook['timestamp']) * 1000;
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this64.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this65 = this;

            return Promise.resolve().then(function () {
                return _this65.publicGetTickerId({
                    'id': _this65.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = parseInt(ticker['timestamp']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this65.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTransactionsId({
                'id': this.productId(product)
            });
        },
        fetchBalance: function fetchBalance() {
            var balance,
                result,
                c,
                currency,
                lowercase,
                total,
                free,
                used,
                account,
                _this66 = this;

            return Promise.resolve().then(function () {
                return _this66.privatePostBalance();
            }).then(function (_resp) {
                balance = _resp;
                result = { 'info': balance };

                for (c = 0; c < _this66.currencies.length; c++) {
                    currency = _this66.currencies[c];
                    lowercase = currency.toLowerCase();
                    total = lowercase + '_balance';
                    free = lowercase + '_available';
                    used = lowercase + '_reserved';
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (free in balance) {
                        account['free'] = parseFloat(balance[free]);
                    }if (used in balance) {
                        account['used'] = parseFloat(balance[used]);
                    }if (total in balance) {
                        account['total'] = parseFloat(balance[total]);
                    }result[currency] = account;
                }
                return result;
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side);
            var order = {
                'id': this.productId(product),
                'amount': amount
            };
            if (type == 'market') method += 'Market';else order['price'] = price;
            method += 'Id';
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                if (!this.uid) throw new AuthenticationError(this.id + ' requires `' + this.id + '.uid` property for authentication');
                var nonce = this.nonce().toString();
                var auth = nonce + this.uid + this.apiKey;
                var signature = this.hmac(this.encode(auth), this.encode(this.secret));
                query = this.extend({
                    'key': this.apiKey,
                    'signature': signature.toUpperCase(),
                    'nonce': nonce
                }, query);
                body = this.urlencode(query);
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bittrex = {

        'id': 'bittrex',
        'name': 'Bittrex',
        'countries': 'US',
        'version': 'v1.1',
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766352-cf0b3c26-5ed5-11e7-82b7-f3826b7a97d8.jpg',
            'api': 'https://bittrex.com/api',
            'www': 'https://bittrex.com',
            'doc': ['https://bittrex.com/Home/Api', 'https://www.npmjs.org/package/node.bittrex.api']
        },
        'api': {
            'public': {
                'get': ['currencies', 'markethistory', 'markets', 'marketsummaries', 'marketsummary', 'orderbook', 'ticker']
            },
            'account': {
                'get': ['balance', 'balances', 'depositaddress', 'deposithistory', 'order', 'orderhistory', 'withdrawalhistory', 'withdraw']
            },
            'market': {
                'get': ['buylimit', 'buymarket', 'cancel', 'openorders', 'selllimit', 'sellmarket']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this67 = this;

            return Promise.resolve().then(function () {
                return _this67.publicGetMarkets();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['result'].length; p++) {
                    product = products['result'][p];
                    id = product['MarketName'];
                    base = product['MarketCurrency'];
                    quote = product['BaseCurrency'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                indexed,
                c,
                currency,
                account,
                balance,
                _this68 = this;

            return Promise.resolve().then(function () {
                return _this68.accountGetBalances();
            }).then(function (_resp) {
                response = _resp;
                balances = response['result'];
                result = { 'info': balances };
                indexed = _this68.indexBy(balances, 'Currency');

                for (c = 0; c < _this68.currencies.length; c++) {
                    currency = _this68.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in indexed) {
                        balance = indexed[currency];

                        account['free'] = balance['Available'];
                        account['used'] = balance['Pending'];
                        account['total'] = balance['Balance'];
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this69 = this;

            return Promise.resolve().then(function () {
                return _this69.publicGetOrderbook({
                    'market': _this69.productId(product),
                    'type': 'both',
                    'depth': 50
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['result'];
                timestamp = _this69.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this69.iso8601(timestamp)
                };
                sides = { 'bids': 'buy', 'asks': 'sell' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['Rate']);
                        amount = parseFloat(order['Quantity']);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this70 = this;

            return Promise.resolve().then(function () {
                return _this70.publicGetMarketsummary({
                    'market': _this70.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['result'][0];
                timestamp = _this70.parse8601(ticker['TimeStamp']);

                return {
                    'timestamp': timestamp,
                    'datetime': _this70.iso8601(timestamp),
                    'high': parseFloat(ticker['High']),
                    'low': parseFloat(ticker['Low']),
                    'bid': parseFloat(ticker['Bid']),
                    'ask': parseFloat(ticker['Ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['Last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['Volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetMarkethistory({
                'market': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'marketGet' + this.capitalize(side) + type;
            var order = {
                'market': this.productId(product),
                'quantity': amount
            };
            if (type == 'limit') order['rate'] = price;
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.marketGetCancel({ 'uuid': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/';
            if (type == 'public') {
                url += type + '/' + method.toLowerCase() + path;
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce();
                url += type + '/';
                if (type == 'account' && path != 'withdraw' || path == 'openorders') url += method.toLowerCase();
                url += path + '?' + this.urlencode(this.extend({
                    'nonce': nonce,
                    'apikey': this.apiKey
                }, params));
                var signature = this.hmac(this.encode(url), this.encode(this.secret), 'sha512');
                headers = { 'apisign': signature };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var blinktrade = {

        'id': 'blinktrade',
        'name': 'BlinkTrade',
        'countries': ['US', 'VE', 'VN', 'BR', 'PK', 'CL'],
        'rateLimit': 1000,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27990968-75d9c884-6470-11e7-9073-46756c8e7e8c.jpg',
            'api': {
                'public': 'https://api.blinktrade.com/api',
                'private': 'https://api.blinktrade.com/tapi'
            },
            'www': 'https://blinktrade.com',
            'doc': 'https://blinktrade.com/docs'
        },
        'api': {
            'public': {
                'get': ['{currency}/ticker', // ?crypto_currency=BTC
                '{currency}/orderbook', // ?crypto_currency=BTC
                '{currency}/trades']
            },
            'private': {
                'post': ['D', // order
                'F', // cancel order
                'U2', // balance
                'U4', // my orders
                'U6', // withdraw
                'U18', // deposit
                'U24', // confirm withdrawal
                'U26', // list withdrawals
                'U30', // list deposits
                'U34', // ledger
                'U70']
            }
        },
        'products': {
            'BTC/VEF': { 'id': 'BTCVEF', 'symbol': 'BTC/VEF', 'base': 'BTC', 'quote': 'VEF', 'brokerId': 1, 'broker': 'SurBitcoin' },
            'BTC/VND': { 'id': 'BTCVND', 'symbol': 'BTC/VND', 'base': 'BTC', 'quote': 'VND', 'brokerId': 3, 'broker': 'VBTC' },
            'BTC/BRL': { 'id': 'BTCBRL', 'symbol': 'BTC/BRL', 'base': 'BTC', 'quote': 'BRL', 'brokerId': 4, 'broker': 'FoxBit' },
            'BTC/PKR': { 'id': 'BTCPKR', 'symbol': 'BTC/PKR', 'base': 'BTC', 'quote': 'PKR', 'brokerId': 8, 'broker': 'UrduBit' },
            'BTC/CLP': { 'id': 'BTCCLP', 'symbol': 'BTC/CLP', 'base': 'BTC', 'quote': 'CLP', 'brokerId': 9, 'broker': 'ChileBit' }
        },

        fetchBalance: function fetchBalance() {
            return this.privatePostU2({
                'BalanceReqID': this.nonce()
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this71 = this;

            return Promise.resolve().then(function () {
                p = _this71.product(product);
                return _this71.publicGetCurrencyOrderbook({
                    'currency': p['quote'],
                    'crypto_currency': p['base']
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this71.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this71.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                ticker,
                timestamp,
                lowercaseQuote,
                quoteVolume,
                _this72 = this;

            return Promise.resolve().then(function () {
                p = _this72.product(product);
                return _this72.publicGetCurrencyTicker({
                    'currency': p['quote'],
                    'crypto_currency': p['base']
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this72.milliseconds();
                lowercaseQuote = p['quote'].toLowerCase();
                quoteVolume = 'vol_' + lowercaseQuote;

                return {
                    'timestamp': timestamp,
                    'datetime': _this72.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['vol']),
                    'quoteVolume': parseFloat(ticker[quoteVolume]),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            var p = this.product(product);
            return this.publicGetCurrencyTrades({
                'currency': p['quote'],
                'crypto_currency': p['base']
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var p = this.product(product);
            var order = {
                'ClOrdID': this.nonce(),
                'Symbol': p['id'],
                'Side': this.capitalize(side),
                'OrdType': 2,
                'Price': price,
                'OrderQty': amount,
                'BrokerID': p['brokerId']
            };
            return this.privatePostD(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostF(this.extend({
                'ClOrdID': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce().toString();
                var request = this.extend({ 'MsgType': path }, query);
                body = this.json(request);
                headers = {
                    'APIKey': this.apiKey,
                    'Nonce': nonce,
                    'Signature': this.hmac(this.encode(nonce), this.encode(this.secret)),
                    'Content-Type': 'application/json'
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bl3p = {

        'id': 'bl3p',
        'name': 'BL3P',
        'countries': ['NL', 'EU'], // Netherlands, EU
        'rateLimit': 1000,
        'version': '1',
        'comment': 'An exchange market by BitonicNL',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28501752-60c21b82-6feb-11e7-818b-055ee6d0e754.jpg',
            'api': 'https://api.bl3p.eu',
            'www': ['https://bl3p.eu', 'https://bitonic.nl'],
            'doc': ['https://github.com/BitonicNL/bl3p-api/tree/master/docs', 'https://bl3p.eu/api', 'https://bitonic.nl/en/api']
        },
        'api': {
            'public': {
                'get': ['{market}/ticker', '{market}/orderbook', '{market}/trades']
            },
            'private': {
                'post': ['{market}/money/depth/full', '{market}/money/order/add', '{market}/money/order/cancel', '{market}/money/order/result', '{market}/money/orders', '{market}/money/orders/history', '{market}/money/trades/fetch', 'GENMKT/money/info', 'GENMKT/money/deposit_address', 'GENMKT/money/new_deposit_address', 'GENMKT/money/wallet/history', 'GENMKT/money/withdraw']
            }
        },
        'products': {
            'BTC/EUR': { 'id': 'BTCEUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'LTC/EUR': { 'id': 'LTCEUR', 'symbol': 'LTC/EUR', 'base': 'LTC', 'quote': 'EUR' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                data,
                balance,
                result,
                c,
                currency,
                account,
                _this73 = this;

            return Promise.resolve().then(function () {
                return _this73.privatePostGENMKTMoneyInfo();
            }).then(function (_resp) {
                response = _resp;
                data = response['data'];
                balance = data['wallets'];
                result = { 'info': data };

                for (c = 0; c < _this73.currencies.length; c++) {
                    currency = _this73.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balance) {
                        if ('available' in balance[currency]) {
                            account['free'] = parseFloat(balance[currency]['available']['value']);
                        }
                    }
                    if (currency in balance) {
                        if ('balance' in balance[currency]) {
                            account['total'] = parseFloat(balance[currency]['balance']['value']);
                        }
                    }
                    if (account['total']) {
                        if (account['free']) {
                            account['used'] = account['total'] - account['free'];
                        }
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this74 = this;

            return Promise.resolve().then(function () {
                p = _this74.product(product);
                return _this74.publicGetMarketOrderbook({
                    'market': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['data'];
                timestamp = _this74.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this74.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['price_int'] / 100000;
                        amount = order['amount_int'] / 100000000;

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this75 = this;

            return Promise.resolve().then(function () {
                return _this75.publicGetMarketTicker({
                    'market': _this75.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = ticker['timestamp'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this75.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']['24h']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetMarketTrades({
                'market': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            var order = {
                'market': p['id'],
                'amount_int': amount,
                'fee_currency': p['quote'],
                'type': side == 'buy' ? 'bid' : 'ask'
            };
            if (type == 'limit') order['price_int'] = price;
            return this.privatePostMarketMoneyOrderAdd(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostMarketMoneyOrderCancel({ 'order_id': id });
        },
        request: function request(path) {
            var type,
                method,
                params,
                headers,
                body,
                request,
                url,
                query,
                nonce,
                secret,
                auth,
                signature,
                _this76 = this,
                _arguments63 = arguments;

            type = _arguments63.length > 1 && _arguments63[1] !== undefined ? _arguments63[1] : 'public';
            method = _arguments63.length > 2 && _arguments63[2] !== undefined ? _arguments63[2] : 'GET';
            params = _arguments63.length > 3 && _arguments63[3] !== undefined ? _arguments63[3] : {};
            headers = _arguments63.length > 4 && _arguments63[4] !== undefined ? _arguments63[4] : undefined;
            body = _arguments63.length > 5 && _arguments63[5] !== undefined ? _arguments63[5] : undefined;
            request = _this76.implodeParams(path, params);
            url = _this76.urls['api'] + '/' + _this76.version + '/' + request;
            query = _this76.omit(params, _this76.extractParams(path));

            if (type == 'public') {
                if (Object.keys(query).length) {
                    url += '?' + _this76.urlencode(query);
                }
            } else {
                nonce = _this76.nonce();

                body = _this76.urlencode(_this76.extend({ 'nonce': nonce }, query));
                secret = _this76.base64ToBinary(_this76.secret);
                auth = request + "\0" + body;
                signature = _this76.hmac(_this76.encode(auth), secret, 'sha512', 'base64');

                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Rest-Key': _this76.apiKey,
                    'Rest-Sign': signature
                };
            }
            return _this76.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var btcchina = {

        'id': 'btcchina',
        'name': 'BTCChina',
        'countries': 'CN',
        'rateLimit': 1500,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766368-465b3286-5ed6-11e7-9a11-0f6467e1d82b.jpg',
            'api': {
                'public': 'https://data.btcchina.com/data',
                'private': 'https://api.btcchina.com/api_trade_v1.php'
            },
            'www': 'https://www.btcchina.com',
            'doc': 'https://www.btcchina.com/apidocs'
        },
        'api': {
            'public': {
                'get': ['historydata', 'orderbook', 'ticker', 'trades']
            },
            'private': {
                'post': ['BuyIcebergOrder', 'BuyOrder', 'BuyOrder2', 'BuyStopOrder', 'CancelIcebergOrder', 'CancelOrder', 'CancelStopOrder', 'GetAccountInfo', 'getArchivedOrder', 'getArchivedOrders', 'GetDeposits', 'GetIcebergOrder', 'GetIcebergOrders', 'GetMarketDepth', 'GetMarketDepth2', 'GetOrder', 'GetOrders', 'GetStopOrder', 'GetStopOrders', 'GetTransactions', 'GetWithdrawal', 'GetWithdrawals', 'RequestWithdrawal', 'SellIcebergOrder', 'SellOrder', 'SellOrder2', 'SellStopOrder']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                keys,
                p,
                key,
                product,
                parts,
                id,
                base,
                quote,
                symbol,
                _this77 = this;

            return Promise.resolve().then(function () {
                return _this77.publicGetTicker({
                    'market': 'all'
                });
            }).then(function (_resp) {
                products = _resp;
                result = [];
                keys = Object.keys(products);

                for (p = 0; p < keys.length; p++) {
                    key = keys[p];
                    product = products[key];
                    parts = key.split('_');
                    id = parts[1];
                    base = id.slice(0, 3);
                    quote = id.slice(3, 6);

                    base = base.toUpperCase();
                    quote = quote.toUpperCase();
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                c,
                currency,
                lowercase,
                account,
                _this78 = this;

            return Promise.resolve().then(function () {
                return _this78.privatePostGetAccountInfo();
            }).then(function (_resp) {
                response = _resp;
                balances = response['result'];
                result = { 'info': balances };


                for (c = 0; c < _this78.currencies.length; c++) {
                    currency = _this78.currencies[c];
                    lowercase = currency.toLowerCase();
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (lowercase in balances['balance']) {
                        account['total'] = parseFloat(balances['balance'][lowercase]['amount']);
                    }if (lowercase in balances['frozen']) {
                        account['used'] = parseFloat(balances['frozen'][lowercase]['amount']);
                    }account['free'] = account['total'] - account['used'];
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this79 = this;

            return Promise.resolve().then(function () {
                return _this79.publicGetOrderbook({
                    'market': _this79.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = orderbook['date'] * 1000;
                ;
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this79.iso8601(timestamp)
                };

                result['asks'] = _this79.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                _this80 = this;

            return Promise.resolve().then(function () {
                p = _this80.product(product);
                return _this80.publicGetTicker({
                    'market': p['id']
                });
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers['ticker'];
                timestamp = ticker['date'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this80.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': parseFloat(ticker['open']),
                    'close': parseFloat(ticker['prev_close']),
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'market': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            var method = 'privatePost' + this.capitalize(side) + 'Order2';
            var order = {};
            var id = p['id'].toUpperCase();
            if (type == 'market') {
                order['params'] = [undefined, amount, id];
            } else {
                order['params'] = [price, amount, id];
            }
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var market = params['market']; // TODO fixme
            return this.privatePostCancelOrder(this.extend({
                'params': [id, market]
            }, params));
        },
        nonce: function nonce() {
            return this.microseconds();
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type] + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                if (!this.apiKey) throw new AuthenticationError(this.id + ' requires `' + this.id + '.apiKey` property for authentication');
                if (!this.secret) throw new AuthenticationError(this.id + ' requires `' + this.id + '.secret` property for authentication');
                var p = [];
                if ('params' in params) p = params['params'];
                var nonce = this.nonce();
                var request = {
                    'method': path,
                    'id': nonce,
                    'params': p
                };
                p = p.join(',');
                body = this.json(request);
                var query = 'tonce=' + nonce + '&accesskey=' + this.apiKey + '&requestmethod=' + method.toLowerCase() + '&id=' + nonce + '&method=' + path + '&params=' + p;
                var signature = this.hmac(this.encode(query), this.encode(this.secret), 'sha1');
                var auth = this.apiKey + ':' + signature;
                headers = {
                    'Content-Length': body.length,
                    'Authorization': 'Basic ' + this.stringToBase64(auth),
                    'Json-Rpc-Tonce': nonce
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------

    var btce = {

        'id': 'btce',
        'name': 'BTC-e',
        'countries': ['BG', 'RU'], // Bulgaria, Russia
        'version': '3',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27843225-1b571514-611a-11e7-9208-2641a560b561.jpg',
            'api': {
                'public': 'https://btc-e.com/api',
                'private': 'https://btc-e.com/tapi'
            },
            'www': 'https://btc-e.com',
            'doc': ['https://btc-e.com/api/3/docs', 'https://btc-e.com/tapi/docs']
        },
        'api': {
            'public': {
                'get': ['info', 'ticker/{pair}', 'depth/{pair}', 'trades/{pair}']
            },
            'private': {
                'post': ['getInfo', 'Trade', 'ActiveOrders', 'OrderInfo', 'CancelOrder', 'TradeHistory', 'TransHistory', 'CoinDepositAddress', 'WithdrawCoin', 'CreateCoupon', 'RedeemCoupon']
            }
        },

        fetchProducts: function fetchProducts() {
            var response,
                products,
                keys,
                result,
                p,
                id,
                product,
                _id$split,
                _id$split2,
                base,
                quote,
                symbol,
                _this81 = this;

            return Promise.resolve().then(function () {
                return _this81.publicGetInfo();
            }).then(function (_resp) {
                response = _resp;
                products = response['pairs'];
                keys = Object.keys(products);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = products[id];
                    _id$split = id.split('_');
                    _id$split2 = _slicedToArray(_id$split, 2);
                    base = _id$split2[0];
                    quote = _id$split2[1];

                    base = base.toUpperCase();
                    quote = quote.toUpperCase();
                    if (base == 'DSH') {
                        base = 'DASH';
                    }symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                funds,
                currencies,
                c,
                currency,
                uppercase,
                account,
                _this82 = this;

            return Promise.resolve().then(function () {
                return _this82.privatePostGetInfo();
            }).then(function (_resp) {
                response = _resp;
                balances = response['return'];
                result = { 'info': balances };
                funds = balances['funds'];
                currencies = Object.keys(funds);

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    uppercase = currency.toUpperCase();
                    // they misspell DASH as dsh :/

                    if (uppercase == 'DSH') {
                        uppercase = 'DASH';
                    }account = {
                        'free': funds[currency],
                        'used': undefined,
                        'total': funds[currency]
                    };

                    result[uppercase] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                response,
                orderbook,
                timestamp,
                result,
                _this83 = this;

            return Promise.resolve().then(function () {
                p = _this83.product(product);
                return _this83.publicGetDepthPair({
                    'pair': p['id']
                });
            }).then(function (_resp) {
                response = _resp;

                if (p['id'] in response) {
                    orderbook = response[p['id']];
                    timestamp = _this83.milliseconds();
                    result = {
                        'bids': orderbook['bids'],
                        'asks': orderbook['asks'],
                        'timestamp': timestamp,
                        'datetime': _this83.iso8601(timestamp)
                    };

                    result['bids'] = _this83.sortBy(result['bids'], 0, true);
                    result['asks'] = _this83.sortBy(result['asks'], 0);
                    return result;
                } else {
                    throw new OrderBookNotAvailableError(_this83.id + ' ' + p['symbol'] + ' order book not available');
                }
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                _this84 = this;

            return Promise.resolve().then(function () {
                p = _this84.product(product);
                return _this84.publicGetTickerPair({
                    'pair': p['id']
                });
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers[p['id']];
                timestamp = ticker['updated'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this84.iso8601(timestamp),
                    'high': ticker['high'] ? ticker['high'] : undefined,
                    'low': ticker['low'] ? ticker['low'] : undefined,
                    'bid': ticker['sell'] ? ticker['sell'] : undefined,
                    'ask': ticker['buy'] ? ticker['buy'] : undefined,
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': ticker['last'] ? ticker['last'] : undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': ticker['avg'] ? ticker['avg'] : undefined,
                    'baseVolume': ticker['vol_cur'] ? ticker['vol_cur'] : undefined,
                    'quoteVolume': ticker['vol'] ? ticker['vol'] : undefined,
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradesPair({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'pair': this.productId(product),
                'type': side,
                'amount': amount,
                'rate': price
            };
            return this.privatePostTrade(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'order_id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({
                    'nonce': nonce,
                    'method': path
                }, query));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var btctrader = {

        'id': 'btctrader',
        'name': 'BTCTrader',
        'countries': ['TR', 'GR', 'PH'], // Turkey, Greece, Philippines
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27992404-cda1e386-649c-11e7-8dc1-40bbd2897768.jpg',
            'api': 'https://www.btctrader.com/api',
            'www': 'https://www.btctrader.com',
            'doc': 'https://github.com/BTCTrader/broker-api-docs'
        },
        'api': {
            'public': {
                'get': ['ohlcdata', // ?last=COUNT
                'orderbook', 'ticker', 'trades']
            },
            'private': {
                'get': ['balance', 'openOrders', 'userTransactions'],
                'post': ['buy', 'cancelOrder', 'sell']
            }
        },
        'products': {},

        fetchBalance: function fetchBalance() {
            var response,
                result,
                base,
                quote,
                symbol,
                product,
                _this85 = this;

            return Promise.resolve().then(function () {
                return _this85.privateGetBalance();
            }).then(function (_resp) {
                response = _resp;
                result = { 'info': response };
                base = {
                    'free': response['bitcoin_available'],
                    'used': response['bitcoin_reserved'],
                    'total': response['bitcoin_balance']
                };
                quote = {
                    'free': response['money_available'],
                    'used': response['money_reserved'],
                    'total': response['money_balance']
                };
                symbol = _this85.symbols[0];
                product = _this85.products[symbol];

                result[product['base']] = base;
                result[product['quote']] = quote;
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this86 = this;

            return Promise.resolve().then(function () {
                return _this86.publicGetOrderbook();
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = parseInt(orderbook['timestamp'] * 1000);
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this86.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this87 = this;

            return Promise.resolve().then(function () {
                return _this87.publicGetTicker();
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = parseInt(ticker['timestamp'] * 1000);

                return {
                    'timestamp': timestamp,
                    'datetime': _this87.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['average']),
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            var maxCount = 50;
            return this.publicGetTrades();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side);
            var order = {
                'Type': side == 'buy' ? 'BuyBtc' : 'SelBtc',
                'IsMarketOrder': type == 'market' ? 1 : 0
            };
            if (type == 'market') {
                if (side == 'buy') order['Total'] = amount;else order['Amount'] = amount;
            } else {
                order['Price'] = price;
                order['Amount'] = amount;
            }
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            if (this.id == 'btctrader') throw new Error(this.id + ' is an abstract base API for BTCExchange, BTCTurk');
            var url = this.urls['api'] + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce().toString;
                body = this.urlencode(params);
                var secret = this.base64ToString(this.secret);
                var auth = this.apiKey + nonce;
                headers = {
                    'X-PCK': this.apiKey,
                    'X-Stamp': nonce.toString(),
                    'X-Signature': this.hmac(this.encode(auth), secret, 'sha256', 'base64'),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var btcexchange = extend(btctrader, {

        'id': 'btcexchange',
        'name': 'BTCExchange',
        'countries': 'PH', // Philippines
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27993052-4c92911a-64aa-11e7-96d8-ec6ac3435757.jpg',
            'api': 'https://www.btcexchange.ph/api',
            'www': 'https://www.btcexchange.ph',
            'doc': 'https://github.com/BTCTrader/broker-api-docs'
        },
        'products': {
            'BTC/PHP': { 'id': 'BTC/PHP', 'symbol': 'BTC/PHP', 'base': 'BTC', 'quote': 'PHP' }
        }
    });

    //-----------------------------------------------------------------------------

    var btctradeua = {

        'id': 'btctradeua',
        'name': 'BTC Trade UA',
        'countries': 'UA', // Ukraine,
        'rateLimit': 3000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27941483-79fc7350-62d9-11e7-9f61-ac47f28fcd96.jpg',
            'api': 'https://btc-trade.com.ua/api',
            'www': 'https://btc-trade.com.ua',
            'doc': 'https://docs.google.com/document/d/1ocYA0yMy_RXd561sfG3qEPZ80kyll36HUxvCRe5GbhE/edit'
        },
        'api': {
            'public': {
                'get': ['deals/{symbol}', 'trades/sell/{symbol}', 'trades/buy/{symbol}', 'japan_stat/high/{symbol}']
            },
            'private': {
                'post': ['auth', 'ask/{symbol}', 'balance', 'bid/{symbol}', 'buy/{symbol}', 'my_orders/{symbol}', 'order/status/{id}', 'remove/order/{id}', 'sell/{symbol}']
            }
        },
        'products': {
            'BTC/UAH': { 'id': 'btc_uah', 'symbol': 'BTC/UAH', 'base': 'BTC', 'quote': 'UAH' },
            'ETH/UAH': { 'id': 'eth_uah', 'symbol': 'ETH/UAH', 'base': 'ETH', 'quote': 'UAH' },
            'LTC/UAH': { 'id': 'ltc_uah', 'symbol': 'LTC/UAH', 'base': 'LTC', 'quote': 'UAH' },
            'DOGE/UAH': { 'id': 'doge_uah', 'symbol': 'DOGE/UAH', 'base': 'DOGE', 'quote': 'UAH' },
            'DASH/UAH': { 'id': 'dash_uah', 'symbol': 'DASH/UAH', 'base': 'DASH', 'quote': 'UAH' },
            'SIB/UAH': { 'id': 'sib_uah', 'symbol': 'SIB/UAH', 'base': 'SIB', 'quote': 'UAH' },
            'KRB/UAH': { 'id': 'krb_uah', 'symbol': 'KRB/UAH', 'base': 'KRB', 'quote': 'UAH' },
            'NVC/UAH': { 'id': 'nvc_uah', 'symbol': 'NVC/UAH', 'base': 'NVC', 'quote': 'UAH' },
            'LTC/BTC': { 'id': 'ltc_btc', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'NVC/BTC': { 'id': 'nvc_btc', 'symbol': 'NVC/BTC', 'base': 'NVC', 'quote': 'BTC' },
            'ITI/UAH': { 'id': 'iti_uah', 'symbol': 'ITI/UAH', 'base': 'ITI', 'quote': 'UAH' },
            'DOGE/BTC': { 'id': 'doge_btc', 'symbol': 'DOGE/BTC', 'base': 'DOGE', 'quote': 'BTC' },
            'DASH/BTC': { 'id': 'dash_btc', 'symbol': 'DASH/BTC', 'base': 'DASH', 'quote': 'BTC' }
        },

        signIn: function signIn() {
            return this.privatePostAuth();
        },
        fetchBalance: function fetchBalance() {
            var response,
                accounts,
                result,
                b,
                account,
                currency,
                balance,
                _this88 = this;

            return Promise.resolve().then(function () {
                return _this88.privatePostBalance();
            }).then(function (_resp) {
                response = _resp;
                accounts = response['accounts'];
                result = { 'info': response };

                for (b = 0; b < accounts.length; b++) {
                    account = accounts[b];
                    currency = account['currency'];
                    balance = parseFloat(account['balance']);

                    result[currency] = {
                        'free': balance,
                        'used': undefined,
                        'total': balance
                    };
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                bids,
                asks,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this89 = this;

            return Promise.resolve().then(function () {
                p = _this89.product(product);
                return _this89.publicGetTradesBuySymbol({
                    'symbol': p['id']
                });
            }).then(function (_resp) {
                bids = _resp;
                return _this89.publicGetTradesSellSymbol({
                    'symbol': p['id']
                });
            }).then(function (_resp) {
                asks = _resp;
                orderbook = {
                    'bids': [],
                    'asks': []
                };

                if (bids) {
                    if ('list' in bids) {
                        orderbook['bids'] = bids['list'];
                    }
                }
                if (asks) {
                    if ('list' in asks) {
                        orderbook['asks'] = asks['list'];
                    }
                }
                timestamp = _this89.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this89.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['currency_trade']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                result,
                tickerLength,
                start,
                t,
                candle,
                last,
                _this90 = this;

            return Promise.resolve().then(function () {
                return _this90.publicGetJapanStatHighSymbol({
                    'symbol': _this90.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['trades'];
                timestamp = _this90.milliseconds();
                result = {
                    'timestamp': timestamp,
                    'datetime': _this90.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': undefined,
                    'ask': undefined,
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': undefined,
                    'info': ticker
                };
                tickerLength = ticker.length;

                if (tickerLength > 0) {
                    start = Math.max(tickerLength - 48, 0);

                    for (t = start; t < ticker.length; t++) {
                        candle = ticker[t];

                        if (typeof result['open'] == 'undefined') {
                            result['open'] = candle[1];
                        }if (typeof result['high'] == 'undefined' || result['high'] < candle[2]) {
                            result['high'] = candle[2];
                        }if (typeof result['low'] == 'undefined' || result['low'] > candle[3]) {
                            result['low'] = candle[3];
                        }if (typeof result['quoteVolume'] == 'undefined') {
                            result['quoteVolume'] = -candle[5];
                        } else {
                            result['quoteVolume'] -= candle[5];
                        }
                    }
                    last = tickerLength - 1;

                    result['close'] = ticker[last][4];
                    result['quoteVolume'] = -1 * result['quoteVolume'];
                }
                return result;
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetDealsSymbol({
                'symbol': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var p = this.product(product);
            var method = 'privatePost' + this.capitalize(side) + 'Id';
            var order = {
                'count': amount,
                'currency1': p['quote'],
                'currency': p['base'],
                'price': price
            };
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostRemoveOrderId({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += this.implodeParams(path, query);
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({
                    'out_order_id': nonce,
                    'nonce': nonce
                }, query));
                var auth = body + this.secret;
                headers = {
                    'public-key': this.apiKey,
                    'api-sign': this.hash(this.encode(auth), 'sha256'),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var btcturk = extend(btctrader, {

        'id': 'btcturk',
        'name': 'BTCTurk',
        'countries': 'TR', // Turkey
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27992709-18e15646-64a3-11e7-9fa2-b0950ec7712f.jpg',
            'api': 'https://www.btcturk.com/api',
            'www': 'https://www.btcturk.com',
            'doc': 'https://github.com/BTCTrader/broker-api-docs'
        },
        'products': {
            'BTC/TRY': { 'id': 'BTC/TRY', 'symbol': 'BTC/TRY', 'base': 'BTC', 'quote': 'TRY' }
        }
    });

    //-----------------------------------------------------------------------------

    var btcx = {

        'id': 'btcx',
        'name': 'BTCX',
        'countries': ['IS', 'US', 'EU'],
        'rateLimit': 1500, // support in english is very poor, unable to tell rate limits
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766385-9fdcc98c-5ed6-11e7-8f14-66d5e5cd47e6.jpg',
            'api': 'https://btc-x.is/api',
            'www': 'https://btc-x.is',
            'doc': 'https://btc-x.is/custom/api-document.html'
        },
        'api': {
            'public': {
                'get': ['depth/{id}/{limit}', 'ticker/{id}', 'trade/{id}/{limit}']
            },
            'private': {
                'post': ['balance', 'cancel', 'history', 'order', 'redeem', 'trade', 'withdraw']
            }
        },
        'products': {
            'BTC/USD': { 'id': 'btc/usd', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/EUR': { 'id': 'btc/eur', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' }
        },

        fetchBalance: function fetchBalance() {
            var balances,
                result,
                currencies,
                c,
                currency,
                uppercase,
                account,
                _this91 = this;

            return Promise.resolve().then(function () {
                return _this91.privatePostBalance();
            }).then(function (_resp) {
                balances = _resp;
                result = { 'info': balances };
                currencies = Object.keys(balances);

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    uppercase = currency.toUpperCase();
                    account = {
                        'free': balances[currency],
                        'used': undefined,
                        'total': balances[currency]
                    };

                    result[uppercase] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this92 = this;

            return Promise.resolve().then(function () {
                return _this92.publicGetDepthIdLimit({
                    'id': _this92.productId(product),
                    'limit': 1000
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this92.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this92.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['price'];
                        amount = order['amount'];

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this93 = this;

            return Promise.resolve().then(function () {
                return _this93.publicGetTickerId({
                    'id': _this93.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = ticker['time'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this93.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradeIdLimit({
                'id': this.productId(product),
                'limit': 100
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            return this.privatePostTrade(this.extend({
                'type': side.toUpperCase(),
                'market': this.productId(product),
                'amount': amount,
                'price': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancel({ 'order': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/';
            if (type == 'public') {
                url += this.implodeParams(path, params);
            } else {
                var nonce = this.nonce();
                url += type;
                body = this.urlencode(this.extend({
                    'Method': path.toUpperCase(),
                    'Nonce': nonce
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Key': this.apiKey,
                    'Signature': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bter = {
        'id': 'bter',
        'name': 'Bter',
        'countries': ['VG', 'CN'], // British Virgin Islands, China
        'version': '2',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27980479-cfa3188c-6387-11e7-8191-93fc4184ba5c.jpg',
            'api': {
                'public': 'https://data.bter.com/api',
                'private': 'https://api.bter.com/api'
            },
            'www': 'https://bter.com',
            'doc': 'https://bter.com/api2'
        },
        'api': {
            'public': {
                'get': ['pairs', 'marketinfo', 'marketlist', 'tickers', 'ticker/{id}', 'orderBook/{id}', 'trade/{id}', 'tradeHistory/{id}', 'tradeHistory/{id}/{tid}']
            },
            'private': {
                'post': ['balances', 'depositAddress', 'newAddress', 'depositsWithdrawals', 'buy', 'sell', 'cancelOrder', 'cancelAllOrders', 'getOrder', 'openOrders', 'tradeHistory', 'withdraw']
            }
        },

        fetchProducts: function fetchProducts() {
            var response,
                products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this94 = this;

            return Promise.resolve().then(function () {
                return _this94.publicGetMarketlist();
            }).then(function (_resp) {
                response = _resp;
                products = response['data'];
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['pair'];
                    base = product['curr_a'];
                    quote = product['curr_b'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var balance,
                result,
                c,
                currency,
                account,
                _this95 = this;

            return Promise.resolve().then(function () {
                return _this95.privatePostBalances();
            }).then(function (_resp) {
                balance = _resp;
                result = { 'info': balance };

                for (c = 0; c < _this95.currencies.length; c++) {
                    currency = _this95.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if ('available' in balance) {
                        if (currency in balance['available']) {
                            account['free'] = parseFloat(balance['available'][currency]);
                        }
                    }
                    if ('locked' in balance) {
                        if (currency in balance['locked']) {
                            account['used'] = parseFloat(balance['locked'][currency]);
                        }
                    }
                    account['total'] = _this95.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this96 = this;

            return Promise.resolve().then(function () {
                return _this96.publicGetOrderBookId({
                    'id': _this96.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this96.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this96.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                result['asks'] = _this96.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this97 = this;

            return Promise.resolve().then(function () {
                return _this97.publicGetTickerId({
                    'id': _this97.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this97.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this97.iso8601(timestamp),
                    'high': parseFloat(ticker['high24hr']),
                    'low': parseFloat(ticker['low24hr']),
                    'bid': parseFloat(ticker['highestBid']),
                    'ask': parseFloat(ticker['lowestAsk']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': parseFloat(ticker['percentChange']),
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['baseVolume']),
                    'quoteVolume': parseFloat(ticker['quoteVolume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradeHistoryId({
                'id': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side);
            var order = {
                'currencyPair': this.symbol(product),
                'rate': price,
                'amount': amount
            };
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'orderNumber': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var prefix = type == 'private' ? type + '/' : '';
            var url = this.urls['api'][type] + this.version + '/1/' + prefix + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                var request = { 'nonce': nonce };
                body = this.urlencode(this.extend(request, query));
                headers = {
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512'),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var bxinth = {

        'id': 'bxinth',
        'name': 'BX.in.th',
        'countries': 'TH', // Thailand
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766412-567b1eb4-5ed7-11e7-94a8-ff6a3884f6c5.jpg',
            'api': 'https://bx.in.th/api',
            'www': 'https://bx.in.th',
            'doc': 'https://bx.in.th/info/api'
        },
        'api': {
            'public': {
                'get': ['', // ticker
                'options', 'optionbook', 'orderbook', 'pairing', 'trade', 'tradehistory']
            },
            'private': {
                'post': ['balance', 'biller', 'billgroup', 'billpay', 'cancel', 'deposit', 'getorders', 'history', 'option-issue', 'option-bid', 'option-sell', 'option-myissue', 'option-mybid', 'option-myoptions', 'option-exercise', 'option-cancel', 'option-history', 'order', 'withdrawal', 'withdrawal-history']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this98 = this;

            return Promise.resolve().then(function () {
                return _this98.publicGetPairing();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    product = products[keys[p]];
                    id = product['pairing_id'];
                    base = product['primary_currency'];
                    quote = product['secondary_currency'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        commonCurrencyCode: function commonCurrencyCode(currency) {
            // why would they use three letters instead of four for currency codes
            if (currency == 'DAS') return 'DASH';
            if (currency == 'DOG') return 'DOGE';
            return currency;
        },
        fetchBalance: function fetchBalance() {
            var response,
                balance,
                result,
                currencies,
                c,
                currency,
                code,
                account,
                _this99 = this;

            return Promise.resolve().then(function () {
                return _this99.privatePostBalance();
            }).then(function (_resp) {
                response = _resp;
                balance = response['balance'];
                result = { 'info': balance };
                currencies = Object.keys(balance);

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    code = _this99.commonCurrencyCode(currency);
                    account = {
                        'free': parseFloat(balance[currency]['available']),
                        'used': undefined,
                        'total': parseFloat(balance[currency]['total'])
                    };

                    account['used'] = account['total'] - account['free'];
                    result[code] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this100 = this;

            return Promise.resolve().then(function () {
                return _this100.publicGetOrderbook({
                    'pairing': _this100.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this100.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this100.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var id,
                tickers,
                key,
                ticker,
                timestamp,
                _this101 = this;

            return Promise.resolve().then(function () {
                id = _this101.productId(product);
                return _this101.publicGet({ 'pairing': id });
            }).then(function (_resp) {
                tickers = _resp;
                key = id.toString();
                ticker = tickers[key];
                timestamp = _this101.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this101.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['orderbook']['bids']['highbid']),
                    'ask': parseFloat(ticker['orderbook']['asks']['highbid']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last_price']),
                    'change': parseFloat(ticker['change']),
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume_24hours']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrade({
                'pairing': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            return this.privatePostOrder(this.extend({
                'pairing': this.productId(product),
                'type': side,
                'amount': amount,
                'rate': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var pairing = undefined; // TODO fixme
            return this.privatePostCancel({
                'order_id': id,
                'pairing': pairing
            });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + path + '/';
            if (Object.keys(params).length) url += '?' + this.urlencode(params);
            if (type == 'private') {
                var nonce = this.nonce();
                var auth = this.apiKey + nonce.toString() + this.secret;
                var signature = this.hash(this.encode(auth), 'sha256');
                body = this.urlencode(this.extend({
                    'key': this.apiKey,
                    'nonce': nonce,
                    'signature': signature
                    // twofa: this.twofa,
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var ccex = {

        'id': 'ccex',
        'name': 'C-CEX',
        'countries': ['DE', 'EU'],
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766433-16881f90-5ed8-11e7-92f8-3d92cc747a6c.jpg',
            'api': {
                'tickers': 'https://c-cex.com/t',
                'public': 'https://c-cex.com/t/api_pub.html',
                'private': 'https://c-cex.com/t/api.html'
            },
            'www': 'https://c-cex.com',
            'doc': 'https://c-cex.com/?id=api'
        },
        'api': {
            'tickers': {
                'get': ['coinnames', '{market}', 'pairs', 'prices', 'volume_{coin}']
            },
            'public': {
                'get': ['balancedistribution', 'markethistory', 'markets', 'marketsummaries', 'orderbook']
            },
            'private': {
                'get': ['buylimit', 'cancel', 'getbalance', 'getbalances', 'getopenorders', 'getorder', 'getorderhistory', 'mytrades', 'selllimit']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this102 = this;

            return Promise.resolve().then(function () {
                return _this102.publicGetMarkets();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['result'].length; p++) {
                    product = products['result'][p];
                    id = product['MarketName'];
                    base = product['MarketCurrency'];
                    quote = product['BaseCurrency'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                b,
                balance,
                currency,
                account,
                _this103 = this;

            return Promise.resolve().then(function () {
                return _this103.privateGetBalances();
            }).then(function (_resp) {
                response = _resp;
                balances = response['result'];
                result = { 'info': balances };

                for (b = 0; b < balances.length; b++) {
                    balance = balances[b];
                    currency = balance['Currency'];
                    account = {
                        'free': balance['Available'],
                        'used': balance['Pending'],
                        'total': balance['Balance']
                    };

                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this104 = this;

            return Promise.resolve().then(function () {
                return _this104.publicGetOrderbook({
                    'market': _this104.productId(product),
                    'type': 'both',
                    'depth': 100
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['result'];
                timestamp = _this104.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this104.iso8601(timestamp)
                };
                sides = { 'bids': 'buy', 'asks': 'sell' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['Rate']);
                        amount = parseFloat(order['Quantity']);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this105 = this;

            return Promise.resolve().then(function () {
                return _this105.tickersGetMarket({
                    'market': _this105.productId(product).toLowerCase()
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = ticker['updated'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this105.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['lastprice']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['avg']),
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['buysupport']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetMarkethistory({
                'market': this.productId(product),
                'type': 'both',
                'depth': 100
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privateGet' + this.capitalize(side) + type;
            return this[method](this.extend({
                'market': this.productId(product),
                'quantity': amount,
                'rate': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privateGetCancel({ 'uuid': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            if (type == 'private') {
                var nonce = this.nonce().toString();
                var query = this.keysort(this.extend({
                    'a': path,
                    'apikey': this.apiKey,
                    'nonce': nonce
                }, params));
                url += '?' + this.urlencode(query);
                headers = { 'apisign': this.hmac(this.encode(url), this.encode(this.secret), 'sha512') };
            } else if (type == 'public') {
                url += '?' + this.urlencode(this.extend({
                    'a': 'get' + path
                }, params));
            } else {
                url += '/' + this.implodeParams(path, params) + '.json';
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var cex = {

        'id': 'cex',
        'name': 'CEX.IO',
        'countries': ['GB', 'EU', 'CY', 'RU'],
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766442-8ddc33b0-5ed8-11e7-8b98-f786aef0f3c9.jpg',
            'api': 'https://cex.io/api',
            'www': 'https://cex.io',
            'doc': 'https://cex.io/cex-api'
        },
        'api': {
            'public': {
                'get': ['currency_limits', 'last_price/{pair}', 'last_prices/{currencies}', 'ohlcv/hd/{yyyymmdd}/{pair}', 'order_book/{pair}', 'ticker/{pair}', 'tickers/{currencies}', 'trade_history/{pair}'],
                'post': ['convert/{pair}', 'price_stats/{pair}']
            },
            'private': {
                'post': ['active_orders_status/', 'archived_orders/{pair}', 'balance/', 'cancel_order/', 'cancel_orders/{pair}', 'cancel_replace_order/{pair}', 'close_position/{pair}', 'get_address/', 'get_myfee/', 'get_order/', 'get_order_tx/', 'open_orders/{pair}', 'open_orders/', 'open_position/{pair}', 'open_positions/{pair}', 'place_order/{pair}', 'place_order/{pair}']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                symbol,
                _symbol$split5,
                _symbol$split6,
                base,
                quote,
                _this106 = this;

            return Promise.resolve().then(function () {
                return _this106.publicGetCurrencyLimits();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['data']['pairs'].length; p++) {
                    product = products['data']['pairs'][p];
                    id = product['symbol1'] + '/' + product['symbol2'];
                    symbol = id;
                    _symbol$split5 = symbol.split('/');
                    _symbol$split6 = _slicedToArray(_symbol$split5, 2);
                    base = _symbol$split6[0];
                    quote = _symbol$split6[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var balances,
                result,
                c,
                currency,
                account,
                _this107 = this;

            return Promise.resolve().then(function () {
                return _this107.privatePostBalance();
            }).then(function (_resp) {
                balances = _resp;
                result = { 'info': balances };

                for (c = 0; c < _this107.currencies.length; c++) {
                    currency = _this107.currencies[c];
                    account = {
                        'free': parseFloat(balances[currency]['available']),
                        'used': parseFloat(balances[currency]['orders']),
                        'total': undefined
                    };

                    account['total'] = _this107.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this108 = this;

            return Promise.resolve().then(function () {
                return _this108.publicGetOrderBookPair({
                    'pair': _this108.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = orderbook['timestamp'] * 1000;
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this108.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this109 = this;

            return Promise.resolve().then(function () {
                return _this109.publicGetTickerPair({
                    'pair': _this109.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = parseInt(ticker['timestamp']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this109.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradeHistoryPair({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'pair': this.productId(product),
                'type': side,
                'amount': amount
            };
            if (type == 'limit') order['price'] = price;else order['order_type'] = type;
            return this.privatePostPlaceOrderPair(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                if (!this.uid) throw new AuthenticationError(this.id + ' requires `' + this.id + '.uid` property for authentication');
                var nonce = this.nonce().toString();
                var auth = nonce + this.uid + this.apiKey;
                var signature = this.hmac(this.encode(auth), this.encode(this.secret));
                body = this.urlencode(this.extend({
                    'key': this.apiKey,
                    'signature': signature.toUpperCase(),
                    'nonce': nonce
                }, query));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var chbtc = {
        'id': 'chbtc',
        'name': 'CHBTC',
        'countries': 'CN',
        'rateLimit': 1000,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28555659-f0040dc2-7109-11e7-9d99-688a438bf9f4.jpg',
            'api': {
                'public': 'http://api.chbtc.com/data', // no https for public API
                'private': 'https://trade.chbtc.com/api'
            },
            'www': 'https://trade.chbtc.com/api',
            'doc': 'https://www.chbtc.com/i/developer'
        },
        'api': {
            'public': {
                'get': ['ticker', 'depth', 'trades', 'kline']
            },
            'private': {
                'post': ['order', 'cancelOrder', 'getOrder', 'getOrders', 'getOrdersNew', 'getOrdersIgnoreTradeType', 'getUnfinishedOrdersIgnoreTradeType', 'getAccountInfo', 'getUserAddress', 'getWithdrawAddress', 'getWithdrawRecord', 'getChargeRecord', 'getCnyWithdrawRecord', 'getCnyChargeRecord', 'withdraw']
            }
        },
        'products': {
            'BTC/CNY': { 'id': 'btc_cny', 'symbol': 'BTC/CNY', 'base': 'BTC', 'quote': 'CNY' },
            'LTC/CNY': { 'id': 'ltc_cny', 'symbol': 'LTC/CNY', 'base': 'LTC', 'quote': 'CNY' },
            'ETH/CNY': { 'id': 'eth_cny', 'symbol': 'ETH/CNY', 'base': 'ETH', 'quote': 'CNY' },
            'ETC/CNY': { 'id': 'etc_cny', 'symbol': 'ETC/CNY', 'base': 'ETC', 'quote': 'CNY' },
            'BTS/CNY': { 'id': 'bts_cny', 'symbol': 'BTS/CNY', 'base': 'BTS', 'quote': 'CNY' },
            'EOS/CNY': { 'id': 'eos_cny', 'symbol': 'EOS/CNY', 'base': 'EOS', 'quote': 'CNY' }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                id,
                product,
                symbol,
                _symbol$split7,
                _symbol$split8,
                base,
                quote,
                _this110 = this;

            return Promise.resolve().then(function () {
                return _this110.publicGetPairSettings();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = products[id];
                    symbol = id.replace('_', '/');
                    _symbol$split7 = symbol.split('/');
                    _symbol$split8 = _slicedToArray(_symbol$split7, 2);
                    base = _symbol$split8[0];
                    quote = _symbol$split8[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                c,
                currency,
                account,
                _this111 = this;

            return Promise.resolve().then(function () {
                return _this111.privatePostGetAccountInfo();
            }).then(function (_resp) {
                response = _resp;
                balances = response['result'];
                result = { 'info': balances };

                for (c = 0; c < _this111.currencies.length; c++) {
                    currency = _this111.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balances['balance']) {
                        account['free'] = balances['balance'][currency]['amount'];
                    }if (currency in balances['frozen']) {
                        account['used'] = balances['frozen'][currency]['amount'];
                    }account['total'] = _this111.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                _this112 = this;

            return Promise.resolve().then(function () {
                p = _this112.product(product);
                return _this112.publicGetDepth({
                    'currency': p['id']
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this112.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this112.iso8601(timestamp)
                };

                result['bids'] = _this112.sortBy(result['bids'], 0, true);
                result['asks'] = _this112.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this113 = this;

            return Promise.resolve().then(function () {
                return _this113.publicGetTicker({
                    'currency': _this113.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = _this113.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this113.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'currency': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var paramString = 'price=' + price;
            paramString += '&amount=' + amount;
            paramString += '&tradeType=' + (side == 'buy') ? '1' : '0';
            paramString += '&currency=' + this.productId(product);
            return this.privatePostOrder(paramString);
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({ 'id': id }, params));
        },
        nonce: function nonce() {
            return this.milliseconds();
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            if (type == 'public') {
                url += '/' + this.version + '/' + path;
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var paramsLength = params.length; // params should be a string here!
                var nonce = this.nonce();
                var auth = 'method=' + path;
                auth += '&accesskey=' + this.apiKey;
                auth += paramsLength ? params : '';
                var secret = this.hash(this.encode(this.secret), 'sha1');
                var signature = this.hmac(this.encode(auth), this.encode(secret), 'md5');
                var suffix = 'sign=' + signature + '&reqTime=' + nonce.toString();
                url += '/' + path + '?' + auth + '&' + suffix;
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var chilebit = extend(blinktrade, {
        'id': 'chilebit',
        'name': 'ChileBit',
        'countries': 'CL',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27991414-1298f0d8-647f-11e7-9c40-d56409266336.jpg',
            'api': {
                'public': 'https://api.blinktrade.com/api',
                'private': 'https://api.blinktrade.com/tapi'
            },
            'www': 'https://chilebit.net',
            'doc': 'https://blinktrade.com/docs'
        },
        'comment': 'Blinktrade API',
        'products': {
            'BTC/CLP': { 'id': 'BTCCLP', 'symbol': 'BTC/CLP', 'base': 'BTC', 'quote': 'CLP', 'brokerId': 9, 'broker': 'ChileBit' }
        }
    });

    //-----------------------------------------------------------------------------

    var coincheck = {

        'id': 'coincheck',
        'name': 'coincheck',
        'countries': ['JP', 'ID'],
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766464-3b5c3c74-5ed9-11e7-840e-31b32968e1da.jpg',
            'api': 'https://coincheck.com/api',
            'www': 'https://coincheck.com',
            'doc': 'https://coincheck.com/documents/exchange/api'
        },
        'api': {
            'public': {
                'get': ['exchange/orders/rate', 'order_books', 'rate/{pair}', 'ticker', 'trades']
            },
            'private': {
                'get': ['accounts', 'accounts/balance', 'accounts/leverage_balance', 'bank_accounts', 'deposit_money', 'exchange/orders/opens', 'exchange/orders/transactions', 'exchange/orders/transactions_pagination', 'exchange/leverage/positions', 'lending/borrows/matches', 'send_money', 'withdraws'],
                'post': ['bank_accounts', 'deposit_money/{id}/fast', 'exchange/orders', 'exchange/transfers/to_leverage', 'exchange/transfers/from_leverage', 'lending/borrows', 'lending/borrows/{id}/repay', 'send_money', 'withdraws'],
                'delete': ['bank_accounts/{id}', 'exchange/orders/{id}', 'withdraws/{id}']
            }
        },
        'products': {
            'BTC/JPY': { 'id': 'btc_jpy', 'symbol': 'BTC/JPY', 'base': 'BTC', 'quote': 'JPY' }, // the only real pair
            'ETH/JPY': { 'id': 'eth_jpy', 'symbol': 'ETH/JPY', 'base': 'ETH', 'quote': 'JPY' },
            'ETC/JPY': { 'id': 'etc_jpy', 'symbol': 'ETC/JPY', 'base': 'ETC', 'quote': 'JPY' },
            'DAO/JPY': { 'id': 'dao_jpy', 'symbol': 'DAO/JPY', 'base': 'DAO', 'quote': 'JPY' },
            'LSK/JPY': { 'id': 'lsk_jpy', 'symbol': 'LSK/JPY', 'base': 'LSK', 'quote': 'JPY' },
            'FCT/JPY': { 'id': 'fct_jpy', 'symbol': 'FCT/JPY', 'base': 'FCT', 'quote': 'JPY' },
            'XMR/JPY': { 'id': 'xmr_jpy', 'symbol': 'XMR/JPY', 'base': 'XMR', 'quote': 'JPY' },
            'REP/JPY': { 'id': 'rep_jpy', 'symbol': 'REP/JPY', 'base': 'REP', 'quote': 'JPY' },
            'XRP/JPY': { 'id': 'xrp_jpy', 'symbol': 'XRP/JPY', 'base': 'XRP', 'quote': 'JPY' },
            'ZEC/JPY': { 'id': 'zec_jpy', 'symbol': 'ZEC/JPY', 'base': 'ZEC', 'quote': 'JPY' },
            'XEM/JPY': { 'id': 'xem_jpy', 'symbol': 'XEM/JPY', 'base': 'XEM', 'quote': 'JPY' },
            'LTC/JPY': { 'id': 'ltc_jpy', 'symbol': 'LTC/JPY', 'base': 'LTC', 'quote': 'JPY' },
            'DASH/JPY': { 'id': 'dash_jpy', 'symbol': 'DASH/JPY', 'base': 'DASH', 'quote': 'JPY' },
            'ETH/BTC': { 'id': 'eth_btc', 'symbol': 'ETH/BTC', 'base': 'ETH', 'quote': 'BTC' },
            'ETC/BTC': { 'id': 'etc_btc', 'symbol': 'ETC/BTC', 'base': 'ETC', 'quote': 'BTC' },
            'LSK/BTC': { 'id': 'lsk_btc', 'symbol': 'LSK/BTC', 'base': 'LSK', 'quote': 'BTC' },
            'FCT/BTC': { 'id': 'fct_btc', 'symbol': 'FCT/BTC', 'base': 'FCT', 'quote': 'BTC' },
            'XMR/BTC': { 'id': 'xmr_btc', 'symbol': 'XMR/BTC', 'base': 'XMR', 'quote': 'BTC' },
            'REP/BTC': { 'id': 'rep_btc', 'symbol': 'REP/BTC', 'base': 'REP', 'quote': 'BTC' },
            'XRP/BTC': { 'id': 'xrp_btc', 'symbol': 'XRP/BTC', 'base': 'XRP', 'quote': 'BTC' },
            'ZEC/BTC': { 'id': 'zec_btc', 'symbol': 'ZEC/BTC', 'base': 'ZEC', 'quote': 'BTC' },
            'XEM/BTC': { 'id': 'xem_btc', 'symbol': 'XEM/BTC', 'base': 'XEM', 'quote': 'BTC' },
            'LTC/BTC': { 'id': 'ltc_btc', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'DASH/BTC': { 'id': 'dash_btc', 'symbol': 'DASH/BTC', 'base': 'DASH', 'quote': 'BTC' }
        },

        fetchBalance: function fetchBalance() {
            var balances,
                result,
                c,
                currency,
                lowercase,
                account,
                reserved,
                _this114 = this;

            return Promise.resolve().then(function () {
                return _this114.privateGetAccountsBalance();
            }).then(function (_resp) {
                balances = _resp;
                result = { 'info': balances };

                for (c = 0; c < _this114.currencies.length; c++) {
                    currency = _this114.currencies[c];
                    lowercase = currency.toLowerCase();
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (lowercase in balances) {
                        account['free'] = parseFloat(balances[lowercase]);
                    }reserved = lowercase + '_reserved';

                    if (reserved in balances) {
                        account['used'] = parseFloat(balances[reserved]);
                    }account['total'] = _this114.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this115 = this;

            return Promise.resolve().then(function () {
                return _this115.publicGetOrderBooks();
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this115.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this115.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this116 = this;

            return Promise.resolve().then(function () {
                return _this116.publicGetTicker();
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = ticker['timestamp'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this116.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var prefix = '';
            var order = {
                'pair': this.productId(product)
            };
            if (type == 'market') {
                var order_type = type + '_' + side;
                order['order_type'] = order_type;
                var _prefix = side == buy ? order_type + '_' : '';
                order[_prefix + 'amount'] = amount;
            } else {
                order['order_type'] = side;
                order['rate'] = price;
                order['amount'] = amount;
            }
            return this.privatePostExchangeOrders(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privateDeleteExchangeOrdersId({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce().toString();
                var length = 0;
                if (Object.keys(query).length) {
                    body = this.urlencode(this.keysort(query));
                    length = body.length;
                }
                var auth = nonce + url + (body || '');
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': length,
                    'ACCESS-KEY': this.apiKey,
                    'ACCESS-NONCE': nonce,
                    'ACCESS-SIGNATURE': this.hmac(this.encode(auth), this.encode(this.secret))
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var coingi = {

        'id': 'coingi',
        'name': 'Coingi',
        'rateLimit': 1000,
        'countries': ['PA', 'BG', 'CN', 'US'], // Panama, Bulgaria, China, US
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28619707-5c9232a8-7212-11e7-86d6-98fe5d15cc6e.jpg',
            'api': 'https://api.coingi.com',
            'www': 'https://coingi.com',
            'doc': 'http://docs.coingi.apiary.io/'
        },
        'api': {
            'current': {
                'get': ['order-book/{pair}/{askCount}/{bidCount}/{depth}', 'transactions/{pair}/{maxCount}', '24hour-rolling-aggregation']
            },
            'user': {
                'post': ['balance', 'add-order', 'cancel-order', 'orders', 'transactions', 'create-crypto-withdrawal']
            }
        },
        'products': {
            'LTC/BTC': { 'id': 'ltc-btc', 'symbol': 'LTC/BTC', 'base': 'LTC', 'quote': 'BTC' },
            'PPC/BTC': { 'id': 'ppc-btc', 'symbol': 'PPC/BTC', 'base': 'PPC', 'quote': 'BTC' },
            'DOGE/BTC': { 'id': 'doge-btc', 'symbol': 'DOGE/BTC', 'base': 'DOGE', 'quote': 'BTC' },
            'VTC/BTC': { 'id': 'vtc-btc', 'symbol': 'VTC/BTC', 'base': 'VTC', 'quote': 'BTC' },
            'FTC/BTC': { 'id': 'ftc-btc', 'symbol': 'FTC/BTC', 'base': 'FTC', 'quote': 'BTC' },
            'NMC/BTC': { 'id': 'nmc-btc', 'symbol': 'NMC/BTC', 'base': 'NMC', 'quote': 'BTC' },
            'DASH/BTC': { 'id': 'dash-btc', 'symbol': 'DASH/BTC', 'base': 'DASH', 'quote': 'BTC' }
        },

        fetchBalance: function fetchBalance() {
            var currencies,
                c,
                currency,
                balances,
                result,
                b,
                balance,
                _currency4,
                account,
                _this117 = this;

            return Promise.resolve().then(function () {
                currencies = [];

                for (c = 0; c < _this117.currencies.length; c++) {
                    currency = _this117.currencies[c].toLowerCase();

                    currencies.push(currency);
                }
                return _this117.userPostBalance({
                    'currencies': currencies.join(',')
                });
            }).then(function (_resp) {
                balances = _resp;
                result = { 'info': balances };

                for (b = 0; b < balances.length; b++) {
                    balance = balances[b];
                    _currency4 = balance['currency']['name'];

                    _currency4 = _currency4.toUpperCase();
                    account = {
                        'free': balance['available'],
                        'used': balance['blocked'] + balance['inOrders'] + balance['withdrawing'],
                        'total': undefined
                    };

                    account['total'] = _this117.sum(account['free'], account['used']);
                    result[_currency4] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this118 = this;

            return Promise.resolve().then(function () {
                p = _this118.product(product);
                return _this118.currentGetOrderBookPairAskCountBidCountDepth({
                    'pair': p['id'],
                    'askCount': 512, // maximum returned number of asks 1-512
                    'bidCount': 512, // maximum returned number of bids 1-512
                    'depth': 32 // maximum number of depth range steps 1-32
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this118.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this118.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['price'];
                        amount = order['baseAmount'];

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                tickers,
                t,
                _ticker,
                base,
                quote,
                symbol,
                timestamp,
                p,
                ticker,
                aggregation,
                _this119 = this;

            return Promise.resolve().then(function () {
                return _this119.currentGet24hourRollingAggregation();
            }).then(function (_resp) {
                response = _resp;
                tickers = {};

                for (t = 0; t < response.length; t++) {
                    _ticker = response[t];
                    base = _ticker['currencyPair']['base'].toUpperCase();
                    quote = _ticker['currencyPair']['counter'].toUpperCase();
                    symbol = base + '/' + quote;

                    tickers[symbol] = _ticker;
                }
                timestamp = _this119.milliseconds();
                p = _this119.product(product);
                ticker = {
                    'timestamp': timestamp,
                    'datetime': _this119.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': undefined,
                    'ask': undefined,
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': undefined,
                    'info': undefined
                };

                if (p['symbol'] in tickers) {
                    aggregation = tickers[p['symbol']];

                    ticker['high'] = aggregation['high'];
                    ticker['low'] = aggregation['low'];
                    ticker['bid'] = aggregation['highestBid'];
                    ticker['ask'] = aggregation['lowestAsk'];
                    ticker['baseVolume'] = aggregation['baseVolume'];
                    ticker['quoteVolume'] = aggregation['counterVolume'];
                    ticker['high'] = aggregation['high'];
                    ticker['info'] = aggregation;
                }
                return ticker;
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTransactionsPairMaxCount({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'currencyPair': this.productId(product),
                'volume': amount,
                'price': price,
                'orderType': side == 'buy' ? 0 : 1
            };
            return this.userPostAddOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.userPostCancelOrder({ 'orderId': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + type + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'current') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                var request = this.extend({
                    'token': this.apiKey,
                    'nonce': nonce
                }, query);
                var auth = nonce.toString() + '$' + this.apiKey;
                request['signature'] = this.hmac(this.encode(auth), this.encode(this.secret));
                body = this.json(request);
                headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var coinmarketcap = {

        'id': 'coinmarketcap',
        'name': 'CoinMarketCap',
        'rateLimit': 10000,
        'version': 'v1',
        'countries': 'US',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28244244-9be6312a-69ed-11e7-99c1-7c1797275265.jpg',
            'api': 'https://api.coinmarketcap.com',
            'www': 'https://coinmarketcap.com',
            'doc': 'https://coinmarketcap.com/api'
        },
        'api': {
            'public': {
                'get': ['ticker/', 'ticker/{id}/', 'global/']
            }
        },
        'currencies': ['AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'RUB', 'USD'],

        fetchOrderBook: function fetchOrderBook() {
            var _this120 = this;

            throw new Error('Fetching order books is not supported by the API of ' + _this120.id);
        },
        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                c,
                base,
                baseId,
                quote,
                quoteId,
                symbol,
                id,
                _this121 = this;

            return Promise.resolve().then(function () {
                return _this121.publicGetTicker();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];

                    for (c = 0; c < _this121.currencies.length; c++) {
                        base = product['symbol'];
                        baseId = product['id'];
                        quote = _this121.currencies[c];
                        quoteId = quote.toLowerCase();
                        symbol = base + '/' + quote;
                        id = baseId + '/' + quote;

                        result.push({
                            'id': id,
                            'symbol': symbol,
                            'base': base,
                            'quote': quote,
                            'baseId': baseId,
                            'quoteId': quoteId,
                            'info': product
                        });
                    }
                }
                return result;
            });
        },
        fetchGlobal: function fetchGlobal() {
            var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';

            var request = {};
            if (currency) request['convert'] = currency;
            return this.publicGetGlobal(request);
        },
        parseTicker: function parseTicker(ticker, product) {
            var timestamp = parseInt(ticker['last_updated']) * 1000;
            var volume = undefined;
            var volumeKey = '24h_volume_' + product['quoteId'];
            if (ticker[volumeKey]) volume = parseFloat(ticker[volumeKey]);
            var price = 'price_' + product['quoteId'];
            var change = undefined;
            var changeKey = 'percent_change_24h';
            if (ticker[changeKey]) change = parseFloat(ticker[changeKey]);
            return {
                'timestamp': timestamp,
                'datetime': this.iso8601(timestamp),
                'high': undefined,
                'low': undefined,
                'bid': undefined,
                'ask': undefined,
                'vwap': undefined,
                'open': undefined,
                'close': undefined,
                'first': undefined,
                'last': parseFloat(ticker[price]),
                'change': change,
                'percentage': undefined,
                'average': undefined,
                'baseVolume': undefined,
                'quoteVolume': volume,
                'info': ticker
            };
        },
        fetchTickers: function fetchTickers() {
            var currency,
                request,
                response,
                tickers,
                t,
                ticker,
                id,
                product,
                symbol,
                _this122 = this,
                _arguments109 = arguments;

            return Promise.resolve().then(function () {
                currency = _arguments109.length > 0 && _arguments109[0] !== undefined ? _arguments109[0] : 'USD';
                request = {};

                if (currency) {
                    request['convert'] = currency;
                }return _this122.publicGetTicker(request);
            }).then(function (_resp) {
                response = _resp;
                tickers = {};

                for (t = 0; t < response.length; t++) {
                    ticker = response[t];
                    id = ticker['id'] + '/' + currency;
                    product = _this122.products_by_id[id];
                    symbol = product['symbol'];

                    tickers[symbol] = _this122.parseTicker(ticker, product);
                }
                return tickers;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                request,
                response,
                ticker,
                _this123 = this;

            return Promise.resolve().then(function () {
                p = _this123.product(product);
                request = {
                    'convert': p['quote'],
                    'id': p['baseId']
                };
                return _this123.publicGetTickerId(request);
            }).then(function (_resp) {
                response = _resp;
                ticker = response[0];

                return _this123.parseTicker(ticker, p);
            });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (Object.keys(query).length) url += '?' + this.urlencode(query);
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var coinmate = {

        'id': 'coinmate',
        'name': 'CoinMate',
        'countries': ['GB', 'CZ'], // UK, Czech Republic
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27811229-c1efb510-606c-11e7-9a36-84ba2ce412d8.jpg',
            'api': 'https://coinmate.io/api',
            'www': 'https://coinmate.io',
            'doc': ['http://docs.coinmate.apiary.io', 'https://coinmate.io/developers']
        },
        'api': {
            'public': {
                'get': ['orderBook', 'ticker', 'transactions']
            },
            'private': {
                'post': ['balances', 'bitcoinWithdrawal', 'bitcoinDepositAddresses', 'buyInstant', 'buyLimit', 'cancelOrder', 'cancelOrderWithInfo', 'createVoucher', 'openOrders', 'redeemVoucher', 'sellInstant', 'sellLimit', 'transactionHistory', 'unconfirmedBitcoinDeposits']
            }
        },
        'products': {
            'BTC/EUR': { 'id': 'BTC_EUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' },
            'BTC/CZK': { 'id': 'BTC_CZK', 'symbol': 'BTC/CZK', 'base': 'BTC', 'quote': 'CZK' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                c,
                currency,
                account,
                _this124 = this;

            return Promise.resolve().then(function () {
                return _this124.privatePostBalances();
            }).then(function (_resp) {
                response = _resp;
                balances = response['data'];
                result = { 'info': balances };

                for (c = 0; c < _this124.currencies.length; c++) {
                    currency = _this124.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in balances) {
                        account['free'] = balances[currency]['available'];
                        account['used'] = balances[currency]['reserved'];
                        account['total'] = balances[currency]['balance'];
                    }
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this125 = this;

            return Promise.resolve().then(function () {
                return _this125.publicGetOrderBook({
                    'currencyPair': _this125.productId(product),
                    'groupByPriceLimit': 'False'
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['data'];
                timestamp = orderbook['timestamp'] * 1000;
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this125.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['price'];
                        amount = order['amount'];

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this126 = this;

            return Promise.resolve().then(function () {
                return _this126.publicGetTicker({
                    'currencyPair': _this126.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['data'];
                timestamp = ticker['timestamp'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this126.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['amount']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTransactions({
                'currencyPair': this.productId(product),
                'minutesIntoHistory': 10
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side);
            var order = {
                'currencyPair': this.productId(product)
            };
            if (type == 'market') {
                if (side == 'buy') order['total'] = amount; // amount in fiat
                else order['amount'] = amount; // amount in fiat
                method += 'Instant';
            } else {
                order['amount'] = amount; // amount in crypto
                order['price'] = price;
                method += this.capitalize(type);
            }
            return this[method](self.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'orderId': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                if (!this.uid) throw new AuthenticationError(this.id + ' requires `' + this.id + '.uid` property for authentication');
                var nonce = this.nonce().toString();
                var auth = nonce + this.uid + this.apiKey;
                var signature = this.hmac(this.encode(auth), this.encode(this.secret));
                body = this.urlencode(this.extend({
                    'clientId': this.uid,
                    'nonce': nonce,
                    'publicKey': this.apiKey,
                    'signature': signature.toUpperCase()
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var coinsecure = {

        'id': 'coinsecure',
        'name': 'Coinsecure',
        'countries': 'IN', // India
        'rateLimit': 1000,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766472-9cbd200a-5ed9-11e7-9551-2267ad7bac08.jpg',
            'api': 'https://api.coinsecure.in',
            'www': 'https://coinsecure.in',
            'doc': ['https://api.coinsecure.in', 'https://github.com/coinsecure/plugins']
        },
        'api': {
            'public': {
                'get': ['bitcoin/search/confirmation/{txid}', 'exchange/ask/low', 'exchange/ask/orders', 'exchange/bid/high', 'exchange/bid/orders', 'exchange/lastTrade', 'exchange/max24Hr', 'exchange/min24Hr', 'exchange/ticker', 'exchange/trades']
            },
            'private': {
                'get': ['mfa/authy/call', 'mfa/authy/sms', 'netki/search/{netkiName}', 'user/bank/otp/{number}', 'user/kyc/otp/{number}', 'user/profile/phone/otp/{number}', 'user/wallet/coin/address/{id}', 'user/wallet/coin/deposit/confirmed/all', 'user/wallet/coin/deposit/confirmed/{id}', 'user/wallet/coin/deposit/unconfirmed/all', 'user/wallet/coin/deposit/unconfirmed/{id}', 'user/wallet/coin/wallets', 'user/exchange/bank/fiat/accounts', 'user/exchange/bank/fiat/balance/available', 'user/exchange/bank/fiat/balance/pending', 'user/exchange/bank/fiat/balance/total', 'user/exchange/bank/fiat/deposit/cancelled', 'user/exchange/bank/fiat/deposit/unverified', 'user/exchange/bank/fiat/deposit/verified', 'user/exchange/bank/fiat/withdraw/cancelled', 'user/exchange/bank/fiat/withdraw/completed', 'user/exchange/bank/fiat/withdraw/unverified', 'user/exchange/bank/fiat/withdraw/verified', 'user/exchange/ask/cancelled', 'user/exchange/ask/completed', 'user/exchange/ask/pending', 'user/exchange/bid/cancelled', 'user/exchange/bid/completed', 'user/exchange/bid/pending', 'user/exchange/bank/coin/addresses', 'user/exchange/bank/coin/balance/available', 'user/exchange/bank/coin/balance/pending', 'user/exchange/bank/coin/balance/total', 'user/exchange/bank/coin/deposit/cancelled', 'user/exchange/bank/coin/deposit/unverified', 'user/exchange/bank/coin/deposit/verified', 'user/exchange/bank/coin/withdraw/cancelled', 'user/exchange/bank/coin/withdraw/completed', 'user/exchange/bank/coin/withdraw/unverified', 'user/exchange/bank/coin/withdraw/verified', 'user/exchange/bank/summary', 'user/exchange/coin/fee', 'user/exchange/fiat/fee', 'user/exchange/kycs', 'user/exchange/referral/coin/paid', 'user/exchange/referral/coin/successful', 'user/exchange/referral/fiat/paid', 'user/exchange/referrals', 'user/exchange/trade/summary', 'user/login/token/{token}', 'user/summary', 'user/wallet/summary', 'wallet/coin/withdraw/cancelled', 'wallet/coin/withdraw/completed', 'wallet/coin/withdraw/unverified', 'wallet/coin/withdraw/verified'],
                'post': ['login', 'login/initiate', 'login/password/forgot', 'mfa/authy/initiate', 'mfa/ga/initiate', 'signup', 'user/netki/update', 'user/profile/image/update', 'user/exchange/bank/coin/withdraw/initiate', 'user/exchange/bank/coin/withdraw/newVerifycode', 'user/exchange/bank/fiat/withdraw/initiate', 'user/exchange/bank/fiat/withdraw/newVerifycode', 'user/password/change', 'user/password/reset', 'user/wallet/coin/withdraw/initiate', 'wallet/coin/withdraw/newVerifycode'],
                'put': ['signup/verify/{token}', 'user/exchange/kyc', 'user/exchange/bank/fiat/deposit/new', 'user/exchange/ask/new', 'user/exchange/bid/new', 'user/exchange/instant/buy', 'user/exchange/instant/sell', 'user/exchange/bank/coin/withdraw/verify', 'user/exchange/bank/fiat/account/new', 'user/exchange/bank/fiat/withdraw/verify', 'user/mfa/authy/initiate/enable', 'user/mfa/ga/initiate/enable', 'user/netki/create', 'user/profile/phone/new', 'user/wallet/coin/address/new', 'user/wallet/coin/new', 'user/wallet/coin/withdraw/sendToExchange', 'user/wallet/coin/withdraw/verify'],
                'delete': ['user/gcm/{code}', 'user/logout', 'user/exchange/bank/coin/withdraw/unverified/cancel/{withdrawID}', 'user/exchange/bank/fiat/deposit/cancel/{depositID}', 'user/exchange/ask/cancel/{orderID}', 'user/exchange/bid/cancel/{orderID}', 'user/exchange/bank/fiat/withdraw/unverified/cancel/{withdrawID}', 'user/mfa/authy/disable/{code}', 'user/mfa/ga/disable/{code}', 'user/profile/phone/delete', 'user/profile/image/delete/{netkiName}', 'user/wallet/coin/withdraw/unverified/cancel/{withdrawID}']
            }
        },
        'products': {
            'BTC/INR': { 'id': 'BTC/INR', 'symbol': 'BTC/INR', 'base': 'BTC', 'quote': 'INR' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balance,
                coin,
                fiat,
                result,
                _this127 = this;

            return Promise.resolve().then(function () {
                return _this127.privateGetUserExchangeBankSummary();
            }).then(function (_resp) {
                response = _resp;
                balance = response['message'];
                coin = {
                    'free': balance['availableCoinBalance'],
                    'used': balance['pendingCoinBalance'],
                    'total': balance['totalCoinBalance']
                };
                fiat = {
                    'free': balance['availableFiatBalance'],
                    'used': balance['pendingFiatBalance'],
                    'total': balance['totalFiatBalance']
                };
                result = {
                    'info': balance,
                    'BTC': coin,
                    'INR': fiat
                };

                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var bids,
                asks,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this128 = this;

            return Promise.resolve().then(function () {
                return _this128.publicGetExchangeBidOrders();
            }).then(function (_resp) {
                bids = _resp;
                return _this128.publicGetExchangeAskOrders();
            }).then(function (_resp) {
                asks = _resp;
                orderbook = {
                    'bids': bids['message'],
                    'asks': asks['message']
                };
                timestamp = _this128.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this128.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['rate'];
                        amount = order['vol'];

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this129 = this;

            return Promise.resolve().then(function () {
                return _this129.publicGetExchangeTicker();
            }).then(function (_resp) {
                response = _resp;
                ticker = response['message'];
                timestamp = ticker['timestamp'];

                return {
                    'timestamp': timestamp,
                    'datetime': _this129.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['lastPrice']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['coinvolume']),
                    'quoteVolume': parseFloat(ticker['fiatvolume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetExchangeTrades();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePutUserExchange';
            var order = {};
            if (type == 'market') {
                method += 'Instant' + this.capitalize(side);
                if (side == 'buy') order['maxFiat'] = amount;else order['maxVol'] = amount;
            } else {
                var direction = side == 'buy' ? 'Bid' : 'Ask';
                method += direction + 'New';
                order['rate'] = price;
                order['vol'] = amount;
            }
            return this[method](self.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            throw new Error(this.id + ' cancelOrder () is not fully implemented yet');
            var method = 'privateDeleteUserExchangeAskCancelOrderId'; // TODO fixme, have to specify order side here
            return this[method]({ 'orderID': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'private') {
                headers = { 'Authorization': this.apiKey };
                if (Object.keys(query).length) {
                    body = this.json(query);
                    headers['Content-Type'] = 'application/json';
                }
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var coinspot = {

        'id': 'coinspot',
        'name': 'CoinSpot',
        'countries': 'AU', // Australia
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28208429-3cacdf9a-6896-11e7-854e-4c79a772a30f.jpg',
            'api': {
                'public': 'https://www.coinspot.com.au/pubapi',
                'private': 'https://www.coinspot.com.au/api'
            },
            'www': 'https://www.coinspot.com.au',
            'doc': 'https://www.coinspot.com.au/api'
        },
        'api': {
            'public': {
                'get': ['latest']
            },
            'private': {
                'post': ['orders', 'orders/history', 'my/coin/deposit', 'my/coin/send', 'quote/buy', 'quote/sell', 'my/balances', 'my/orders', 'my/buy', 'my/sell', 'my/buy/cancel', 'my/sell/cancel']
            }
        },
        'products': {
            'BTC/AUD': { 'id': 'BTC', 'symbol': 'BTC/AUD', 'base': 'BTC', 'quote': 'AUD' },
            'LTC/AUD': { 'id': 'LTC', 'symbol': 'LTC/AUD', 'base': 'LTC', 'quote': 'AUD' },
            'DOGE/AUD': { 'id': 'DOGE', 'symbol': 'DOGE/AUD', 'base': 'DOGE', 'quote': 'AUD' }
        },

        fetchBalance: function fetchBalance() {
            var response,
                balances,
                currencies,
                result,
                c,
                currency,
                uppercase,
                account,
                _this130 = this;

            return Promise.resolve().then(function () {
                return _this130.privatePostMyBalances();
            }).then(function (_resp) {
                response = _resp;
                balances = response['balance'];
                currencies = Object.keys(balances);
                result = { 'info': balances };

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    uppercase = currency.toUpperCase();
                    account = {
                        'free': balances[currency],
                        'used': undefined,
                        'total': balances[currency]
                    };

                    if (uppercase == 'DRK') {
                        uppercase = 'DASH';
                    }result[uppercase] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this131 = this;

            return Promise.resolve().then(function () {
                p = _this131.product(product);
                return _this131.privatePostOrders({
                    'cointype': p['id']
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this131.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this131.iso8601(timestamp)
                };
                sides = { 'bids': 'buyorders', 'asks': 'sellorders' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['rate']);
                        amount = parseFloat(order['amount']);

                        result[key].push([price, amount]);
                    }
                }
                result['bids'] = _this131.sortBy(result['bids'], 0, true);
                result['asks'] = _this131.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                id,
                ticker,
                timestamp,
                _this132 = this;

            return Promise.resolve().then(function () {
                return _this132.publicGetLatest();
            }).then(function (_resp) {
                response = _resp;
                id = _this132.productId(product);

                id = id.toLowerCase();
                ticker = response['prices'][id];
                timestamp = _this132.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this132.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': undefined,
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.privatePostOrdersHistory({
                'cointype': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePostMy' + this.capitalize(side);
            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var order = {
                'cointype': this.productId(product),
                'amount': amount,
                'rate': price
            };
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            throw new Error(this.id + ' cancelOrder () is not fully implemented yet');
            var method = 'privatePostMyBuy';
            return this[method]({ 'id': id });
        },
        request: function request(path) {
            var type,
                method,
                params,
                headers,
                body,
                url,
                nonce,
                _this133 = this,
                _arguments120 = arguments;

            type = _arguments120.length > 1 && _arguments120[1] !== undefined ? _arguments120[1] : 'public';
            method = _arguments120.length > 2 && _arguments120[2] !== undefined ? _arguments120[2] : 'GET';
            params = _arguments120.length > 3 && _arguments120[3] !== undefined ? _arguments120[3] : {};
            headers = _arguments120.length > 4 && _arguments120[4] !== undefined ? _arguments120[4] : undefined;
            body = _arguments120.length > 5 && _arguments120[5] !== undefined ? _arguments120[5] : undefined;

            if (!_this133.apiKey) {
                throw new AuthenticationError(_this133.id + ' requires apiKey for all requests');
            }url = _this133.urls['api'][type] + '/' + path;

            if (type == 'private') {
                nonce = _this133.nonce();

                body = _this133.json(_this133.extend({ 'nonce': nonce }, params));
                headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': body.length,
                    'key': _this133.apiKey,
                    'sign': _this133.hmac(_this133.encode(body), _this133.encode(_this133.secret), 'sha512')
                };
            }
            return _this133.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var dsx = {

        'id': 'dsx',
        'name': 'DSX',
        'countries': 'UK',
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27990275-1413158a-645a-11e7-931c-94717f7510e3.jpg',
            'api': {
                'mapi': 'https://dsx.uk/mapi', // market data
                'tapi': 'https://dsx.uk/tapi', // trading
                'dwapi': 'https://dsx.uk/dwapi' // deposit/withdraw
            },
            'www': 'https://dsx.uk',
            'doc': ['https://api.dsx.uk', 'https://dsx.uk/api_docs/public', 'https://dsx.uk/api_docs/private', '']
        },
        'api': {
            'mapi': { // market data (public)
                'get': ['barsFromMoment/{id}/{period}/{start}', // empty reply :\
                'depth/{id}', 'info', 'lastBars/{id}/{period}/{amount}', // period is (m, h or d)
                'periodBars/{id}/{period}/{start}/{end}', 'ticker/{id}', 'trades/{id}']
            },
            'tapi': { // trading (private)
                'post': ['getInfo', 'TransHistory', 'TradeHistory', 'OrderHistory', 'ActiveOrders', 'Trade', 'CancelOrder']
            },
            'dwapi': { // deposit / withdraw (private)
                'post': ['getCryptoDepositAddress', 'cryptoWithdraw', 'fiatWithdraw', 'getTransactionStatus', 'getTransactions']
            }
        },

        fetchProducts: function fetchProducts() {
            var response,
                keys,
                result,
                p,
                id,
                product,
                base,
                quote,
                symbol,
                _this134 = this;

            return Promise.resolve().then(function () {
                return _this134.mapiGetInfo();
            }).then(function (_resp) {
                response = _resp;
                keys = Object.keys(response['pairs']);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = response['pairs'][id];
                    base = id.slice(0, 3);
                    quote = id.slice(3, 6);

                    base = base.toUpperCase();
                    quote = quote.toUpperCase();
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                currencies,
                c,
                currency,
                account,
                _this135 = this;

            return Promise.resolve().then(function () {
                return _this135.tapiPostGetInfo();
            }).then(function (_resp) {
                response = _resp;
                balances = response['return'];
                result = { 'info': balances };
                currencies = Object.keys(balances['total']);

                for (c = 0; c < currencies.length; c++) {
                    currency = currencies[c];
                    account = {
                        'free': balances['funds'][currency],
                        'used': undefined,
                        'total': balances['total'][currency]
                    };

                    account['used'] = account['total'] - account['free'];
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this136 = this;

            return Promise.resolve().then(function () {
                p = _this136.product(product);
                return _this136.mapiGetDepthId({
                    'id': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response[p['id']];
                timestamp = _this136.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this136.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order[0];
                        amount = order[1];

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                response,
                ticker,
                timestamp,
                _this137 = this;

            return Promise.resolve().then(function () {
                p = _this137.product(product);
                return _this137.mapiGetTickerId({
                    'id': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response[p['id']];
                timestamp = ticker['updated'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this137.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['avg']),
                    'baseVolume': parseFloat(ticker['vol']),
                    'quoteVolume': parseFloat(ticker['vol_cur']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.mapiGetTradesId({
                'id': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var order = {
                'pair': this.productId(product),
                'type': side,
                'rate': price,
                'amount': amount
            };
            return this.tapiPostTrade(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.tapiPostCancelOrder({ 'orderId': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mapi';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            if (type == 'mapi' || type == 'dwapi') url += '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'mapi') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                var _method = path;
                body = this.urlencode(this.extend({
                    'method': path,
                    'nonce': nonce
                }, query));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512', 'base64')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var exmo = {

        'id': 'exmo',
        'name': 'EXMO',
        'countries': ['ES', 'RU'], // Spain, Russia
        'rateLimit': 1000, // once every 350 ms ≈ 180 requests per minute ≈ 3 requests per second
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766491-1b0ea956-5eda-11e7-9225-40d67b481b8d.jpg',
            'api': 'https://api.exmo.com',
            'www': 'https://exmo.me',
            'doc': ['https://exmo.me/ru/api_doc', 'https://github.com/exmo-dev/exmo_api_lib/tree/master/nodejs']
        },
        'api': {
            'public': {
                'get': ['currency', 'order_book', 'pair_settings', 'ticker', 'trades']
            },
            'private': {
                'post': ['user_info', 'order_create', 'order_cancel', 'user_open_orders', 'user_trades', 'user_cancelled_orders', 'order_trades', 'required_amount', 'deposit_address', 'withdraw_crypt', 'withdraw_get_txid', 'excode_create', 'excode_load', 'wallet_history']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                id,
                product,
                symbol,
                _symbol$split9,
                _symbol$split10,
                base,
                quote,
                _this138 = this;

            return Promise.resolve().then(function () {
                return _this138.publicGetPairSettings();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = products[id];
                    symbol = id.replace('_', '/');
                    _symbol$split9 = symbol.split('/');
                    _symbol$split10 = _slicedToArray(_symbol$split9, 2);
                    base = _symbol$split10[0];
                    quote = _symbol$split10[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                result,
                c,
                currency,
                account,
                _this139 = this;

            return Promise.resolve().then(function () {
                return _this139.privatePostUserInfo();
            }).then(function (_resp) {
                response = _resp;
                result = { 'info': response };

                for (c = 0; c < _this139.currencies.length; c++) {
                    currency = _this139.currencies[c];
                    account = {
                        'free': undefined,
                        'used': undefined,
                        'total': undefined
                    };

                    if (currency in response['balances']) {
                        account['free'] = parseFloat(response['balances'][currency]);
                    }if (currency in response['reserved']) {
                        account['used'] = parseFloat(response['reserved'][currency]);
                    }account['total'] = _this139.sum(account['free'], account['used']);
                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                response,
                orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this140 = this;

            return Promise.resolve().then(function () {
                p = _this140.product(product);
                return _this140.publicGetOrderBook({
                    'pair': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response[p['id']];
                timestamp = _this140.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this140.iso8601(timestamp)
                };
                sides = { 'bids': 'bid', 'asks': 'ask' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                p,
                ticker,
                timestamp,
                _this141 = this;

            return Promise.resolve().then(function () {
                return _this141.publicGetTicker();
            }).then(function (_resp) {
                response = _resp;
                p = _this141.product(product);
                ticker = response[p['id']];
                timestamp = ticker['updated'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this141.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy_price']),
                    'ask': parseFloat(ticker['sell_price']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last_trade']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['avg']),
                    'baseVolume': parseFloat(ticker['vol']),
                    'quoteVolume': parseFloat(ticker['vol_curr']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var prefix = '';
            if (type == 'market') prefix = 'market_';
            var order = {
                'pair': this.productId(product),
                'quantity': amount,
                'price': price || 0,
                'type': prefix + side
            };
            return this.privatePostOrderCreate(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostOrderCancel({ 'order_id': id });
        },
        request: function request(path) {
            var type,
                method,
                params,
                headers,
                body,
                url,
                nonce,
                result,
                _this142 = this,
                _arguments129 = arguments;

            return Promise.resolve().then(function () {
                type = _arguments129.length > 1 && _arguments129[1] !== undefined ? _arguments129[1] : 'public';
                method = _arguments129.length > 2 && _arguments129[2] !== undefined ? _arguments129[2] : 'GET';
                params = _arguments129.length > 3 && _arguments129[3] !== undefined ? _arguments129[3] : {};
                headers = _arguments129.length > 4 && _arguments129[4] !== undefined ? _arguments129[4] : undefined;
                body = _arguments129.length > 5 && _arguments129[5] !== undefined ? _arguments129[5] : undefined;
                url = _this142.urls['api'] + '/' + _this142.version + '/' + path;

                if (type == 'public') {
                    if (Object.keys(params).length) {
                        url += '?' + _this142.urlencode(params);
                    }
                } else {
                    nonce = _this142.nonce();

                    body = _this142.urlencode(_this142.extend({ 'nonce': nonce }, params));
                    headers = {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': body.length,
                        'Key': _this142.apiKey,
                        'Sign': _this142.hmac(_this142.encode(body), _this142.encode(_this142.secret), 'sha512')
                    };
                }
                return _this142.fetch(url, method, headers, body);
            }).then(function (_resp) {
                result = _resp;

                if ('result' in result) {
                    if (!result['result']) {
                        throw new MarketNotAvailableError('[Market Not Available] ' + _this142.id + ' ' + result['error']);
                    }
                }
                return result;
            });
        }
    };

    //-----------------------------------------------------------------------------

    var flowbtc = {

        'id': 'flowbtc',
        'name': 'flowBTC',
        'countries': 'BR', // Brazil
        'version': 'v1',
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28162465-cd815d4c-67cf-11e7-8e57-438bea0523a2.jpg',
            'api': 'https://api.flowbtc.com:8400/ajax',
            'www': 'https://trader.flowbtc.com',
            'doc': 'http://www.flowbtc.com.br/api/'
        },
        'api': {
            'public': {
                'post': ['GetTicker', 'GetTrades', 'GetTradesByDate', 'GetOrderBook', 'GetProductPairs', 'GetProducts']
            },
            'private': {
                'post': ['CreateAccount', 'GetUserInfo', 'SetUserInfo', 'GetAccountInfo', 'GetAccountTrades', 'GetDepositAddresses', 'Withdraw', 'CreateOrder', 'ModifyOrder', 'CancelOrder', 'CancelAllOrders', 'GetAccountOpenOrders', 'GetOrderFee']
            }
        },

        fetchProducts: function fetchProducts() {
            var response,
                products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this143 = this;

            return Promise.resolve().then(function () {
                return _this143.publicPostGetProductPairs();
            }).then(function (_resp) {
                response = _resp;
                products = response['productPairs'];
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['name'];
                    base = product['product1Label'];
                    quote = product['product2Label'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostUserInfo();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this144 = this;

            return Promise.resolve().then(function () {
                p = _this144.product(product);
                return _this144.publicPostGetOrderBook({
                    'productPair': p['id']
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this144.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this144.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['px']);
                        amount = parseFloat(order['qty']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                ticker,
                timestamp,
                _this145 = this;

            return Promise.resolve().then(function () {
                p = _this145.product(product);
                return _this145.publicPostGetTicker({
                    'productPair': p['id']
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this145.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this145.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['volume24hr']),
                    'quoteVolume': parseFloat(ticker['volume24hrProduct2']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicPostGetTrades({
                'productPair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var orderType = type == 'market' ? 1 : 0;
            var order = {
                'ins': this.productId(product),
                'side': side,
                'orderType': orderType,
                'qty': amount,
                'px': price
            };
            return this.privatePostCreateOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'serverOrderId': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) {
                    body = this.json(params);
                }
            } else {
                if (!this.uid) throw new AuthenticationError(this.id + ' requires `' + this.id + '.uid` property for authentication');
                var nonce = this.nonce();
                var auth = nonce + this.uid + this.apiKey;
                var signature = this.hmac(this.encode(auth), this.secret);
                body = this.urlencode(this.extend({
                    'apiKey': this.apiKey,
                    'apiNonce': nonce,
                    'apiSig': signature.toUpperCase()
                }, params));
                headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var foxbit = extend(blinktrade, {
        'id': 'foxbit',
        'name': 'FoxBit',
        'countries': 'BR',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27991413-11b40d42-647f-11e7-91ee-78ced874dd09.jpg',
            'api': {
                'public': 'https://api.blinktrade.com/api',
                'private': 'https://api.blinktrade.com/tapi'
            },
            'www': 'https://foxbit.exchange',
            'doc': 'https://blinktrade.com/docs'
        },
        'comment': 'Blinktrade API',
        'products': {
            'BTC/BRL': { 'id': 'BTCBRL', 'symbol': 'BTC/BRL', 'base': 'BTC', 'quote': 'BRL', 'brokerId': 4, 'broker': 'FoxBit' }
        }
    });

    //-----------------------------------------------------------------------------

    var fyb = {

        'rateLimit': 1500,
        'api': {
            'public': {
                'get': ['ticker', 'tickerdetailed', 'orderbook', 'trades']
            },
            'private': {
                'post': ['test', 'getaccinfo', 'getpendingorders', 'getorderhistory', 'cancelpendingorder', 'placeorder', 'withdraw']
            }
        },

        fetchBalance: function fetchBalance() {
            return this.privatePostGetaccinfo();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this146 = this;

            return Promise.resolve().then(function () {
                return _this146.publicGetOrderbook();
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this146.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this146.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                last,
                volume,
                _this147 = this;

            return Promise.resolve().then(function () {
                return _this147.publicGetTickerdetailed();
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this147.milliseconds();
                last = undefined;
                volume = undefined;

                if ('last' in ticker) {
                    last = parseFloat(ticker['last']);
                }if ('vol' in ticker) {
                    volume = parseFloat(ticker['vol']);
                }return {
                    'timestamp': timestamp,
                    'datetime': _this147.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': last,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': volume,
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            return this.privatePostPlaceorder(this.extend({
                'qty': amount,
                'price': price,
                'type': side[0].toUpperCase()
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelpendingorder({ 'orderNo': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + path;
            if (type == 'public') {
                url += '.json';
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({ 'timestamp': nonce }, params));
                headers = {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'key': this.apiKey,
                    'sig': this.hmac(this.encode(body), this.encode(this.secret), 'sha1')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var fybse = extend(fyb, {
        'id': 'fybse',
        'name': 'FYB-SE',
        'countries': 'SE', // Sweden
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766512-31019772-5edb-11e7-8241-2e675e6797f1.jpg',
            'api': 'https://www.fybse.se/api/SEK',
            'www': 'https://www.fybse.se',
            'doc': 'http://docs.fyb.apiary.io'
        },
        'products': {
            'BTC/SEK': { 'id': 'SEK', 'symbol': 'BTC/SEK', 'base': 'BTC', 'quote': 'SEK' }
        }
    });

    //-----------------------------------------------------------------------------

    var fybsg = extend(fyb, {
        'id': 'fybsg',
        'name': 'FYB-SG',
        'countries': 'SG', // Singapore
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766513-3364d56a-5edb-11e7-9e6b-d5898bb89c81.jpg',
            'api': 'https://www.fybsg.com/api/SGD',
            'www': 'https://www.fybsg.com',
            'doc': 'http://docs.fyb.apiary.io'
        },
        'products': {
            'BTC/SGD': { 'id': 'SGD', 'symbol': 'BTC/SGD', 'base': 'BTC', 'quote': 'SGD' }
        }
    });

    //-----------------------------------------------------------------------------

    var gatecoin = {

        'id': 'gatecoin',
        'name': 'Gatecoin',
        'rateLimit': 2000,
        'countries': 'HK', // Hong Kong
        'comment': 'a regulated/licensed exchange',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28646817-508457f2-726c-11e7-9eeb-3528d2413a58.jpg',
            'api': 'https://api.gatecoin.com',
            'www': 'https://gatecoin.com',
            'doc': ['https://gatecoin.com/api', 'https://github.com/Gatecoin/RESTful-API-Implementation', 'https://api.gatecoin.com/swagger-ui/index.html']
        },
        'api': {
            'public': {
                'get': ['Public/ExchangeRate', // Get the exchange rates
                'Public/LiveTicker', // Get live ticker for all currency
                'Public/LiveTicker/{CurrencyPair}', // Get live ticker by currency
                'Public/LiveTickers', // Get live ticker for all currency
                'Public/MarketDepth/{CurrencyPair}', // Gets prices and market depth for the currency pair.
                'Public/NetworkStatistics/{DigiCurrency}', // Get the network status of a specific digital currency
                'Public/StatisticHistory/{DigiCurrency}/{Typeofdata}', // Get the historical data of a specific digital currency
                'Public/TickerHistory/{CurrencyPair}/{Timeframe}', // Get ticker history
                'Public/Transactions/{CurrencyPair}', // Gets recent transactions
                'Public/TransactionsHistory/{CurrencyPair}', // Gets all transactions
                'Reference/BusinessNatureList', // Get the business nature list.
                'Reference/Countries', // Get the country list.
                'Reference/Currencies', // Get the currency list.
                'Reference/CurrencyPairs', // Get the currency pair list.
                'Reference/CurrentStatusList', // Get the current status list.
                'Reference/IdentydocumentTypes', // Get the different types of identity documents possible.
                'Reference/IncomeRangeList', // Get the income range list.
                'Reference/IncomeSourceList', // Get the income source list.
                'Reference/VerificationLevelList', // Get the verif level list.
                'Stream/PublicChannel'],
                'post': ['Export/Transactions', // Request a export of all trades from based on currencypair, start date and end date
                'Ping', // Post a string, then get it back.
                'Public/Unsubscribe/{EmailCode}', // Lets the user unsubscribe from emails
                'RegisterUser']
            },
            'private': {
                'get': ['Account/CorporateData', // Get corporate account data
                'Account/DocumentAddress', // Check if residence proof uploaded
                'Account/DocumentCorporation', // Check if registered document uploaded
                'Account/DocumentID', // Check if ID document copy uploaded
                'Account/DocumentInformation', // Get Step3 Data
                'Account/Email', // Get user email
                'Account/FeeRate', // Get fee rate of logged in user
                'Account/Level', // Get verif level of logged in user
                'Account/PersonalInformation', // Get Step1 Data
                'Account/Phone', // Get user phone number
                'Account/Profile', // Get trader profile
                'Account/Questionnaire', // Fill the questionnaire
                'Account/Referral', // Get referral information
                'Account/ReferralCode', // Get the referral code of the logged in user
                'Account/ReferralNames', // Get names of referred traders
                'Account/ReferralReward', // Get referral reward information
                'Account/ReferredCode', // Get referral code
                'Account/ResidentInformation', // Get Step2 Data
                'Account/SecuritySettings', // Get verif details of logged in user
                'Account/User', // Get all user info
                'APIKey/APIKey', // Get API Key for logged in user
                'Auth/ConnectionHistory', // Gets connection history of logged in user
                'Balance/Balances', // Gets the available balance for each currency for the logged in account.
                'Balance/Balances/{Currency}', // Gets the available balance for s currency for the logged in account.
                'Balance/Deposits', // Get all account deposits, including wire and digital currency, of the logged in user
                'Balance/Withdrawals', // Get all account withdrawals, including wire and digital currency, of the logged in user
                'Bank/Accounts/{Currency}/{Location}', // Get internal bank account for deposit
                'Bank/Transactions', // Get all account transactions of the logged in user
                'Bank/UserAccounts', // Gets all the bank accounts related to the logged in user.
                'Bank/UserAccounts/{Currency}', // Gets all the bank accounts related to the logged in user.
                'ElectronicWallet/DepositWallets', // Gets all crypto currency addresses related deposits to the logged in user.
                'ElectronicWallet/DepositWallets/{DigiCurrency}', // Gets all crypto currency addresses related deposits to the logged in user by currency.
                'ElectronicWallet/Transactions', // Get all digital currency transactions of the logged in user
                'ElectronicWallet/Transactions/{DigiCurrency}', // Get all digital currency transactions of the logged in user
                'ElectronicWallet/UserWallets', // Gets all external digital currency addresses related to the logged in user.
                'ElectronicWallet/UserWallets/{DigiCurrency}', // Gets all external digital currency addresses related to the logged in user by currency.
                'Info/ReferenceCurrency', // Get user's reference currency
                'Info/ReferenceLanguage', // Get user's reference language
                'Notification/Messages', // Get from oldest unread + 3 read message to newest messages
                'Trade/Orders', // Gets open orders for the logged in trader.
                'Trade/Orders/{OrderID}', // Gets an order for the logged in trader.
                'Trade/StopOrders', // Gets all stop orders for the logged in trader. Max 1000 record.
                'Trade/StopOrdersHistory', // Gets all stop orders for the logged in trader. Max 1000 record.
                'Trade/Trades', // Gets all transactions of logged in user
                'Trade/UserTrades'],
                'post': ['Account/DocumentAddress', // Upload address proof document
                'Account/DocumentCorporation', // Upload registered document document
                'Account/DocumentID', // Upload ID document copy
                'Account/Email/RequestVerify', // Request for verification email
                'Account/Email/Verify', // Verification email
                'Account/GoogleAuth', // Enable google auth
                'Account/Level', // Request verif level of logged in user
                'Account/Questionnaire', // Fill the questionnaire
                'Account/Referral', // Post a referral email
                'APIKey/APIKey', // Create a new API key for logged in user
                'Auth/ChangePassword', // Change password.
                'Auth/ForgotPassword', // Request reset password
                'Auth/ForgotUserID', // Request user id
                'Auth/Login', // Trader session log in.
                'Auth/Logout', // Logout from the current session.
                'Auth/LogoutOtherSessions', // Logout other sessions.
                'Auth/ResetPassword', // Reset password
                'Bank/Transactions', // Request a transfer from the traders account of the logged in user. This is only available for bank account
                'Bank/UserAccounts', // Add an account the logged in user
                'ElectronicWallet/DepositWallets/{DigiCurrency}', // Add an digital currency addresses to the logged in user.
                'ElectronicWallet/Transactions/Deposits/{DigiCurrency}', // Get all internal digital currency transactions of the logged in user
                'ElectronicWallet/Transactions/Withdrawals/{DigiCurrency}', // Get all external digital currency transactions of the logged in user
                'ElectronicWallet/UserWallets/{DigiCurrency}', // Add an external digital currency addresses to the logged in user.
                'ElectronicWallet/Withdrawals/{DigiCurrency}', // Request a transfer from the traders account to an external address. This is only available for crypto currencies.
                'Notification/Messages', // Mark all as read
                'Notification/Messages/{ID}', // Mark as read
                'Trade/Orders', // Place an order at the exchange.
                'Trade/StopOrders'],
                'put': ['Account/CorporateData', // Update user company data for corporate account
                'Account/DocumentID', // Update ID document meta data
                'Account/DocumentInformation', // Update Step3 Data
                'Account/Email', // Update user email
                'Account/PersonalInformation', // Update Step1 Data
                'Account/Phone', // Update user phone number
                'Account/Questionnaire', // update the questionnaire
                'Account/ReferredCode', // Update referral code
                'Account/ResidentInformation', // Update Step2 Data
                'Account/SecuritySettings', // Update verif details of logged in user
                'Account/User', // Update all user info
                'Bank/UserAccounts', // Update the label of existing user bank accounnt
                'ElectronicWallet/DepositWallets/{DigiCurrency}/{AddressName}', // Update the name of an address
                'ElectronicWallet/UserWallets/{DigiCurrency}', // Update the name of an external address
                'Info/ReferenceCurrency', // User's reference currency
                'Info/ReferenceLanguage'],
                'delete': ['APIKey/APIKey/{PublicKey}', // Remove an API key
                'Bank/Transactions/{RequestID}', // Delete pending account withdraw of the logged in user
                'Bank/UserAccounts/{Currency}/{Label}', // Delete an account of the logged in user
                'ElectronicWallet/DepositWallets/{DigiCurrency}/{AddressName}', // Delete an digital currency addresses related to the logged in user.
                'ElectronicWallet/UserWallets/{DigiCurrency}/{AddressName}', // Delete an external digital currency addresses related to the logged in user.
                'Trade/Orders', // Cancels all existing order
                'Trade/Orders/{OrderID}', // Cancels an existing order
                'Trade/StopOrders', // Cancels all existing stop orders
                'Trade/StopOrders/{ID}']
            }
        },

        fetchProducts: function fetchProducts() {
            var response,
                products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this148 = this;

            return Promise.resolve().then(function () {
                return _this148.publicGetPublicLiveTickers();
            }).then(function (_resp) {
                response = _resp;
                products = response['tickers'];
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['currencyPair'];
                    base = id.slice(0, 3);
                    quote = id.slice(3, 6);
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                b,
                balance,
                currency,
                account,
                _this149 = this;

            return Promise.resolve().then(function () {
                return _this149.privateGetBalanceBalances();
            }).then(function (_resp) {
                response = _resp;
                balances = response['balances'];
                result = { 'info': balances };

                for (b = 0; b < balances.length; b++) {
                    balance = balances[b];
                    currency = balance['currency'];
                    account = {
                        'free': balance['availableBalance'],
                        'used': _this149.sum(balance['pendingIncoming'], balance['pendingOutgoing'], balance['openOrder']),
                        'total': balance['balance']
                    };

                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this150 = this;

            return Promise.resolve().then(function () {
                p = _this150.product(product);
                return _this150.publicGetPublicMarketDepthCurrencyPair({
                    'CurrencyPair': p['id']
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this150.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this150.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['volume']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                response,
                ticker,
                timestamp,
                _this151 = this;

            return Promise.resolve().then(function () {
                p = _this151.product(product);
                return _this151.publicGetPublicLiveTickerCurrencyPair({
                    'CurrencyPair': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = parseInt(ticker['createDateTime']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this151.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetPublicTransactionsCurrencyPair({
                'CurrencyPair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'Code': this.productId(product),
                'Way': side == 'buy' ? 'Bid' : 'Ask',
                'Amount': amount
            };
            if (type == 'limit') order['Price'] = price;
            if (this.twofa) {
                if ('ValidationCode' in params) order['ValidationCode'] = params['ValidationCode'];else throw new AuthenticationError(this.id + ' two-factor authentication requires a missing ValidationCode parameter');
            }
            return this.privatePostTradeOrders(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privateDeleteTradeOrdersOrderID({ 'OrderID': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {

                var nonce = this.nonce();
                var contentType = method == 'GET' ? '' : 'application/json';
                var auth = method + url + contentType + nonce.toString();
                auth = auth.toLowerCase();

                body = this.urlencode(this.extend({ 'nonce': nonce }, params));
                var signature = this.hmac(this.encode(auth), this.encode(this.secret), 'sha256', 'base64');
                headers = {
                    'API_PUBLIC_KEY': this.apiKey,
                    'API_REQUEST_SIGNATURE': signature,
                    'API_REQUEST_DATE': nonce
                };
                if (method != 'GET') headers['Content-Type'] = contentType;
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var gdax = {
        'id': 'gdax',
        'name': 'GDAX',
        'countries': 'US',
        'rateLimit': 1000,
        'urls': {
            'test': 'https://api-public.sandbox.gdax.com',
            'logo': 'https://user-images.githubusercontent.com/1294454/27766527-b1be41c6-5edb-11e7-95f6-5b496c469e2c.jpg',
            'api': 'https://api.gdax.com',
            'www': 'https://www.gdax.com',
            'doc': 'https://docs.gdax.com'
        },
        'api': {
            'public': {
                'get': ['currencies', 'products', 'products/{id}/book', 'products/{id}/candles', 'products/{id}/stats', 'products/{id}/ticker', 'products/{id}/trades', 'time']
            },
            'private': {
                'get': ['accounts', 'accounts/{id}', 'accounts/{id}/holds', 'accounts/{id}/ledger', 'coinbase-accounts', 'fills', 'funding', 'orders', 'orders/{id}', 'payment-methods', 'position', 'reports/{id}', 'users/self/trailing-volume'],
                'post': ['deposits/coinbase-account', 'deposits/payment-method', 'funding/repay', 'orders', 'position/close', 'profiles/margin-transfer', 'reports', 'withdrawals/coinbase', 'withdrawals/crypto', 'withdrawals/payment-method'],
                'delete': ['orders', 'orders/{id}']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this152 = this;

            return Promise.resolve().then(function () {
                return _this152.publicGetProducts();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['id'];
                    base = product['base_currency'];
                    quote = product['quote_currency'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetAccounts();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this153 = this;

            return Promise.resolve().then(function () {
                return _this153.publicGetProductsIdBook({
                    'id': _this153.productId(product),
                    'level': 2 // 1 best bidask, 2 aggregated, 3 full
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this153.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this153.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                ticker,
                quote,
                timestamp,
                bid,
                ask,
                _this154 = this;

            return Promise.resolve().then(function () {
                p = _this154.product(product);
                return _this154.publicGetProductsIdTicker({
                    'id': p['id']
                });
            }).then(function (_resp) {
                ticker = _resp;
                return _this154.publicGetProductsIdStats({
                    'id': p['id']
                });
            }).then(function (_resp) {
                quote = _resp;
                timestamp = _this154.parse8601(ticker['time']);
                bid = undefined;
                ask = undefined;

                if ('bid' in ticker) {
                    bid = parseFloat(ticker['bid']);
                }if ('ask' in ticker) {
                    ask = parseFloat(ticker['ask']);
                }return {
                    'timestamp': timestamp,
                    'datetime': _this154.iso8601(timestamp),
                    'high': parseFloat(quote['high']),
                    'low': parseFloat(quote['low']),
                    'bid': bid,
                    'ask': ask,
                    'vwap': undefined,
                    'open': parseFloat(quote['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(quote['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetProductsIdTrades({
                'id': this.productId(product) // fixes issue #2
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var oid = this.nonce().toString();
            var order = {
                'product_id': this.productId(product),
                'side': side,
                'size': amount,
                'type': type
            };
            if (type == 'limit') order['price'] = price;
            return this.privatePostOrders(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privateDeleteOrdersId({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var request = '/' + this.implodeParams(path, params);
            var url = this.urls['api'] + request;
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                if (!this.apiKey) throw new AuthenticationError(this.id + ' requires apiKey property for authentication and trading');
                if (!this.secret) throw new AuthenticationError(this.id + ' requires secret property for authentication and trading');
                if (!this.password) throw new AuthenticationError(this.id + ' requires password property for authentication and trading');
                var nonce = this.nonce().toString();
                if (Object.keys(query).length) body = this.json(query);
                var what = nonce + method + request + (body || '');
                var secret = this.base64ToBinary(this.secret);
                var signature = this.hmac(this.encode(what), secret, 'sha256', 'base64');
                headers = {
                    'CB-ACCESS-KEY': this.apiKey,
                    'CB-ACCESS-SIGN': signature,
                    'CB-ACCESS-TIMESTAMP': nonce,
                    'CB-ACCESS-PASSPHRASE': this.password,
                    'Content-Type': 'application/json'
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------
    // TBD REQUIRES 2FA VIA AUTHY, A BANK ACCOUNT, IDENTITY VERIFICATION TO START

    var gemini = {
        'id': 'gemini',
        'name': 'Gemini',
        'countries': 'US',
        'rateLimit': 1500, // 200 for private API
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27816857-ce7be644-6096-11e7-82d6-3c257263229c.jpg',
            'api': 'https://api.gemini.com',
            'www': 'https://gemini.com',
            'doc': 'https://docs.gemini.com/rest-api'
        },
        'api': {
            'public': {
                'get': ['symbols', 'pubticker/{symbol}', 'book/{symbol}', 'trades/{symbol}', 'auction/{symbol}', 'auction/{symbol}/history']
            },
            'private': {
                'post': ['order/new', 'order/cancel', 'order/cancel/session', 'order/cancel/all', 'order/status', 'orders', 'mytrades', 'tradevolume', 'balances', 'deposit/{currency}/newAddress', 'withdraw/{currency}', 'heartbeat']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                uppercaseProduct,
                base,
                quote,
                symbol,
                _this155 = this;

            return Promise.resolve().then(function () {
                return _this155.publicGetSymbols();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product;
                    uppercaseProduct = product.toUpperCase();
                    base = uppercaseProduct.slice(0, 3);
                    quote = uppercaseProduct.slice(3, 6);
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _timestamp4,
                _this156 = this;

            return Promise.resolve().then(function () {
                return _this156.publicGetBookSymbol({
                    'symbol': _this156.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this156.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this156.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['amount']);
                        _timestamp4 = parseInt(order['timestamp']) * 1000;

                        result[side].push([price, amount, _timestamp4]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                ticker,
                timestamp,
                baseVolume,
                quoteVolume,
                _this157 = this;

            return Promise.resolve().then(function () {
                p = _this157.product(product);
                return _this157.publicGetPubtickerSymbol({
                    'symbol': p['id']
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = ticker['volume']['timestamp'];
                baseVolume = p['base'];
                quoteVolume = p['quote'];

                return {
                    'timestamp': timestamp,
                    'datetime': _this157.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['volume'][baseVolume]),
                    'quoteVolume': parseFloat(ticker['volume'][quoteVolume]),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradesSymbol({
                'symbol': this.productId(product)
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostBalances();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var order = {
                'client_order_id': this.nonce(),
                'symbol': this.productId(product),
                'amount': amount.toString(),
                'price': price.toString(),
                'side': side,
                'type': 'exchange limit' // gemini allows limit orders only
            };
            return this.privatePostOrderNew(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'order_id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                var request = this.extend({
                    'request': url,
                    'nonce': nonce
                }, query);
                var payload = this.json(request);
                payload = this.encode(payload);
                payload = this.stringToBase64(payload);
                var signature = this.hmac(payload, this.encode(this.secret), 'sha384');
                headers = {
                    'Content-Type': 'text/plain',
                    'Content-Length': 0,
                    'X-GEMINI-APIKEY': this.apiKey,
                    'X-GEMINI-PAYLOAD': payload,
                    'X-GEMINI-SIGNATURE': signature
                };
            }
            url = this.urls['api'] + url;
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var hitbtc = {

        'id': 'hitbtc',
        'name': 'HitBTC',
        'countries': 'HK', // Hong Kong
        'rateLimit': 1500,
        'version': '1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766555-8eaec20e-5edc-11e7-9c5b-6dc69fc42f5e.jpg',
            'api': 'http://api.hitbtc.com',
            'www': 'https://hitbtc.com',
            'doc': ['https://hitbtc.com/api', 'http://hitbtc-com.github.io/hitbtc-api', 'http://jsfiddle.net/bmknight/RqbYB']
        },
        'api': {
            'public': {
                'get': ['{symbol}/orderbook', '{symbol}/ticker', '{symbol}/trades', '{symbol}/trades/recent', 'symbols', 'ticker', 'time,']
            },
            'trading': {
                'get': ['balance', 'orders/active', 'orders/recent', 'order', 'trades/by/order', 'trades'],
                'post': ['new_order', 'cancel_order', 'cancel_orders']
            },
            'payment': {
                'get': ['balance', 'address/{currency}', 'transactions', 'transactions/{transaction}'],
                'post': ['transfer_to_trading', 'transfer_to_main', 'address/{currency}', 'payout']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this158 = this;

            return Promise.resolve().then(function () {
                return _this158.publicGetSymbols();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['symbols'].length; p++) {
                    product = products['symbols'][p];
                    id = product['symbol'];
                    base = product['commodity'];
                    quote = product['currency'];
                    // looks like they now have it correct
                    // if (base == 'DSH')
                    // base = 'DASH';

                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.tradingGetBalance();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this159 = this;

            return Promise.resolve().then(function () {
                return _this159.publicGetSymbolOrderbook({
                    'symbol': _this159.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this159.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this159.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this160 = this;

            return Promise.resolve().then(function () {
                return _this160.publicGetSymbolTicker({
                    'symbol': _this160.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;

                if ('message' in ticker) {
                    throw new Error(_this160.id + ' ' + ticker['message']);
                }timestamp = ticker['timestamp'];

                return {
                    'timestamp': timestamp,
                    'datetime': _this160.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['volume']),
                    'quoteVolume': parseFloat(ticker['volume_quote']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetSymbolTrades({
                'symbol': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'clientOrderId': this.nonce(),
                'symbol': this.productId(product),
                'side': side,
                'quantity': amount,
                'type': type
            };
            if (type == 'limit') order['price'] = price;
            return this.tradingPostNewOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.tradingPostCancelOrder({ 'clientOrderId': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = '/api/' + this.version + '/' + type + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                query = this.extend({ 'nonce': nonce, 'apikey': this.apiKey }, query);
                if (method == 'POST') if (Object.keys(query).length) body = this.urlencode(query);
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
                var auth = url + (body || '');
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Signature': this.hmac(this.encode(auth), this.encode(this.secret), 'sha512').toLowerCase()
                };
            }
            url = this.urls['api'] + url;
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var huobi = {

        'id': 'huobi',
        'name': 'Huobi',
        'countries': 'CN',
        'rateLimit': 2000,
        'version': 'v3',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766569-15aa7b9a-5edd-11e7-9e7f-44791f4ee49c.jpg',
            'api': 'http://api.huobi.com',
            'www': 'https://www.huobi.com',
            'doc': 'https://github.com/huobiapi/API_Docs_en/wiki'
        },
        'api': {
            'staticmarket': {
                'get': ['{id}_kline_{period}', 'ticker_{id}', 'depth_{id}', 'depth_{id}_{length}', 'detail_{id}']
            },
            'usdmarket': {
                'get': ['{id}_kline_{period}', 'ticker_{id}', 'depth_{id}', 'depth_{id}_{length}', 'detail_{id}']
            },
            'trade': {
                'post': ['get_account_info', 'get_orders', 'order_info', 'buy', 'sell', 'buy_market', 'sell_market', 'cancel_order', 'get_new_deal_orders', 'get_order_id_by_trade_id', 'withdraw_coin', 'cancel_withdraw_coin', 'get_withdraw_coin_result', 'transfer', 'loan', 'repayment', 'get_loan_available', 'get_loans']
            }
        },
        'products': {
            'BTC/CNY': { 'id': 'btc', 'symbol': 'BTC/CNY', 'base': 'BTC', 'quote': 'CNY', 'type': 'staticmarket', 'coinType': 1 },
            'LTC/CNY': { 'id': 'ltc', 'symbol': 'LTC/CNY', 'base': 'LTC', 'quote': 'CNY', 'type': 'staticmarket', 'coinType': 2 },
            'BTC/USD': { 'id': 'btc', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD', 'type': 'usdmarket', 'coinType': 1 }
        },

        fetchBalance: function fetchBalance() {
            return this.tradePostGetAccountInfo();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                method,
                orderbook,
                timestamp,
                result,
                _this161 = this;

            return Promise.resolve().then(function () {
                p = _this161.product(product);
                method = p['type'] + 'GetDepthId';
                return _this161[method]({ 'id': p['id'] });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this161.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this161.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                method,
                response,
                ticker,
                timestamp,
                _this162 = this;

            return Promise.resolve().then(function () {
                p = _this162.product(product);
                method = p['type'] + 'GetTickerId';
                return _this162[method]({ 'id': p['id'] });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = parseInt(response['time']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this162.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            var p = this.product(product);
            var method = p['type'] + 'GetDetailId';
            return this[method]({ 'id': p['id'] });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            var method = 'tradePost' + this.capitalize(side);
            var order = {
                'coin_type': p['coinType'],
                'amount': amount,
                'market': p['quote'].toLowerCase()
            };
            if (type == 'limit') order['price'] = price;else method += this.capitalize(type);
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.tradePostCancelOrder({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'trade';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'];
            if (type == 'trade') {
                url += '/api' + this.version;
                var query = this.keysort(this.extend({
                    'method': path,
                    'access_key': this.apiKey,
                    'created': this.nonce()
                }, params));
                var queryString = this.urlencode(this.omit(query, 'market'));
                // secret key must be at the end of query to be signed
                queryString += '&secret_key=' + this.secret;
                query['sign'] = this.hash(this.encode(queryString));
                body = this.urlencode(query);
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            } else {
                url += '/' + type + '/' + this.implodeParams(path, params) + '_json.js';
                var _query = this.omit(params, this.extractParams(path));
                if (Object.keys(_query).length) url += '?' + this.urlencode(_query);
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var itbit = {

        'id': 'itbit',
        'name': 'itBit',
        'countries': 'US',
        'rateLimit': 2000,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27822159-66153620-60ad-11e7-89e7-005f6d7f3de0.jpg',
            'api': 'https://api.itbit.com',
            'www': 'https://www.itbit.com',
            'doc': ['https://api.itbit.com/docs', 'https://www.itbit.com/api']
        },
        'api': {
            'public': {
                'get': ['markets/{symbol}/ticker', 'markets/{symbol}/order_book', 'markets/{symbol}/trades']
            },
            'private': {
                'get': ['wallets', 'wallets/{walletId}', 'wallets/{walletId}/balances/{currencyCode}', 'wallets/{walletId}/funding_history', 'wallets/{walletId}/trades', 'wallets/{walletId}/orders/{id}'],
                'post': ['wallet_transfers', 'wallets', 'wallets/{walletId}/cryptocurrency_deposits', 'wallets/{walletId}/cryptocurrency_withdrawals', 'wallets/{walletId}/orders', 'wire_withdrawal'],
                'delete': ['wallets/{walletId}/orders/{id}']
            }
        },
        'products': {
            'BTC/USD': { 'id': 'XBTUSD', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'BTC/SGD': { 'id': 'XBTSGD', 'symbol': 'BTC/SGD', 'base': 'BTC', 'quote': 'SGD' },
            'BTC/EUR': { 'id': 'XBTEUR', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' }
        },

        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this163 = this;

            return Promise.resolve().then(function () {
                return _this163.publicGetMarketsSymbolOrderBook({
                    'symbol': _this163.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this163.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this163.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this164 = this;

            return Promise.resolve().then(function () {
                return _this164.publicGetMarketsSymbolTicker({
                    'symbol': _this164.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this164.parse8601(ticker['serverTimeUTC']);

                return {
                    'timestamp': timestamp,
                    'datetime': _this164.iso8601(timestamp),
                    'high': parseFloat(ticker['high24h']),
                    'low': parseFloat(ticker['low24h']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap24h']),
                    'open': parseFloat(ticker['openToday']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['lastPrice']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume24h']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetMarketsSymbolTrades({
                'symbol': this.productId(product)
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetWallets();
        },
        nonce: function nonce() {
            return this.milliseconds();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            amount = amount.toString();
            price = price.toString();
            var p = this.product(product);
            var order = {
                'side': side,
                'type': type,
                'currency': p['base'],
                'amount': amount,
                'display': amount,
                'price': price,
                'instrument': p['id']
            };
            return this.privatePostTradeAdd(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privateDeleteWalletsWalletIdOrdersId(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                if (Object.keys(query).length) body = this.json(query);else body = '';
                var nonce = this.nonce().toString();
                var timestamp = nonce;
                var auth = [method, url, body, nonce, timestamp];
                var message = nonce + this.json(auth);
                var hashedMessage = this.hash(message, 'sha256', 'binary');
                var signature = this.hmac(this.encode(url + hashedMessage), this.secret, 'sha512', 'base64');
                headers = {
                    'Authorization': self.apiKey + ':' + signature,
                    'Content-Type': 'application/json',
                    'X-Auth-Timestamp': timestamp,
                    'X-Auth-Nonce': nonce
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var jubi = {

        'id': 'jubi',
        'name': 'jubi.com',
        'countries': 'CN',
        'rateLimit': 1500,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766581-9d397d9a-5edd-11e7-8fb9-5d8236c0e692.jpg',
            'api': 'https://www.jubi.com/api',
            'www': 'https://www.jubi.com',
            'doc': 'https://www.jubi.com/help/api.html'
        },
        'api': {
            'public': {
                'get': ['depth', 'orders', 'ticker']
            },
            'private': {
                'post': ['balance', 'trade_add', 'trade_cancel', 'trade_list', 'trade_view', 'wallet']
            }
        },
        'products': {
            'BTC/CNY': { 'id': 'btc', 'symbol': 'BTC/CNY', 'base': 'BTC', 'quote': 'CNY' },
            'ETH/CNY': { 'id': 'eth', 'symbol': 'ETH/CNY', 'base': 'ETH', 'quote': 'CNY' },
            'ANS/CNY': { 'id': 'ans', 'symbol': 'ANS/CNY', 'base': 'ANS', 'quote': 'CNY' },
            'BLK/CNY': { 'id': 'blk', 'symbol': 'BLK/CNY', 'base': 'BLK', 'quote': 'CNY' },
            'DNC/CNY': { 'id': 'dnc', 'symbol': 'DNC/CNY', 'base': 'DNC', 'quote': 'CNY' },
            'DOGE/CNY': { 'id': 'doge', 'symbol': 'DOGE/CNY', 'base': 'DOGE', 'quote': 'CNY' },
            'EAC/CNY': { 'id': 'eac', 'symbol': 'EAC/CNY', 'base': 'EAC', 'quote': 'CNY' },
            'ETC/CNY': { 'id': 'etc', 'symbol': 'ETC/CNY', 'base': 'ETC', 'quote': 'CNY' },
            'FZ/CNY': { 'id': 'fz', 'symbol': 'FZ/CNY', 'base': 'FZ', 'quote': 'CNY' },
            'GOOC/CNY': { 'id': 'gooc', 'symbol': 'GOOC/CNY', 'base': 'GOOC', 'quote': 'CNY' },
            'GAME/CNY': { 'id': 'game', 'symbol': 'GAME/CNY', 'base': 'GAME', 'quote': 'CNY' },
            'HLB/CNY': { 'id': 'hlb', 'symbol': 'HLB/CNY', 'base': 'HLB', 'quote': 'CNY' },
            'IFC/CNY': { 'id': 'ifc', 'symbol': 'IFC/CNY', 'base': 'IFC', 'quote': 'CNY' },
            'JBC/CNY': { 'id': 'jbc', 'symbol': 'JBC/CNY', 'base': 'JBC', 'quote': 'CNY' },
            'KTC/CNY': { 'id': 'ktc', 'symbol': 'KTC/CNY', 'base': 'KTC', 'quote': 'CNY' },
            'LKC/CNY': { 'id': 'lkc', 'symbol': 'LKC/CNY', 'base': 'LKC', 'quote': 'CNY' },
            'LSK/CNY': { 'id': 'lsk', 'symbol': 'LSK/CNY', 'base': 'LSK', 'quote': 'CNY' },
            'LTC/CNY': { 'id': 'ltc', 'symbol': 'LTC/CNY', 'base': 'LTC', 'quote': 'CNY' },
            'MAX/CNY': { 'id': 'max', 'symbol': 'MAX/CNY', 'base': 'MAX', 'quote': 'CNY' },
            'MET/CNY': { 'id': 'met', 'symbol': 'MET/CNY', 'base': 'MET', 'quote': 'CNY' },
            'MRYC/CNY': { 'id': 'mryc', 'symbol': 'MRYC/CNY', 'base': 'MRYC', 'quote': 'CNY' },
            'MTC/CNY': { 'id': 'mtc', 'symbol': 'MTC/CNY', 'base': 'MTC', 'quote': 'CNY' },
            'NXT/CNY': { 'id': 'nxt', 'symbol': 'NXT/CNY', 'base': 'NXT', 'quote': 'CNY' },
            'PEB/CNY': { 'id': 'peb', 'symbol': 'PEB/CNY', 'base': 'PEB', 'quote': 'CNY' },
            'PGC/CNY': { 'id': 'pgc', 'symbol': 'PGC/CNY', 'base': 'PGC', 'quote': 'CNY' },
            'PLC/CNY': { 'id': 'plc', 'symbol': 'PLC/CNY', 'base': 'PLC', 'quote': 'CNY' },
            'PPC/CNY': { 'id': 'ppc', 'symbol': 'PPC/CNY', 'base': 'PPC', 'quote': 'CNY' },
            'QEC/CNY': { 'id': 'qec', 'symbol': 'QEC/CNY', 'base': 'QEC', 'quote': 'CNY' },
            'RIO/CNY': { 'id': 'rio', 'symbol': 'RIO/CNY', 'base': 'RIO', 'quote': 'CNY' },
            'RSS/CNY': { 'id': 'rss', 'symbol': 'RSS/CNY', 'base': 'RSS', 'quote': 'CNY' },
            'SKT/CNY': { 'id': 'skt', 'symbol': 'SKT/CNY', 'base': 'SKT', 'quote': 'CNY' },
            'TFC/CNY': { 'id': 'tfc', 'symbol': 'TFC/CNY', 'base': 'TFC', 'quote': 'CNY' },
            'VRC/CNY': { 'id': 'vrc', 'symbol': 'VRC/CNY', 'base': 'VRC', 'quote': 'CNY' },
            'VTC/CNY': { 'id': 'vtc', 'symbol': 'VTC/CNY', 'base': 'VTC', 'quote': 'CNY' },
            'WDC/CNY': { 'id': 'wdc', 'symbol': 'WDC/CNY', 'base': 'WDC', 'quote': 'CNY' },
            'XAS/CNY': { 'id': 'xas', 'symbol': 'XAS/CNY', 'base': 'XAS', 'quote': 'CNY' },
            'XPM/CNY': { 'id': 'xpm', 'symbol': 'XPM/CNY', 'base': 'XPM', 'quote': 'CNY' },
            'XRP/CNY': { 'id': 'xrp', 'symbol': 'XRP/CNY', 'base': 'XRP', 'quote': 'CNY' },
            'XSGS/CNY': { 'id': 'xsgs', 'symbol': 'XSGS/CNY', 'base': 'XSGS', 'quote': 'CNY' },
            'YTC/CNY': { 'id': 'ytc', 'symbol': 'YTC/CNY', 'base': 'YTC', 'quote': 'CNY' },
            'ZET/CNY': { 'id': 'zet', 'symbol': 'ZET/CNY', 'base': 'ZET', 'quote': 'CNY' },
            'ZCC/CNY': { 'id': 'zcc', 'symbol': 'ZCC/CNY', 'base': 'ZCC', 'quote': 'CNY' }
        },

        fetchBalance: function fetchBalance() {
            return this.privatePostBalance();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this165 = this;

            return Promise.resolve().then(function () {
                return _this165.publicGetDepth({
                    'coin': _this165.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this165.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this165.iso8601(timestamp)
                };

                result['asks'] = _this165.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this166 = this;

            return Promise.resolve().then(function () {
                return _this166.publicGetTicker({
                    'coin': _this166.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this166.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this166.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['vol']),
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetOrders({
                'coin': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            return this.privatePostTradeAdd(this.extend({
                'amount': amount,
                'price': price,
                'type': side,
                'coin': this.productId(product)
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privateDeleteWalletsWalletIdOrdersId(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce().toString();
                var query = this.extend({
                    'key': this.apiKey,
                    'nonce': nonce
                }, params);
                var request = this.urlencode(query);
                var secret = this.hash(this.encode(this.secret));
                query['signature'] = this.hmac(this.encode(request), secret);
                body = this.urlencode(query);
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------
    // kraken is also owner of ex. Coinsetter / CaVirtEx / Clevercoin

    var kraken = {

        'id': 'kraken',
        'name': 'Kraken',
        'countries': 'US',
        'version': '0',
        'rateLimit': 1500,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766599-22709304-5ede-11e7-9de1-9f33732e1509.jpg',
            'api': 'https://api.kraken.com',
            'www': 'https://www.kraken.com',
            'doc': ['https://www.kraken.com/en-us/help/api', 'https://github.com/nothingisdead/npm-kraken-api']
        },
        'api': {
            'public': {
                'get': ['Assets', 'AssetPairs', 'Depth', 'OHLC', 'Spread', 'Ticker', 'Time', 'Trades']
            },
            'private': {
                'post': ['AddOrder', 'Balance', 'CancelOrder', 'ClosedOrders', 'DepositAddresses', 'DepositMethods', 'DepositStatus', 'Ledgers', 'OpenOrders', 'OpenPositions', 'QueryLedgers', 'QueryOrders', 'QueryTrades', 'TradeBalance', 'TradesHistory', 'TradeVolume', 'Withdraw', 'WithdrawCancel', 'WithdrawInfo', 'WithdrawStatus']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                id,
                product,
                base,
                quote,
                darkpool,
                symbol,
                _this167 = this;

            return Promise.resolve().then(function () {
                return _this167.publicGetAssetPairs();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products['result']);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = products['result'][id];
                    base = product['base'];
                    quote = product['quote'];

                    if (base[0] == 'X' || base[0] == 'Z') {
                        base = base.slice(1);
                    }if (quote[0] == 'X' || quote[0] == 'Z') {
                        quote = quote.slice(1);
                    }base = _this167.commonCurrencyCode(base);
                    quote = _this167.commonCurrencyCode(quote);
                    darkpool = id.indexOf('.d') >= 0;
                    symbol = darkpool ? product['altname'] : base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var darkpool,
                p,
                response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _timestamp5,
                _this168 = this;

            return Promise.resolve().then(function () {
                darkpool = product.indexOf('.d') >= 0;

                if (darkpool) {
                    throw new OrderBookNotAvailableError(_this168.id + ' does not provide an order book for darkpool symbol ' + product);
                }p = _this168.product(product);
                return _this168.publicGetDepth({
                    'pair': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['result'][p['id']];
                timestamp = _this168.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this168.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);
                        _timestamp5 = order[2] * 1000;

                        result[side].push([price, amount, _timestamp5]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var darkpool,
                p,
                response,
                ticker,
                timestamp,
                _this169 = this;

            return Promise.resolve().then(function () {
                darkpool = product.indexOf('.d') >= 0;

                if (darkpool) {
                    throw new TickerNotAvailableError(_this169.id + ' does not provide a ticker for darkpool symbol ' + product);
                }p = _this169.product(product);
                return _this169.publicGetTicker({
                    'pair': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['result'][p['id']];
                timestamp = _this169.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this169.iso8601(timestamp),
                    'high': parseFloat(ticker['h'][1]),
                    'low': parseFloat(ticker['l'][1]),
                    'bid': parseFloat(ticker['b'][0]),
                    'ask': parseFloat(ticker['a'][0]),
                    'vwap': parseFloat(ticker['p'][1]),
                    'open': parseFloat(ticker['o']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['c'][0]),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['v'][1]),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'pair': this.productId(product)
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                c,
                currency,
                xcode,
                zcode,
                balance,
                account,
                _this170 = this;

            return Promise.resolve().then(function () {
                return _this170.privatePostBalance();
            }).then(function (_resp) {
                response = _resp;
                balances = response['result'];
                result = { 'info': balances };

                for (c = 0; c < _this170.currencies.length; c++) {
                    currency = _this170.currencies[c];
                    xcode = 'X' + currency; // X-ISO4217-A3 standard currency codes

                    zcode = 'Z' + currency;
                    balance = undefined;

                    if (xcode in balances) {
                        balance = parseFloat(balances[xcode]);
                    }if (zcode in balances) {
                        balance = parseFloat(balances[zcode]);
                    }if (currency in balances) {
                        balance = parseFloat(balances[currency]);
                    }account = {
                        'free': balance,
                        'used': undefined,
                        'total': balance
                    };

                    result[currency] = account;
                }
                return result;
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'pair': this.productId(product),
                'type': side,
                'ordertype': type,
                'volume': amount
            };
            if (type == 'limit') order['price'] = price;
            return this.privatePostAddOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'txid': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = '/' + this.version + '/' + type + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce().toString();
                body = this.urlencode(this.extend({ 'nonce': nonce }, params));
                // a workaround for Kraken to replace the old CryptoJS block below, see issues #52 and #23
                var signature = this.signForKraken(url, body, this.secret, nonce);
                // an old CryptoJS block that does not want to work properly under Node
                // let auth = this.encode (nonce + body);
                // let query = this.encode (url) + this.hash (auth, 'sha256', 'binary');
                // let secret = this.base64ToBinary (this.secret);
                // let signature = this.hmac (query, secret, 'sha512', 'base64');
                headers = {
                    'API-Key': this.apiKey,
                    'API-Sign': signature,
                    'Content-type': 'application/x-www-form-urlencoded'
                };
            }
            url = this.urls['api'] + url;
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var lakebtc = {

        'id': 'lakebtc',
        'name': 'LakeBTC',
        'countries': 'US',
        'version': 'api_v2',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28074120-72b7c38a-6660-11e7-92d9-d9027502281d.jpg',
            'api': 'https://api.lakebtc.com',
            'www': 'https://www.lakebtc.com',
            'doc': ['https://www.lakebtc.com/s/api', 'https://www.lakebtc.com/s/api_v2']
        },
        'api': {
            'public': {
                'get': ['bcorderbook', 'bctrades', 'ticker']
            },
            'private': {
                'post': ['buyOrder', 'cancelOrders', 'getAccountInfo', 'getExternalAccounts', 'getOrders', 'getTrades', 'openOrders', 'sellOrder']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                keys,
                k,
                id,
                product,
                base,
                quote,
                symbol,
                _this171 = this;

            return Promise.resolve().then(function () {
                return _this171.publicGetTicker();
            }).then(function (_resp) {
                products = _resp;
                result = [];
                keys = Object.keys(products);

                for (k = 0; k < keys.length; k++) {
                    id = keys[k];
                    product = products[id];
                    base = id.slice(0, 3);
                    quote = id.slice(3, 6);

                    base = base.toUpperCase();
                    quote = quote.toUpperCase();
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostGetAccountInfo();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this172 = this;

            return Promise.resolve().then(function () {
                return _this172.publicGetBcorderbook({
                    'symbol': _this172.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this172.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this172.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                _this173 = this;

            return Promise.resolve().then(function () {
                p = _this173.product(product);
                return _this173.publicGetTicker({
                    'symbol': p['id']
                });
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers[p['id']];
                timestamp = _this173.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this173.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetBctrades({
                'symbol': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var method = 'privatePost' + this.capitalize(side) + 'Order';
            var productId = this.productId(product);
            var order = {
                'params': [price, amount, productId]
            };
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostCancelOrder({ 'params': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version;
            if (type == 'public') {
                url += '/' + path;
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var nonce = this.nonce();
                if (Object.keys(params).length) params = params.join(',');else params = '';
                var query = this.urlencode({
                    'tonce': nonce,
                    'accesskey': this.apiKey,
                    'requestmethod': method.toLowerCase(),
                    'id': nonce,
                    'method': path,
                    'params': params
                });
                body = this.json({
                    'method': path,
                    'params': params,
                    'id': nonce
                });
                var signature = this.hmac(this.encode(query), this.secret, 'sha1', 'base64');
                headers = {
                    'Json-Rpc-Tonce': nonce,
                    'Authorization': "Basic " + this.apiKey + ':' + signature,
                    'Content-Length': body.length,
                    'Content-Type': 'application/json'
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var livecoin = {

        'id': 'livecoin',
        'name': 'LiveCoin',
        'countries': ['US', 'UK', 'RU'],
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27980768-f22fc424-638a-11e7-89c9-6010a54ff9be.jpg',
            'api': 'https://api.livecoin.net',
            'www': 'https://www.livecoin.net',
            'doc': 'https://www.livecoin.net/api?lang=en'
        },
        'api': {
            'public': {
                'get': ['exchange/all/order_book', 'exchange/last_trades', 'exchange/maxbid_minask', 'exchange/order_book', 'exchange/restrictions', 'exchange/ticker', // omit params to get all tickers at once
                'info/coinInfo']
            },
            'private': {
                'get': ['exchange/client_orders', 'exchange/order', 'exchange/trades', 'exchange/commission', 'exchange/commissionCommonInfo', 'payment/balances', 'payment/balance', 'payment/get/address', 'payment/history/size', 'payment/history/transactions'],
                'post': ['exchange/buylimit', 'exchange/buymarket', 'exchange/cancellimit', 'exchange/selllimit', 'exchange/sellmarket', 'payment/out/capitalist', 'payment/out/card', 'payment/out/coin', 'payment/out/okpay', 'payment/out/payeer', 'payment/out/perfectmoney', 'payment/voucher/amount', 'payment/voucher/make', 'payment/voucher/redeem']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                symbol,
                _symbol$split11,
                _symbol$split12,
                base,
                quote,
                _this174 = this;

            return Promise.resolve().then(function () {
                return _this174.publicGetExchangeTicker();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['symbol'];
                    symbol = id;
                    _symbol$split11 = symbol.split('/');
                    _symbol$split12 = _slicedToArray(_symbol$split11, 2);
                    base = _symbol$split12[0];
                    quote = _symbol$split12[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetPaymentBalances();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this175 = this;

            return Promise.resolve().then(function () {
                return _this175.publicGetExchangeOrderBook({
                    'currencyPair': _this175.productId(product),
                    'groupByPrice': 'false',
                    'depth': 100
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = orderbook['timestamp'];
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this175.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this176 = this;

            return Promise.resolve().then(function () {
                return _this176.publicGetExchangeTicker({
                    'currencyPair': _this176.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this176.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this176.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['best_bid']),
                    'ask': parseFloat(ticker['best_ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetExchangeLastTrades({
                'currencyPair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side) + type;
            var order = {
                'currencyPair': this.productId(product),
                'quantity': amount
            };
            if (type == 'limit') order['price'] = price;
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostExchangeCancellimit(this.extend({
                'orderId': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + path;
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var length = 0;
                if (Object.keys(params).length) {
                    var query = this.keysort(params);
                    body = this.urlencode(query);
                    length = body.length;
                }
                body = this.encode(body || '');
                var signature = this.hmac(body, this.encode(this.secret), 'sha256');
                headers = {
                    'Api-Key': this.apiKey,
                    'Sign': signature.toUpperCase(),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var liqui = extend(btce, {
        'id': 'liqui',
        'name': 'Liqui',
        'countries': ['UA'],
        'rateLimit': 1000,
        'version': '3',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27982022-75aea828-63a0-11e7-9511-ca584a8edd74.jpg',
            'api': {
                'public': 'https://api.liqui.io/api',
                'private': 'https://api.liqui.io/tapi'
            },
            'www': 'https://liqui.io',
            'doc': 'https://liqui.io/api'
        },

        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                url += '/' + this.version + '/' + this.implodeParams(path, params);
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({
                    'nonce': nonce,
                    'method': path
                }, query));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    });

    //-----------------------------------------------------------------------------

    var luno = {

        'id': 'luno',
        'name': 'luno',
        'countries': ['GB', 'SG', 'ZA'],
        'rateLimit': 3000,
        'version': '1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766607-8c1a69d8-5ede-11e7-930c-540b5eb9be24.jpg',
            'api': 'https://api.mybitx.com/api',
            'www': 'https://www.luno.com',
            'doc': ['https://www.luno.com/en/api', 'https://npmjs.org/package/bitx', 'https://github.com/bausmeier/node-bitx']
        },
        'api': {
            'public': {
                'get': ['orderbook', 'ticker', 'tickers', 'trades']
            },
            'private': {
                'get': ['accounts/{id}/pending', 'accounts/{id}/transactions', 'balance', 'fee_info', 'funding_address', 'listorders', 'listtrades', 'orders/{id}', 'quotes/{id}', 'withdrawals', 'withdrawals/{id}'],
                'post': ['accounts', 'postorder', 'marketorder', 'stoporder', 'funding_address', 'withdrawals', 'send', 'quotes', 'oauth2/grant'],
                'put': ['quotes/{id}'],
                'delete': ['quotes/{id}', 'withdrawals/{id}']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this177 = this;

            return Promise.resolve().then(function () {
                return _this177.publicGetTickers();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['tickers'].length; p++) {
                    product = products['tickers'][p];
                    id = product['pair'];
                    base = id.slice(0, 3);
                    quote = id.slice(3, 6);

                    base = _this177.commonCurrencyCode(base);
                    quote = _this177.commonCurrencyCode(quote);
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetBalance();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this178 = this;

            return Promise.resolve().then(function () {
                return _this178.publicGetOrderbook({
                    'pair': _this178.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = orderbook['timestamp'];
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this178.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['volume']);
                        // let timestamp = order[2] * 1000;

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this179 = this;

            return Promise.resolve().then(function () {
                return _this179.publicGetTicker({
                    'pair': _this179.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = ticker['timestamp'];

                return {
                    'timestamp': timestamp,
                    'datetime': _this179.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last_trade']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['rolling_24_hour_volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost';
            var order = { 'pair': this.productId(product) };
            if (type == 'market') {
                method += 'Marketorder';
                order['type'] = side.toUpperCase();
                if (side == 'buy') order['counter_volume'] = amount;else order['base_volume'] = amount;
            } else {
                method += 'Order';
                order['volume'] = amount;
                order['price'] = price;
                if (side == 'buy') order['type'] = 'BID';else order['type'] = 'ASK';
            }
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostStoporder({ 'order_id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (Object.keys(query).length) url += '?' + this.urlencode(query);
            if (type == 'private') {
                var auth = this.encode(this.apiKey + ':' + this.secret);
                auth = this.stringToBase64(auth);
                headers = { 'Authorization': 'Basic ' + this.decode(auth) };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var mercado = {

        'id': 'mercado',
        'name': 'Mercado Bitcoin',
        'countries': 'BR', // Brazil
        'rateLimit': 1000,
        'version': 'v3',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27837060-e7c58714-60ea-11e7-9192-f05e86adb83f.jpg',
            'api': {
                'public': 'https://www.mercadobitcoin.net/api',
                'private': 'https://www.mercadobitcoin.net/tapi'
            },
            'www': 'https://www.mercadobitcoin.com.br',
            'doc': ['https://www.mercadobitcoin.com.br/api-doc', 'https://www.mercadobitcoin.com.br/trade-api']
        },
        'api': {
            'public': {
                'get': [// last slash critical
                'orderbook/', 'orderbook_litecoin/', 'ticker/', 'ticker_litecoin/', 'trades/', 'trades_litecoin/', 'v2/ticker/', 'v2/ticker_litecoin/']
            },
            'private': {
                'post': ['cancel_order', 'get_account_info', 'get_order', 'get_withdrawal', 'list_system_messages', 'list_orders', 'list_orderbook', 'place_buy_order', 'place_sell_order', 'withdraw_coin']
            }
        },
        'products': {
            'BTC/BRL': { 'id': 'BRLBTC', 'symbol': 'BTC/BRL', 'base': 'BTC', 'quote': 'BRL', 'suffix': '' },
            'LTC/BRL': { 'id': 'BRLLTC', 'symbol': 'LTC/BRL', 'base': 'LTC', 'quote': 'BRL', 'suffix': 'Litecoin' }
        },

        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                method,
                orderbook,
                timestamp,
                result,
                _this180 = this;

            return Promise.resolve().then(function () {
                p = _this180.product(product);
                method = 'publicGetOrderbook' + _this180.capitalize(p['suffix']);
                return _this180[method]();
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this180.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this180.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                method,
                response,
                ticker,
                timestamp,
                _this181 = this;

            return Promise.resolve().then(function () {
                p = _this181.product(product);
                method = 'publicGetV2Ticker' + _this181.capitalize(p['suffix']);
                return _this181[method]();
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = parseInt(ticker['date']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this181.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            var p = this.product(product);
            var method = 'publicGetTrades' + this.capitalize(p['suffix']);
            return this[method]();
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostGetAccountInfo();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            var method = 'privatePostPlace' + this.capitalize(side) + 'Order';
            var order = {
                'coin_pair': this.productId(product),
                'quantity': amount,
                'limit_price': price
            };
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'order_id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type] + '/';
            if (type == 'public') {
                url += path;
            } else {
                url += this.version + '/';
                var nonce = this.nonce();
                body = this.urlencode(this.extend({
                    'tapi_method': path,
                    'tapi_nonce': nonce
                }, params));
                var auth = '/tapi/' + this.version + '/' + '?' + body;
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'TAPI-ID': this.apiKey,
                    'TAPI-MAC': this.hmac(this.encode(auth), this.secret, 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------
    // OKCoin
    // China
    // https://www.okcoin.com/
    // https://www.okcoin.com/rest_getStarted.html
    // https://github.com/OKCoin/websocket
    // https://www.npmjs.com/package/okcoin.com
    // https://www.okcoin.cn
    // https://www.okcoin.cn/rest_getStarted.html

    var okcoin = {

        'version': 'v1',
        'rateLimit': 1000, // up to 3000 requests per 5 minutes ≈ 600 requests per minute ≈ 10 requests per second ≈ 100 ms
        'api': {
            'public': {
                'get': ['depth', 'exchange_rate', 'future_depth', 'future_estimated_price', 'future_hold_amount', 'future_index', 'future_kline', 'future_price_limit', 'future_ticker', 'future_trades', 'kline', 'otcs', 'ticker', 'trades']
            },
            'private': {
                'post': ['account_records', 'batch_trade', 'borrow_money', 'borrow_order_info', 'borrows_info', 'cancel_borrow', 'cancel_order', 'cancel_otc_order', 'cancel_withdraw', 'future_batch_trade', 'future_cancel', 'future_devolve', 'future_explosive', 'future_order_info', 'future_orders_info', 'future_position', 'future_position_4fix', 'future_trade', 'future_trades_history', 'future_userinfo', 'future_userinfo_4fix', 'lend_depth', 'order_fee', 'order_history', 'order_info', 'orders_info', 'otc_order_history', 'otc_order_info', 'repayment', 'submit_otc_order', 'trade', 'trade_history', 'trade_otc_order', 'withdraw', 'withdraw_info', 'unrepayments_info', 'userinfo']
            }
        },

        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this182 = this;

            return Promise.resolve().then(function () {
                return _this182.publicGetDepth({
                    'symbol': _this182.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this182.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': _this182.sortBy(orderbook['asks'], 0),
                    'timestamp': timestamp,
                    'datetime': _this182.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this183 = this;

            return Promise.resolve().then(function () {
                return _this183.publicGetTicker({
                    'symbol': _this183.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = parseInt(response['date']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this183.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'symbol': this.productId(product)
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostUserinfo();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'symbol': this.productId(product),
                'type': side,
                'amount': amount
            };
            if (type == 'limit') order['price'] = price;else order['type'] += '_market';
            return this.privatePostTrade(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'order_id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = '/api/' + this.version + '/' + path + '.do';
            if (type == 'public') {
                if (Object.keys(params).length) url += '?' + this.urlencode(params);
            } else {
                var query = this.keysort(this.extend({
                    'api_key': this.apiKey
                }, params));
                // secret key must be at the end of query
                var queryString = this.urlencode(query) + '&secret_key=' + this.secret;
                query['sign'] = this.hash(this.encode(queryString)).toUpperCase();
                body = this.urlencode(query);
                headers = { 'Content-type': 'application/x-www-form-urlencoded' };
            }
            url = this.urls['api'] + url;
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var okcoincny = extend(okcoin, {
        'id': 'okcoincny',
        'name': 'OKCoin CNY',
        'countries': 'CN',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766792-8be9157a-5ee5-11e7-926c-6d69b8d3378d.jpg',
            'api': 'https://www.okcoin.cn',
            'www': 'https://www.okcoin.cn',
            'doc': 'https://www.okcoin.cn/rest_getStarted.html'
        },
        'products': {
            'BTC/CNY': { 'id': 'btc_cny', 'symbol': 'BTC/CNY', 'base': 'BTC', 'quote': 'CNY' },
            'LTC/CNY': { 'id': 'ltc_cny', 'symbol': 'LTC/CNY', 'base': 'LTC', 'quote': 'CNY' }
        }
    });

    //-----------------------------------------------------------------------------

    var okcoinusd = extend(okcoin, {
        'id': 'okcoinusd',
        'name': 'OKCoin USD',
        'countries': ['CN', 'US'],
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766791-89ffb502-5ee5-11e7-8a5b-c5950b68ac65.jpg',
            'api': 'https://www.okcoin.com',
            'www': 'https://www.okcoin.com',
            'doc': ['https://www.okcoin.com/rest_getStarted.html', 'https://www.npmjs.com/package/okcoin.com']
        },
        'products': {
            'BTC/USD': { 'id': 'btc_usd', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'LTC/USD': { 'id': 'ltc_usd', 'symbol': 'LTC/USD', 'base': 'LTC', 'quote': 'USD' }
        }
    });

    //-----------------------------------------------------------------------------

    var paymium = {

        'id': 'paymium',
        'name': 'Paymium',
        'countries': ['FR', 'EU'],
        'rateLimit': 2000,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27790564-a945a9d4-5ff9-11e7-9d2d-b635763f2f24.jpg',
            'api': 'https://paymium.com/api',
            'www': 'https://www.paymium.com',
            'doc': ['https://github.com/Paymium/api-documentation', 'https://www.paymium.com/page/developers']
        },
        'api': {
            'public': {
                'get': ['countries', 'data/{id}/ticker', 'data/{id}/trades', 'data/{id}/depth', 'bitcoin_charts/{id}/trades', 'bitcoin_charts/{id}/depth']
            },
            'private': {
                'get': ['merchant/get_payment/{UUID}', 'user', 'user/addresses', 'user/addresses/{btc_address}', 'user/orders', 'user/orders/{UUID}', 'user/price_alerts'],
                'post': ['user/orders', 'user/addresses', 'user/payment_requests', 'user/price_alerts', 'merchant/create_payment'],
                'delete': ['user/orders/{UUID}/cancel', 'user/price_alerts/{id}']
            }
        },
        'products': {
            'BTC/EUR': { 'id': 'eur', 'symbol': 'BTC/EUR', 'base': 'BTC', 'quote': 'EUR' }
        },

        fetchBalance: function fetchBalance() {
            return this.privateGetUser();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _timestamp6,
                _this184 = this;

            return Promise.resolve().then(function () {
                return _this184.publicGetDataIdDepth({
                    'id': _this184.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this184.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this184.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['price'];
                        amount = order['amount'];
                        _timestamp6 = order['timestamp'] * 1000;

                        result[side].push([price, amount, _timestamp6]);
                    }
                }
                result['bids'] = _this184.sortBy(result['bids'], 0, true);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this185 = this;

            return Promise.resolve().then(function () {
                return _this185.publicGetDataIdTicker({
                    'id': _this185.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = ticker['at'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this185.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': parseFloat(ticker['open']),
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['price']),
                    'change': undefined,
                    'percentage': parseFloat(ticker['variation']),
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetDataIdTrades({
                'id': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'type': this.capitalize(type) + 'Order',
                'currency': this.productId(product),
                'direction': side,
                'amount': amount
            };
            if (type == 'market') order['price'] = price;
            return this.privatePostUserOrders(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'orderNumber': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                body = this.json(params);
                var nonce = this.nonce().toString();
                var auth = nonce + url + body;
                headers = {
                    'Api-Key': this.apiKey,
                    'Api-Signature': this.hmac(this.encode(auth), this.secret),
                    'Api-Nonce': nonce,
                    'Content-Type': 'application/json'
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var poloniex = {

        'id': 'poloniex',
        'name': 'Poloniex',
        'countries': 'US',
        'rateLimit': 500, // 6 calls per second
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766817-e9456312-5ee6-11e7-9b3c-b628ca5626a5.jpg',
            'api': {
                'public': 'https://poloniex.com/public',
                'private': 'https://poloniex.com/tradingApi'
            },
            'www': 'https://poloniex.com',
            'doc': ['https://poloniex.com/support/api/', 'http://pastebin.com/dMX7mZE0']
        },
        'api': {
            'public': {
                'get': ['return24hVolume', 'returnChartData', 'returnCurrencies', 'returnLoanOrders', 'returnOrderBook', 'returnTicker', 'returnTradeHistory']
            },
            'private': {
                'post': ['buy', 'cancelLoanOffer', 'cancelOrder', 'closeMarginPosition', 'createLoanOffer', 'generateNewAddress', 'getMarginPosition', 'marginBuy', 'marginSell', 'moveOrder', 'returnActiveLoans', 'returnAvailableAccountBalances', 'returnBalances', 'returnCompleteBalances', 'returnDepositAddresses', 'returnDepositsWithdrawals', 'returnFeeInfo', 'returnLendingHistory', 'returnMarginAccountSummary', 'returnOpenLoanOffers', 'returnOpenOrders', 'returnOrderTrades', 'returnTradableBalances', 'returnTradeHistory', 'sell', 'toggleAutoRenew', 'transferBalance', 'withdraw']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                id,
                product,
                _id$split3,
                _id$split4,
                quote,
                base,
                symbol,
                _this186 = this;

            return Promise.resolve().then(function () {
                return _this186.publicGetReturnTicker();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = products[id];
                    _id$split3 = id.split('_');
                    _id$split4 = _slicedToArray(_id$split3, 2);
                    quote = _id$split4[0];
                    base = _id$split4[1];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostReturnCompleteBalances({
                'account': 'all'
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this187 = this;

            return Promise.resolve().then(function () {
                return _this187.publicGetReturnOrderBook({
                    'currencyPair': _this187.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this187.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this187.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                _this188 = this;

            return Promise.resolve().then(function () {
                p = _this188.product(product);
                return _this188.publicGetReturnTicker();
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers[p['id']];
                timestamp = _this188.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this188.iso8601(timestamp),
                    'high': parseFloat(ticker['high24hr']),
                    'low': parseFloat(ticker['low24hr']),
                    'bid': parseFloat(ticker['highestBid']),
                    'ask': parseFloat(ticker['lowestAsk']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': undefined,
                    'change': parseFloat(ticker['percentChange']),
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['baseVolume']),
                    'quoteVolume': parseFloat(ticker['quoteVolume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetReturnTradeHistory({
                'currencyPair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side);
            return this[method](this.extend({
                'currencyPair': this.productId(product),
                'rate': price,
                'amount': amount
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'orderNumber': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            var query = this.extend({ 'command': path }, params);
            if (type == 'public') {
                url += '?' + this.urlencode(query);
            } else {
                query['nonce'] = this.nonce();
                body = this.urlencode(query);
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var quadrigacx = {

        'id': 'quadrigacx',
        'name': 'QuadrigaCX',
        'countries': 'CA',
        'rateLimit': 1000,
        'version': 'v2',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766825-98a6d0de-5ee7-11e7-9fa4-38e11a2c6f52.jpg',
            'api': 'https://api.quadrigacx.com',
            'www': 'https://www.quadrigacx.com',
            'doc': 'https://www.quadrigacx.com/api_info'
        },
        'api': {
            'public': {
                'get': ['order_book', 'ticker', 'transactions']
            },
            'private': {
                'post': ['balance', 'bitcoin_deposit_address', 'bitcoin_withdrawal', 'buy', 'cancel_order', 'ether_deposit_address', 'ether_withdrawal', 'lookup_order', 'open_orders', 'sell', 'user_transactions']
            }
        },
        'products': {
            'BTC/CAD': { 'id': 'btc_cad', 'symbol': 'BTC/CAD', 'base': 'BTC', 'quote': 'CAD' },
            'BTC/USD': { 'id': 'btc_usd', 'symbol': 'BTC/USD', 'base': 'BTC', 'quote': 'USD' },
            'ETH/BTC': { 'id': 'eth_btc', 'symbol': 'ETH/BTC', 'base': 'ETH', 'quote': 'BTC' },
            'ETH/CAD': { 'id': 'eth_cad', 'symbol': 'ETH/CAD', 'base': 'ETH', 'quote': 'CAD' }
        },

        fetchBalance: function fetchBalance() {
            var balances,
                result,
                c,
                currency,
                lowercase,
                account,
                _this189 = this;

            return Promise.resolve().then(function () {
                return _this189.privatePostBalance();
            }).then(function (_resp) {
                balances = _resp;
                result = { 'info': balances };

                for (c = 0; c < _this189.currencies.length; c++) {
                    currency = _this189.currencies[c];
                    lowercase = currency.toLowerCase();
                    account = {
                        'free': parseFloat(balances[lowercase + '_available']),
                        'used': parseFloat(balances[lowercase + '_reserved']),
                        'total': parseFloat(balances[lowercase + '_balance'])
                    };

                    result[currency] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this190 = this;

            return Promise.resolve().then(function () {
                return _this190.publicGetOrderBook({
                    'book': _this190.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = parseInt(orderbook['timestamp']) * 1000;
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this190.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this191 = this;

            return Promise.resolve().then(function () {
                return _this191.publicGetTicker({
                    'book': _this191.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = parseInt(ticker['timestamp']) * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this191.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': parseFloat(ticker['vwap']),
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTransactions({
                'book': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var method = 'privatePost' + this.capitalize(side);
            var order = {
                'amount': amount,
                'book': this.productId(product)
            };
            if (type == 'limit') order['price'] = price;
            return this[method](this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + path;
            if (type == 'public') {
                url += '?' + this.urlencode(params);
            } else {
                if (!this.uid) throw new AuthenticationError(this.id + ' requires `' + this.id + '.uid` property for authentication');
                var nonce = this.nonce();
                var request = [nonce.toString(), this.uid, this.apiKey].join('');
                var signature = this.hmac(this.encode(request), this.encode(this.secret));
                var query = this.extend({
                    'key': this.apiKey,
                    'nonce': nonce,
                    'signature': signature
                }, params);
                body = this.json(query);
                headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var quoine = {

        'id': 'quoine',
        'name': 'QUOINE',
        'countries': ['JP', 'SG', 'VN'],
        'version': '2',
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766844-9615a4e8-5ee8-11e7-8814-fcd004db8cdd.jpg',
            'api': 'https://api.quoine.com',
            'www': 'https://www.quoine.com',
            'doc': 'https://developers.quoine.com'
        },
        'api': {
            'public': {
                'get': ['products', 'products/{id}', 'products/{id}/price_levels', 'executions', 'ir_ladders/{currency}']
            },
            'private': {
                'get': ['accounts/balance', 'crypto_accounts', 'executions/me', 'fiat_accounts', 'loan_bids', 'loans', 'orders', 'orders/{id}', 'orders/{id}/trades', 'trades', 'trades/{id}/loans', 'trading_accounts', 'trading_accounts/{id}'],
                'post': ['fiat_accounts', 'loan_bids', 'orders'],
                'put': ['loan_bids/{id}/close', 'loans/{id}', 'orders/{id}', 'orders/{id}/cancel', 'trades/{id}', 'trades/{id}/close', 'trades/close_all', 'trading_accounts/{id}']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this192 = this;

            return Promise.resolve().then(function () {
                return _this192.publicGetProducts();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['id'];
                    base = product['base_currency'];
                    quote = product['quoted_currency'];
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetAccountsBalance();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this193 = this;

            return Promise.resolve().then(function () {
                return _this193.publicGetProductsIdPriceLevels({
                    'id': _this193.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this193.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this193.iso8601(timestamp)
                };
                sides = { 'bids': 'buy_price_levels', 'asks': 'sell_price_levels' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this194 = this;

            return Promise.resolve().then(function () {
                return _this194.publicGetProductsId({
                    'id': _this194.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this194.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this194.iso8601(timestamp),
                    'high': parseFloat(ticker['high_market_ask']),
                    'low': parseFloat(ticker['low_market_bid']),
                    'bid': parseFloat(ticker['market_bid']),
                    'ask': parseFloat(ticker['market_ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last_traded_price']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['volume_24h']),
                    'quoteVolume': undefined,
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetExecutions({
                'product_id': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'order_type': type,
                'product_id': this.productId(product),
                'side': side,
                'quantity': amount
            };
            if (type == 'limit') order['price'] = price;
            return this.privatePostOrders(this.extend({
                'order': order
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePutOrdersIdCancel(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            headers = {
                'X-Quoine-API-Version': this.version,
                'Content-type': 'application/json'
            };
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                var request = {
                    'path': url,
                    'nonce': nonce,
                    'token_id': this.apiKey,
                    'iat': Math.floor(nonce / 1000) // issued at
                };
                if (Object.keys(query).length) body = this.json(query);
                headers['X-Quoine-Auth'] = this.jwt(request, this.secret);
            }
            return this.fetch(this.urls['api'] + url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var southxchange = {

        'id': 'southxchange',
        'name': 'SouthXchange',
        'countries': 'AR', // Argentina
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27838912-4f94ec8a-60f6-11e7-9e5d-bbf9bd50a559.jpg',
            'api': 'https://www.southxchange.com/api',
            'www': 'https://www.southxchange.com',
            'doc': 'https://www.southxchange.com/Home/Api'
        },
        'api': {
            'public': {
                'get': ['markets', 'price/{symbol}', 'prices', 'book/{symbol}', 'trades/{symbol}']
            },
            'private': {
                'post': ['cancelMarketOrders', 'cancelOrder', 'generatenewaddress', 'listOrders', 'listBalances', 'placeOrder', 'withdraw']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                base,
                quote,
                symbol,
                id,
                _this195 = this;

            return Promise.resolve().then(function () {
                return _this195.publicGetMarkets();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    base = product[0];
                    quote = product[1];
                    symbol = base + '/' + quote;
                    id = symbol;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostListBalances();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this196 = this;

            return Promise.resolve().then(function () {
                return _this196.publicGetBookSymbol({
                    'symbol': _this196.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this196.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this196.iso8601(timestamp)
                };
                sides = { 'bids': 'BuyOrders', 'asks': 'SellOrders' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['Price']);
                        amount = parseFloat(order['Amount']);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this197 = this;

            return Promise.resolve().then(function () {
                return _this197.publicGetPriceSymbol({
                    'symbol': _this197.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this197.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this197.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': parseFloat(ticker['Bid']),
                    'ask': parseFloat(ticker['Ask']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['Last']),
                    'change': parseFloat(ticker['Variation24Hr']),
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['Volume24Hr']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTradesSymbol({
                'symbol': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            var order = {
                'listingCurrency': p['base'],
                'referenceCurrency': p['quote'],
                'type': side,
                'amount': amount
            };
            if (type == 'limit') order['limitPrice'] = price;
            return this.privatePostPlaceOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'orderCode': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'private') {
                var nonce = this.nonce();
                query = this.extend({
                    'key': this.apiKey,
                    'nonce': nonce
                }, query);
                body = this.json(query);
                headers = {
                    'Content-Type': 'application/json',
                    'Hash': this.hmac(this.encode(body), this.secret, 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var surbitcoin = extend(blinktrade, {
        'id': 'surbitcoin',
        'name': 'SurBitcoin',
        'countries': 'VE',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27991511-f0a50194-6481-11e7-99b5-8f02932424cc.jpg',
            'api': {
                'public': 'https://api.blinktrade.com/api',
                'private': 'https://api.blinktrade.com/tapi'
            },
            'www': 'https://surbitcoin.com',
            'doc': 'https://blinktrade.com/docs'
        },
        'comment': 'Blinktrade API',
        'products': {
            'BTC/VEF': { 'id': 'BTCVEF', 'symbol': 'BTC/VEF', 'base': 'BTC', 'quote': 'VEF', 'brokerId': 1, 'broker': 'SurBitcoin' }
        }
    });

    //-----------------------------------------------------------------------------

    var therock = {

        'id': 'therock',
        'name': 'TheRockTrading',
        'countries': 'MT',
        'rateLimit': 1000,
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766869-75057fa2-5ee9-11e7-9a6f-13e641fa4707.jpg',
            'api': 'https://api.therocktrading.com',
            'www': 'https://therocktrading.com',
            'doc': ['https://api.therocktrading.com/doc/v1/index.html', 'https://api.therocktrading.com/doc/']
        },
        'api': {
            'public': {
                'get': ['funds/{id}/orderbook', 'funds/{id}/ticker', 'funds/{id}/trades', 'funds/tickers']
            },
            'private': {
                'get': ['balances', 'balances/{id}', 'discounts', 'discounts/{id}', 'funds', 'funds/{id}', 'funds/{id}/trades', 'funds/{fund_id}/orders', 'funds/{fund_id}/orders/{id}', 'funds/{fund_id}/position_balances', 'funds/{fund_id}/positions', 'funds/{fund_id}/positions/{id}', 'transactions', 'transactions/{id}', 'withdraw_limits/{id}', 'withdraw_limits'],
                'post': ['atms/withdraw', 'funds/{fund_id}/orders'],
                'delete': ['funds/{fund_id}/orders/{id}', 'funds/{fund_id}/orders/remove_all']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this198 = this;

            return Promise.resolve().then(function () {
                return _this198.publicGetFundsTickers();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products['tickers'].length; p++) {
                    product = products['tickers'][p];
                    id = product['fund_id'];
                    base = id.slice(0, 3);
                    quote = id.slice(3, 6);
                    symbol = base + '/' + quote;

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetBalances();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this199 = this;

            return Promise.resolve().then(function () {
                return _this199.publicGetFundsIdOrderbook({
                    'id': _this199.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this199.parse8601(orderbook['date']);
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this199.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['amount']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this200 = this;

            return Promise.resolve().then(function () {
                return _this200.publicGetFundsIdTicker({
                    'id': _this200.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this200.parse8601(ticker['date']);

                return {
                    'timestamp': timestamp,
                    'datetime': _this200.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['bid']),
                    'ask': parseFloat(ticker['ask']),
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': parseFloat(ticker['close']),
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['volume_traded']),
                    'quoteVolume': parseFloat(ticker['volume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetFundsIdTrades({
                'id': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            return this.privatePostFundsFundIdOrders(this.extend({
                'fund_id': this.productId(product),
                'side': side,
                'amount': amount,
                'price': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privateDeleteFundsFundIdOrdersId(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + this.version + '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'private') {
                var nonce = this.nonce().toString();
                var auth = nonce + url;
                headers = {
                    'X-TRT-KEY': this.apiKey,
                    'X-TRT-NONCE': nonce,
                    'X-TRT-SIGN': this.hmac(this.encode(auth), this.encode(this.secret), 'sha512')
                };
                if (Object.keys(query).length) {
                    body = this.json(query);
                    headers['Content-Type'] = 'application/json';
                }
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var urdubit = extend(blinktrade, {
        'id': 'urdubit',
        'name': 'UrduBit',
        'countries': 'PK',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27991453-156bf3ae-6480-11e7-82eb-7295fe1b5bb4.jpg',
            'api': {
                'public': 'https://api.blinktrade.com/api',
                'private': 'https://api.blinktrade.com/tapi'
            },
            'www': 'https://urdubit.com',
            'doc': 'https://blinktrade.com/docs'
        },
        'comment': 'Blinktrade API',
        'products': {
            'BTC/PKR': { 'id': 'BTCPKR', 'symbol': 'BTC/PKR', 'base': 'BTC', 'quote': 'PKR', 'brokerId': 8, 'broker': 'UrduBit' }
        }
    });

    //-----------------------------------------------------------------------------

    var vaultoro = {

        'id': 'vaultoro',
        'name': 'Vaultoro',
        'countries': 'CH',
        'rateLimit': 1000,
        'version': '1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766880-f205e870-5ee9-11e7-8fe2-0d5b15880752.jpg',
            'api': 'https://api.vaultoro.com',
            'www': 'https://www.vaultoro.com',
            'doc': 'https://api.vaultoro.com'
        },
        'api': {
            'public': {
                'get': ['bidandask', 'buyorders', 'latest', 'latesttrades', 'markets', 'orderbook', 'sellorders', 'transactions/day', 'transactions/hour', 'transactions/month']
            },
            'private': {
                'get': ['balance', 'mytrades', 'orders'],
                'post': ['buy/{symbol}/{type}', 'cancel/{id}', 'sell/{symbol}/{type}', 'withdraw']
            }
        },

        fetchProducts: function fetchProducts() {
            var result,
                products,
                product,
                base,
                quote,
                symbol,
                baseId,
                quoteId,
                id,
                _this201 = this;

            return Promise.resolve().then(function () {
                result = [];
                return _this201.publicGetMarkets();
            }).then(function (_resp) {
                products = _resp;
                product = products['data'];
                base = product['BaseCurrency'];
                quote = product['MarketCurrency'];
                symbol = base + '/' + quote;
                baseId = base;
                quoteId = quote;
                id = product['MarketName'];

                result.push({
                    'id': id,
                    'symbol': symbol,
                    'base': base,
                    'quote': quote,
                    'baseId': baseId,
                    'quoteId': quoteId,
                    'info': product
                });
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetBalance();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this202 = this;

            return Promise.resolve().then(function () {
                return _this202.publicGetOrderbook();
            }).then(function (_resp) {
                response = _resp;
                orderbook = {
                    'bids': response['data'][0]['b'],
                    'asks': response['data'][1]['s']
                };
                timestamp = _this202.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this202.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = order['Gold_Price'];
                        amount = order['Gold_Amount'];

                        result[side].push([price, amount]);
                    }
                }
                result['bids'] = _this202.sortBy(result['bids'], 0, true);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var quote,
                bidsLength,
                bid,
                ask,
                response,
                ticker,
                timestamp,
                _this203 = this;

            return Promise.resolve().then(function () {
                return _this203.publicGetBidandask();
            }).then(function (_resp) {
                quote = _resp;
                bidsLength = quote['bids'].length;
                bid = quote['bids'][bidsLength - 1];
                ask = quote['asks'][0];
                return _this203.publicGetMarkets();
            }).then(function (_resp) {
                response = _resp;
                ticker = response['data'];
                timestamp = _this203.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this203.iso8601(timestamp),
                    'high': parseFloat(ticker['24hHigh']),
                    'low': parseFloat(ticker['24hLow']),
                    'bid': bid[0],
                    'ask': ask[0],
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['LastPrice']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['24hVolume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTransactionsDay();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var p = this.product(product);
            var method = 'privatePost' + this.capitalize(side) + 'SymbolType';
            return this[method](this.extend({
                'symbol': p['quoteId'].toLowerCase(),
                'type': type,
                'gld': amount,
                'price': price || 1
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelId(this.extend({
                'id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/';
            if (type == 'public') {
                url += path;
            } else {
                var nonce = this.nonce();
                url += this.version + '/' + this.implodeParams(path, params);
                var query = this.extend({
                    'nonce': nonce,
                    'apikey': this.apiKey
                }, this.omit(params, this.extractParams(path)));
                url += '?' + this.urlencode(query);
                headers = {
                    'Content-Type': 'application/json',
                    'X-Signature': this.hmac(this.encode(url), this.encode(this.secret))
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var vbtc = extend(blinktrade, {
        'id': 'vbtc',
        'name': 'VBTC',
        'countries': 'VN',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27991481-1f53d1d8-6481-11e7-884e-21d17e7939db.jpg',
            'api': {
                'public': 'https://api.blinktrade.com/api',
                'private': 'https://api.blinktrade.com/tapi'
            },
            'www': 'https://vbtc.exchange',
            'doc': 'https://blinktrade.com/docs'
        },
        'comment': 'Blinktrade API',
        'products': {
            'BTC/VND': { 'id': 'BTCVND', 'symbol': 'BTC/VND', 'base': 'BTC', 'quote': 'VND', 'brokerId': 3, 'broker': 'VBTC' }
        }
    });

    //-----------------------------------------------------------------------------

    var virwox = {

        'id': 'virwox',
        'name': 'VirWoX',
        'countries': 'AT',
        'rateLimit': 1000,
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766894-6da9d360-5eea-11e7-90aa-41f2711b7405.jpg',
            'api': {
                'public': 'http://api.virwox.com/api/json.php',
                'private': 'https://www.virwox.com/api/trading.php'
            },
            'www': 'https://www.virwox.com',
            'doc': 'https://www.virwox.com/developers.php'
        },
        'api': {
            'public': {
                'get': ['getInstruments', 'getBestPrices', 'getMarketDepth', 'estimateMarketOrder', 'getTradedPriceVolume', 'getRawTradeData', 'getStatistics', 'getTerminalList', 'getGridList', 'getGridStatistics'],
                'post': ['getInstruments', 'getBestPrices', 'getMarketDepth', 'estimateMarketOrder', 'getTradedPriceVolume', 'getRawTradeData', 'getStatistics', 'getTerminalList', 'getGridList', 'getGridStatistics']
            },
            'private': {
                'get': ['cancelOrder', 'getBalances', 'getCommissionDiscount', 'getOrders', 'getTransactions', 'placeOrder'],
                'post': ['cancelOrder', 'getBalances', 'getCommissionDiscount', 'getOrders', 'getTransactions', 'placeOrder']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                product,
                id,
                symbol,
                base,
                quote,
                _this204 = this;

            return Promise.resolve().then(function () {
                return _this204.publicGetInstruments();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products['result']);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    product = products['result'][keys[p]];
                    id = product['instrumentID'];
                    symbol = product['symbol'];
                    base = product['longCurrency'];
                    quote = product['shortCurrency'];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privatePostGetBalances();
        },
        fetchBestPrices: function fetchBestPrices(product) {
            return this.publicPostGetBestPrices({
                'symbols': [this.symbol(product)]
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var response,
                orderbook,
                timestamp,
                result,
                sides,
                keys,
                k,
                key,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this205 = this;

            return Promise.resolve().then(function () {
                return _this205.publicPostGetMarketDepth({
                    'symbols': [_this205.symbol(product)],
                    'buyDepth': 100,
                    'sellDepth': 100
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response['result'][0];
                timestamp = _this205.milliseconds();
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this205.iso8601(timestamp)
                };
                sides = { 'bids': 'buy', 'asks': 'sell' };
                keys = Object.keys(sides);

                for (k = 0; k < keys.length; k++) {
                    key = keys[k];
                    side = sides[key];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['price']);
                        amount = parseFloat(order['volume']);

                        result[key].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var end,
                start,
                response,
                tickers,
                keys,
                length,
                lastKey,
                ticker,
                timestamp,
                _this206 = this;

            return Promise.resolve().then(function () {
                end = _this206.milliseconds();
                start = end - 86400000;
                return _this206.publicGetTradedPriceVolume({
                    'instrument': _this206.symbol(product),
                    'endDate': _this206.yyyymmddhhmmss(end),
                    'startDate': _this206.yyyymmddhhmmss(start),
                    'HLOC': 1
                });
            }).then(function (_resp) {
                response = _resp;
                tickers = response['result']['priceVolumeList'];
                keys = Object.keys(tickers);
                length = keys.length;
                lastKey = keys[length - 1];
                ticker = tickers[lastKey];
                timestamp = _this206.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this206.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': undefined,
                    'ask': undefined,
                    'vwap': undefined,
                    'open': parseFloat(ticker['open']),
                    'close': parseFloat(ticker['close']),
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': parseFloat(ticker['longVolume']),
                    'quoteVolume': parseFloat(ticker['shortVolume']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetRawTradeData({
                'instrument': this.symbol(product),
                'timespan': 3600
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'instrument': this.symbol(product),
                'orderType': side.toUpperCase(),
                'amount': amount
            };
            if (type == 'limit') order['price'] = price;
            return this.privatePostPlaceOrder(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privatePostCancelOrder(this.extend({
                'orderID': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'][type];
            var auth = {};
            if (type == 'public') {
                auth['key'] = this.apiKey;
                auth['user'] = this.login;
                auth['pass'] = this.password;
            }
            var nonce = this.nonce();
            if (method == 'GET') {
                url += '?' + this.urlencode(this.extend({
                    'method': path,
                    'id': nonce
                }, auth, params));
            } else {
                headers = { 'Content-type': 'application/json' };
                body = this.json({
                    'method': path,
                    'params': this.extend(auth, params),
                    'id': nonce
                });
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var xbtce = {

        'id': 'xbtce',
        'name': 'xBTCe',
        'countries': 'RU',
        'rateLimit': 2000, // responses are cached every 2 seconds
        'version': 'v1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28059414-e235970c-662c-11e7-8c3a-08e31f78684b.jpg',
            'api': 'https://cryptottlivewebapi.xbtce.net:8443/api',
            'www': 'https://www.xbtce.com',
            'doc': ['https://www.xbtce.com/tradeapi', 'https://support.xbtce.info/Knowledgebase/Article/View/52/25/xbtce-exchange-api']
        },
        'api': {
            'public': {
                'get': ['currency', 'currency/{filter}', 'level2', 'level2/{filter}', 'quotehistory/{symbol}/{periodicity}/bars/ask', 'quotehistory/{symbol}/{periodicity}/bars/bid', 'quotehistory/{symbol}/level2', 'quotehistory/{symbol}/ticks', 'symbol', 'symbol/{filter}', 'tick', 'tick/{filter}', 'ticker', 'ticker/{filter}', 'tradesession']
            },
            'private': {
                'get': ['tradeserverinfo', 'tradesession', 'currency', 'currency/{filter}', 'level2', 'level2/{filter}', 'symbol', 'symbol/{filter}', 'tick', 'tick/{filter}', 'account', 'asset', 'asset/{id}', 'position', 'position/{id}', 'trade', 'trade/{id}', 'quotehistory/{symbol}/{periodicity}/bars/ask', 'quotehistory/{symbol}/{periodicity}/bars/ask/info', 'quotehistory/{symbol}/{periodicity}/bars/bid', 'quotehistory/{symbol}/{periodicity}/bars/bid/info', 'quotehistory/{symbol}/level2', 'quotehistory/{symbol}/level2/info', 'quotehistory/{symbol}/periodicities', 'quotehistory/{symbol}/ticks', 'quotehistory/{symbol}/ticks/info', 'quotehistory/cache/{symbol}/{periodicity}/bars/ask', 'quotehistory/cache/{symbol}/{periodicity}/bars/bid', 'quotehistory/cache/{symbol}/level2', 'quotehistory/cache/{symbol}/ticks', 'quotehistory/symbols', 'quotehistory/version'],
                'post': ['trade', 'tradehistory'],
                'put': ['trade'],
                'delete': ['trade']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                base,
                quote,
                symbol,
                _this207 = this;

            return Promise.resolve().then(function () {
                return _this207.privateGetSymbol();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['Symbol'];
                    base = product['MarginCurrency'];
                    quote = product['ProfitCurrency'];

                    if (base == 'DSH') {
                        base = 'DASH';
                    }symbol = base + '/' + quote;

                    symbol = product['IsTradeAllowed'] ? symbol : id;
                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.privateGetAsset();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                Side,
                orders,
                i,
                order,
                price,
                amount,
                _this208 = this;

            return Promise.resolve().then(function () {
                p = _this208.product(product);
                return _this208.privateGetLevel2Filter({
                    'filter': p['id']
                });
            }).then(function (_resp) {
                orderbook = _resp;

                orderbook = orderbook[0];
                timestamp = orderbook['Timestamp'];
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this208.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    Side = _this208.capitalize(side);
                    orders = orderbook[Side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order['Price']);
                        amount = parseFloat(order['Volume']);

                        result[side].push([price, amount]);
                    }
                }
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                bid,
                ask,
                _this209 = this;

            return Promise.resolve().then(function () {
                p = _this209.product(product);
                return _this209.privateGetTickFilter({
                    'filter': p['id']
                });
            }).then(function (_resp) {
                tickers = _resp;

                tickers = _this209.indexBy(tickers, 'Symbol');
                ticker = tickers[p['id']];
                timestamp = ticker['Timestamp'];
                bid = undefined;
                ask = undefined;

                if ('BestBid' in ticker) {
                    bid = ticker['BestBid']['Price'];
                }if ('BestAsk' in ticker) {
                    ask = ticker['BestAsk']['Price'];
                }return {
                    'timestamp': timestamp,
                    'datetime': _this209.iso8601(timestamp),
                    'high': undefined,
                    'low': undefined,
                    'bid': bid,
                    'ask': ask,
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': undefined,
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': undefined,
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            // no method for trades?
            return this.privateGetTrade();
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            return this.tapiPostTrade(this.extend({
                'pair': this.productId(product),
                'type': side,
                'amount': amount,
                'rate': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.privateDeleteTrade(this.extend({
                'Type': 'Cancel',
                'Id': id
            }, params));
        },
        nonce: function nonce() {
            return this.milliseconds();
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'api';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            if (!this.apiKey) throw new AuthenticationError(this.id + ' requires apiKey for all requests, their public API is always busy');
            if (!this.uid) throw new AuthenticationError(this.id + ' requires uid property for authentication and trading');
            var url = this.urls['api'] + '/' + this.version;
            if (type == 'public') url += '/' + type;
            url += '/' + this.implodeParams(path, params);
            var query = this.omit(params, this.extractParams(path));
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce().toString();
                if (Object.keys(query).length) body = this.json(query);else body = '';
                var auth = nonce + this.uid + this.apiKey + method + url + body;
                var signature = this.hmac(this.encode(auth), this.encode(this.secret), 'sha256', 'base64');
                var credentials = [this.uid, this.apiKey, nonce, signature].join(':');
                headers = {
                    'Accept-Encoding': 'gzip, deflate',
                    'Authorization': 'HMAC ' + credentials,
                    'Content-Type': 'application/json',
                    'Content-Length': body.length
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var yobit = {

        'id': 'yobit',
        'name': 'YoBit',
        'countries': 'RU',
        'rateLimit': 2000, // responses are cached every 2 seconds
        'version': '3',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766910-cdcbfdae-5eea-11e7-9859-03fea873272d.jpg',
            'api': 'https://yobit.net',
            'www': 'https://www.yobit.net',
            'doc': 'https://www.yobit.net/en/api/'
        },
        'api': {
            'api': {
                'get': ['depth/{pairs}', 'info', 'ticker/{pairs}', 'trades/{pairs}']
            },
            'tapi': {
                'post': ['ActiveOrders', 'CancelOrder', 'GetDepositAddress', 'getInfo', 'OrderInfo', 'Trade', 'TradeHistory', 'WithdrawCoinsToAddress']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                keys,
                result,
                p,
                id,
                product,
                symbol,
                _symbol$split13,
                _symbol$split14,
                base,
                quote,
                _this210 = this;

            return Promise.resolve().then(function () {
                return _this210.apiGetInfo();
            }).then(function (_resp) {
                products = _resp;
                keys = Object.keys(products['pairs']);
                result = [];

                for (p = 0; p < keys.length; p++) {
                    id = keys[p];
                    product = products['pairs'][id];
                    symbol = id.toUpperCase().replace('_', '/');
                    _symbol$split13 = symbol.split('/');
                    _symbol$split14 = _slicedToArray(_symbol$split13, 2);
                    base = _symbol$split14[0];
                    quote = _symbol$split14[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.tapiPostGetInfo();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                response,
                orderbook,
                timestamp,
                bids,
                asks,
                result,
                _this211 = this;

            return Promise.resolve().then(function () {
                p = _this211.product(product);
                return _this211.apiGetDepthPairs({
                    'pairs': p['id']
                });
            }).then(function (_resp) {
                response = _resp;
                orderbook = response[p['id']];
                timestamp = _this211.milliseconds();
                bids = 'bids' in orderbook ? orderbook['bids'] : [];
                asks = 'asks' in orderbook ? orderbook['asks'] : [];
                result = {
                    'bids': bids,
                    'asks': asks,
                    'timestamp': timestamp,
                    'datetime': _this211.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var p,
                tickers,
                ticker,
                timestamp,
                _this212 = this;

            return Promise.resolve().then(function () {
                p = _this212.product(product);
                return _this212.apiGetTickerPairs({
                    'pairs': p['id']
                });
            }).then(function (_resp) {
                tickers = _resp;
                ticker = tickers[p['id']];
                timestamp = ticker['updated'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this212.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': parseFloat(ticker['avg']),
                    'baseVolume': parseFloat(ticker['vol_cur']),
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.apiGetTradesPairs({
                'pairs': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            return this.tapiPostTrade(this.extend({
                'pair': this.productId(product),
                'type': side,
                'amount': amount,
                'rate': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.tapiPostCancelOrder(this.extend({
                'order_id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'api';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + type;
            if (type == 'api') {
                url += '/' + this.version + '/' + this.implodeParams(path, params);
                var query = this.omit(params, this.extractParams(path));
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce();
                var _query2 = this.extend({ 'method': path, 'nonce': nonce }, params);
                body = this.urlencode(_query2);
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'key': this.apiKey,
                    'sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var yunbi = {

        'id': 'yunbi',
        'name': 'YUNBI',
        'countries': 'CN',
        'rateLimit': 1000,
        'version': 'v2',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/28570548-4d646c40-7147-11e7-9cf6-839b93e6d622.jpg',
            'api': 'https://yunbi.com',
            'www': 'https://yunbi.com',
            'doc': ['https://yunbi.com/documents/api/guide', 'https://yunbi.com/swagger/']
        },
        'api': {
            'public': {
                'get': ['tickers', 'tickers/{market}', 'markets', 'order_book', 'k', 'depth', 'trades', 'k_with_pending_trades', 'timestamp', 'addresses/{address}', 'partners/orders/{id}/trades']
            },
            'private': {
                'get': ['deposits', 'members/me', 'deposit', 'deposit_address', 'order', 'orders', 'trades/my'],
                'post': ['order/delete', 'orders', 'orders/multi', 'orders/clear']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                symbol,
                _symbol$split15,
                _symbol$split16,
                base,
                quote,
                _this213 = this;

            return Promise.resolve().then(function () {
                return _this213.publicGetMarkets();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['id'];
                    symbol = product['name'];
                    _symbol$split15 = symbol.split('/');
                    _symbol$split16 = _slicedToArray(_symbol$split15, 2);
                    base = _symbol$split16[0];
                    quote = _symbol$split16[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            var response,
                balances,
                result,
                b,
                balance,
                currency,
                uppercase,
                account,
                _this214 = this;

            return Promise.resolve().then(function () {
                return _this214.privateGetMembersMe();
            }).then(function (_resp) {
                response = _resp;
                balances = response['accounts'];
                result = { 'info': balances };

                for (b = 0; b < balances.length; b++) {
                    balance = balances[b];
                    currency = balance['currency'];
                    uppercase = currency.toUpperCase();
                    account = {
                        'free': parseFloat(balance['balance']),
                        'used': parseFloat(balance['locked']),
                        'total': undefined
                    };

                    account['total'] = _this214.sum(account['free'], account['used']);
                    result[uppercase] = account;
                }
                return result;
            });
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var p,
                orderbook,
                timestamp,
                result,
                sides,
                s,
                side,
                orders,
                i,
                order,
                price,
                amount,
                _this215 = this;

            return Promise.resolve().then(function () {
                p = _this215.product(product);
                return _this215.publicGetDepth({
                    'market': p['id']
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = orderbook['timestamp'] * 1000;
                result = {
                    'bids': [],
                    'asks': [],
                    'timestamp': timestamp,
                    'datetime': _this215.iso8601(timestamp)
                };
                sides = ['bids', 'asks'];

                for (s = 0; s < sides.length; s++) {
                    side = sides[s];
                    orders = orderbook[side];

                    for (i = 0; i < orders.length; i++) {
                        order = orders[i];
                        price = parseFloat(order[0]);
                        amount = parseFloat(order[1]);

                        result[side].push([price, amount]);
                    }
                }
                result['bids'] = _this215.sortBy(result['bids'], 0, true);
                result['asks'] = _this215.sortBy(result['asks'], 0);
                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var response,
                ticker,
                timestamp,
                _this216 = this;

            return Promise.resolve().then(function () {
                return _this216.publicGetTickersMarket({
                    'market': _this216.productId(product)
                });
            }).then(function (_resp) {
                response = _resp;
                ticker = response['ticker'];
                timestamp = response['at'] * 1000;

                return {
                    'timestamp': timestamp,
                    'datetime': _this216.iso8601(timestamp),
                    'high': parseFloat(ticker['high']),
                    'low': parseFloat(ticker['low']),
                    'bid': parseFloat(ticker['buy']),
                    'ask': parseFloat(ticker['sell']),
                    'vwap': undefined,
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': parseFloat(ticker['last']),
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': parseFloat(ticker['vol']),
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.publicGetTrades({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            var order = {
                'market': this.productId(product),
                'side': side,
                'volume': amount,
                'ord_type': type
            };
            if (type == 'market') {
                order['price'] = price;
            }
            return this.privatePostOrders(this.extend(order, params));
        },
        cancelOrder: function cancelOrder(id) {
            return this.privatePostOrderDelete({ 'id': id });
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'public';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var request = '/api/' + this.version + '/' + this.implodeParams(path, params) + '.json';
            var query = this.omit(params, this.extractParams(path));
            var url = this.urls['api'] + request;
            if (type == 'public') {
                if (Object.keys(query).length) url += '?' + this.urlencode(query);
            } else {
                var nonce = this.nonce().toString();
                var _query3 = this.urlencode(this.keysort(this.extend({
                    'access_key': this.apiKey,
                    'tonce': nonce
                }, params)));
                var auth = method + '|' + request + '|' + _query3;
                var signature = this.hmac(this.encode(auth), this.encode(this.secret));
                var suffix = _query3 + '&signature=' + signature;
                if (method == 'GET') {
                    url += '?' + suffix;
                } else {
                    body = suffix;
                    headers = {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': body.length
                    };
                }
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //-----------------------------------------------------------------------------

    var zaif = {

        'id': 'zaif',
        'name': 'Zaif',
        'countries': 'JP',
        'rateLimit': 2000,
        'version': '1',
        'urls': {
            'logo': 'https://user-images.githubusercontent.com/1294454/27766927-39ca2ada-5eeb-11e7-972f-1b4199518ca6.jpg',
            'api': 'https://api.zaif.jp',
            'www': 'https://zaif.jp',
            'doc': ['http://techbureau-api-document.readthedocs.io/ja/latest/index.html', 'https://corp.zaif.jp/api-docs', 'https://corp.zaif.jp/api-docs/api_links', 'https://www.npmjs.com/package/zaif.jp', 'https://github.com/you21979/node-zaif']
        },
        'api': {
            'api': {
                'get': ['depth/{pair}', 'currencies/{pair}', 'currencies/all', 'currency_pairs/{pair}', 'currency_pairs/all', 'last_price/{pair}', 'ticker/{pair}', 'trades/{pair}']
            },
            'tapi': {
                'post': ['active_orders', 'cancel_order', 'deposit_history', 'get_id_info', 'get_info', 'get_info2', 'get_personal_info', 'trade', 'trade_history', 'withdraw', 'withdraw_history']
            },
            'ecapi': {
                'post': ['createInvoice', 'getInvoice', 'getInvoiceIdsByOrderNumber', 'cancelInvoice']
            }
        },

        fetchProducts: function fetchProducts() {
            var products,
                result,
                p,
                product,
                id,
                symbol,
                _symbol$split17,
                _symbol$split18,
                base,
                quote,
                _this217 = this;

            return Promise.resolve().then(function () {
                return _this217.apiGetCurrencyPairsAll();
            }).then(function (_resp) {
                products = _resp;
                result = [];

                for (p = 0; p < products.length; p++) {
                    product = products[p];
                    id = product['currency_pair'];
                    symbol = product['name'];
                    _symbol$split17 = symbol.split('/');
                    _symbol$split18 = _slicedToArray(_symbol$split17, 2);
                    base = _symbol$split18[0];
                    quote = _symbol$split18[1];

                    result.push({
                        'id': id,
                        'symbol': symbol,
                        'base': base,
                        'quote': quote,
                        'info': product
                    });
                }
                return result;
            });
        },
        fetchBalance: function fetchBalance() {
            return this.tapiPostGetInfo();
        },
        fetchOrderBook: function fetchOrderBook(product) {
            var orderbook,
                timestamp,
                result,
                _this218 = this;

            return Promise.resolve().then(function () {
                return _this218.apiGetDepthPair({
                    'pair': _this218.productId(product)
                });
            }).then(function (_resp) {
                orderbook = _resp;
                timestamp = _this218.milliseconds();
                result = {
                    'bids': orderbook['bids'],
                    'asks': orderbook['asks'],
                    'timestamp': timestamp,
                    'datetime': _this218.iso8601(timestamp)
                };

                return result;
            });
        },
        fetchTicker: function fetchTicker(product) {
            var ticker,
                timestamp,
                _this219 = this;

            return Promise.resolve().then(function () {
                return _this219.apiGetTickerPair({
                    'pair': _this219.productId(product)
                });
            }).then(function (_resp) {
                ticker = _resp;
                timestamp = _this219.milliseconds();

                return {
                    'timestamp': timestamp,
                    'datetime': _this219.iso8601(timestamp),
                    'high': ticker['high'],
                    'low': ticker['low'],
                    'bid': ticker['bid'],
                    'ask': ticker['ask'],
                    'vwap': ticker['vwap'],
                    'open': undefined,
                    'close': undefined,
                    'first': undefined,
                    'last': ticker['last'],
                    'change': undefined,
                    'percentage': undefined,
                    'average': undefined,
                    'baseVolume': undefined,
                    'quoteVolume': ticker['volume'],
                    'info': ticker
                };
            });
        },
        fetchTrades: function fetchTrades(product) {
            return this.apiGetTradesPair({
                'pair': this.productId(product)
            });
        },
        createOrder: function createOrder(product, type, side, amount) {
            var price = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

            if (type == 'market') throw new Error(this.id + ' allows limit orders only');
            return this.tapiPostTrade(this.extend({
                'currency_pair': this.productId(product),
                'action': side == 'buy' ? 'bid' : 'ask',
                'amount': amount,
                'price': price
            }, params));
        },
        cancelOrder: function cancelOrder(id) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.tapiPostCancelOrder(this.extend({
                'order_id': id
            }, params));
        },
        request: function request(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'api';
            var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
            var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
            var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

            var url = this.urls['api'] + '/' + type;
            if (type == 'api') {
                url += '/' + this.version + '/' + this.implodeParams(path, params);
            } else {
                var nonce = this.nonce();
                body = this.urlencode(this.extend({
                    'method': path,
                    'nonce': nonce
                }, params));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': body.length,
                    'Key': this.apiKey,
                    'Sign': this.hmac(this.encode(body), this.encode(this.secret), 'sha512')
                };
            }
            return this.fetch(url, method, headers, body);
        }
    };

    //=============================================================================

    var markets = {

        '_1broker': _1broker,
        '_1btcxe': _1btcxe,
        'anxpro': anxpro,
        'bit2c': bit2c,
        'bitbay': bitbay,
        'bitbays': bitbays,
        'bitcoincoid': bitcoincoid,
        'bitfinex': bitfinex,
        'bitflyer': bitflyer,
        'bitlish': bitlish,
        'bitmarket': bitmarket,
        'bitmex': bitmex,
        'bitso': bitso,
        'bitstamp': bitstamp,
        'bittrex': bittrex,
        'bl3p': bl3p,
        'btcchina': btcchina,
        'btce': btce,
        'btcexchange': btcexchange,
        'btctradeua': btctradeua,
        'btcturk': btcturk,
        'btcx': btcx,
        'bter': bter,
        'bxinth': bxinth,
        'ccex': ccex,
        'cex': cex,
        'chbtc': chbtc,
        'chilebit': chilebit,
        'coincheck': coincheck,
        'coingi': coingi,
        'coinmarketcap': coinmarketcap,
        'coinmate': coinmate,
        'coinsecure': coinsecure,
        'coinspot': coinspot,
        'dsx': dsx,
        'exmo': exmo,
        'flowbtc': flowbtc,
        'foxbit': foxbit,
        'fybse': fybse,
        'fybsg': fybsg,
        'gatecoin': gatecoin,
        'gdax': gdax,
        'gemini': gemini,
        'hitbtc': hitbtc,
        'huobi': huobi,
        'itbit': itbit,
        'jubi': jubi,
        'kraken': kraken,
        'lakebtc': lakebtc,
        'livecoin': livecoin,
        'liqui': liqui,
        'luno': luno,
        'mercado': mercado,
        'okcoincny': okcoincny,
        'okcoinusd': okcoinusd,
        'paymium': paymium,
        'poloniex': poloniex,
        'quadrigacx': quadrigacx,
        'quoine': quoine,
        'southxchange': southxchange,
        'surbitcoin': surbitcoin,
        'therock': therock,
        'urdubit': urdubit,
        'vaultoro': vaultoro,
        'vbtc': vbtc,
        'virwox': virwox,
        'xbtce': xbtce,
        'yobit': yobit,
        'yunbi': yunbi,
        'zaif': zaif
    };

    var defineAllMarkets = function defineAllMarkets(markets) {
        var result = {};

        var _loop2 = function _loop2(id) {
            result[id] = function (params) {
                return new Market(extend(markets[id], params));
            };
        };

        for (var id in markets) {
            _loop2(id);
        }result.markets = Object.keys(markets);
        return result;
    };

    if (isNode || isReactNative) {

        Object.assign(module.exports = defineAllMarkets(markets), {

            version: version,

            // exceptions

            CCXTError: CCXTError,
            DDoSProtectionError: DDoSProtectionError,
            TimeoutError: TimeoutError,
            AuthenticationError: AuthenticationError,
            NotAvailableError: NotAvailableError,
            MarketNotAvailableError: MarketNotAvailableError,
            EndpointNotAvailableError: EndpointNotAvailableError,
            OrderBookNotAvailableError: OrderBookNotAvailableError,
            TickerNotAvailableError: TickerNotAvailableError,

            // common utility functions

            sleep: sleep,
            timeout: timeout,
            capitalize: capitalize,
            keysort: keysort,
            extend: extend,
            omit: omit,
            indexBy: indexBy,
            sortBy: sortBy,
            flatten: flatten,
            unique: unique,
            pluck: pluck,
            urlencode: urlencode,
            sum: sum,

            // underscore aliases

            index_by: indexBy,
            sort_by: sortBy,

            // crypto functions

            stringToBinary: stringToBinary,
            stringToBase64: stringToBase64,
            utf16ToBase64: utf16ToBase64,
            base64ToBinary: base64ToBinary,
            base64ToString: base64ToString,
            urlencodeBase64: urlencodeBase64,
            hash: hash,
            hmac: hmac,
            jwt: jwt

        });
    } else window.ccxt = defineAllMarkets(markets);
})();
