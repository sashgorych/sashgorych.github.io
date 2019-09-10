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
/* harmony import */ var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-text/input-text.component */ "./src/app/input-text/input-text.component.ts");
/* harmony import */ var _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-list/cards-list.component */ "./src/app/cards-list/cards-list.component.ts");
/* harmony import */ var _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-template/create-template.component */ "./src/app/create-template/create-template.component.ts");
/* harmony import */ var _choose_template_choose_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-template/choose-template.component */ "./src/app/choose-template/choose-template.component.ts");
/* harmony import */ var _final_confirm_final_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./final-confirm/final-confirm.component */ "./src/app/final-confirm/final-confirm.component.ts");
/* harmony import */ var _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-template/edit-template.component */ "./src/app/edit-template/edit-template.component.ts");
/* harmony import */ var _standart_template_standart_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./standart-template/standart-template.component */ "./src/app/standart-template/standart-template.component.ts");
/* harmony import */ var _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template-list/template-list.component */ "./src/app/template-list/template-list.component.ts");











var routes = [
    {
        path: '',
        component: _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_4__["CardsListComponent"]
    },
    {
        path: 'question',
        component: _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_3__["InputTextComponent"]
    },
    {
        path: 'list',
        component: _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_4__["CardsListComponent"]
    },
    {
        path: 'templates-list',
        component: _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_10__["TemplateListComponent"]
    },
    {
        path: 'templ',
        component: _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_5__["CreateTemplateComponent"]
    },
    {
        path: 'choose-template',
        component: _choose_template_choose_template_component__WEBPACK_IMPORTED_MODULE_6__["ChooseTemplateComponent"]
    },
    {
        path: 'final',
        component: _final_confirm_final_confirm_component__WEBPACK_IMPORTED_MODULE_7__["FinalConfirmComponent"]
    },
    {
        path: 'edit-template/:id',
        component: _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_8__["EditTemplateComponent"]
    },
    {
        path: 'template/standard',
        component: _standart_template_standart_template_component__WEBPACK_IMPORTED_MODULE_9__["StandartTemplateComponent"]
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

module.exports = "<div class=\"main\">\n  <div id=\"navbarSupportedContent\" class=\"hidden-print\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/question\">Згенерувати білети</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/template/standard\">Створити стандартний шаблон</a>\n\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/templ\">Створити користувацький шаблон</a>\n\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/list\">Збережені білети</a>\n\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/templates-list\">Збережені шаблони</a>\n\n    </li>\n  </ul>\n</div>\n\n<div class=\"container-for-list\">\n<router-outlet>\n\n</router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 850px; }\n\n#navbarSupportedContent {\n  width: 260px;\n  min-height: 1070px;\n  background-color: #2b758c;\n  float: left; }\n\n#navbarSupportedContent {\n  padding: 10px 30px;\n  box-sizing: border-box; }\n\n#navbarSupportedContent li a {\n  color: white;\n  width: 100%;\n  color: white;\n  padding: 10px 0px;\n  display: block; }\n\n#navbarSupportedContent li a:hover {\n    color: #cccccc; }\n\n.main {\n  background-color: #edeef0;\n  max-width: 1920px;\n  margin: auto;\n  min-height: 640px; }\n\n.container-for-list {\n  max-width: 1670px;\n  box-sizing: border-box;\n  padding: 10px;\n  margin-left: 260px;\n  min-height: 1070px; }\n\n@media print {\n  .container-for-list {\n    width: 2480px;\n    margin: auto; }\n  .hidden-print {\n    display: none; }\n  * {\n    background: #FFF !important; }\n  @page {\n    margin: 1cm; }\n  img {\n    max-width: 100% !important; }\n  a[href^=http]:after {\n    content: \" <\" attr(href) \"> \"; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzYXNoYVxcRGVza3RvcFxccHJhY3RpYy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBTGhCO0lBT0ksY0FBd0IsRUFBQTs7QUFHNUI7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBTXBCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBR2Q7SUFDRSxhQUNGLEVBQUE7RUFDQTtJQUNFLDJCQUEwQixFQUFBO0VBRTVCO0lBQ0UsV0FDRixFQUFBO0VBQ0E7SUFDRSwwQkFDRixFQUFBO0VBQ0E7SUFBc0IsNkJBQTRCLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogODUwcHg7XHJcbn1cclxuI25hdmJhclN1cHBvcnRlZENvbnRlbnR7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI3NThjO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50e1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IGxpIGF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAmOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtlbih3aGl0ZSwyMCUpO1xyXG4gIH1cclxufVxyXG4ubWFpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWYwO1xyXG4gIG1heC13aWR0aDogMTkyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtaW4taGVpZ2h0OiA2NDBweDtcclxufVxyXG4uY29udGFpbmVyLWZvci1saXN0e1xyXG4gIG1heC13aWR0aDogMTY3MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjYwcHg7XHJcbiAgbWluLWhlaWdodDogMTA3MHB4O1xyXG59XHJcblxyXG5cclxuLy9mb3QgY2hpbGQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5jb250YWluZXItZm9yLWxpc3R7XHJcbiAgICB3aWR0aDogMjQ4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICB9XHJcbiAgLmhpZGRlbi1wcmludCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbiAgfVxyXG4gICoge1xyXG4gICAgYmFja2dyb3VuZDojRkZGICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBwYWdlIHtcclxuICAgIG1hcmdpbjogMWNtXHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudFxyXG4gIH1cclxuICBhW2hyZWZePWh0dHBdOmFmdGVyIHsgY29udGVudDpcIiA8XCIgYXR0cihocmVmKSBcIj4gXCIgfVxyXG59XHJcbiJdfQ== */"

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
        this.title = 'practic';
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
/* harmony import */ var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-text/input-text.component */ "./src/app/input-text/input-text.component.ts");
/* harmony import */ var _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-list/cards-list.component */ "./src/app/cards-list/cards-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-template/create-template.component */ "./src/app/create-template/create-template.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _choose_template_choose_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./choose-template/choose-template.component */ "./src/app/choose-template/choose-template.component.ts");
/* harmony import */ var _final_confirm_final_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./final-confirm/final-confirm.component */ "./src/app/final-confirm/final-confirm.component.ts");
/* harmony import */ var _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-template/edit-template.component */ "./src/app/edit-template/edit-template.component.ts");
/* harmony import */ var _standart_template_standart_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./standart-template/standart-template.component */ "./src/app/standart-template/standart-template.component.ts");
/* harmony import */ var _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./template-list/template-list.component */ "./src/app/template-list/template-list.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"],
                _cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_6__["CardsListComponent"],
                _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_9__["CreateTemplateComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"],
                _choose_template_choose_template_component__WEBPACK_IMPORTED_MODULE_11__["ChooseTemplateComponent"],
                _final_confirm_final_confirm_component__WEBPACK_IMPORTED_MODULE_12__["FinalConfirmComponent"],
                _edit_template_edit_template_component__WEBPACK_IMPORTED_MODULE_13__["EditTemplateComponent"],
                _standart_template_standart_template_component__WEBPACK_IMPORTED_MODULE_14__["StandartTemplateComponent"],
                _template_list_template_list_component__WEBPACK_IMPORTED_MODULE_15__["TemplateListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards-list/cards-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/cards-list/cards-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <span>Збережені білети</span>\n  <div class=\"right\">\n  </div>\n</div>\n<div class=\"list\">\n  <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let item of all\">\n    <div class=\"delete-btn\" (click)=\"delete(item.id)\">X</div>\n    <div class=\"card-body\" (click)=\"makeList(item)\">\n      <h5 class=\"card-title\">{{item.name}}</h5>\n      <p class=\"card-text\">{{item.descr}}</p>\n      <a class=\"btn btn-primary\" style='color: white'>Переглянути</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cards-list/cards-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cards-list/cards-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  max-width: 1100px;\n  height: auto;\n  border: 1px solid black;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.list .card {\n    cursor: pointer;\n    margin-right: 10px;\n    max-height: 200px; }\n\n.list .card:hover {\n      background-color: #e6e5e5; }\n\n.delete-btn {\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  cursor: pointer;\n  z-index: 5; }\n\n.cont {\n  max-width: 1100px;\n  height: auto;\n  border: 1px solid black;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.cont form {\n    width: 100%; }\n\n.top {\n  width: 30%;\n  height: auto;\n  align-self: flex-start; }\n\n.top .count-question .count1, .top .count-question .count2 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.area {\n  width: 100%;\n  height: auto;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.teorethic, .practyc {\n  width: 45%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.teorethic textarea, .practyc textarea {\n    width: 90%;\n    min-height: 80%;\n    border: 1px solid black;\n    margin: auto; }\n\n#back-btn {\n  width: 160px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-right: 40px; }\n\n#req-btn {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 190px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-right: 40px; }\n\n.ff {\n  font-size: 12px;\n  font-weight: normal; }\n\n.title {\n  border: 1px solid #d3d9de;\n  border-radius: 2px;\n  width: 100%;\n  height: 60px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: white; }\n\n.title .right {\n    overflow: hidden;\n    float: right; }\n\n.title span {\n    line-height: 60px;\n    color: black;\n    font-size: 26px; }\n\n.search_block {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  margin-top: 15px;\n  height: 30px;\n  width: 305px; }\n\n.search_block .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.search_block .but:hover {\n      background-color: #19b699; }\n\n.add_new {\n  float: right;\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.add_new .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.add_new .but:hover {\n      background-color: #19b699; }\n\n.search {\n  border: 1px solid #d3d9de;\n  width: 260px;\n  float: left;\n  height: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 0 10px; }\n\n.list {\n  margin-top: 15px;\n  width: 100%;\n  border: 1px solid #d3d9de;\n  box-sizing: border-box;\n  border-radius: 2px;\n  padding: 15px;\n  min-height: 650px;\n  background-color: white;\n  overflow: hidden; }\n\n.list .info {\n    margin-bottom: 15px;\n    box-sizing: border-box;\n    padding: 0 15px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid #d3d9de;\n    border-radius: 2px; }\n\n.list .info .records_cout {\n      float: left;\n      line-height: 40px; }\n\n.list .info .update {\n      float: right;\n      line-height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMtbGlzdC9DOlxcVXNlcnNcXHNhc2hhXFxEZXNrdG9wXFxwcmFjdGljL3NyY1xcYXBwXFxjYXJkcy1saXN0XFxjYXJkcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFKakI7SUFNSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBOztBQVJyQjtNQVVNLHlCQUFvQyxFQUFBOztBQUkxQztFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBRVo7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQVByQjtJQVNJLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBSHhCO0lBTU0sb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQUlwQztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxVQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQU54QjtJQVFJLFVBQVU7SUFDVixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFQekI7SUFTSSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQVZoQjtJQWFJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUluQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQU5kO0lBUUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUIsRUFBQTs7QUFoQjdCO01Ba0JNLHlCQUFzQyxFQUFBOztBQUs1QztFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSG5CO0lBS0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUIsRUFBQTs7QUFiN0I7TUFlTSx5QkFBc0MsRUFBQTs7QUFLNUM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBRVosdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBSWpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQW1CdkIsZ0JBQWdCLEVBQUE7O0FBM0JsQjtJQVVJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBOztBQWhCdEI7TUFrQk0sV0FBVztNQUNYLGlCQUFpQixFQUFBOztBQW5CdkI7TUFzQk0sWUFBWTtNQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMtbGlzdC9jYXJkcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnR7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGlzdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAuY2FyZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHdoaXRlLCAxMCUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGVsZXRlLWJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLmNvbnR7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi50b3B7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAuY291bnQtcXVlc3Rpb257XHJcbiAgICAuY291bnQxLC5jb3VudDJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50ZW9yZXRoaWMsLnByYWN0eWN7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtaW4taGVpZ2h0OjQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4jYmFjay1idG4ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbiNyZXEtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZmYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAucmlnaHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hfYmxvY2sge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMDVweDtcclxuICAuYnV0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg2O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzE2YTA4NiwgNSUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZF9uZXcge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIC5idXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMTZhMDg2LCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkOWRlO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDlkZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC5pbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkOWRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLnJlY29yZHNfY291dCB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC51cGRhdGUge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cards-list/cards-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cards-list/cards-list.component.ts ***!
  \****************************************************/
/*! exports provided: CardsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsListComponent", function() { return CardsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");




var CardsListComponent = /** @class */ (function () {
    function CardsListComponent(router, provider) {
        this.router = router;
        this.provider = provider;
        this.all = [];
    }
    CardsListComponent.prototype.ngOnInit = function () {
        this.all = this.provider.getAllBilets();
    };
    CardsListComponent.prototype.updateInfo = function () {
        this.all = this.provider.getAllBilets();
    };
    CardsListComponent.prototype.makeList = function (item) {
        var el = {
            'id': item.id,
            'bottom': item.htmlBottom,
            'top': item.htmlTop,
            'styles': item.styles
        };
        localStorage.setItem('curentTemplateBody', JSON.stringify(el));
        localStorage.setItem('question', JSON.stringify(item.questions));
        this.router.navigate(['/final']);
    };
    CardsListComponent.prototype.delete = function (id) {
        this.provider.deleteOneBilet(id);
        this.updateInfo();
    };
    CardsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-list',
            template: __webpack_require__(/*! ./cards-list.component.html */ "./src/app/cards-list/cards-list.component.html"),
            styles: [__webpack_require__(/*! ./cards-list.component.scss */ "./src/app/cards-list/cards-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], CardsListComponent);
    return CardsListComponent;
}());



/***/ }),

/***/ "./src/app/choose-template/choose-template.component.html":
/*!****************************************************************!*\
  !*** ./src/app/choose-template/choose-template.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"title\">\n    <span>Шаблон</span>\n    <div class=\"right\">\n    </div>\n  </div>\n  <div class=\"list\">\n  <div class=\"update\" (click)=\"updateInfo()\">\n    <img src=\"https://cdn1.iconfinder.com/data/icons/e-mail-2/512/YPS__email_mail_refresh_update_sendreceive-512.png\" alt=\"\">\n  </div>\n  <div class=\"fsf\">\n    <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let item of allTemp\">\n      <div class=\"delete-btn\" (click)=\"delete(item.id)\">X</div>\n      <div class=\"card-body\" (click)=\"procces(item)\">\n        <h5 class=\"card-title\">{{item.name}}</h5>\n        <p class=\"card-text\">{{item.description}}</p>\n        <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/edit-template/{{item.id}}\" target=\"_blank\">Редагувати</a>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <a class=\"card-body\" routerLink=\"/template/standard\" target=\"_blank\">\n        <h5 class=\"card-title\">Cтандартний шаблон</h5>\n        <p class=\"card-text\">Створити новий</p>\n        <img src=\"https://cdn3.iconfinder.com/data/icons/stroke/53/Button-512.png\" alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"card\" style=\"width: 18rem;\" >\n      <a class=\"card-body\" routerLink=\"/templ\" target=\"_blank\">\n        <h5 class=\"card-title\">Новий кастомний шаблон</h5>\n        <img src=\"https://cdn3.iconfinder.com/data/icons/stroke/53/Button-512.png\" alt=\"\">\n\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/choose-template/choose-template.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/choose-template/choose-template.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-btn {\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  cursor: pointer;\n  z-index: 5; }\n\n.card {\n  position: relative; }\n\n.card-body {\n  display: block;\n  text-decoration: none;\n  color: black;\n  cursor: pointer; }\n\n.card-body img {\n    width: 50px;\n    height: 50px; }\n\n.card-body:hover {\n  background-color: #e6e5e5; }\n\n.update {\n  position: absolute;\n  right: 28px;\n  top: 24px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer; }\n\n.update img {\n    width: 100%;\n    height: 100%; }\n\n.fsf {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n\n.cont {\n  max-width: 1100px;\n  height: auto;\n  border: 1px solid black;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.cont form {\n    width: 100%; }\n\n.top {\n  width: 30%;\n  height: auto;\n  align-self: flex-start; }\n\n.top .count-question .count1, .top .count-question .count2 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.area {\n  width: 100%;\n  height: auto;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.teorethic, .practyc {\n  width: 45%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.teorethic textarea, .practyc textarea {\n    width: 90%;\n    min-height: 80%;\n    border: 1px solid black;\n    margin: auto; }\n\n#back-btn {\n  width: 160px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-right: 40px; }\n\n#req-btn {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 190px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-right: 40px; }\n\n.ff {\n  font-size: 12px;\n  font-weight: normal; }\n\n.title {\n  border: 1px solid #d3d9de;\n  border-radius: 2px;\n  width: 100%;\n  height: 60px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: white; }\n\n.title .right {\n    overflow: hidden;\n    float: right; }\n\n.title span {\n    line-height: 60px;\n    color: black;\n    font-size: 26px; }\n\n.search_block {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  margin-top: 15px;\n  height: 30px;\n  width: 305px; }\n\n.search_block .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.search_block .but:hover {\n      background-color: #19b699; }\n\n.add_new {\n  float: right;\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.add_new .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.add_new .but:hover {\n      background-color: #19b699; }\n\n.search {\n  border: 1px solid #d3d9de;\n  width: 260px;\n  float: left;\n  height: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 0 10px; }\n\n.list {\n  margin-top: 15px;\n  width: 100%;\n  border: 1px solid #d3d9de;\n  box-sizing: border-box;\n  border-radius: 2px;\n  padding: 15px;\n  min-height: 650px;\n  background-color: white;\n  overflow: hidden; }\n\n.list .info {\n    margin-bottom: 15px;\n    box-sizing: border-box;\n    padding: 0 15px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid #d3d9de;\n    border-radius: 2px; }\n\n.list .info .records_cout {\n      float: left;\n      line-height: 40px; }\n\n.list .info .update {\n      float: right;\n      line-height: 40px; }\n\n.table .edit_btn {\n  width: 40px;\n  height: 20px;\n  background-color: #16a086; }\n\n.table .btnMore, .table .btnDelete {\n  cursor: pointer;\n  border-radius: 1px;\n  float: right;\n  text-align: center;\n  color: white;\n  line-height: 30px;\n  width: 45px;\n  height: 30px;\n  background-color: #16a086; }\n\n.table .btnMore:hover, .table .btnDelete:hover {\n    background-color: #19b699; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLXRlbXBsYXRlL0M6XFxVc2Vyc1xcc2FzaGFcXERlc2t0b3BcXHByYWN0aWMvc3JjXFxhcHBcXGNob29zZS10ZW1wbGF0ZVxcY2hvb3NlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFKakI7SUFNSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNFLHlCQUFtQyxFQUFBOztBQUVyQztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQU5qQjtJQVFJLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsdUJBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBUHJCO0lBU0ksV0FBVyxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFIeEI7SUFNTSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCLEVBQUE7O0FBSXBDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLFVBQVU7RUFDVixpQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBTnhCO0lBUUksVUFBVTtJQUNWLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQVB6QjtJQVNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBVmhCO0lBYUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTmQ7SUFRSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQWhCN0I7TUFrQk0seUJBQXNDLEVBQUE7O0FBSzVDO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQWI3QjtNQWVNLHlCQUFzQyxFQUFBOztBQUs1QztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFFWix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBbUJ2QixnQkFBZ0IsRUFBQTs7QUEzQmxCO0lBVUksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7O0FBaEJ0QjtNQWtCTSxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7O0FBbkJ2QjtNQXNCTSxZQUFZO01BQ1osaUJBQWlCLEVBQUE7O0FBTXZCO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFKN0I7RUFPSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQWY3QjtJQWlCTSx5QkFBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS10ZW1wbGF0ZS9jaG9vc2UtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlLWJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLmNhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5jYXJkLWJvZHk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHdoaXRlLDEwJSk7XHJcbn1cclxuLnVwZGF0ZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI4cHg7XHJcbiAgdG9wOiAyNHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5mc2Z7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4uY29udHtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLnRvcHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIC5jb3VudC1xdWVzdGlvbntcclxuICAgIC5jb3VudDEsLmNvdW50MntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRlb3JldGhpYywucHJhY3R5Y3tcclxuICB3aWR0aDogNDUlO1xyXG4gIG1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLWhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcbiNiYWNrLWJ0biB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuI3JlcS1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5mZiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDlkZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC5yaWdodCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaF9ibG9jayB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwNXB4O1xyXG4gIC5idXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMTZhMDg2LCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkX25ldyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgLmJ1dCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YTA4NjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCMxNmEwODYsIDUlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkOWRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWluLWhlaWdodDogNjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLmluZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAucmVjb3Jkc19jb3V0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLnVwZGF0ZSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50YWJsZXtcclxuICAuZWRpdF9idG57XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgfVxyXG4gIC5idG5Nb3JlLCAuYnRuRGVsZXRle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMTZhMDg2LCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/choose-template/choose-template.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/choose-template/choose-template.component.ts ***!
  \**************************************************************/
/*! exports provided: ChooseTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTemplateComponent", function() { return ChooseTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChooseTemplateComponent = /** @class */ (function () {
    function ChooseTemplateComponent(router, provider) {
        this.router = router;
        this.provider = provider;
        this.allTemp = [];
    }
    ChooseTemplateComponent.prototype.ngOnInit = function () {
        this.allTemp = this.provider.getAllTemplate();
        console.log(this.allTemp);
    };
    ChooseTemplateComponent.prototype.procces = function (item) {
        var a = {
            'id': item.id,
            'top': item.bodyTop,
            'bottom': item.bodyBottom,
            'styles': item.styles
        };
        localStorage.setItem('curentTemplateBody', JSON.stringify(a));
        this.router.navigate(['/final']);
    };
    ChooseTemplateComponent.prototype.updateInfo = function () {
        this.allTemp = this.provider.getAllTemplate();
    };
    ChooseTemplateComponent.prototype.delete = function (id) {
        this.provider.deleteTemplate(id);
        this.updateInfo();
    };
    ChooseTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-template',
            template: __webpack_require__(/*! ./choose-template.component.html */ "./src/app/choose-template/choose-template.component.html"),
            styles: [__webpack_require__(/*! ./choose-template.component.scss */ "./src/app/choose-template/choose-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]])
    ], ChooseTemplateComponent);
    return ChooseTemplateComponent;
}());



/***/ }),

