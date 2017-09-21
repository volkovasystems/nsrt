"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

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
	@end-test-license

	@test-configuration:
		{
			"package": "nsrt",
			"path": "nsrt/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/nsrt.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"nsrt": "nsrt"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const nsrt = require( "./nsrt.js" );
//: @end-server

//: @client:
const nsrt = require( "./nsrt.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "nsrt", ( ) => {

	describe( "`nsrt( [ 1, 2, 3, 4 ], 'hello' )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 'hello' ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], "hello" );

			assert.deepEqual( result, [ 1, 2, 3, 4, "hello" ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], 5 )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5 ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], 5 );

			assert.deepEqual( result, [ 1, 2, 3, 4, 5 ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], true )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, true ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], true );

			assert.deepEqual( result, [ 1, 2, 3, 4, true ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, [ 5, 6 ] ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] );

			assert.deepEqual( result, [ 1, 2, 3, 4, [ 5, 6 ] ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, Symbol.for( 'hello' ) ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], Symbol.for( "hello" ) );

			assert.deepEqual( result, [ 1, 2, 3, 4, Symbol.for( "hello" ) ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], function hello( ){ } )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, function hello( ){ } ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], function hello( ){ } );

			assert.deepEqual( result, [ 1, 2, 3, 4, function hello( ){ } ] );

		} );
	} );

} );
//: @end-server


//: @client:
describe( "nsrt", ( ) => {

	describe( "`nsrt( [ 1, 2, 3, 4 ], 'hello' )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 'hello' ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], "hello" );

			assert.deepEqual( result, [ 1, 2, 3, 4, "hello" ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], 5 )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5 ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], 5 );

			assert.deepEqual( result, [ 1, 2, 3, 4, 5 ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], true )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, true ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], true );

			assert.deepEqual( result, [ 1, 2, 3, 4, true ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, [ 5, 6 ] ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] );

			assert.deepEqual( result, [ 1, 2, 3, 4, [ 5, 6 ] ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, Symbol.for( 'hello' ) ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], Symbol.for( "hello" ) );

			assert.deepEqual( result, [ 1, 2, 3, 4, Symbol.for( "hello" ) ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], function hello( ){ } )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, function hello( ){ } ]", ( ) => {
			let result = nsrt( [ 1, 2, 3, 4 ], function hello( ){ } );

			assert.deepEqual( result, [ 1, 2, 3, 4, function hello( ){ } ] );

		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "nsrt", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`nsrt( [ 1, 2, 3, 4 ], 'hello' )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 'hello' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = nsrt( [ 1, 2, 3, 4 ], "hello" );

					return JSON.stringify( result );
				}

			).value;
			//: @end-ignore

			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, "hello" ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], 5 )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( nsrt( [ 1, 2, 3, 4 ], 5 ) );
				}

			).value;
			//: @end-ignore

			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, 5 ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], true )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, true ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = nsrt( [ 1, 2, 3, 4 ], true );

					return JSON.stringify( result );
				}

			).value;
			//: @end-ignore

			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, true ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, [ 5, 6 ] ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] );

					return JSON.stringify( result );
				}

			).value;
			//: @end-ignore

			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, [ 5, 6 ] ] );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, Symbol.for( 'hello' ) ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = nsrt( [ 1, 2, 3, 4 ], Symbol.for( "hello" ) );

					return result[ 4 ].toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(hello)" );

		} );
	} );

	describe( "`nsrt( [ 1, 2, 3, 4 ], function hello( ){ } )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, function hello( ){ } ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = nsrt( [ 1, 2, 3, 4 ], function hello( ){ } );

					return result[ 4 ].toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "function hello( ){ }" );

		} );
	} );

} );
//: @end-bridge
