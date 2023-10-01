/** @license Apache-2.0 */

'use strict';

/**
* Studentized range cumulative distribution function (CDF).
*
* @module @stdlib/stats-base-dists-studentized-range-cdf
*
* @example
* var cdf = require( '@stdlib/stats-base-dists-studentized-range-cdf' );
*
* var y = cdf( 2.0, 0.1 );
* // returns ~0.611
*
* y = cdf( 1.0, 2.0 );
* // returns ~0.789
*
* y = cdf( -1.0, 4.0 );
* // returns ~0.187
*
* var mycdf = cdf.factory( 3.0, 2.0 );
* y = mycdf( 3.0 );
* // returns ~0.712
*
* y = mycdf( 1.0 );
* // returns ~0.216
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