/***/ "./src/app/create-template/create-template.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-template/create-template.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"customDiv\">\n  <form class=\"col s12\" [formGroup]=\"Tform\" (ngSubmit)=\"proccesData()\">\n    <input type=\"text\" placeholder=\"name\" formControlName=\"name\">\n    <input type=\"text\" placeholder=\"description\" formControlName=\"descr\">\n    <div class=\"areas\">\n    <textarea type=\"text\" class=\"inp-templ\" [(ngModel)]=\"prop\" (input)=\"f()\"\n              formControlName=\"tempBody\"\n              placeholder=\"top\"\n    ></textarea>\n      <textarea type=\"text\" class=\"inp-templ\" [(ngModel)]=\"prop2\" (input)=\"f()\"\n                formControlName=\"tempBodyBottom\"\n                placeholder=\"bottom\"\n      ></textarea>\n      <textarea type=\"text\" class=\"inp-templ\" [(ngModel)]=\"propCss\" (input)=\"f()\"\n                formControlName=\"tempCss\"\n                placeholder=\"css\"\n      ></textarea>\n    </div>\n    <button class=\"btn btn-primary waves-effect waves-light\" type=\"submit\" name=\"action\">далі</button>\n\n  </form>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"\" #result></div>\n      <div class=\"\" #result2></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-template/create-template.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/create-template/create-template.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inp-templ {\n  width: 300px;\n  height: 300px;\n  margin: auto; }\n\n.areas {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.areas textarea {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    width: 33%;\n    height: 300px; }\n\n.f {\n  margin-top: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRlbXBsYXRlL0M6XFxVc2Vyc1xcc2FzaGFcXERlc2t0b3BcXHByYWN0aWMvc3JjXFxhcHBcXGNyZWF0ZS10ZW1wbGF0ZVxcY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBSi9CO0lBTUksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYSxFQUFBOztBQUlqQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXRlbXBsYXRlL2NyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAtdGVtcGx7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hcmVhc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHRleHRhcmVhe1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5me1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-template/create-template.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-template/create-template.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComponent", function() { return CreateTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");





var CreateTemplateComponent = /** @class */ (function () {
    function CreateTemplateComponent(fb, router, provider) {
        this.fb = fb;
        this.router = router;
        this.provider = provider;
        this.Tform = this.fb.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            descr: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            tempBody: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            tempCss: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            tempBodyBottom: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]]
        });
        this.prop = '';
        this.prop2 = '';
        this.propCss = '';
    }
    Object.defineProperty(CreateTemplateComponent.prototype, "tempBody", {
        get: function () {
            return this.Tform.get('tempBody');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTemplateComponent.prototype, "name", {
        get: function () {
            return this.Tform.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTemplateComponent.prototype, "descr", {
        get: function () {
            return this.Tform.get('descr');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTemplateComponent.prototype, "tempCss", {
        get: function () {
            return this.Tform.get('tempCss');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTemplateComponent.prototype, "tempBodyBottom", {
        get: function () {
            return this.Tform.get('tempBodyBottom');
        },
        enumerable: true,
        configurable: true
    });
    CreateTemplateComponent.prototype.ngOnInit = function () {
        var node = document.createElement('style');
        node.className = 'customStyles';
        document.querySelector('#customDiv').appendChild(node);
    };
    CreateTemplateComponent.prototype.f = function () {
        this.result.nativeElement.innerHTML = this.prop;
        this.result2.nativeElement.innerHTML = this.prop2;
        this.addStyleString(this.propCss);
    };
    CreateTemplateComponent.prototype.addStyleString = function (str) {
        document.querySelector('.customStyles').innerHTML = str;
    };
    CreateTemplateComponent.prototype.proccesData = function () {
        var allTemplates = [];
        allTemplates = this.provider.getAllTemplate() || [];
        var a = {
            'id': allTemplates.length,
            'bodyTop': this.tempBody.value,
            'bodyBottom': this.tempBodyBottom.value,
            'styles': this.tempCss.value,
            'description': this.descr.value,
            'name': this.name.value
        };
        allTemplates.unshift(a);
        this.provider.saveTemplate(allTemplates);
        document.querySelector('.customStyles').innerHTML = '';
        this.router.navigate(['/']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('result'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateTemplateComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('result2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateTemplateComponent.prototype, "result2", void 0);
    CreateTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-template',
            template: __webpack_require__(/*! ./create-template.component.html */ "./src/app/create-template/create-template.component.html"),
            styles: [__webpack_require__(/*! ./create-template.component.scss */ "./src/app/create-template/create-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"]])
    ], CreateTemplateComponent);
    return CreateTemplateComponent;
}());



/***/ }),

/***/ "./src/app/edit-template/edit-template.component.html":
/*!************************************************************!*\
  !*** ./src/app/edit-template/edit-template.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"customDiv\">\n  <form class=\"col s12\" [formGroup]=\"Tform\" (ngSubmit)=\"proccesData()\">\n    <input type=\"text\" placeholder=\"name\" formControlName=\"name\">\n    <input type=\"text\" placeholder=\"description\" formControlName=\"descr\">\n    <div class=\"areas\">\n    <textarea type=\"text\" class=\"inp-templ\" [(ngModel)]=\"prop\" (input)=\"f()\"\n              formControlName=\"tempBody\"\n              placeholder=\"top\"\n    ></textarea>\n      <textarea type=\"text\" class=\"inp-templ\" [(ngModel)]=\"propCss\" (input)=\"f()\"\n                formControlName=\"tempCss\"\n                placeholder=\"css\"\n      ></textarea>\n      <textarea type=\"text\" class=\"inp-templ\" [(ngModel)]=\"prop2\" (input)=\"f()\"\n                formControlName=\"tempBodyBottom\"\n                placeholder=\"bottom\"\n      ></textarea>\n    </div>\n    <button class=\"btn waves-effect waves-light btn-primary\" type=\"submit\" name=\"action\">Зберегти</button>\n\n  </form>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"\" #result></div>\n      <div class=\"f\" #result2></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-template/edit-template.component.scss":
/*!************************************************************!*\
  !*** ./src/app/edit-template/edit-template.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inp-templ {\n  width: 300px;\n  height: 300px;\n  margin: auto; }\n\n.areas {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.areas textarea {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    width: 33%;\n    height: 300px; }\n\n.f {\n  margin-top: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10ZW1wbGF0ZS9DOlxcVXNlcnNcXHNhc2hhXFxEZXNrdG9wXFxwcmFjdGljL3NyY1xcYXBwXFxlZGl0LXRlbXBsYXRlXFxlZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBSi9CO0lBTUksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYSxFQUFBOztBQUlqQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC10ZW1wbGF0ZS9lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucC10ZW1wbHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmFyZWFze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dGFyZWF7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZ7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/edit-template/edit-template.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-template/edit-template.component.ts ***!
  \**********************************************************/
/*! exports provided: EditTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTemplateComponent", function() { return EditTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditTemplateComponent = /** @class */ (function () {
    function EditTemplateComponent(fb, router, provider, actRouter) {
        this.fb = fb;
        this.router = router;
        this.provider = provider;
        this.actRouter = actRouter;
        this.Tform = this.fb.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            descr: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            tempBody: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            tempCss: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            tempBodyBottom: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]]
        });
        this.template = {};
        this.prop = '';
        this.prop2 = '';
        this.propCss = '';
    }
    Object.defineProperty(EditTemplateComponent.prototype, "tempBody", {
        get: function () {
            return this.Tform.get('tempBody');
        },
        set: function (tempBody) {
            this.Tform.controls['tempBody'].setValue(tempBody);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTemplateComponent.prototype, "name", {
        get: function () {
            return this.Tform.get('name');
        },
        set: function (name) {
            this.Tform.controls['name'].setValue(name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTemplateComponent.prototype, "descr", {
        get: function () {
            return this.Tform.get('descr');
        },
        set: function (descr) {
            this.Tform.controls['descr'].setValue(descr);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTemplateComponent.prototype, "tempCss", {
        get: function () {
            return this.Tform.get('tempCss');
        },
        set: function (tempCss) {
            this.Tform.controls['tempCss'].setValue(tempCss);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTemplateComponent.prototype, "tempBodyBottom", {
        get: function () {
            return this.Tform.get('tempBodyBottom');
        },
        set: function (tempBodyBottom) {
            this.Tform.controls['tempBodyBottom'].setValue(tempBodyBottom);
        },
        enumerable: true,
        configurable: true
    });
    EditTemplateComponent.prototype.ngOnInit = function () {
        var node = document.createElement('style');
        node.className = 'customStyles';
        document.querySelector('#customDiv').appendChild(node);
        this.template = this.provider.getemplateById(this.actRouter.snapshot.paramMap.get('id'));
        console.log(this.template);
        this.name.setValue(this.template['name']);
        this.descr.setValue(this.template['description']);
        this.prop2 = this.template['bodyBottom'];
        this.prop = this.template['bodyTop'];
        this.propCss = this.template['styles'];
        this.f();
    };
    EditTemplateComponent.prototype.f = function () {
        this.result.nativeElement.innerHTML = this.prop;
        this.result2.nativeElement.innerHTML = this.prop2;
        this.addStyleString(this.propCss);
    };
    EditTemplateComponent.prototype.addStyleString = function (str) {
        document.querySelector('.customStyles').innerHTML = str;
    };
    EditTemplateComponent.prototype.proccesData = function () {
        var allTemplates = [];
        var a = {
            'id': allTemplates.length,
            'bodyTop': this.tempBody.value,
            'bodyBottom': this.tempBodyBottom.value,
            'styles': this.tempCss.value,
            'description': this.descr.value,
            'name': this.name.value
        };
        this.provider.deleteTemplate(this.actRouter.snapshot.paramMap.get('id'));
        allTemplates = this.provider.getAllTemplate() || [];
        allTemplates.unshift(a);
        this.provider.saveTemplate(allTemplates);
        document.querySelector('.customStyles').innerHTML = '';
        this.router.navigate(['/templates-list']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('result'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditTemplateComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('result2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditTemplateComponent.prototype, "result2", void 0);
    EditTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-template',
            template: __webpack_require__(/*! ./edit-template.component.html */ "./src/app/edit-template/edit-template.component.html"),
            styles: [__webpack_require__(/*! ./edit-template.component.scss */ "./src/app/edit-template/edit-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditTemplateComponent);
    return EditTemplateComponent;
}());



/***/ }),

/***/ "./src/app/final-confirm/final-confirm.component.html":
/*!************************************************************!*\
  !*** ./src/app/final-confirm/final-confirm.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"saved\">\n  <strong>Збережено!</strong>.\n</div>\n<div class=\"\" id=\"customDiv\">\n<div class=\"card\" *ngFor=\"let item  of questions;index as k\">\n  <div class=\"card-body\">\n    <div [innerHTML] = 'templateTop'>\n    </div>\n    <p style=\"text-align: center; margin-bottom: 20px;font-weight: bold;\">Екзаменаційний білет № {{k+1}}</p>\n\n    <p  class=\"card-text\" *ngFor=\"let i of item | keyvalue\">\n      {{ i.key }}) {{ i.value }}\n    </p>\n    <div [innerHTML] = 'templateBottom'></div>\n  </div>\n</div>\n  <button type=\"button\" class=\"hidden-print settings\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">Зберегти</button>\n</div>\n<!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Збереження</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"form-group\">\n              <label for=\"\">Назва шаблону</label>\n              <input type=\"text\"\n                     [(ngModel)] = 'name'\n                     class=\"form-control\" aria-describedby=\"\" placeholder=\"Введіть назву шаблону\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlTextarea1\">Опис шаблона</label>\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\"\n                        [(ngModel)] = 'descr'\n                        placeholder=\"Введіть опис шаблону\"\n                        rows=\"3\"></textarea>\n            </div>\n          </div>\n          <div class=\"modal-footer \">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Закрити</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"saveBilets()\">Зберегти</button>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/final-confirm/final-confirm.component.scss":
/*!************************************************************!*\
  !*** ./src/app/final-confirm/final-confirm.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span, p {\n  font-size: 28px !important; }\n\n#customDiv {\n  width: 100%;\n  max-height: 3508px; }\n\n.card {\n  width: 100%;\n  height: auto; }\n\n@media print {\n  .hidden-print {\n    display: none; }\n  * {\n    background: #FFF !important; }\n  @page {\n    margin: 1cm; }\n  img {\n    max-width: 100% !important; }\n  a[href^=http]:after {\n    content: \" <\" attr(href) \"> \"; }\n  .card {\n    width: 100%;\n    height: 1100px;\n    border-bottom: 1px solid gray; }\n  h1 {\n    font-size: 32px !important; }\n  span, p {\n    font-size: 28px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtY29uZmlybS9DOlxcVXNlcnNcXHNhc2hhXFxEZXNrdG9wXFxwcmFjdGljL3NyY1xcYXBwXFxmaW5hbC1jb25maXJtXFxmaW5hbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRTtJQUNFLGFBQ0YsRUFBQTtFQUNBO0lBQ0UsMkJBQTBCLEVBQUE7RUFFNUI7SUFDRSxXQUNGLEVBQUE7RUFDQTtJQUNFLDBCQUNGLEVBQUE7RUFDQTtJQUFzQiw2QkFBNEIsRUFBQTtFQUNsRDtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkJBQTZCLEVBQUE7RUFFL0I7SUFDRSwwQkFBeUIsRUFBQTtFQUUzQjtJQUNFLDBCQUF5QixFQUFBLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvZmluYWwtY29uZmlybS9maW5hbC1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbixwe1xyXG4gIGZvbnQtc2l6ZTogMjhweCFpbXBvcnRhbnQ7XHJcbn1cclxuI2N1c3RvbURpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OjM1MDhweCA7XHJcbn1cclxuLmNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmhpZGRlbi1wcmludCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbiAgfVxyXG4gICoge1xyXG4gICAgYmFja2dyb3VuZDojRkZGICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBwYWdlIHtcclxuICAgIG1hcmdpbjogMWNtXHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudFxyXG4gIH1cclxuICBhW2hyZWZePWh0dHBdOmFmdGVyIHsgY29udGVudDpcIiA8XCIgYXR0cihocmVmKSBcIj4gXCIgfVxyXG4gIC5jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExMDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIH1cclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzJweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHNwYW4scHtcclxuICAgIGZvbnQtc2l6ZTogMjhweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/final-confirm/final-confirm.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/final-confirm/final-confirm.component.ts ***!
  \**********************************************************/
/*! exports provided: FinalConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalConfirmComponent", function() { return FinalConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FinalConfirmComponent = /** @class */ (function () {
    function FinalConfirmComponent(router, provider) {
        this.router = router;
        this.provider = provider;
        this.saved = false;
        this.Biletlength = +JSON.parse(localStorage.getItem('bilet-number'));
    }
    FinalConfirmComponent.prototype.ngOnInit = function () {
        this.templateTop = this.provider.getCurenttemplate().top || '';
        this.templateBottom = this.provider.getCurenttemplate().bottom || '';
        this.questions = this.provider.getCurentQuestions() || [];
        this.createStyleTag();
        this.pasteStyles();
    };
    FinalConfirmComponent.prototype.createRange = function (n) {
        var items = [];
        for (var i = 1; i <= n; i++) {
            items.push(i);
        }
        return items;
    };
    FinalConfirmComponent.prototype.createStyleTag = function () {
        if (!document.querySelector('.customStyles')) {
            var node = document.createElement('style');
            node.className = 'customStyles';
            document.querySelector('#customDiv').appendChild(node);
        }
    };
    FinalConfirmComponent.prototype.pasteStyles = function () {
        document.querySelector('.customStyles').innerHTML = this.provider.getCurenttemplate().styles;
    };
    FinalConfirmComponent.prototype.saveBilets = function () {
        var _this = this;
        var a = {
            'questions': this.questions,
            'htmlTop': this.templateTop,
            'htmlBottom': this.templateBottom,
            'name': this.name,
            'descr': this.descr,
            'styles': this.provider.getCurenttemplate().styles
        };
        this.saved = true;
        window.scrollTo(0, 0);
        this.provider.saveBilets(a);
        setTimeout(function () {
            _this.saved = false;
        }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('result'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FinalConfirmComponent.prototype, "result", void 0);
    FinalConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-final-confirm',
            template: __webpack_require__(/*! ./final-confirm.component.html */ "./src/app/final-confirm/final-confirm.component.html"),
            styles: [__webpack_require__(/*! ./final-confirm.component.scss */ "./src/app/final-confirm/final-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]])
    ], FinalConfirmComponent);
    return FinalConfirmComponent;
}());



/***/ }),

/***/ "./src/app/input-text/input-text.component.html":
/*!******************************************************!*\
  !*** ./src/app/input-text/input-text.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <span>Створення набору питань</span>\n  <div class=\"right\">\n  </div>\n</div>\n<div class=\"list\">\n  <form class=\"col s12\" [formGroup]=\"Tform\" (ngSubmit)=\"proccesData()\">\n<div class=\"top\">\n  <div class=\"config\">\n    <div class=\"count-question\">\n      <div class=\"count1\">\n        <span>Кількість білетів</span>\n        <input type=\"text\"\n               [class.is-invalid]=\"ticketCount.touched && ticketCount.invalid\"\n               formControlName=\"ticketCount\"\n        >\n      </div>\n      <div class=\"count1\">\n        <span>Кількість теоретичних</span>\n        <input type=\"text\"\n               [class.is-invalid]=\"theoryCount.touched && theoryCount.invalid\"\n\n               formControlName=\"theoryCount\"\n        >\n      </div>\n      <div class=\"count2\">\n        <span>Кількість Практичних</span>\n        <input type=\"text\"\n               formControlName=\"practiceCount\"\n               [class.is-invalid]=\"practiceCount.touched && practiceCount.invalid\"\n\n        >\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"area\">\n  <div class=\"teorethic\">\n    <p>Теоретичні питання</p>\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"\n              formControlName=\"theoryQ\"\n              [class.is-invalid]=\"theoryQ.touched && theoryQ.invalid\"\n\n    ></textarea>\n\n  </div>\n  <div class=\"practyc\">\n    <p>Практичні завдання</p>\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"\n              formControlName=\"practiceQ\"\n              [class.is-invalid]=\"practiceQ.touched && practiceQ.invalid\"\n\n\n    ></textarea>\n  </div>\n</div>\n  <div class=\"bottom\">\n    <button class=\"btn btn-primary waves-effect waves-light \" [disabled]=\"!Tform.valid\" type=\"submit\" name=\"action\">далі</button>\n    <div #dataContainer></div>\n\n\n  </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/input-text/input-text.component.scss":
/*!******************************************************!*\
  !*** ./src/app/input-text/input-text.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border: 1px solid gray;\n  margin-bottom: 3px; }\n\n.cont {\n  max-width: 1100px;\n  height: auto;\n  border: 1px solid black;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.cont form {\n    width: 100%; }\n\n.top {\n  width: 30%;\n  height: auto;\n  align-self: flex-start; }\n\n.top .count-question .count1, .top .count-question .count2 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.area {\n  width: 100%;\n  height: auto;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.teorethic, .practyc {\n  width: 45%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.teorethic textarea, .practyc textarea {\n    width: 90%;\n    min-height: 80%;\n    border: 1px solid black;\n    margin: auto; }\n\n#back-btn {\n  width: 160px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-right: 40px; }\n\n#req-btn {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 190px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-right: 40px; }\n\n.ff {\n  font-size: 12px;\n  font-weight: normal; }\n\n.title {\n  border: 1px solid #d3d9de;\n  border-radius: 2px;\n  width: 100%;\n  height: 60px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: white; }\n\n.title .right {\n    overflow: hidden;\n    float: right; }\n\n.title span {\n    line-height: 60px;\n    color: black;\n    font-size: 26px; }\n\n.search_block {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  margin-top: 15px;\n  height: 30px;\n  width: 305px; }\n\n.search_block .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.search_block .but:hover {\n      background-color: #19b699; }\n\n.add_new {\n  float: right;\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.add_new .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.add_new .but:hover {\n      background-color: #19b699; }\n\n.search {\n  border: 1px solid #d3d9de;\n  width: 260px;\n  float: left;\n  height: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 0 10px; }\n\n.list {\n  margin-top: 15px;\n  width: 100%;\n  border: 1px solid #d3d9de;\n  box-sizing: border-box;\n  border-radius: 2px;\n  padding: 15px;\n  min-height: 650px;\n  background-color: white;\n  overflow: hidden; }\n\n.list .info {\n    margin-bottom: 15px;\n    box-sizing: border-box;\n    padding: 0 15px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid #d3d9de;\n    border-radius: 2px; }\n\n.list .info .records_cout {\n      float: left;\n      line-height: 40px; }\n\n.list .info .update {\n      float: right;\n      line-height: 40px; }\n\n.table .edit_btn {\n  width: 40px;\n  height: 20px;\n  background-color: #16a086; }\n\n.table .btnMore, .table .btnDelete {\n  cursor: pointer;\n  border-radius: 1px;\n  float: right;\n  text-align: center;\n  color: white;\n  line-height: 30px;\n  width: 45px;\n  height: 30px;\n  background-color: #16a086; }\n\n.table .btnMore:hover, .table .btnDelete:hover {\n    background-color: #19b699; }\n\n.is-invalid {\n  border: 1px red solid !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtdGV4dC9DOlxcVXNlcnNcXHNhc2hhXFxEZXNrdG9wXFxwcmFjdGljL3NyY1xcYXBwXFxpbnB1dC10ZXh0XFxpbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBUHJCO0lBU0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFIeEI7SUFNSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCLEVBQUE7O0FBSWxDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLFVBQVU7RUFDVixpQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBTnhCO0lBUUksVUFBVTtJQUNWLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQVB6QjtJQVNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBVmhCO0lBYUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTmQ7SUFRSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQWhCN0I7TUFrQk0seUJBQXNDLEVBQUE7O0FBSzVDO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQWI3QjtNQWVNLHlCQUFzQyxFQUFBOztBQUs1QztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFFWix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBbUJ2QixnQkFBZ0IsRUFBQTs7QUEzQmxCO0lBVUksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7O0FBaEJ0QjtNQWtCTSxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7O0FBbkJ2QjtNQXNCTSxZQUFZO01BQ1osaUJBQWlCLEVBQUE7O0FBTXZCO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFKN0I7RUFPSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQWY3QjtJQWlCTSx5QkFBc0MsRUFBQTs7QUFJNUM7RUFDRSxnQ0FBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5jb250e1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZvcm17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxufVxyXG4udG9we1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbi5jb3VudC1xdWVzdGlvbntcclxuICAuY291bnQxLC5jb3VudDJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxufVxyXG4uYXJlYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRlb3JldGhpYywucHJhY3R5Y3tcclxuICB3aWR0aDogNDUlO1xyXG4gIG1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLWhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcbiNiYWNrLWJ0biB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuI3JlcS1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5mZiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDlkZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC5yaWdodCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaF9ibG9jayB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwNXB4O1xyXG4gIC5idXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMTZhMDg2LCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkX25ldyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgLmJ1dCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YTA4NjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCMxNmEwODYsIDUlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkOWRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWluLWhlaWdodDogNjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLmluZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAucmVjb3Jkc19jb3V0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLnVwZGF0ZSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50YWJsZXtcclxuICAuZWRpdF9idG57XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgfVxyXG4gIC5idG5Nb3JlLCAuYnRuRGVsZXRle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMTZhMDg2LCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pcy1pbnZhbGlke1xyXG4gIGJvcmRlcjogMXB4IHJlZCBzb2xpZCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/input-text/input-text.component.ts":
/*!****************************************************!*\
  !*** ./src/app/input-text/input-text.component.ts ***!
  \****************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");





var InputTextComponent = /** @class */ (function () {
    function InputTextComponent(fb, router, provider) {
        this.fb = fb;
        this.router = router;
        this.provider = provider;
        this.theoreticArray = [];
        this.practiceArray = [];
        this.data = {
            theoryCount: '',
            ticketCount: '',
            practiceCount: '',
            practiceQ: '',
            theoryQ: ''
        };
        this.Tform = this.fb.group({
            theoryCount: ['0', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            ticketCount: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')
                ]
            ],
            practiceCount: ['0', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')
                ]],
            practiceQ: ['', []],
            theoryQ: ['', []]
        });
    }
    InputTextComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(InputTextComponent.prototype, "theoryCount", {
        get: function () {
            return this.Tform.get('theoryCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextComponent.prototype, "ticketCount", {
        get: function () {
            return this.Tform.get('ticketCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextComponent.prototype, "practiceCount", {
        get: function () {
            return this.Tform.get('practiceCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextComponent.prototype, "practiceQ", {
        get: function () {
            return this.Tform.get('practiceQ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextComponent.prototype, "theoryQ", {
        get: function () {
            return this.Tform.get('theoryQ');
        },
        enumerable: true,
        configurable: true
    });
    InputTextComponent.prototype.makeListPracticeQuestion = function () {
        this.practiceArray = this.data.practiceQ.split(/\r?\n+/);
        this.practiceArray = this.checkEmpty(this.practiceArray);
    };
    InputTextComponent.prototype.checkEmpty = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length == 0) {
                arr.splice(i, 1);
            }
        }
        return arr;
    };
    InputTextComponent.prototype.makeListTheoreticQuestion = function () {
        this.theoreticArray = this.data.theoryQ.split(/\r?\n+/);
        this.theoreticArray = this.checkEmpty(this.theoreticArray);
    };
    InputTextComponent.prototype.generateRandomNumbers = function () {
        var numberTheoretic = [];
        var numberPractic = [];
        while (numberPractic.length < +this.data.practiceCount) {
            var rand = this.random(0, this.practiceArray.length - 1);
            if (numberPractic.indexOf(rand) === -1)
                numberPractic.push(rand);
        }
        while (numberTheoretic.length < +this.data.theoryCount) {
            var rand = this.random(0, this.theoreticArray.length - 1);
            if (numberTheoretic.indexOf(rand) === -1)
                numberTheoretic.push(rand);
        }
        console.log(numberPractic, numberTheoretic);
        return [numberTheoretic, numberPractic];
    };
    InputTextComponent.prototype.checkIfRepeat = function (array, myNumber) {
        array.forEach(function (el) {
            if (el == myNumber) {
                return false;
            }
        });
        return true;
    };
    InputTextComponent.prototype.random = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
    InputTextComponent.prototype.generateQuastionCombination = function () {
        var arr = [];
        for (var i = 0; i < +this.data.ticketCount; i++) {
            arr.unshift(this.makeBiletQuest());
        }
        this.saveToStorage(arr);
        this.getStorage();
    };
    InputTextComponent.prototype.makeBiletQuest = function () {
        var _this = this;
        var nubmers = this.generateRandomNumbers();
        var quest = {};
        var i = 1;
        nubmers[0].forEach(function (el) {
            quest[i] = _this.theoreticArray[el];
            i++;
        });
        var j = 0;
        nubmers[1].forEach(function (el) {
            quest[i + j] = _this.practiceArray[el];
            j++;
        });
        return quest;
    };
    InputTextComponent.prototype.saveToStorage = function (arr) {
        localStorage.setItem('question', JSON.stringify(arr));
        this.provider.saveToAllQuestion(arr);
    };
    InputTextComponent.prototype.getStorage = function () {
        console.log(JSON.parse(localStorage.getItem('question')));
    };
    InputTextComponent.prototype.proccesData = function () {
        this.data.theoryCount = this.theoryCount.value;
        this.data.theoryQ = this.theoryQ.value;
        this.data.ticketCount = this.ticketCount.value;
        this.data.practiceCount = this.practiceCount.value;
        this.data.practiceQ = this.practiceQ.value;
        localStorage.setItem('practice-number', this.data.practiceCount);
        localStorage.setItem('theoretic-number', this.data.theoryCount);
        localStorage.setItem('bilet-number', this.data.ticketCount);
        this.makeListPracticeQuestion();
        this.makeListTheoreticQuestion();
        this.generateQuastionCombination();
        this.router.navigate(['/choose-template']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputTextComponent.prototype, "dataContainer", void 0);
    InputTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-text',
            template: __webpack_require__(/*! ./input-text.component.html */ "./src/app/input-text/input-text.component.html"),
            styles: [__webpack_require__(/*! ./input-text.component.scss */ "./src/app/input-text/input-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"]])
    ], InputTextComponent);
    return InputTextComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/question\">Згенерувати білети</button>\r\n<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/templ\">Додати шаблон</button>\r\n<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/choose-template\">Primary</button>\r\n<button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

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

/***/ "./src/app/provider.service.ts":
/*!*************************************!*\
  !*** ./src/app/provider.service.ts ***!
  \*************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProviderService = /** @class */ (function () {
    function ProviderService() {
    }
    ProviderService.prototype.saveTemplate = function (temp) {
        localStorage.setItem('templates', JSON.stringify(temp));
    };
    ProviderService.prototype.getTemplate = function () {
        return localStorage.getItem('templateBody');
    };
    ProviderService.prototype.getAllTemplate = function () {
        return JSON.parse(localStorage.getItem('templates'));
    };
    ProviderService.prototype.getAllQuestion = function () {
        return JSON.parse(localStorage.getItem('allQuestion'));
    };
    ProviderService.prototype.saveToAllQuestion = function (item) {
        var temp = [];
        temp = this.getAllQuestion() || [];
        temp.unshift(item);
        localStorage.setItem('allQuestion', JSON.stringify(temp));
    };
    ProviderService.prototype.deleteTemplate = function (id) {
        var all = [];
        all = this.getAllTemplate();
        for (var i = 0; i < all.length; i++) {
            if (all[i].id == id) {
                all.splice(i, 1);
            }
        }
        this.saveTemplate(all);
    };
    ProviderService.prototype.getemplateById = function (id) {
        var elem = {};
        console.log(id);
        var all = this.getAllTemplate();
        all.forEach(function (el) {
            if (el.id == id) {
                elem = el;
                console.log('sssssssssssssssss');
            }
        });
        return elem;
    };
    ProviderService.prototype.getCurenttemplate = function () {
        return JSON.parse(localStorage.getItem('curentTemplateBody'));
    };
    ProviderService.prototype.getCurentQuestions = function () {
        return JSON.parse(localStorage.getItem('question'));
    };
    ProviderService.prototype.getAllBilets = function () {
        return JSON.parse(localStorage.getItem('allBilets')) || [];
    };
    ProviderService.prototype.saveBilets = function (obj) {
        var all = this.getAllBilets();
        obj['id'] = all.length;
        all.unshift(obj);
        localStorage.setItem('allBilets', JSON.stringify(all));
    };
    ProviderService.prototype.deleteOneBilet = function (id) {
        var all = this.getAllBilets();
        for (var i = 0; i < all.length; i++) {
            if (all[i].id == id) {
                all.splice(i, 1);
            }
        }
        localStorage.setItem('allBilets', JSON.stringify(all));
    };
    ProviderService.prototype.getOneBilet = function (id) {
        var all = this.getAllBilets();
        all.forEach(function (el) {
            if (el.id == id) {
                return el;
            }
        });
        return null;
    };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/standart-template/standart-template.component.html":
/*!********************************************************************!*\
  !*** ./src/app/standart-template/standart-template.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"saved\">\r\n  <strong>Збережено!</strong>.\r\n</div>\r\n<div class=\"bilet\">\r\n  <div class=\"sett\">\r\n  <button type=\"button\" class=\"settings\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\"></button>\r\n    <img src=\"https://png.pngtree.com/svg/20151201/9c00b1fe9c.svg\" alt=\"\">\r\n  </div>\r\n    <!-- Modal -->\r\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\">\r\n        <form action=\"\" [formGroup]=\"optionForm\" (ngSubmit)=\"proccesDataOption()\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Налаштування</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"form-group\">\r\n                <label for=\"\">Назва шаблону</label>\r\n                <input type=\"text\"\r\n                       formControlName=\"nameOption\"\r\n                       class=\"form-control\" aria-describedby=\"\" placeholder=\"Введіть назву шаблону\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlTextarea1\">Опис шаблона</label>\r\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\"\r\n                          formControlName=\"descriptionOption\"\r\n                            placeholder=\"Введіть опис шаблону\"\r\n                          rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Закрити</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"proccesDataOption()\">Зберегти</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <form action=\"\" [formGroup]=\"Tform\" (ngSubmit)=\"proccesData()\">\r\n  <div class=\"title\">\r\n    <input type=\"text\" value=\"Чернівецький національний університет\r\n      імені Юрія Федьковича\"\r\n           title=\"Назва навчального закладу\"\r\n           formControlName=\"title\"\r\n    >\r\n  </div>\r\n  <div class=\"section2\">\r\n    <span>Рівень вищої освіти: </span> <input type=\"text\"\r\n                                              value=\"бакалавр\"\r\n                                              formControlName=\"applied\"\r\n                                              title=\"пркл. бакалавр\"\r\n  >\r\n  </div>\r\n  <div class=\"section3\">\r\n    <span>Спеціальність: </span> <input type=\"text\"\r\n                                        formControlName=\"speciality\"\r\n                                        value=\"121 “Інженерія програмного забезпечення”, 122 – “Комп’ютерні науки та інформаційні технології”, 123 – “Комп’ютерна інженерія”\">\r\n  </div>\r\n  <div class=\"section3\">\r\n    <span>Навчальна дисципліна: </span> <input\r\n    formControlName=\"subject\"\r\n    type=\"text\" value=\"Вища математика\">\r\n  </div>\r\n  <div class=\"section8\">\r\n    <span>Семестр</span><input\r\n    formControlName=\"partYear\"\r\n    type=\"text\" value=\"1\">\r\n  </div>\r\n  <div class=\"section4\">\r\n    <span>ЕКЗАМЕНАЦІЙНИЙ БІЛЕТ №1</span>\r\n  </div>\r\n  <div class=\"section5\">\r\n    <span>Затверджено на засіданні кафедри </span> <input type=\"text\"\r\n                                                          formControlName=\"kafedra\"\r\n                                                          value=\"математичних проблем управління і кібернетики\">\r\n  </div>\r\n  <div class=\"section5\">\r\n    <span>Протокол № </span> <input type=\"text\"\r\n                                    formControlName=\"protokol\"\r\n                                    value=\"12 від 02.05.2018 р.\">\r\n  </div>\r\n  <div class=\"section6\">\r\n    <div class=\"left-r\">\r\n      <div class=\"left\">\r\n        <p>(підпис)</p>\r\n      </div>\r\n      <div class=\"right\">\r\n        <p>Екзаменатор</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-r\">\r\n      <input type=\"text\" value=\"Дрінь\" formControlName=\"ekzamenator\" title=\"Екзаменатор\">\r\n    </div>\r\n  </div>\r\n  <div class=\"section6\">\r\n    <div class=\"left-r\">\r\n      <div class=\"left\">\r\n        <p>(підпис)</p>\r\n      </div>\r\n      <div class=\"right\">\r\n        <p>Завідувач кафедри</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-r\">\r\n      <input type=\"text\" value=\"\" formControlName=\"kafedraBoss\" title=\"завідувач кафедри\">\r\n    </div>\r\n  </div>\r\n    <button type=\"button\" class=\"btn waves-effect waves-light btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">Зберегти</button>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/standart-template/standart-template.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/standart-template/standart-template.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.title {\n  text-align: center; }\n.title h1 {\n  font-size: 20px; }\n.section6 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n.section6 .left p {\n    position: relative; }\n.section6 .left p:after {\n      content: \"\";\n      border-top: 1px solid black;\n      height: 2px;\n      width: 100%;\n      left: 0;\n      position: absolute; }\n.section6 .left-r {\n    width: 250px;\n    height: 75px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative; }\n.section6 .left-r .right {\n      position: absolute;\n      top: 5px;\n      left: 80px; }\n.section6 .right-r {\n    width: 240px; }\n.section6 .right-r p {\n      text-align: center;\n      position: relative; }\n.section6 .right-r p:after {\n        content: \"(прізвище та ініціали)\";\n        border-top: 1px solid black;\n        height: 2px;\n        text-align: center;\n        width: 100%;\n        left: 0;\n        top: 25px;\n        position: absolute; }\n.sett {\n  position: relative; }\n.sett img {\n    right: 0;\n    width: 30px;\n    height: 30px;\n    position: absolute; }\n.title input {\n  width: 400px; }\n.waves-effect {\n  float: right; }\n.section2, .section3, .section4, .section8, .section5 {\n  margin-bottom: 5px; }\n.section2 span, .section3 span, .section4 span, .section8 span, .section5 span {\n    margin-right: 5px; }\n.section4 {\n  text-align: center;\n  margin-bottom: 200px; }\n.settings {\n  position: absolute;\n  right: 0px;\n  background: transparent;\n  width: 30px;\n  z-index: 5;\n  height: 30px; }\n.alert {\n  -webkit-transition: .3s;\n  transition: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhbmRhcnQtdGVtcGxhdGUvc3RhbmRhcnQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YW5kYXJ0LXRlbXBsYXRlL0M6XFxVc2Vyc1xcc2FzaGFcXERlc2t0b3BcXHByYWN0aWMvc3JjXFxhcHBcXHN0YW5kYXJ0LXRlbXBsYXRlXFxzdGFuZGFydC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGVBQWUsRUFBQTtBQUVqQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEIsRUFBQTtBQUhoQztJQU1NLGtCQUFrQixFQUFBO0FBTnhCO01BUVEsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixXQUFXO01BQ1gsV0FBVztNQUNYLE9BQU07TUFDTixrQkFBa0IsRUFBQTtBQWIxQjtJQWtCSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtBQXhCdEI7TUEwQk0sa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixVQUFVLEVBQUE7QUE1QmhCO0lBZ0NJLFlBQVksRUFBQTtBQWhDaEI7TUFrQ00sa0JBQWtCO01BRWxCLGtCQUFrQixFQUFBO0FBcEN4QjtRQXNDUSxpQ0FBaUM7UUFDakMsMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLE9BQU07UUFDTixTQUFTO1FBQ1Qsa0JBQWtCLEVBQUE7QUFLMUI7RUFDRSxrQkFBa0IsRUFBQTtBQURwQjtJQUdJLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0FBR3RCO0VBRUksWUFBWSxFQUFBO0FBR2hCO0VBQ0UsWUFBWSxFQUFBO0FBRWQ7RUFDRSxrQkFBa0IsRUFBQTtBQURwQjtJQUdJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBO0FBRXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7QUFFZDtFQUNFLHVCQUFlO0VBQWYsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhbmRhcnQtdGVtcGxhdGUvc3RhbmRhcnQtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5zZWN0aW9uNiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAuc2VjdGlvbjYgLmxlZnQgcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnNlY3Rpb242IC5sZWZ0IHA6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5zZWN0aW9uNiAubGVmdC1yIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuc2VjdGlvbjYgLmxlZnQtciAucmlnaHQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBsZWZ0OiA4MHB4OyB9XG4gIC5zZWN0aW9uNiAucmlnaHQtciB7XG4gICAgd2lkdGg6IDI0MHB4OyB9XG4gICAgLnNlY3Rpb242IC5yaWdodC1yIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAuc2VjdGlvbjYgLnJpZ2h0LXIgcDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiKNC/0YDRltC30LLQuNGJ0LUg0YLQsCDRltC90ZbRhtGW0LDQu9C4KVwiO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4uc2V0dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuc2V0dCBpbWcge1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cblxuLnRpdGxlIGlucHV0IHtcbiAgd2lkdGg6IDQwMHB4OyB9XG5cbi53YXZlcy1lZmZlY3Qge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLnNlY3Rpb24yLCAuc2VjdGlvbjMsIC5zZWN0aW9uNCwgLnNlY3Rpb244LCAuc2VjdGlvbjUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbiAgLnNlY3Rpb24yIHNwYW4sIC5zZWN0aW9uMyBzcGFuLCAuc2VjdGlvbjQgc3BhbiwgLnNlY3Rpb244IHNwYW4sIC5zZWN0aW9uNSBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuXG4uc2VjdGlvbjQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4OyB9XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzMHB4O1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDMwcHg7IH1cblxuLmFsZXJ0IHtcbiAgdHJhbnNpdGlvbjogLjNzOyB9XG4iLCIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXRsZSBoMXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnNlY3Rpb242e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLmxlZnR7XHJcbiAgICBwe1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubGVmdC1ye1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnJpZ2h0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBsZWZ0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQtcntcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJjphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIijQv9GA0ZbQt9Cy0LjRidC1INGC0LAg0ZbQvdGW0YbRltCw0LvQuClcIjtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zZXR0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWd7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4udGl0bGV7XHJcbiAgaW5wdXR7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcbi53YXZlcy1lZmZlY3R7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5zZWN0aW9uMiwuc2VjdGlvbjMsLnNlY3Rpb240LC5zZWN0aW9uOCwuc2VjdGlvbjV7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuLnNlY3Rpb240e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxufVxyXG4uc2V0dGluZ3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgei1pbmRleDogNTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmFsZXJ0e1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/standart-template/standart-template.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/standart-template/standart-template.component.ts ***!
  \******************************************************************/
/*! exports provided: StandartTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandartTemplateComponent", function() { return StandartTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");





var StandartTemplateComponent = /** @class */ (function () {
    function StandartTemplateComponent(fb, router, provider) {
        this.fb = fb;
        this.router = router;
        this.provider = provider;
        this.data = {};
        this.optionData = {};
        this.saved = false;
        this.optionForm = this.fb.group({
            nameOption: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            descriptionOption: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]]
        });
        this.Tform = this.fb.group({
            title: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            applied: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            speciality: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            subject: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            partYear: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            kafedra: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            protokol: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            ekzamenator: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            kafedraBoss: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]]
        });
    }
    Object.defineProperty(StandartTemplateComponent.prototype, "title", {
        get: function () {
            return this.Tform.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "applied", {
        get: function () {
            return this.Tform.get('applied');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "speciality", {
        get: function () {
            return this.Tform.get('speciality');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "subject", {
        get: function () {
            return this.Tform.get('subject');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "partYear", {
        get: function () {
            return this.Tform.get('partYear');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "kafedra", {
        get: function () {
            return this.Tform.get('kafedra');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "protokol", {
        get: function () {
            return this.Tform.get('protokol');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "ekzamenator", {
        get: function () {
            return this.Tform.get('ekzamenator');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "kafedraBoss", {
        get: function () {
            return this.Tform.get('kafedraBoss');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "nameOption", {
        get: function () {
            return this.optionForm.get('nameOption');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandartTemplateComponent.prototype, "descriptionOption", {
        get: function () {
            return this.optionForm.get('descriptionOption');
        },
        enumerable: true,
        configurable: true
    });
    StandartTemplateComponent.prototype.ngOnInit = function () {
    };
    StandartTemplateComponent.prototype.proccesDataOption = function () {
        this.optionData['name'] = this.nameOption.value;
        this.optionData['description'] = this.descriptionOption.value;
        this.proccesData();
    };
    StandartTemplateComponent.prototype.proccesData = function () {
        this.data['title'] = this.title.value;
        this.data['applied'] = this.applied.value;
        this.data['speciality'] = this.speciality.value;
        this.data['subject'] = this.subject.value;
        this.data['partYear'] = this.partYear.value;
        this.data['kafedra'] = this.kafedra.value;
        this.data['protokol'] = this.protokol.value;
        this.data['ekzamenator'] = this.ekzamenator.value;
        this.data['kafedraBoss'] = this.kafedraBoss.value;
        this.makeString();
    };
    StandartTemplateComponent.prototype.makeString = function () {
        var _this = this;
        var a = '<div class="bilet">\n' +
            '  <div class="title">\n' +
            '<span>' + this.data['title'] + '</span>' +
            '  </div>\n' +
            '  <div class="section2">\n' +
            '    <span>Рівень вищої освіти:' + this.data['applied'] + '</span>' +
            '  </div>\n' +
            '  <div class="section3">\n' +
            '    <span>Спеціальність:' + this.data['speciality'] + '</span>' +
            '  </div>\n' +
            '  <div class="section3">\n' +
            '    <span>Навчальна дисципліна:' + this.data['subject'] + '</span>' +
            '  </div>\n' +
            '  <div class="section8">\n' +
            '    <span>Семестр ' + this.data['partYear'] + '</span>' +
            '  </div>\n' +
            '  <div class="section4">\n' +
            '  </div>';
        var a2 = '  <div class="section5">\n' +
            '    <span>Затверджено на засіданні кафедри' + this.data['kafedra'] + '</span>' +
            '  </div>\n' +
            '  <div class="section5">\n' +
            '    <span>Протокол № ' + this.data['protokol'] + '</span>' +
            '  </div>\n' +
            '  <div class="section6">\n' +
            '    <div class="left-r">\n' +
            '      <div class="left">\n' +
            '        <p>(підпис)</p>\n' +
            '      </div>\n' +
            '      <div class="right">\n' +
            '        <p>Екзаменатор</p>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '    <div class="right-r">\n' +
            this.data['ekzamenator'] +
            '    </div>\n' +
            '  </div>\n' +
            '  <div class="section6">\n' +
            '    <div class="left-r">\n' +
            '      <div class="left">\n' +
            '        <p>(підпис)</p>\n' +
            '      </div>\n' +
            '      <div class="right">\n' +
            '        <p>Завідувач кафедри</p>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '    <div class="right-r">\n' +
            this.data['kafedraBoss'] +
            '    </div>\n' +
            '  </div>\n' +
            '</div>';
        var styl = '.title {\n' +
            '  text-align: center;\n' +
            '}\n' +
            '\n' +
            '.title span{ font-size:24px; font-weight: bold;}' +
            '.title h1 {\n' +
            '  font-size: 20px;\n' +
            '}\n' +
            '\n' +
            '.section6 {\n' +
            '  display: -webkit-box;\n' +
            '  display: -webkit-flex;\n' +
            '  display: -ms-flexbox;\n' +
            '  display: flex;\n' +
            '  -webkit-box-orient: horizontal;\n' +
            '  -webkit-box-direction: normal;\n' +
            '  -webkit-flex-direction: row;\n' +
            '      -ms-flex-direction: row;\n' +
            '          flex-direction: row;\n' +
            '  -webkit-box-pack: justify;\n' +
            '  -webkit-justify-content: space-between;\n' +
            '      -ms-flex-pack: justify;\n' +
            '          justify-content: space-between;\n' +
            '}\n' +
            '\n' +
            '.section6 .left p {\n' +
            '  position: relative;\n' +
            '}\n' +
            '\n' +
            '.section6 .left p:after {\n' +
            '  content: "";\n' +
            '  border-top: 1px solid black;\n' +
            '  height: 2px;\n' +
            '  width: 100%;\n' +
            '  left: 0;\n' +
            '  position: absolute;\n' +
            '}\n' +
            '\n' +
            '.section6 .left-r {\n' +
            '  width: 250px;\n' +
            '  height: 75px;\n' +
            '  display: -webkit-box;\n' +
            '  display: -webkit-flex;\n' +
            '  display: -ms-flexbox;\n' +
            '  display: flex;\n' +
            '  -webkit-box-orient: horizontal;\n' +
            '  -webkit-box-direction: normal;\n' +
            '  -webkit-flex-direction: row;\n' +
            '      -ms-flex-direction: row;\n' +
            '          flex-direction: row;\n' +
            '  -webkit-box-pack: justify;\n' +
            '  -webkit-justify-content: space-between;\n' +
            '      -ms-flex-pack: justify;\n' +
            '          justify-content: space-between;\n' +
            '  -webkit-box-align: center;\n' +
            '  -webkit-align-items: center;\n' +
            '      -ms-flex-align: center;\n' +
            '          align-items: center;\n' +
            '  position: relative;\n' +
            '}\n' +
            '\n' +
            '.section5{' +
            'margin-bottom:30px;' +
            '}' +
            '.section6 .left-r .right {\n' +
            '  position: absolute;\n' +
            '  top: 5px;\n' +
            '  left: 80px;\n' +
            '}\n' +
            '\n' +
            '.section6 .right-r {\n' +
            '  width: 240px;\n' +
            '}\n' +
            '\n' +
            '.section6 .right-r p {\n' +
            '  text-align: center;\n' +
            '  position: relative;\n' +
            '}\n' +
            '\n' +
            '.section6 .right-r p:after {\n' +
            '  content: "(прізвище та ініціали)";\n' +
            '  border-top: 1px solid black;\n' +
            '  height: 2px;\n' +
            '  text-align: center;\n' +
            '  width: 100%;\n' +
            '  left: 0;\n' +
            '  top: 25px;\n' +
            '  position: absolute;\n' +
            '}\n';
        var allTemplates = [];
        allTemplates = this.provider.getAllTemplate() || [];
        var b = {
            'id': allTemplates.length + this.optionData['description'][0],
            'bodyTop': a,
            'bodyBottom': a2,
            'styles': styl,
            'description': this.optionData['description'],
            'name': this.optionData['name']
        };
        allTemplates.unshift(b);
        this.provider.saveTemplate(allTemplates);
        this.saved = true;
        window.scrollTo(0, 0);
        setTimeout(function () {
            _this.saved = false;
        }, 1000);
    };
    StandartTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standart-template',
            template: __webpack_require__(/*! ./standart-template.component.html */ "./src/app/standart-template/standart-template.component.html"),
            styles: [__webpack_require__(/*! ./standart-template.component.scss */ "./src/app/standart-template/standart-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"]])
    ], StandartTemplateComponent);
    return StandartTemplateComponent;
}());



/***/ }),

/***/ "./src/app/template-list/template-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/template-list/template-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <span>Збережені шаблони</span>\n  <div class=\"right\">\n  </div>\n</div>\n<div class=\"list\">\n  <div class=\"update\" (click)=\"updateInfo()\">\n    <img src=\"https://cdn1.iconfinder.com/data/icons/e-mail-2/512/YPS__email_mail_refresh_update_sendreceive-512.png\" alt=\"\">\n  </div>\n  <div class=\"fsf\">\n    <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let item of allTemp\">\n      <div class=\"delete-btn\" (click)=\"delete(item.id)\">X</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{item.name}}</h5>\n        <p class=\"card-text\">{{item.description}}</p>\n        <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/edit-template/{{item.id}}\">Редагувати</a>\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <a class=\"card-body\" routerLink=\"/template/standard\" target=\"_blank\">\n        <h5 class=\"card-title\">Cтандартний шаблон</h5>\n        <p class=\"card-text\">Створити новий</p>\n        <img src=\"https://cdn3.iconfinder.com/data/icons/stroke/53/Button-512.png\" alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"card\" style=\"width: 18rem;\" >\n      <a class=\"card-body\" routerLink=\"/templ\" target=\"_blank\">\n        <h5 class=\"card-title\">Новий кастомний шаблон</h5>\n        <img src=\"https://cdn3.iconfinder.com/data/icons/stroke/53/Button-512.png\" alt=\"\">\n\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/template-list/template-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/template-list/template-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-btn {\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  cursor: pointer;\n  z-index: 5; }\n\n.card {\n  margin-right: 30px;\n  margin-bottom: 20px;\n  position: relative; }\n\n.card-body {\n  display: block;\n  text-decoration: none;\n  color: black;\n  cursor: pointer; }\n\n.card-body img {\n    width: 50px;\n    height: 50px; }\n\n.card-body:hover {\n  background-color: #e6e5e5; }\n\n.update {\n  position: absolute;\n  right: 28px;\n  top: 24px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer; }\n\n.update img {\n    width: 100%;\n    height: 100%; }\n\n.fsf {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n\n.cont {\n  max-width: 1100px;\n  height: auto;\n  border: 1px solid black;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.cont form {\n    width: 100%; }\n\n.top {\n  width: 30%;\n  height: auto;\n  align-self: flex-start; }\n\n.top .count-question .count1, .top .count-question .count2 {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.area {\n  width: 100%;\n  height: auto;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.teorethic, .practyc {\n  width: 45%;\n  min-height: 400px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.teorethic textarea, .practyc textarea {\n    width: 90%;\n    min-height: 80%;\n    border: 1px solid black;\n    margin: auto; }\n\n#back-btn {\n  width: 160px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-right: 40px; }\n\n#req-btn {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 190px;\n  height: 30px;\n  line-height: 14px;\n  font-size: 14px;\n  float: left;\n  margin-right: 40px; }\n\n.ff {\n  font-size: 12px;\n  font-weight: normal; }\n\n.title {\n  border: 1px solid #d3d9de;\n  border-radius: 2px;\n  width: 100%;\n  height: 60px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: white; }\n\n.title .right {\n    overflow: hidden;\n    float: right; }\n\n.title span {\n    line-height: 60px;\n    color: black;\n    font-size: 26px; }\n\n.search_block {\n  float: left;\n  overflow: hidden;\n  position: relative;\n  margin-top: 15px;\n  height: 30px;\n  width: 305px; }\n\n.search_block .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.search_block .but:hover {\n      background-color: #19b699; }\n\n.add_new {\n  float: right;\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.add_new .but {\n    cursor: pointer;\n    border-radius: 1px;\n    float: right;\n    text-align: center;\n    color: white;\n    line-height: 30px;\n    width: 45px;\n    height: 30px;\n    background-color: #16a086; }\n\n.add_new .but:hover {\n      background-color: #19b699; }\n\n.search {\n  border: 1px solid #d3d9de;\n  width: 260px;\n  float: left;\n  height: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  padding: 0 10px; }\n\n.list {\n  margin-top: 15px;\n  width: 100%;\n  border: 1px solid #d3d9de;\n  box-sizing: border-box;\n  border-radius: 2px;\n  padding: 15px;\n  min-height: 650px;\n  background-color: white;\n  overflow: hidden; }\n\n.list .info {\n    margin-bottom: 15px;\n    box-sizing: border-box;\n    padding: 0 15px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid #d3d9de;\n    border-radius: 2px; }\n\n.list .info .records_cout {\n      float: left;\n      line-height: 40px; }\n\n.list .info .update {\n      float: right;\n      line-height: 40px; }\n\n.table .edit_btn {\n  width: 40px;\n  height: 20px;\n  background-color: #16a086; }\n\n.table .btnMore, .table .btnDelete {\n  cursor: pointer;\n  border-radius: 1px;\n  float: right;\n  text-align: center;\n  color: white;\n  line-height: 30px;\n  width: 45px;\n  height: 30px;\n  background-color: #16a086; }\n\n.table .btnMore:hover, .table .btnDelete:hover {\n    background-color: #19b699; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUtbGlzdC9DOlxcVXNlcnNcXHNhc2hhXFxEZXNrdG9wXFxwcmFjdGljL3NyY1xcYXBwXFx0ZW1wbGF0ZS1saXN0XFx0ZW1wbGF0ZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQjtFQUNwQixtQkFBbUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUpqQjtJQU1JLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UseUJBQW1DLEVBQUE7O0FBRXJDO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBTmpCO0lBUUksV0FBVztJQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBUHJCO0lBU0ksV0FBVyxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFIeEI7SUFNTSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCLEVBQUE7O0FBSXBDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLFVBQVU7RUFDVixpQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBTnhCO0lBUUksVUFBVTtJQUNWLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQVB6QjtJQVNJLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBVmhCO0lBYUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTmQ7SUFRSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQWhCN0I7TUFrQk0seUJBQXNDLEVBQUE7O0FBSzVDO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QixFQUFBOztBQWI3QjtNQWVNLHlCQUFzQyxFQUFBOztBQUs1QztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFFWix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBbUJ2QixnQkFBZ0IsRUFBQTs7QUEzQmxCO0lBVUksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7O0FBaEJ0QjtNQWtCTSxXQUFXO01BQ1gsaUJBQWlCLEVBQUE7O0FBbkJ2QjtNQXNCTSxZQUFZO01BQ1osaUJBQWlCLEVBQUE7O0FBTXZCO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFKN0I7RUFPSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQWY3QjtJQWlCTSx5QkFBc0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlLWxpc3QvdGVtcGxhdGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtYnRue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4uY2FyZHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5jYXJkLWJvZHk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHdoaXRlLDEwJSk7XHJcbn1cclxuLnVwZGF0ZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI4cHg7XHJcbiAgdG9wOiAyNHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5mc2Z7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmNvbnR7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi50b3B7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAuY291bnQtcXVlc3Rpb257XHJcbiAgICAuY291bnQxLC5jb3VudDJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50ZW9yZXRoaWMsLnByYWN0eWN7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtaW4taGVpZ2h0OjQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4jYmFjay1idG4ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbiNyZXEtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZmYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q5ZGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAucmlnaHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hfYmxvY2sge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMDVweDtcclxuICAuYnV0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg2O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzE2YTA4NiwgNSUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZF9uZXcge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIC5idXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmEwODY7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMTZhMDg2LCA1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkOWRlO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDlkZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC5pbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkOWRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLnJlY29yZHNfY291dCB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC51cGRhdGUge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udGFibGV7XHJcbiAgLmVkaXRfYnRue1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg2O1xyXG4gIH1cclxuICAuYnRuTW9yZSwgLmJ0bkRlbGV0ZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg2O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzE2YTA4NiwgNSUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/template-list/template-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/template-list/template-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateListComponent", function() { return TemplateListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");




var TemplateListComponent = /** @class */ (function () {
    function TemplateListComponent(router, provider) {
        this.router = router;
        this.provider = provider;
        this.allTemp = [];
    }
    TemplateListComponent.prototype.ngOnInit = function () {
        this.allTemp = this.provider.getAllTemplate();
        console.log(this.allTemp);
    };
    TemplateListComponent.prototype.procces = function (item) {
        var a = {
            'id': item.id,
            'top': item.bodyTop,
            'bottom': item.bodyBottom,
            'styles': item.styles
        };
        localStorage.setItem('curentTemplateBody', JSON.stringify(a));
        this.router.navigate(['/final']);
    };
    TemplateListComponent.prototype.updateInfo = function () {
        this.allTemp = this.provider.getAllTemplate();
    };
    TemplateListComponent.prototype.delete = function (id) {
        this.provider.deleteTemplate(id);
        this.updateInfo();
    };
    TemplateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template-list',
            template: __webpack_require__(/*! ./template-list.component.html */ "./src/app/template-list/template-list.component.html"),
            styles: [__webpack_require__(/*! ./template-list.component.scss */ "./src/app/template-list/template-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], TemplateListComponent);
    return TemplateListComponent;
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

module.exports = __webpack_require__(/*! C:\Users\sasha\Desktop\practic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map