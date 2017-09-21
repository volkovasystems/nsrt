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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var nsrt = require("./nsrt.support.js");
//: @end-client







//: @client:
describe("nsrt", function () {

	describe("`nsrt( [ 1, 2, 3, 4 ], 'hello' )`", function () {
		it("should be equal to [ 1, 2, 3, 4, 'hello' ]", function () {
			var result = nsrt([1, 2, 3, 4], "hello");

			assert.deepEqual(result, [1, 2, 3, 4, "hello"]);

		});
	});

	describe("`nsrt( [ 1, 2, 3, 4 ], 5 )`", function () {
		it("should be equal to [ 1, 2, 3, 4, 5 ]", function () {
			var result = nsrt([1, 2, 3, 4], 5);

			assert.deepEqual(result, [1, 2, 3, 4, 5]);

		});
	});

	describe("`nsrt( [ 1, 2, 3, 4 ], true )`", function () {
		it("should be equal to [ 1, 2, 3, 4, true ]", function () {
			var result = nsrt([1, 2, 3, 4], true);

			assert.deepEqual(result, [1, 2, 3, 4, true]);

		});
	});

	describe("`nsrt( [ 1, 2, 3, 4 ], [ 5, 6 ] )`", function () {
		it("should be equal to [ 1, 2, 3, 4, [ 5, 6 ] ]", function () {
			var result = nsrt([1, 2, 3, 4], [5, 6]);

			assert.deepEqual(result, [1, 2, 3, 4, [5, 6]]);

		});
	});

	describe("`nsrt( [ 1, 2, 3, 4 ], Symbol.for( 'hello' ) )`", function () {
		it("should be equal to [ 1, 2, 3, 4, Symbol.for( 'hello' ) ]", function () {
			var result = nsrt([1, 2, 3, 4], (0, _for2.default)("hello"));

			assert.deepEqual(result, [1, 2, 3, 4, (0, _for2.default)("hello")]);

		});
	});

	describe("`nsrt( [ 1, 2, 3, 4 ], function hello( ){ } )`", function () {
		it("should be equal to [ 1, 2, 3, 4, function hello( ){ } ]", function () {
			var result = nsrt([1, 2, 3, 4], function hello() {});

			assert.deepEqual(result, [1, 2, 3, 4, function hello() {}]);

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnNydCIsImRlc2NyaWJlIiwiaXQiLCJyZXN1bHQiLCJkZWVwRXF1YWwiLCJoZWxsbyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSxtQ0FBVixFQUErQyxZQUFPO0FBQ3JEQyxLQUFJLDRDQUFKLEVBQWtELFlBQU87QUFDeEQsT0FBSUMsU0FBU0gsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBTixFQUFzQixPQUF0QixDQUFiOztBQUVBRixVQUFPTSxTQUFQLENBQWtCRCxNQUFsQixFQUEwQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxPQUFkLENBQTFCOztBQUVBLEdBTEQ7QUFNQSxFQVBEOztBQVNBRixVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NDLEtBQUksc0NBQUosRUFBNEMsWUFBTztBQUNsRCxPQUFJQyxTQUFTSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFOLEVBQXNCLENBQXRCLENBQWI7O0FBRUFGLFVBQU9NLFNBQVAsQ0FBa0JELE1BQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBMUI7O0FBRUEsR0FMRDtBQU1BLEVBUEQ7O0FBU0FGLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREMsS0FBSSx5Q0FBSixFQUErQyxZQUFPO0FBQ3JELE9BQUlDLFNBQVNILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQU4sRUFBc0IsSUFBdEIsQ0FBYjs7QUFFQUYsVUFBT00sU0FBUCxDQUFrQkQsTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsSUFBZCxDQUExQjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSxvQ0FBVixFQUFnRCxZQUFPO0FBQ3REQyxLQUFJLDZDQUFKLEVBQW1ELFlBQU87QUFDekQsT0FBSUMsU0FBU0gsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBTixFQUFzQixDQUFFLENBQUYsRUFBSyxDQUFMLENBQXRCLENBQWI7O0FBRUFGLFVBQU9NLFNBQVAsQ0FBa0JELE1BQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBZCxDQUExQjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSxpREFBVixFQUE2RCxZQUFPO0FBQ25FQyxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEUsT0FBSUMsU0FBU0gsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBTixFQUFzQixtQkFBWSxPQUFaLENBQXRCLENBQWI7O0FBRUFGLFVBQU9NLFNBQVAsQ0FBa0JELE1BQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLG1CQUFZLE9BQVosQ0FBZCxDQUExQjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSxnREFBVixFQUE0RCxZQUFPO0FBQ2xFQyxLQUFJLHlEQUFKLEVBQStELFlBQU87QUFDckUsT0FBSUMsU0FBU0gsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBTixFQUFzQixTQUFTSyxLQUFULEdBQWlCLENBQUcsQ0FBMUMsQ0FBYjs7QUFFQVAsVUFBT00sU0FBUCxDQUFrQkQsTUFBbEIsRUFBMEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsU0FBU0UsS0FBVCxHQUFpQixDQUFHLENBQWxDLENBQTFCOztBQUVBLEdBTEQ7QUFNQSxFQVBEOztBQVNBLENBeEREO0FBeURBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnNydFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibnNydC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnNydC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwibnNydFwiOiBcIm5zcnRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG5zcnQgPSByZXF1aXJlKCBcIi4vbnNydC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcIm5zcnRcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbnNydCggWyAxLCAyLCAzLCA0IF0sICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzLCA0LCAnaGVsbG8nIF1cIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBuc3J0KCBbIDEsIDIsIDMsIDQgXSwgXCJoZWxsb1wiICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyAxLCAyLCAzLCA0LCBcImhlbGxvXCIgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5zcnQoIFsgMSwgMiwgMywgNCBdLCA1IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMywgNCwgNSBdXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gbnNydCggWyAxLCAyLCAzLCA0IF0sIDUgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMsIDQsIDUgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5zcnQoIFsgMSwgMiwgMywgNCBdLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMywgNCwgdHJ1ZSBdXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gbnNydCggWyAxLCAyLCAzLCA0IF0sIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMsIDQsIHRydWUgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5zcnQoIFsgMSwgMiwgMywgNCBdLCBbIDUsIDYgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMsIDQsIFsgNSwgNiBdIF1cIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBuc3J0KCBbIDEsIDIsIDMsIDQgXSwgWyA1LCA2IF0gKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMsIDQsIFsgNSwgNiBdIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBuc3J0KCBbIDEsIDIsIDMsIDQgXSwgU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMywgNCwgU3ltYm9sLmZvciggJ2hlbGxvJyApIF1cIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBuc3J0KCBbIDEsIDIsIDMsIDQgXSwgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIDEsIDIsIDMsIDQsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBuc3J0KCBbIDEsIDIsIDMsIDQgXSwgZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzLCA0LCBmdW5jdGlvbiBoZWxsbyggKXsgfSBdXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gbnNydCggWyAxLCAyLCAzLCA0IF0sIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgWyAxLCAyLCAzLCA0LCBmdW5jdGlvbiBoZWxsbyggKXsgfSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
