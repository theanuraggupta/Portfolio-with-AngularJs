(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  position: fixed; }\napp-root {\n  height: inherit; }\napp-root div {\n    height: inherit; }\nheader {\n  background: #d8d8d8;\n  margin: 0;\n  padding: 14px; }\nform {\n  width: 100%;\n  margin: 0;\n  padding-top: 4%; }\n.button-center {\n  width: 100%;\n  text-align: center;\n  clear: both;\n  padding-top: 50px; }\n.button-center button {\n    width: 100px;\n    height: 40px; }\n.progress-box {\n  width: 90%; }\n.progress-box .progress-bar {\n    width: 100%;\n    height: 4px;\n    background: #f1f1f1;\n    margin-bottom: 3px;\n    border: 1px solid #f1f1f1;\n    position: relative; }\n.progress-box .progress-bar .inner {\n      position: relative;\n      width: 0;\n      height: 100%;\n      background: #239bd6;\n      border-radius: 5px; }\n.progress-box .progress-slider {\n    opacity: 0;\n    width: 100%;\n    height: 5px;\n    position: absolute;\n    top: -3px;\n    left: 0px;\n    cursor: pointer;\n    z-index: 1;\n    top: -2px; }\n.progress-box .progress-bar-slider .inner {\n    transition: all 0.5s ease-out; }\n.progress-box .progress-bar-slider .inner:after {\n    content: \" \";\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    position: absolute;\n    right: -5px;\n    top: -7px;\n    border: 1px solid #bbb;\n    border-radius: 5px;\n    margin: 0px; }\n.text-center {\n  text-align: center; }\nsection {\n  width: 49.5%; }\nsection select {\n    width: 300px; }\n.slider-form section:nth-child(1) {\n  height: 100px;\n  border-right: 1px solid #d1d1d1; }\n.slider-form section:nth-child(2) {\n  width: 46%;\n  position: relative;\n  float: right; }\n.range {\n  position: relative;\n  transition: all 0.5s ease-out; }\n.range span {\n    position: absolute;\n    top: 10px; }\n.float-right {\n  float: right;\n  right: 0; }\n.float-left {\n  float: left;\n  left: 0; }\n.switch {\n  float: left;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px; }\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 18px;\n  left: 3px;\n  bottom: 2px;\n  background-color: white;\n  transition: .4s; }\ninput:checked + .slider {\n  background-color: #2196F3; }\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px; }\n.slider.round:before {\n  border-radius: 50%; }\n.checkbox b {\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxcV29ya3NwYWNlXFxHaXRodWJcXG15LWFzc2Vzc21lbnQvc3JjXFxzdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFHL0U7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLFVBQVM7RUFDVCxnQkFBZSxFQUNsQjtBQUNEO0VBQ0ksZ0JBQWUsRUFJbEI7QUFMRDtJQUdRLGdCQUFlLEVBQ2xCO0FBR0w7RUFDSSxvQkFBbUI7RUFDbkIsVUFBUztFQUNULGNBQWEsRUFDaEI7QUFFRDtFQUNJLFlBQVc7RUFDWCxVQUFTO0VBQ1QsZ0JBQWUsRUFDbEI7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQixFQU1wQjtBQVZEO0lBT0ksYUFBWTtJQUNaLGFBQVksRUFDWDtBQUVMO0VBQ0MsV0FBVSxFQTRDVjtBQTdDRDtJQUdRLFlBQVc7SUFDWCxZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsbUJBQWtCLEVBUXJCO0FBaEJMO01BVVksbUJBQWtCO01BQ2xCLFNBQVE7TUFDUixhQUFXO01BQ1gsb0JBQW1CO01BQ25CLG1CQUFrQixFQUNyQjtBQWZUO0lBa0JNLFdBQVU7SUFDVixZQUFXO0lBQ1gsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsVUFBUztJQUNULGdCQUFlO0lBQ2YsV0FBVTtJQUNWLFVBQ0YsRUFBQztBQTNCTDtJQThCUSw4QkFBNkIsRUFDaEM7QUEvQkw7SUFrQ00sYUFBWTtJQUNaLFlBQVc7SUFDWCxhQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsVUFBUztJQUNULHVCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsWUFBVyxFQUNaO0FBR0w7RUFDSSxtQkFBa0IsRUFDckI7QUFFRDtFQUNJLGFBQVksRUFJZjtBQUxEO0lBR1EsYUFBWSxFQUNmO0FBR0w7RUFFUSxjQUFhO0VBQ2IsZ0NBQStCLEVBQ2xDO0FBSkw7RUFNUSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGFBQVksRUFDZjtBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLDhCQUE2QixFQUtoQztBQVBEO0lBSVEsbUJBQWtCO0lBQ2xCLFVBQVMsRUFDWjtBQUdMO0VBQ0ksYUFBWTtFQUNaLFNBQVEsRUFDWDtBQUVEO0VBQ0ksWUFBVztFQUNYLFFBQU8sRUFDVjtBQUVEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGFBQVksRUFNYjtBQVhIO0lBT1EsV0FBVTtJQUNWLFNBQVE7SUFDUixVQUFTLEVBQ1o7QUFFSDtFQUNFLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCx1QkFBc0I7RUFFdEIsZ0JBQWUsRUFDaEI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCxVQUFTO0VBQ1QsWUFBVztFQUNYLHdCQUF1QjtFQUV2QixnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSw0QkFBMkIsRUFDNUI7QUFFRDtFQUNFLG9DQUFtQztFQUVuQyw0QkFBMkIsRUFDNUI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUNEO0VBRVEsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcblxyXG5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbmFwcC1yb290e1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcclxuICAgIG1hcmdpbjogMDsgXHJcbiAgICBwYWRkaW5nOiAxNHB4OyBcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG59XHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG4ucHJvZ3Jlc3MtYm94IHtcclxuXHR3aWR0aDogOTAlO1xyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmlubmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMzliZDY7IFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2dyZXNzLXNsaWRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICB0b3A6IC0ycHhcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3MtYmFyLXNsaWRlciAuaW5uZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZ3Jlc3MtYmFyLXNsaWRlciAuaW5uZXI6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTVweDtcclxuICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICB3aWR0aDogNDkuNSU7XHJcbiAgICBzZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2xpZGVyLWZvcm0ge1xyXG4gICAgc2VjdGlvbjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmFuZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mbG9hdC1sZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBpbnB1dCB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmNoZWNrYm94e1xyXG4gICAgICBie1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICB9Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Workspace\Github\my-assessment\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map