(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n    <header>\r\n      Header\r\n    </header><br>\r\n    \r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen1/screen1.component */ "./src/app/screen1/screen1.component.ts");
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen2/screen2.component */ "./src/app/screen2/screen2.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_5__["Screen1Component"],
                _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_6__["Screen2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen1/screen1.component */ "./src/app/screen1/screen1.component.ts");
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen2/screen2.component */ "./src/app/screen2/screen2.component.ts");





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'screen1', pathMatch: 'full' },
                    { path: 'screen1', component: _screen1_screen1_component__WEBPACK_IMPORTED_MODULE_3__["Screen1Component"] },
                    { path: 'screen2', component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_4__["Screen2Component"] }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/screen1/screen1.component.html":
/*!************************************************!*\
  !*** ./src/app/screen1/screen1.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"sliderForm\" class=\"slider-form\">\r\n  <section class=\"float-left text-center\">\r\n    <label>Select the loading time range</label><br>\r\n    <span>(in seconds)</span><br><br>\r\n    <select [(ngModel)]=\"selectedRange\" name=\"selectControl\" (change) = \"changedValue(selectedRange)\">\r\n      <option [ngValue]=\"option\" *ngFor=\"let option of selectDropdown\"> \r\n          {{option.startRange}} - {{option.endRange}}\r\n      </option>\r\n    </select>\r\n    <br>\r\n  </section>\r\n  <section class=\"float-right\">\r\n    <div class=\"text-center\">\r\n    <label>Select a particular loading time.</label></div><br><br>\r\n    <div class=\"progress-box\">\r\n      <div class=\"progress-bar progress-bar-slider\">\r\n        <input class=\"progress-slider\" type=\"range\" name=\"timeControl\" min=\"{{selectedRange.startRange}}\" max=\"{{selectedRange.endRange}}\" [(ngModel)]=\"selectedTime\" (change) = \"changedTime(selectedTime)\">\r\n        <div class=\"inner\" [ngStyle]=\"{ width: sliderWidth + '%' || '0%' }\"></div>\r\n      </div>\r\n      <div class=\"range\">\r\n        <span *ngIf=\"sliderWidth!==selectedRange.startRange && sliderWidth !== selectedRange.endRange\" [ngStyle]=\"{left: timerWidth + '%' || '0%' }\">{{selectedTime}} s</span>\r\n        <span class=\"float-left\">{{selectedRange.startRange}}  s</span>\r\n        <span class=\"float-right\">{{selectedRange.endRange}} s</span>\r\n      </div>\r\n    </div><br><br>\r\n    \r\n    <label class=\"checkbox\">\r\n      <label class=\"switch\">\r\n        <input type=\"checkbox\" [(ngModel)]=\"enableTimer\" name=\"checkbox\">\r\n        <span class=\"slider round\"></span>\r\n      </label>\r\n      <b>Enable the loading time as selected on slider</b>\r\n    </label>\r\n  </section>\r\n  <br><br><br><br>\r\n  <div class=\"button-center\">\r\n    <button type=\"button\" (click)=\"submit()\">Submit</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/screen1/screen1.component.scss":
/*!************************************************!*\
  !*** ./src/app/screen1/screen1.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbjEvc2NyZWVuMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/screen1/screen1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/screen1/screen1.component.ts ***!
  \**********************************************/
/*! exports provided: Screen1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1Component", function() { return Screen1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Screen1Component = /** @class */ (function () {
    function Screen1Component(router) {
        this.router = router;
        this.selectDropdown = [
            {
                'value': 1,
                'startRange': 0,
                'endRange': 100
            },
            {
                'value': 2,
                'startRange': 100,
                'endRange': 200
            },
            {
                'value': 3,
                'startRange': 200,
                'endRange': 500
            },
            {
                'value': 4,
                'startRange': 500,
                'endRange': 1000
            },
            {
                'value': 5,
                'startRange': 1000,
                'endRange': 1500
            }
        ];
    }
    Screen1Component.prototype.ngOnInit = function () {
        this.selectedRange = this.selectDropdown[0];
        this.changedValue(this.selectedRange);
    };
    Screen1Component.prototype.changedValue = function (value) {
        this.selectedTime = ((value.endRange - value.startRange) / 2) + value.startRange;
        this.changedTime(this.selectedTime);
    };
    Screen1Component.prototype.changedTime = function (value) {
        var range = this.selectedRange.endRange - this.selectedRange.startRange;
        var s = value - this.selectedRange.startRange;
        this.timerWidth = (s / range) * 100;
        this.sliderWidth = this.timerWidth + (this.timerWidth > 9 ? 1.5 : 1); // for aligning the timerWidth, adding some more width
    };
    Screen1Component.prototype.navigateToScreen2 = function () {
        this.router.navigate(['/screen2']);
    };
    Screen1Component.prototype.submit = function () {
        if (!this.enableTimer) {
            this.enableTimer = false;
            this.router.navigate(['/screen2']);
        }
        else {
            setTimeout(this.navigateToScreen2.bind(this), this.selectedTime * 1000);
        }
    };
    Screen1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screen1',
            template: __webpack_require__(/*! ./screen1.component.html */ "./src/app/screen1/screen1.component.html"),
            styles: [__webpack_require__(/*! ./screen1.component.scss */ "./src/app/screen1/screen1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Screen1Component);
    return Screen1Component;
}());



/***/ }),

/***/ "./src/app/screen2/screen2.component.html":
/*!************************************************!*\
  !*** ./src/app/screen2/screen2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3 class=\"text-center\">\r\n    Congratulations !!!!!\r\n    <br><br>\r\n    <b>Night</b>&nbsp;<span>is</span>&nbsp;<b>Dark</b>&nbsp;<span>and</span>&nbsp;<b>Full</b>&nbsp;<span>of</span>&nbsp;<b>Terrors</b>\r\n  </h3>\r\n  <div class=\"button-center\">\r\n    <button type=\"button\" [routerLink]=\"['/screen1']\"  >Simulate Again</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/screen2/screen2.component.scss":
/*!************************************************!*\
  !*** ./src/app/screen2/screen2.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbjIvc2NyZWVuMi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/screen2/screen2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/screen2/screen2.component.ts ***!
  \**********************************************/
/*! exports provided: Screen2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen2Component", function() { return Screen2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Screen2Component = /** @class */ (function () {
    function Screen2Component() {
    }
    Screen2Component.prototype.ngOnInit = function () {
    };
    Screen2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screen2',
            template: __webpack_require__(/*! ./screen2.component.html */ "./src/app/screen2/screen2.component.html"),
            styles: [__webpack_require__(/*! ./screen2.component.scss */ "./src/app/screen2/screen2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Screen2Component);
    return Screen2Component;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Workspace\Github\my-assessment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map