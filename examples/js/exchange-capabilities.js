"use strict";

const csv = process.argv.includes ('--csv')
    , delimiter = csv ? ',' : '|'
    , ccxt = require ('../../ccxt.js')
    , asTableConfig = { delimiter: ' ' + delimiter + ' ', /* print: require ('string.ify').noPretty  */ }
    , asTable = require ('as-table').configure (asTableConfig)
    , log = require ('ololog').noLocate
    , ansi = require ('ansicolor').nice

console.log (ccxt.iso8601 (ccxt.milliseconds ()))
console.log ('CCXT v' + ccxt.version)
const isWindows = process.platform == 'win32' // fix for windows, as it doesn't show darkred-VS-red well enough

async function main () {

    let total = 0
    let notImplemented = 0
    let inexistentApi = 0
    let implemented = 0
    let emulated = 0

    const exchanges = ccxt.exchanges.map (id => new ccxt[id] ())
    const metainfo = ccxt.flatten (exchanges.map (exchange => Object.keys (exchange.has)))
    const reduced = metainfo.reduce ((previous, current) => {
        previous[current] = (previous[current] || 0) + 1
        return previous
    }, {})
    const unified = Object.entries (reduced).filter (([ _, count ]) => count > 1)
    const methods = unified.map (([ method, _ ]) => method).sort ()
    const table = asTable (exchanges.map (exchange => {
        let result = {};
        const basics = [
            'publicAPI',
            'privateAPI',
            'CORS',
            'margin',
            'swap',
            'future',
            'CORS',
        ];

        ccxt.unique (basics.concat (methods)).forEach (key => {

            total += 1

            let coloredString = '';

            const feature = exchange.has[key]
            const isFunction = (typeof exchange[key] === 'function')
            const isBasic = basics.includes (key)

            if (feature === false) {
                // if explicitly set to 'false' in exchange.has (to exclude mistake, we check if it's undefined too)
                coloredString = isWindows ? exchange.id.lightMagenta : exchange.id.red
                inexistentApi += 1
            } else if (feature === 'emulated') {
                // if explicitly set to 'emulated' in exchange.has
                coloredString = exchange.id.yellow
                emulated += 1
            } else if (feature) {
                if (isBasic) {
                    // if neither 'false' nor 'emulated', and if  method exists
                    coloredString = exchange.id.green
                    implemented += 1
                } else {
                    if (isFunction) {
                        coloredString = exchange.id.green
                        implemented += 1
                    } else {
                        // the feature is available in exchange.has and not implemented
                        // this is an error
                        coloredString = exchange.id.red.bright
                    }
                }
            } else {
                coloredString = isWindows ? exchange.id.red : exchange.id.red.dim
                notImplemented += 1
            }

            result[key] = coloredString
        })

        return result
    }))

    if (csv) {
        let lines = table.split ("\n")
        lines = lines.slice (0, 1).concat (lines.slice (2))
        log (lines.join ("\n"))
    } else {
        log (table)
    }

    log ('Summary: ',
        ccxt.exchanges.length.toString (), 'exchanges; ',
        'Methods [' + total.toString () + ' total]: ',
        implemented.toString ().green, 'implemented,',
        emulated.toString ().yellow, 'emulated,',
        (isWindows ? inexistentApi.toString ().lightMagenta : inexistentApi.toString ().red), 'inexistentApi,',
        (isWindows ? notImplemented.toString ().red : notImplemented.toString ().red.dim), 'notImplemented',
    )

    log("\nMessy? Try piping to less (e.g. node script.js | less -S -R)\n".red)

}

main ()
