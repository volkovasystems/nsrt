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

var doubt = require("doubt");
var een = require("een");
var lqual = require("lqual");
var truly = require("truly");

var nsrt = function nsrt(array, value, comparator) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"array:required": Array,
                                                    			"value:required": "*",
                                                    			"comparator": "function"
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (!doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	if (truly(comparator) && typeof comparator != "function") {
		throw new Error("invalid comparator");
	}

	comparator = comparator || function (element, value) {return lqual(element, value);};

	!een(array, value, comparator) && array.push(value);

	return array;
};

module.exports = nsrt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5zcnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJlZW4iLCJscXVhbCIsInRydWx5IiwibnNydCIsImFycmF5IiwidmFsdWUiLCJjb21wYXJhdG9yIiwiQVJSQVkiLCJFcnJvciIsImVsZW1lbnQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUksT0FBTyxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCQyxVQUE3QixFQUF5QztBQUNyRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ1IsTUFBT00sS0FBUCxFQUFjRyxLQUFkLENBQUwsRUFBNEI7QUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSU4sTUFBT0ksVUFBUCxLQUF1QixPQUFPQSxVQUFQLElBQXFCLFVBQWhELEVBQTREO0FBQzNELFFBQU0sSUFBSUUsS0FBSixDQUFXLG9CQUFYLENBQU47QUFDQTs7QUFFREYsY0FBYUEsY0FBZ0IsVUFBRUcsT0FBRixFQUFXSixLQUFYLFVBQXNCSixNQUFPUSxPQUFQLEVBQWdCSixLQUFoQixDQUF0QixFQUE3Qjs7QUFFQSxFQUFDTCxJQUFLSSxLQUFMLEVBQVlDLEtBQVosRUFBbUJDLFVBQW5CLENBQUQsSUFBb0NGLE1BQU1NLElBQU4sQ0FBWUwsS0FBWixDQUFwQzs7QUFFQSxRQUFPRCxLQUFQO0FBQ0EsQ0F4QkQ7O0FBMEJBTyxPQUFPQyxPQUFQLEdBQWlCVCxJQUFqQiIsImZpbGUiOiJuc3J0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnNydFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJuc3J0L25zcnQuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibnNydC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm5zcnRcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnNydC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwibnNydC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEluc2VydCB1bmlxdWUgdmFsdWUgdG8gYXJyYXkuXHJcblxyXG5cdFx0VGhpcyBtb2R1bGUgaXMgYXJyYXktcHJlc2VydmluZy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJscXVhbFwiOiBcImxxdWFsXCIsXHJcblx0XHRcdFwidHJ1bHlcIjogdHJ1bHlcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcclxuY29uc3QgbHF1YWwgPSByZXF1aXJlKCBcImxxdWFsXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuXHJcbmNvbnN0IG5zcnQgPSBmdW5jdGlvbiBuc3J0KCBhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IEFycmF5LFxyXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJjb21wYXJhdG9yXCI6IFwiZnVuY3Rpb25cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhZG91YnQoIGFycmF5LCBBUlJBWSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggdHJ1bHkoIGNvbXBhcmF0b3IgKSAmJiB0eXBlb2YgY29tcGFyYXRvciAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbXBhcmF0b3JcIiApO1xyXG5cdH1cclxuXHJcblx0Y29tcGFyYXRvciA9IGNvbXBhcmF0b3IgfHwgKCAoIGVsZW1lbnQsIHZhbHVlICkgPT4gbHF1YWwoIGVsZW1lbnQsIHZhbHVlICkgKTtcclxuXHJcblx0IWVlbiggYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yICkgJiYgYXJyYXkucHVzaCggdmFsdWUgKTtcclxuXHJcblx0cmV0dXJuIGFycmF5O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuc3J0O1xyXG4iXX0=
//# sourceMappingURL=nsrt.support.js.map
