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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5zcnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkb3VidCIsInJlcXVpcmUiLCJlZW4iLCJscXVhbCIsInRydWx5IiwibnNydCIsImFycmF5IiwidmFsdWUiLCJjb21wYXJhdG9yIiwiQVJSQVkiLCJFcnJvciIsImVsZW1lbnQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUksT0FBTyxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCQyxVQUE3QixFQUF5QztBQUNyRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ1IsTUFBT00sS0FBUCxFQUFjRyxLQUFkLENBQUwsRUFBNEI7QUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSU4sTUFBT0ksVUFBUCxLQUF1QixPQUFPQSxVQUFQLElBQXFCLFVBQWhELEVBQTREO0FBQzNELFFBQU0sSUFBSUUsS0FBSixDQUFXLG9CQUFYLENBQU47QUFDQTs7QUFFREYsY0FBYUEsY0FBZ0IsVUFBRUcsT0FBRixFQUFXSixLQUFYLFVBQXNCSixNQUFPUSxPQUFQLEVBQWdCSixLQUFoQixDQUF0QixFQUE3Qjs7QUFFQSxFQUFDTCxJQUFLSSxLQUFMLEVBQVlDLEtBQVosRUFBbUJDLFVBQW5CLENBQUQsSUFBb0NGLE1BQU1NLElBQU4sQ0FBWUwsS0FBWixDQUFwQzs7QUFFQSxRQUFPRCxLQUFQO0FBQ0EsQ0F4QkQ7O0FBMEJBTyxPQUFPQyxPQUFQLEdBQWlCVCxJQUFqQiIsImZpbGUiOiJuc3J0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5zcnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm5zcnQvbnNydC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibnNydC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJuc3J0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9uc3J0LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibnNydC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEluc2VydCB1bmlxdWUgdmFsdWUgdG8gYXJyYXkuXG5cblx0XHRUaGlzIG1vZHVsZSBpcyBhcnJheS1wcmVzZXJ2aW5nLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxuXHRcdFx0XCJscXVhbFwiOiBcImxxdWFsXCIsXG5cdFx0XHRcInRydWx5XCI6IHRydWx5XG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCBscXVhbCA9IHJlcXVpcmUoIFwibHF1YWxcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcblxuY29uc3QgbnNydCA9IGZ1bmN0aW9uIG5zcnQoIGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IEFycmF5LFxuXHRcdFx0XHRcInZhbHVlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcImNvbXBhcmF0b3JcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBhcnJheSwgQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcblx0fVxuXG5cdGlmKCB0cnVseSggY29tcGFyYXRvciApICYmIHR5cGVvZiBjb21wYXJhdG9yICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbXBhcmF0b3JcIiApO1xuXHR9XG5cblx0Y29tcGFyYXRvciA9IGNvbXBhcmF0b3IgfHwgKCAoIGVsZW1lbnQsIHZhbHVlICkgPT4gbHF1YWwoIGVsZW1lbnQsIHZhbHVlICkgKTtcblxuXHQhZWVuKCBhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IgKSAmJiBhcnJheS5wdXNoKCB2YWx1ZSApO1xuXG5cdHJldHVybiBhcnJheTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbnNydDtcbiJdfQ==
//# sourceMappingURL=nsrt.support.js.map
