const assert = require( "assert" );
const nsrt = require( "./nsrt.js" );

assert.deepEqual( nsrt( [ 1, 2, 3, 4 ], 5 ), [ 1, 2, 3, 4, 5 ] );

console.log( "ok" );
