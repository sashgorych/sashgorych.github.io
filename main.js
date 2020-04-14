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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");




var routes = [
    {
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'grungeApp';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"menu-top\">\n  <img src=\"../../assets/img/Grunge-Hall-final.png\" alt=\"\">\n  <div class=\"user\">\n    <img src=\"../../assets/img/user.png\" alt=\"\">\n  </div>\n</div>\n  <div class=\"logo\">\n    <div class=\"left\">\n      <img src=\"../../assets/img/grunge.png\" alt=\"\">\n    </div>\n    <div class=\"right\">\n      <img src=\"../../assets/img/hall.png\" alt=\"\">\n\n    </div>\n  </div>\n<div class=\"bottom-logo\">\n  <img src=\"../../assets/img/play.png\" alt=\"\">\n  <div class=\"work-time\">\n    <p>ПН-ПТ: </p>\n    <p>7:00 - 22:00</p>\n  </div>\n</div>\n  <div class=\"order\">\n    <img src=\"../../assets/img/order-icon.png\" alt=\"\">\n    <p>Бронь</p>\n  </div>\n  <div class=\"services\">\n    <h1>Послуги</h1>\n    <div class=\"services-content\">\n    <div class=\"item\">\n      <img class='icon' src=\"../../assets/img/ouse.png\" alt=\"\">\n      <div class=\"circle\"></div>\n      <div class=\"bottom\">\n      <p>Репетиції</p>\n      <div class=\"arrow\">\n        <img src=\"../../assets/img/arrow.png\" alt=\"\">\n      </div>\n      </div>\n    </div>\n      <div class=\"item\">\n        <img class='icon' src=\"../../assets/img/ouse.png\" alt=\"\">\n        <div class=\"circle\"></div>\n        <div class=\"bottom\">\n          <p>Репетиції</p>\n          <div class=\"arrow\">\n            <img src=\"../../assets/img/arrow.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <img class='icon' src=\"../../assets/img/ouse.png\" alt=\"\">\n        <div class=\"circle\"></div>\n        <div class=\"bottom\">\n          <p>Репетиції</p>\n          <div class=\"arrow\">\n            <img src=\"../../assets/img/arrow.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <img class='icon' src=\"../../assets/img/ouse.png\" alt=\"\">\n        <div class=\"circle\"></div>\n        <div class=\"bottom\">\n          <p>Репетиції</p>\n          <div class=\"arrow\">\n            <img src=\"../../assets/img/arrow.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  width: 100vw;\n  margin: auto;\n  max-width: 768px;\n  height: 100vh;\n  background: url('bg.png') no-repeat;\n  background-size: cover; }\n\n.logo {\n  margin: 40px auto 0;\n  width: 290px;\n  display: flex;\n  position: relative; }\n\n.logo .right {\n    position: absolute;\n    right: 9px;\n    bottom: -60px; }\n\n.bottom-logo {\n  width: 190px;\n  margin: 90px auto 0;\n  display: flex; }\n\n.bottom-logo .work-time {\n    width: 95px;\n    font-size: 10px;\n    margin-left: 40px;\n    color: white;\n    padding: 10px 15px;\n    background: #c20c0d;\n    height: 45px; }\n\n.bottom-logo .work-time p {\n      margin-bottom: 5px; }\n\n.order {\n  margin-top: 20px;\n  margin-left: 150px;\n  padding: 10px 15px;\n  box-sizing: border-box;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  width: 140px;\n  background: #c20c0d;\n  height: 55px;\n  align-items: center;\n  color: white;\n  font-size: 25px; }\n\n.order img {\n    width: 25px;\n    height: 25px; }\n\n.menu-top {\n  padding: 0 30px;\n  display: flex;\n  justify-content: space-between; }\n\n.menu-top img {\n    display: block;\n    margin: auto;\n    width: 55px;\n    height: 55px; }\n\n.menu-top .user {\n    padding-top: 15px; }\n\n.menu-top .user img {\n      width: 25px;\n      height: 25px; }\n\n.services {\n  max-width: 470px;\n  width: 100%;\n  margin: auto; }\n\n.services h1 {\n    font-size: 30px;\n    text-align: center;\n    color: white; }\n\n.services .services-content {\n    flex-wrap: wrap;\n    display: flex;\n    justify-content: space-between; }\n\n.services h1 {\n    margin-bottom: 60px; }\n\n.services .item {\n    margin-bottom: 25px;\n    overflow: hidden;\n    padding: 20px;\n    box-sizing: border-box;\n    border-radius: 25px;\n    width: 160px;\n    height: 155px;\n    background: url('services-bg.png') no-repeat center; }\n\n.services .item .circle {\n      width: 11px;\n      height: 11px;\n      border-radius: 50%;\n      border: 2px solid #c20c0d;\n      margin: 10px auto 0; }\n\n.services .item .icon {\n      display: block;\n      margin: auto;\n      height: 65px;\n      width: auto; }\n\n.services .item .bottom {\n      position: relative;\n      display: flex; }\n\n.services .item .bottom p {\n        line-height: 50px;\n        color: white;\n        font-size: 16px; }\n\n.services .item .bottom .arrow {\n        position: absolute;\n        right: -20px;\n        top: -5px;\n        border-top-left-radius: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 50px;\n        width: 50px;\n        background: #c20c0d; }\n\n.services .item .bottom .arrow img {\n          width: 15px;\n          height: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFxncnVuZ2VBcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxcbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1DQUF5QztFQUN6QyxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFKcEI7SUFNSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWEsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFIZjtJQUtJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUFYaEI7TUFhTSxrQkFBa0IsRUFBQTs7QUFJeEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBYmpCO0lBZUksV0FBVztJQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUhoQztJQUtJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVksRUFBQTs7QUFSaEI7SUFXSSxpQkFBaUIsRUFBQTs7QUFYckI7TUFhTSxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQUlsQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUhkO0lBS0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBUGhCO0lBVUksZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEIsRUFBQTs7QUFabEM7SUFlSSxtQkFBbUIsRUFBQTs7QUFmdkI7SUFrQkksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQVFoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1EQUFtRSxFQUFBOztBQWhDdkU7TUFxQk0sV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLG1CQUFtQixFQUFBOztBQXpCekI7TUFrQ00sY0FBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osV0FBVyxFQUFBOztBQXJDakI7TUF3Q00sa0JBQWtCO01BQ2xCLGFBQWEsRUFBQTs7QUF6Q25CO1FBMkNRLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osZUFBZSxFQUFBOztBQTdDdkI7UUFnRFEsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixTQUFTO1FBQ1QsNEJBQTRCO1FBQzVCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CLEVBQUE7O0FBekQzQjtVQTJEVSxXQUFXO1VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vaW1nL2JnLnBuZ1wiKW5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sb2dve1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcbiAgd2lkdGg6IDI5MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA5cHg7XHJcbiAgICBib3R0b206IC02MHB4O1xyXG4gIH1cclxufVxyXG4uYm90dG9tLWxvZ297XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIG1hcmdpbjogOTBweCBhdXRvIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAud29yay10aW1le1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNjMjBjMGQ7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5vcmRlcntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjYzIwYzBkO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbi5tZW51LXRvcHtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICB9XHJcbiAgLnVzZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNlcnZpY2Vze1xyXG4gIG1heC13aWR0aDogNDcwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuc2VydmljZXMtY29udGVudHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcbiAgLml0ZW17XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5jaXJjbGV7XHJcbiAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2MyMGMwZDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcclxuICAgIH1cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3NlcnZpY2VzLWJnLnBuZ1wiKW5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAuaWNvbntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5ib3R0b217XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvd3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2MyMGMwZDtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\grungeApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map