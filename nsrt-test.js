const assert = require( "assert" );
const nsrt = require( "./nsrt.js" );

assert.deepEqual( nsrt( [ 1, 2, 3, 4 ], 5 ), [ 1, 2, 3, 4, 5 ], "should be deeply equal" );

assert.deepEqual( nsrt( [ { }, [ ], [ 1, 2 ], 3 ], [ 1, 2 ] ), [ { }, [ ], [ 1, 2 ], 3 ], "should be deeply equal" );

console.log( "ok" );
