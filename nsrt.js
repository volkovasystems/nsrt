"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "nsrt",
			"path": "nsrt/nsrt.js",
			"file": "nsrt.js",
			"module": "nsrt",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/nsrt.git",
			"test": "nsrt-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Insert unique value to array.

		This module is array-preserving.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"een": "een",
			"lqual": "lqual",
			"truly": truly
		}
	@end-include
*/

const doubt = require( "doubt" );
const een = require( "een" );
const lqual = require( "lqual" );
const truly = require( "truly" );

const nsrt = function nsrt( array, value, comparator ){
	/*;
		@meta-configuration:
			{
				"array:required": Array,
				"value:required": "*",
				"comparator": "function"
			}
		@end-meta-configuration
	*/

	if( !doubt( array, ARRAY ) ){
		throw new Error( "invalid array" );
	}

	if( truly( comparator ) && typeof comparator != "function" ){
		throw new Error( "invalid comparator" );
	}

	comparator = comparator || ( ( element, value ) => lqual( element, value ) );

	!een( array, value, comparator ) && array.push( value );

	return array;
};

module.exports = nsrt;
