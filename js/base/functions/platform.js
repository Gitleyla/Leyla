"use strict";

/*  ------------------------------------------------------------------------ */

module.exports = {

    isNode: (typeof window === 'undefined') &&
          !((typeof WorkerGlobalScope !== 'undefined') && (self instanceof WorkerGlobalScope))
}

/*  ------------------------------------------------------------------------ */
