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



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_translate) {
        this._translate = _translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._translate.setDefaultLang('en');
        this._translate.use('en');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
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
/* harmony import */ var _features_sea_sea_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/+sea/sea.module */ "./src/app/features/+sea/sea.module.ts");
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/+home/home.module */ "./src/app/features/+home/home.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/+dashboard/dashboard.module */ "./src/app/features/+dashboard/dashboard.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _features_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/+login */ "./src/app/features/+login/index.ts");
/* harmony import */ var _features_project_project_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/+project/project.module */ "./src/app/features/+project/project.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _features_sea_sea_module__WEBPACK_IMPORTED_MODULE_5__["SeaModule"].forRoot(),
                _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                _features_login__WEBPACK_IMPORTED_MODULE_12__["LoginModule"].forRoot(),
                _features_project_project_module__WEBPACK_IMPORTED_MODULE_13__["ProjectModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: (function (http) { return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/i18n/', '.json'); }),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                    },
                }),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/core/auth/services/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards */ "./src/app/core/auth/guards/index.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/core/auth/services/auth.interceptor.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
                _guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
                { provide: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptor"], multi: true },
            ],
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/core/auth/guards/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/core/auth/guards/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/auth/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this._canActivate(route, state);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this._canActivate(route, state);
    };
    AuthGuard.prototype._canActivate = function (route, state) {
        var isAuthorized = this._authService.isAuthenticated();
        if (!isAuthorized) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/guards/index.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/guards/index.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/core/auth/index.ts":
/*!************************************!*\
  !*** ./src/app/core/auth/index.ts ***!
  \************************************/
/*! exports provided: AuthModule, AuthInterceptor, AuthGuard, AuthService, TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ "./src/app/core/auth/auth.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_0__["AuthModule"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards */ "./src/app/core/auth/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/core/auth/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["TokenService"]; });






/***/ }),

/***/ "./src/app/core/auth/services/auth.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/auth/services/auth.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/services/token.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_response_codes_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/response-codes.enum */ "./src/app/core/http/response-codes.enum.ts");







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(_tokenService, _router) {
        this._tokenService = _tokenService;
        this._router = _router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var request = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + this._tokenService.token),
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this._handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
        }));
    };
    AuthInterceptor.prototype._handleError = function (err) {
        if (err.status === _http_response_codes_enum__WEBPACK_IMPORTED_MODULE_6__["UserResponseCode"].Unauthorized) {
            this._router.navigate(["/login"]);
        }
        else {
            throw (err);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/auth/services/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/services/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../settings */ "./src/app/core/settings.ts");






var AuthService = /** @class */ (function () {
    function AuthService(_http, _tokenService) {
        this._http = _http;
        this._tokenService = _tokenService;
        this._availibleFeatures = [];
    }
    AuthService.prototype.isAuthenticated = function () {
        return !!this._tokenService.token;
    };
    AuthService.prototype.authorize = function (form) {
        var _this = this;
        return this._http.post(_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].apiHost + "/auth/token", form)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (!response.isAuthorized) {
                return false;
            }
            _this._tokenService.token = response.token;
            _this.availibleFeatures = response.features;
            return true;
        }));
    };
    AuthService.prototype.unauthorize = function () {
        this._tokenService.clearToken();
    };
    Object.defineProperty(AuthService.prototype, "availibleFeatures", {
        get: function () {
            return this._availibleFeatures;
        },
        set: function (features) {
            this._availibleFeatures = features;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/core/auth/services/index.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor, AuthService, TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/core/auth/services/token.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]; });

/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/core/auth/services/auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"]; });






/***/ }),

/***/ "./src/app/core/auth/services/token.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/auth/services/token.service.ts ***!
  \*****************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    Object.defineProperty(TokenService.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        set: function (value) {
            localStorage.setItem('token', value);
        },
        enumerable: true,
        configurable: true
    });
    TokenService.prototype.clearToken = function () {
        localStorage.removeItem('token');
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_directives_app_link_active_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/directives/app-link-active.directive */ "./src/app/core/http/directives/app-link-active.directive.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var MODULES = [
    _auth__WEBPACK_IMPORTED_MODULE_3__["AuthModule"].forRoot(),
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
];
var DIRECTIVES = [
    _http_directives_app_link_active_directive__WEBPACK_IMPORTED_MODULE_2__["AppLinkActiveDirective"],
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: MODULES.slice(),
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ].concat(DIRECTIVES),
            declarations: DIRECTIVES.slice(),
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/directives/app-link-active.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/http/directives/app-link-active.directive.ts ***!
  \*******************************************************************/
/*! exports provided: AppLinkActiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLinkActiveDirective", function() { return AppLinkActiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppLinkActiveDirective = /** @class */ (function () {
    function AppLinkActiveDirective(_router, _element, _renderer, _route) {
        var _this = this;
        this._router = _router;
        this._element = _element;
        this._renderer = _renderer;
        this._route = _route;
        this.isActive = false;
        this.appLinkActiveOptions = { exact: false, except: [] };
        this._classes = [];
        this._subscription = _router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this._update();
            }
        });
    }
    Object.defineProperty(AppLinkActiveDirective.prototype, "appLinkActive", {
        set: function (data) {
            var classes = Array.isArray(data) ? data : data.split(' ');
            this._classes = classes.filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    AppLinkActiveDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (params) {
            _this._queryParams = Object.keys(params);
        });
    };
    AppLinkActiveDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.links.changes.subscribe(function (_) { return _this._update(); });
        this.linksWithHrefs.changes.subscribe(function (_) { return _this._update(); });
        this._update();
    };
    AppLinkActiveDirective.prototype.ngOnChanges = function (changes) { this._update(); };
    AppLinkActiveDirective.prototype.ngOnDestroy = function () { this._subscription.unsubscribe(); };
    AppLinkActiveDirective.prototype._update = function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this._router.navigated) {
            return;
        }
        Promise.resolve().then(function () {
            var hasActiveLinks = _this._hasActiveLinks();
            if (_this.isActive !== hasActiveLinks) {
                _this.isActive = hasActiveLinks;
                _this._classes.forEach(function (c) {
                    if (hasActiveLinks) {
                        _this._renderer.addClass(_this._element.nativeElement, c);
                    }
                    else {
                        _this._renderer.removeClass(_this._element.nativeElement, c);
                    }
                });
            }
        });
    };
    AppLinkActiveDirective.prototype._isLinkActive = function (_router) {
        var _this = this;
        return function (link) {
            return _router.isActive(link.urlTree, _this.appLinkActiveOptions.exact)
                && (!_this.appLinkActiveOptions.except || _this._isEmptyParametersIntersect());
        };
    };
    AppLinkActiveDirective.prototype._hasActiveLinks = function () {
        return this.links.some(this._isLinkActive(this._router)) ||
            this.linksWithHrefs.some(this._isLinkActive(this._router));
    };
    AppLinkActiveDirective.prototype._isEmptyParametersIntersect = function () {
        var _this = this;
        var commonParams = this.appLinkActiveOptions.except.filter(function (param) {
            return _this._queryParams.indexOf(param) > -1;
        });
        return commonParams.length === 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AppLinkActiveDirective.prototype, "appLinkActive", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], { descendants: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AppLinkActiveDirective.prototype, "links", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], { descendants: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AppLinkActiveDirective.prototype, "linksWithHrefs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLinkActiveDirective.prototype, "appLinkActiveOptions", void 0);
    AppLinkActiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appLinkActive]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppLinkActiveDirective);
    return AppLinkActiveDirective;
}());



/***/ }),

/***/ "./src/app/core/http/response-codes.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/core/http/response-codes.enum.ts ***!
  \**************************************************/
/*! exports provided: UserResponseCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseCode", function() { return UserResponseCode; });
var UserResponseCode;
(function (UserResponseCode) {
    UserResponseCode[UserResponseCode["BadRequest"] = 400] = "BadRequest";
    UserResponseCode[UserResponseCode["Unauthorized"] = 401] = "Unauthorized";
})(UserResponseCode || (UserResponseCode = {}));


/***/ }),

/***/ "./src/app/core/search/abstract-search-list-view.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/search/abstract-search-list-view.ts ***!
  \**********************************************************/
/*! exports provided: AbstractSearchListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSearchListView", function() { return AbstractSearchListView; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var AbstractSearchListView = /** @class */ (function () {
    function AbstractSearchListView() {
        this.searchParameters = null;
    }
    AbstractSearchListView.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.route.queryParams.subscribe(function (searchParameters) {
            _this.searchParameters = searchParameters;
            if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](_this.searchParameters)) {
                _this.loadData();
            }
        });
    };
    AbstractSearchListView.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    AbstractSearchListView.prototype.onSearch = function (searchParameters) {
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParams: searchParameters,
        });
    };
    return AbstractSearchListView;
}());



/***/ }),

/***/ "./src/app/core/search/utils/search-request-parameters.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/search/utils/search-request-parameters.ts ***!
  \****************************************************************/
/*! exports provided: SearchRequestParametersUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequestParametersUtils", function() { return SearchRequestParametersUtils; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var SearchRequestParametersUtils = /** @class */ (function () {
    function SearchRequestParametersUtils() {
    }
    SearchRequestParametersUtils.getHttpRequestParams = function (parameters) {
        return Object.keys(parameters)
            .reduce(function (previousValue, key) { return (parameters[key] ? previousValue.append(key, parameters[key]) : previousValue); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]());
    };
    return SearchRequestParametersUtils;
}());



/***/ }),

/***/ "./src/app/core/search/utils/search-response.ts":
/*!******************************************************!*\
  !*** ./src/app/core/search/utils/search-response.ts ***!
  \******************************************************/
/*! exports provided: SearchResponseUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResponseUtils", function() { return SearchResponseUtils; });
var SearchResponseUtils = /** @class */ (function () {
    function SearchResponseUtils() {
    }
    SearchResponseUtils.getEmptySearchResponse = function () {
        return {
            items: [],
            totalCount: 0,
        };
    };
    return SearchResponseUtils;
}());



/***/ }),

/***/ "./src/app/core/settings.ts":
/*!**********************************!*\
  !*** ./src/app/core/settings.ts ***!
  \**********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.clientHost = 'https://tanyamykhnevych.github.io';
    AppSettings.host = 'http://localhost:5000';
    AppSettings.apiHost = 'http://localhost:5000/api';
    AppSettings.hubHost = 'http://localhost:5000';
    AppSettings.title = 'Waves';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fixed-header\" id=\"wave\">\r\n    <mat-toolbar-row>\r\n        <button type=\"button\" class=\"burger-btn\" [class.active]=\"drawer.opened\" (click)=\"drawer.toggle()\">\r\n            <span></span>\r\n        </button>\r\n        <div class=\"logo\" routerLink=\"/home\">\r\n            <img src=\"../../../../../assets/images/wave.png\" width=\"35\" height=\"35\" alt=\"Waves\">\r\n            {{'title' | translate}}\r\n        </div>\r\n        <button mat-stroked-button type=\"button\" *ngIf=\"isAuthenticated\" (click)=\"logout()\">{{'logout' | translate}}</button>\r\n        <button mat-stroked-button type=\"button\" *ngIf=\"!isAuthenticated\" (click)=\"login()\">{{'login' | translate}}</button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"dashboard-view\" [hasBackdrop]=\"false\">\r\n    <mat-sidenav #drawer [mode]=\"mobileQuery.matches ? 'push' : 'side'\" class=\"dashboard-sidebar\">\r\n        <app-expansion-menu title=\"{{'sea' | translate}}\" [opened]=\"router.isActive('/dashboard/sea')\">\r\n            <div class=\"app-expansion-menu-item\" app-expansion-menu-item>\r\n                <button class=\"menu-btn\" routerLink=\"/dashboard/sea/1d\" [appLinkActive]=\"['mat-raised-button']\">\r\n                    1D\r\n                </button>\r\n            </div>\r\n            <div class=\"app-expansion-menu-item\" app-expansion-menu-item>\r\n                <button class=\"menu-btn\" routerLink=\"/dashboard/sea/2d\" [appLinkActive]=\"['mat-raised-button']\">\r\n                    2D\r\n                </button>\r\n            </div>\r\n        </app-expansion-menu>\r\n        <app-expansion-menu title=\"{{'projects' | translate}}\" [opened]=\"router.isActive('/dashboard/projects')\" *ngIf=\"isAuthenticated\">\r\n            <div class=\"app-expansion-menu-item\" app-expansion-menu-item>\r\n                <button class=\"menu-btn\" routerLink=\"/dashboard/projects\" queryParamsHandling=\"merge\"\r\n                    [queryParams]=\"{isActive: true}\" [appLinkActive]=\"['mat-raised-button']\"\r\n                    [appLinkActiveOptions]=\"{ exact: false }\">\r\n                    {{'active' | translate}}\r\n                </button>\r\n                <button class=\"menu-btn\" routerLink=\"/dashboard/projects\" queryParamsHandling=\"merge\"\r\n                    [queryParams]=\"{isActive: false}\" [appLinkActive]=\"['mat-raised-button']\"\r\n                    [appLinkActiveOptions]=\"{ exact: false }\">\r\n                    {{'inactive' | translate}}\r\n                </button>\r\n            </div>\r\n        </app-expansion-menu>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"dashboard-content\">\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%; }\n\n.dashboard-view {\n  width: 100%;\n  height: 100%; }\n\n.logo {\n  cursor: pointer;\n  font-family: \"OpenSansLight\", Arial, sans-serif; }\n\n@media (max-width: 1024px) {\n    .logo {\n      margin-right: auto; } }\n\n.logo img {\n    margin: 0 0.5rem 0 0; }\n\n.dashboard-sidebar {\n  width: 25rem;\n  padding: 1.5rem;\n  background: #434a54; }\n\n@media (min-width: 1025px) {\n    .dashboard-sidebar {\n      -webkit-transform: none !important;\n              transform: none !important;\n      visibility: visible !important; } }\n\n@media (min-width: 1025px) {\n  .mat-drawer-content {\n    margin-left: 25rem !important; } }\n\n.menu-btn {\n  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;\n  font: 1.5rem/1.3 \"OpenSansRegular\", Arial, sans-serif;\n  color: #fff;\n  border: none;\n  background: none;\n  padding: 0.5rem 0 0.5rem 1.5rem;\n  text-align: left;\n  position: relative;\n  display: block;\n  width: 100%;\n  border-radius: 0;\n  text-decoration: none; }\n\n.menu-btn:hover {\n    opacity: 1; }\n\n.menu-btn:hover:before {\n      background: #fff; }\n\n.menu-btn.mat-raised-button, .menu-btn.active, .menu-btn.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]) {\n    color: #fff;\n    box-shadow: none;\n    background: #607d8b; }\n\n.menu-btn.mat-raised-button:before, .menu-btn.active:before, .menu-btn.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]):before {\n      background: #fff; }\n\n.menu-btn:before {\n    transition: background 0.3s ease-in-out;\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background: transparent; }\n\n.mat-toolbar-row {\n  justify-content: space-between;\n  height: 5rem; }\n\n.mat-toolbar-multiple-rows {\n  min-height: 5rem; }\n\n.burger-btn {\n  display: none;\n  position: relative;\n  width: 4rem;\n  height: 3.6rem;\n  background: none;\n  border: none;\n  margin: 0 1rem 0 -1rem; }\n\n.burger-btn.active span {\n    opacity: 0; }\n\n.burger-btn.active:before {\n    -webkit-transform: rotate(-45deg) translateZ(0);\n            transform: rotate(-45deg) translateZ(0); }\n\n.burger-btn.active:after {\n    -webkit-transform: rotate(45deg) translateZ(0);\n            transform: rotate(45deg) translateZ(0); }\n\n.burger-btn:hover {\n    opacity: 1; }\n\n.burger-btn span {\n    transition: opacity 0.3s ease-in-out;\n    position: relative;\n    display: block;\n    width: 2rem;\n    height: 0.2rem;\n    background: #fff;\n    margin: 0 auto; }\n\n.burger-btn:before, .burger-btn:after {\n    transition: -webkit-transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out;\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -0.1rem 0 0 -1rem;\n    width: 2rem;\n    height: 0.2rem;\n    background: #fff;\n    -webkit-transform: translateY(0.5rem) translateZ(0);\n            transform: translateY(0.5rem) translateZ(0); }\n\n.burger-btn:after {\n    -webkit-transform: translateY(-0.5rem) translateZ(0);\n            transform: translateY(-0.5rem) translateZ(0); }\n\n@media (max-width: 1024px) {\n    .burger-btn {\n      display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK2Rhc2hib2FyZC9jb250YWluZXJzL2Rhc2hib2FyZC12aWV3L0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFwrZGFzaGJvYXJkXFxjb250YWluZXJzXFxkYXNoYm9hcmQtdmlld1xcZGFzaGJvYXJkLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzLytkYXNoYm9hcmQvY29udGFpbmVycy9kYXNoYm9hcmQtdmlldy9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcc3R5bGVzXFxiYXNlXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzLytkYXNoYm9hcmQvY29udGFpbmVycy9kYXNoYm9hcmQtdmlldy9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcc3R5bGVzXFxiYXNlXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixnRENYa0QsRURrQnJEOztBQU5HO0lBSEo7TUFJUSxtQkFBa0IsRUFLekIsRUFBQTs7QUFURDtJQU9RLHFCQUFvQixFQUN2Qjs7QUFFTDtFQUNJLGFBQVk7RUFDWixnQkFBZTtFQUNmLG9CQ2xCcUIsRUR1QnhCOztBQUpHO0lBSko7TUFLUSxtQ0FBMEI7Y0FBMUIsMkJBQTBCO01BQzFCLCtCQUE4QixFQUVyQyxFQUFBOztBQUVHO0VBREo7SUFFUSw4QkFBNkIsRUFFcEMsRUFBQTs7QUFDRDtFRWdNSSxnRUFId0M7RUYzTHhDLHNEQ3JDc0Q7RURzQ3RELFlDNUJRO0VENkJSLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0NBQStCO0VBQy9CLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBMkJ4Qjs7QUF2Q0Q7SUFjUSxXQUFVLEVBSWI7O0FBbEJMO01BZ0JZLGlCQ3pDQSxFRDBDSDs7QUFqQlQ7SUFzQlEsWUMvQ0k7SURnREosaUJBQWdCO0lBQ2hCLG9CQ3REWSxFRDBEZjs7QUE1Qkw7TUEwQlksaUJDbkRBLEVEb0RIOztBQTNCVDtJRWdNSSx3Q0FId0M7SUY5SnBDLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsUUFBTztJQUNQLE9BQU07SUFDTixVQUFTO0lBQ1QsV0FBVTtJQUNWLHdCQUF1QixFQUMxQjs7QUFFTDtFQUNJLCtCQUE4QjtFQUM5QixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWix1QkFBc0IsRUEyQ3pCOztBQWxERDtJQVVZLFdBQVUsRUFDYjs7QUFYVDtJQWFZLGdEQUF1QztZQUF2Qyx3Q0FBdUMsRUFDMUM7O0FBZFQ7SUFnQlksK0NBQXNDO1lBQXRDLHVDQUFzQyxFQUN6Qzs7QUFqQlQ7SUFvQlEsV0FBVSxFQUNiOztBQXJCTDtJRWlKSSxxQ0FId0M7SUZ0SHBDLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsWUFBVztJQUNYLGVBQWM7SUFDZCxpQkNwR0k7SURxR0osZUFBYyxFQUNqQjs7QUE5Qkw7SUVpSkksK0NBSHdDO0lBR3hDLHVDQUh3QztJQUd4QywyRUFId0M7SUY1R3BDLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCwwQkFBeUI7SUFDekIsWUFBVztJQUNYLGVBQWM7SUFDZCxpQkNqSEk7SURrSEosb0RBQTJDO1lBQTNDLDRDQUEyQyxFQUM5Qzs7QUEzQ0w7SUE2Q1EscURBQTRDO1lBQTVDLDZDQUE0QyxFQUMvQzs7QUFDRDtJQS9DSjtNQWdEUSxlQUFjLEVBRXJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rZGFzaGJvYXJkL2NvbnRhaW5lcnMvZGFzaGJvYXJkLXZpZXcvZGFzaGJvYXJkLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYmFzZS92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYmFzZS9taXhpbnMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRhc2hib2FyZC12aWV3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sb2dve1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1saWdodDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW46IDAgMC41cmVtIDAgMDtcclxuICAgIH1cclxufVxyXG4uZGFzaGJvYXJkLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpe1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ubWF0LWRyYXdlci1jb250ZW50e1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1lbnUtYnRue1xyXG4gICAgQGluY2x1ZGUgYW5pbWF0ZShjb2xvciBiYWNrZ3JvdW5kKTtcclxuICAgIGZvbnQ6IDEuNXJlbS8xLjMgJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm1hdC1yYWlzZWQtYnV0dG9uLFxyXG4gICAgJi5hY3RpdmUsXHJcbiAgICAmLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgQGluY2x1ZGUgYW5pbWF0ZShiYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1hdC10b29sYmFyLXJvd3tcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogNXJlbTtcclxufVxyXG4ubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93c3tcclxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XHJcbn1cclxuLmJ1cmdlci1idG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDMuNnJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgMXJlbSAwIC0xcmVtO1xyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlcnsgICAgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgQGluY2x1ZGUgYW5pbWF0ZShvcGFjaXR5KTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIEBpbmNsdWRlIGFuaW1hdGUodHJhbnNmb3JtKTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogLTAuMXJlbSAwIDAgLTFyZW07XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVyZW0pIHRyYW5zbGF0ZVooMCk7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59IiwiLy8gZm9udHNcclxuJGJhc2UtZm9udC1zaXplOiAxLjZyZW07XHJcbiRmb250LWZhbWlseS1yZWd1bGFyOiAnT3BlblNhbnNSZWd1bGFyJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnT3BlblNhbnNCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1saWdodDogJ09wZW5TYW5zTGlnaHQnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kbWFpbi1jb2xvcjogIzYwN2Q4YjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzQzNGE1NDtcclxuJGJsdWU6ICMyOWFhZTE7XHJcbiRkYXJrLWJsdWU6ICMyNzgyYTk7XHJcbiRsaWdodC1ibHVlOiAjZDhlOGVmO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDsiLCIvLyBNb3N0IHVzZWQgbWl4aW5zLlxyXG4vL1xyXG4vLyBOb3RlOiBJZiB5b3UgdXNlIGEgZnJhbWV3b3JrIChib290c3RyYXAsIHp1cmIgZXRjLikgdGhhdCBpbmNsdWRlcyBtaXhpbnMgeW91IGNhbiBpbXBvcnQgdGhlbSB0b28gb3IgcmVtb3ZlIHRoaXMgZmlsZS5cclxuXHJcblxyXG5cclxuLy8gdmVydGljYWwgYWxpZ24gZWwgaW5zaWRlIHBhcmVudCB3aXRoIGZpeGVkIGhlaWdodC9taW4taGVpZ2h0XHJcbi8vIHVzYWdlIFxyXG4vLyBodG1sIC0gLnBhcmVudD4uY2hpbGRcclxuLy8gc2NzcyAtIEBpbmNsdWRlIHYtYWxpZ247XHJcbi8vICAgICBvciBAaW5jbHVkZSB2LWFsaWduKDI1MHB4KTtcclxuLy8gICAgIG9yIEBpbmNsdWRlIHYtYWxpZ24oMjUwcHgsIGJvdHRvbSwgYmVmb3JlKTtcclxuLy9cclxuQG1peGluIHYtYWxpZ24oJHZhLWhlaWdodDogMTAwJSwgJHZhLWRpcmVjdGlvbjogbWlkZGxlLCAkdmEtcHNldWRvOiBhZnRlcikge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgICY6I3skdmEtcHNldWRvfSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAkdmEtZGlyZWN0aW9uO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgbWluLWhlaWdodDogJHZhLWhlaWdodDtcclxuICAgIH1cclxuICBcclxuICAgID4gKiB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246ICR2YS1kaXJlY3Rpb247XHJcbiAgICAgIG1heC13aWR0aDogOTklO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyB2ZXJ0aWNhbCBhbGlnbiBhIHBhaXIgb2YgY2hpbGQgZWwgaW5zaWRlIHBhcmVudFxyXG4gIC8vIHVzYWdlIFxyXG4gIC8vIGh0bWwgLSAucG9zdD4uaW1hZ2UrLnRleHRcclxuICAvLyBzY3NzIC0gQGluY2x1ZGUgdi1hbGlnbi1wYWlyKGltYWdlLCB0ZXh0KTtcclxuICAvLyAgICAgb3IgQGluY2x1ZGUgdi1hbGlnbi1wYWlyKGltYWdlLCB0ZXh0LCBib3R0b20pO1xyXG4gIC8vICAgICBvciBAaW5jbHVkZSB2LWFsaWduLXBhaXIoaW1hZ2UsIHRleHQsIG1pZGRsZSwgMjAwcHgpO1xyXG4gIC8vXHJcbiAgQG1peGluIHYtYWxpZ24tcGFpcigkY2hpbGQtbmFtZTEsICRjaGlsZC1uYW1lMiwgJHZhbGlnbjogbWlkZGxlLCAkd2lkdGgxOiBhdXRvLCAkd2lkdGgyOiBhdXRvICkge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAuI3skY2hpbGQtbmFtZTF9e1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogJHZhbGlnbjtcclxuICAgICAgd2lkdGg6ICR3aWR0aDE7IFxyXG4gICAgfVxyXG4gICAgLiN7JGNoaWxkLW5hbWUyfSB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAkdmFsaWduO1xyXG4gICAgICB3aWR0aDogJHdpZHRoMjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gdmVydGljYWwgYWxpZ24gZWxcclxuICAvLyB1c2FnZTogQGluY2x1ZGUgdmVydGljYWwtYWxpZ24tZWw7XHJcbiAgLy9cclxuICBAbWl4aW4gdmVydGljYWwtYWxpZ24tZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLyBNaXhpbiBoZWxwaW5nIGRlZmluaW5nIGJvdGggYHdpZHRoYCBhbmQgYGhlaWdodGAgc2ltdWx0YW5lb3VzbHkuXHJcbiAgLy8vXHJcbiAgLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxyXG4gIC8vL1xyXG4gIC8vLyBAYWNjZXNzIHB1YmxpY1xyXG4gIC8vL1xyXG4gIC8vLyBAcGFyYW0ge0xlbmd0aH0gJHdpZHRoIC0gRWxlbWVudOKAmXMgYHdpZHRoYFxyXG4gIC8vLyBAcGFyYW0ge0xlbmd0aH0gJGhlaWdodCAoJHdpZHRoKSAtIEVsZW1lbnTigJlzIGBoZWlnaHRgXHJcbiAgLy8vXHJcbiAgLy8vIEBleGFtcGxlIHNjc3MgLSBVc2FnZVxyXG4gIC8vLyAgIC5mb28ge1xyXG4gIC8vLyAgICAgQGluY2x1ZGUgc2l6ZSgxMGVtKTtcclxuICAvLy8gICB9XHJcbiAgLy8vXHJcbiAgLy8vICAgLmJhciB7XHJcbiAgLy8vICAgICBAaW5jbHVkZSBzaXplKDEwMCUsIDEwZW0pO1xyXG4gIC8vLyAgIH1cclxuICAvLy9cclxuICAvLy8gQGV4YW1wbGUgY3NzIC0gQ1NTIG91dHB1dFxyXG4gIC8vLyAgIC5mb28ge1xyXG4gIC8vLyAgICAgd2lkdGg6IDEwZW07XHJcbiAgLy8vICAgICBoZWlnaHQ6IDEwZW07XHJcbiAgLy8vICAgfVxyXG4gIC8vL1xyXG4gIC8vLyAgIC5iYXIge1xyXG4gIC8vLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8vICAgICBoZWlnaHQ6IDEwZW07XHJcbiAgLy8vICAgfVxyXG4gIC8vL1xyXG4gIEBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodDogJHdpZHRoKSB7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIH1cclxuICBcclxuICAvLy8gZm9udC1zbW90aGluZ1xyXG4gIC8vLyBAaW5jbHVkZSBmb250LXNtb290aGluZyhvbik7XHJcbiAgLy8vIEBpbmNsdWRlIGZvbnQtc21vb3RoaW5nKG9mZik7XHJcbiAgQG1peGluIGZvbnQtc21vb3RoaW5nKCR2YWx1ZTogb24pe1xyXG4gICAgQGlmICR2YWx1ZSA9PSBvbntcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB9XHJcbiAgICBAZWxzZXtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAvLy8gSGlkZXMgdGhlIHRleHQgaW4gYW4gZWxlbWVudCwgY29tbW9ubHkgdXNlZCB0byBzaG93IGFuIGltYWdlLiBTb21lIGVsZW1lbnRzIHdpbGwgbmVlZCBibG9jay1sZXZlbCBzdHlsZXMgYXBwbGllZC5cclxuICAvLy9cclxuICAvLy8gQGxpbmsgaHR0cDovL3plbGRtYW4uY29tLzIwMTIvMDMvMDEvcmVwbGFjaW5nLXRoZS05OTk5cHgtaGFjay1uZXctaW1hZ2UtcmVwbGFjZW1lbnRcclxuICAvLy9cclxuICAvLy8gQGV4YW1wbGUgc2NzcyAtIFVzYWdlXHJcbiAgLy8vICAgLmVsZW1lbnQge1xyXG4gIC8vLyAgICAgQGluY2x1ZGUgaGlkZS10ZXh0O1xyXG4gIC8vLyAgIH1cclxuICAvLy9cclxuICAvLy8gQGV4YW1wbGUgY3NzIC0gQ1NTIE91dHB1dFxyXG4gIC8vLyAgIC5lbGVtZW50IHtcclxuICAvLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8vICAgICB0ZXh0LWluZGVudDogMTAxJTtcclxuICAvLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLy8vICAgfVxyXG4gIC8vL1xyXG4gIEBtaXhpbiBoaWRlLXRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtaW5kZW50OiAxMDElO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8vIENyZWF0ZXMgYSB2aXN1YWwgdHJpYW5nbGUuIFxyXG4gIC8vLyBNaXhpbiB0YWtlcyAoJHNpemUsICRjb2xvciwgJGRpcmVjdGlvbilcclxuICAvLy8gVGhlICRzaXplIGFyZ3VtZW50IGNhbiB0YWtlIG9uZSBvciB0d28gdmFsdWVz4oCUd2lkdGggaGVpZ2h0LlxyXG4gIC8vLyBUaGUgJGNvbG9yIGFyZ3VtZW50IGNhbiB0YWtlIG9uZSBvciB0d28gXHJcbiAgLy8vIHZhbHVlc+KAlGZvcmVncm91bmQtY29sb3IgYmFja2dyb3VuZC1jb2xvci5cclxuICAvLy8gXHJcbiAgLy8vIEBhdXRob3IgaHR0cDovL2JvdXJib24uaW8vZG9jcy8jdHJpYW5nbGVcclxuICAvLy9cclxuICAvLy8gJGRpcmVjdGlvbjogXHJcbiAgLy8vIHVwLCBkb3duLCBsZWZ0LCByaWdodCwgdXAtcmlnaHQsIHVwLWxlZnQsIGRvd24tcmlnaHQsIGRvd24tbGVmdFxyXG4gIC8vLyBAZXhhbXBsZSBzY3NzIC0gVXNhZ2VcclxuICAvLy8gICBAaW5jbHVkZSB0cmlhbmdsZSgxMnB4LCBncmF5LCBkb3duKTtcclxuICAvLy8gICBAaW5jbHVkZSB0cmlhbmdsZSgxMnB4IDZweCwgZ3JheSBibHVlLCB1cC1sZWZ0KTtcclxuICAvLy9cclxuICBAbWl4aW4gdHJpYW5nbGUoJHNpemUsICRjb2xvciwgJGRpcmVjdGlvbikge1xyXG4gICAgJHdpZHRoOiBudGgoJHNpemUsIDEpO1xyXG4gICAgJGhlaWdodDogbnRoKCRzaXplLCBsZW5ndGgoJHNpemUpKTtcclxuICAgICRmb3JlZ3JvdW5kLWNvbG9yOiBudGgoJGNvbG9yLCAxKTtcclxuICAgICRiYWNrZ3JvdW5kLWNvbG9yOiBpZihsZW5ndGgoJGNvbG9yKSA9PSAyLCBudGgoJGNvbG9yLCAyKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgXHJcbiAgICBAaWYgKCRkaXJlY3Rpb24gPT0gdXApIG9yICgkZGlyZWN0aW9uID09IGRvd24pIG9yICgkZGlyZWN0aW9uID09IHJpZ2h0KSBvciAoJGRpcmVjdGlvbiA9PSBsZWZ0KSB7XHJcbiAgICAgICR3aWR0aDogJHdpZHRoIC8gMjtcclxuICAgICAgJGhlaWdodDogaWYobGVuZ3RoKCRzaXplKSA+IDEsICRoZWlnaHQsICRoZWlnaHQvMik7XHJcbiAgXHJcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IHVwIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkaGVpZ2h0IHNvbGlkICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAkaGVpZ2h0IHNvbGlkICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci10b3A6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGRvd24ge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogJGhlaWdodCBzb2xpZCAkZm9yZWdyb3VuZC1jb2xvcjtcclxuICAgICAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IHVwLXJpZ2h0KSBvciAoJGRpcmVjdGlvbiA9PSB1cC1sZWZ0KSB7XHJcbiAgICAgIGJvcmRlci10b3A6ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgXHJcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IHVwLXJpZ2h0IHtcclxuICAgICAgICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gdXAtbGVmdCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gZG93bi1yaWdodCkgb3IgKCRkaXJlY3Rpb24gPT0gZG93bi1sZWZ0KSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgXHJcbiAgICAgIEBpZiAkZGlyZWN0aW9uID09IGRvd24tcmlnaHQge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBkb3duLWxlZnQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGluc2V0LXVwKSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJhY2tncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3IgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogJGhlaWdodCAkd2lkdGg7XHJcbiAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGluc2V0LWRvd24pIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvciAkYmFja2dyb3VuZC1jb2xvciAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAkaGVpZ2h0ICR3aWR0aDtcclxuICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gaW5zZXQtcmlnaHQpIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvciAkYmFja2dyb3VuZC1jb2xvciAkYmFja2dyb3VuZC1jb2xvciAkZm9yZWdyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAkd2lkdGggJGhlaWdodDtcclxuICAgIH0gQGVsc2UgaWYgKCRkaXJlY3Rpb24gPT0gaW5zZXQtbGVmdCkge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yICRmb3JlZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItd2lkdGg6ICR3aWR0aCAkaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAvLy8gQW5pbWF0ZSBjc3MgcHJvcGVydGllc1xyXG4gIC8vIHVzYWdlIFxyXG4gIC8vIHNjc3MgLSBAaW5jbHVkZSBhbmltYXRlKGNvbG9yKTtcclxuICAvLyAgICAgb3IgQGluY2x1ZGUgYW5pbWF0ZShjb2xvciB3aWR0aCk7XHJcbiAgLy8gICAgIG9yIEBpbmNsdWRlIGFuaW1hdGUoY29sb3Igd2lkdGgsIDFzLCBsaW5lYXIpO1xyXG4gIC8vXHJcbiAgJGFuaW1hdGlvbi1zcGVlZDogMC4zcyAhZGVmYXVsdDtcclxuICBcclxuICBAbWl4aW4gYW5pbWF0ZSgkcHJvcGVydGllcywgJGR1cmF0aW9uOiAkYW5pbWF0aW9uLXNwZWVkLCAkZWFzaW5nOiBlYXNlLWluLW91dCkge1xyXG4gICAgJGxpc3Q6KCk7XHJcbiAgICBAZWFjaCAkcHJvcCBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICRzdHI6ICN7JHByb3B9ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc3RyLCBjb21tYSk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2l0aW9uOiAkbGlzdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8vIE1peGluIGZvciBzdHlsaW5nIGZvcm0tcGxhY2Vob2xkZXJzXHJcbiAgLy8vIEBleGFtcGxlIHNjc3MgLSBVc2FnZVxyXG4gIC8vLyAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHtcclxuICAvLy8gICAgY29sb3I6ICMzMzM7XHJcbiAgLy8vICAgfVxyXG4gIC8vL1xyXG4gIC8vLyAgIGlucHV0W3R5cGU9J3RleHQnXSxcclxuICAvLy8gICBpbnB1dFt0eXBlPSd0ZWwnXSxcclxuICAvLy8gICBpbnB1dFt0eXBlPSdlbWFpbCddIHtcclxuICAvLy8gICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHtcclxuICAvLy8gICAgICBjb2xvcjogcmVkO1xyXG4gIC8vLyAgICAgfVxyXG4gIC8vLyAgIH1cclxuICBcclxuICBAbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnQ7fVxyXG4gICAgJjo6LW1vei1wbGFjZWhvbGRlciB7b3BhY2l0eTogMTsgQGNvbnRlbnQ7fVxyXG4gICAgJjotbW96LXBsYWNlaG9sZGVyIHtAY29udGVudDt9XHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnQ7fVxyXG4gICAgJi5wbGFjZWhvbGRlciB7QGNvbnRlbnQ7fVxyXG4gIH1cclxuICBcclxuICAvLy8gRm9udC1zaXplIHB4IHRvIHJlbSBjYWxjXHJcbiAgLy8vIEBleGFtcGxlIHNjc3MgLSBVc2FnZVxyXG4gIC8vLyBzZWxlY3RvciB7XHJcbiAgLy8vICAgIEBpbmNsdWRlIHJlbS1mb250LXNpemUoMTZweCk7XHJcbiAgLy8vIH1cclxuICBcclxuICBAbWl4aW4gcmVtLWZvbnQtc2l6ZSgkcHhTaXplKSB7XHJcbiAgICBmb250LXNpemU6ICRweFNpemU7XHJcbiAgICBmb250LXNpemU6ICgkcHhTaXplIC8gMTBweCkgKyByZW07XHJcbiAgfVxyXG5cclxuICBAbWl4aW4gbWVkaWEtc2NyZWVuKCRzY3JlZW4tc2l6ZSkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zaXplKSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtaXhpbiBtZWRpYS1taW4tc2NyZWVuKCRzY3JlZW4tc2l6ZSkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zaXplKSB7IEBjb250ZW50OyB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DashboardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardViewComponent", function() { return DashboardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth */ "./src/app/core/auth/index.ts");





var DashboardViewComponent = /** @class */ (function () {
    function DashboardViewComponent(router, _route, _authService, changeDetectorRef, media) {
        this.router = router;
        this._route = _route;
        this._authService = _authService;
        this.isAuthenticated = false;
        this.mobileQuery = media.matchMedia('(max-width: 1024px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    DashboardViewComponent.prototype.ngOnInit = function () {
        this.isAuthenticated = this._authService.isAuthenticated();
    };
    DashboardViewComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    DashboardViewComponent.prototype.logout = function () {
        this._authService.unauthorize();
        this.router.navigate(['/home']);
    };
    DashboardViewComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    DashboardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard-view',
            template: __webpack_require__(/*! ./dashboard-view.component.html */ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-view.component.scss */ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
    ], DashboardViewComponent);
    return DashboardViewComponent;
}());



/***/ }),

/***/ "./src/app/features/+dashboard/dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/+dashboard/dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/dashboard-view/dashboard-view.component */ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.ts");
/* harmony import */ var _routes_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/dashboard-routing.module */ "./src/app/features/+dashboard/routes/dashboard-routing.module.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout/app/layout.module */ "./src/app/layout/app/layout.module.ts");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _routes_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [_containers_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_4__["DashboardViewComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/features/+dashboard/routes/dashboard-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/+dashboard/routes/dashboard-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/features/+dashboard/routes/dashboard.routes.ts");
/* harmony import */ var _sea_services_sea_shared_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../+sea/services/sea-shared.resolver */ "./src/app/features/+sea/services/sea-shared.resolver.ts");






var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_dashboard_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            providers: [_sea_services_sea_shared_resolver__WEBPACK_IMPORTED_MODULE_5__["SeaSharedResolver"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/+dashboard/routes/dashboard.routes.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/+dashboard/routes/dashboard.routes.ts ***!
  \****************************************************************/
/*! exports provided: loadSeaModule, loadProjectsModule, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSeaModule", function() { return loadSeaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProjectsModule", function() { return loadProjectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/dashboard-view/dashboard-view.component */ "./src/app/features/+dashboard/containers/dashboard-view/dashboard-view.component.ts");
/* harmony import */ var _sea_sea_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+sea/sea.module */ "./src/app/features/+sea/sea.module.ts");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+project/project.module */ "./src/app/features/+project/project.module.ts");
/* harmony import */ var _sea_containers_sea_2d_waves_shared_sea_2d_waves_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component */ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.ts");
/* harmony import */ var _sea_services_sea_shared_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../+sea/services/sea-shared.resolver */ "./src/app/features/+sea/services/sea-shared.resolver.ts");





function loadSeaModule() { return _sea_sea_module__WEBPACK_IMPORTED_MODULE_1__["SeaModule"]; }
function loadProjectsModule() { return _project_project_module__WEBPACK_IMPORTED_MODULE_2__["ProjectModule"]; }
var routes = [
    {
        path: 'dashboard',
        component: _containers_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_0__["DashboardViewComponent"],
        children: [
            {
                path: '',
                redirectTo: '/dashboard/sea',
                pathMatch: 'full',
            },
            {
                path: 'sea',
                loadChildren: loadSeaModule,
            },
            {
                path: 'projects',
                loadChildren: loadProjectsModule,
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
            },
        ],
    },
    {
        path: 'shared',
        children: [
            {
                path: '',
                component: _sea_containers_sea_2d_waves_shared_sea_2d_waves_shared_component__WEBPACK_IMPORTED_MODULE_3__["Sea2DWavesSharedComponent"],
            },
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        component: _sea_containers_sea_2d_waves_shared_sea_2d_waves_shared_component__WEBPACK_IMPORTED_MODULE_3__["Sea2DWavesSharedComponent"],
                        resolve: {
                            project: _sea_services_sea_shared_resolver__WEBPACK_IMPORTED_MODULE_4__["SeaSharedResolver"],
                        }
                    },
                ]
            },
        ],
    }
];


/***/ }),

/***/ "./src/app/features/+home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/features/+home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\r\n    <img src=\"../../../assets/images/wave.png\" />\r\n    <h1>\r\n        {{ 'welcome_to' | translate }}\r\n    </h1>\r\n    <button mat-raised-button color=\"primary\" routerLink=\"/dashboard/sea/2d\">{{'start' | translate}}</button>\r\n    <br /><br />\r\n    <button mat-stroked-button routerLink=\"/login\" *ngIf=\"!isAuthenticated\">{{'login' | translate}}</button>\r\n    <button mat-stroked-button routerLink=\"/register\" *ngIf=\"!isAuthenticated\">{{'register' | translate}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/features/+home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  width: 500px;\n  height: 300px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center; }\n\n.center img {\n  width: 200px;\n  height: 200px; }\n\nbutton {\n  margin: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK2hvbWUvRDpcXFRhbnlhXFxOVVJFXFxEaXBsb21hXFxXYXZlc01vZGVsbGluZy9zcmNcXGFwcFxcZmVhdHVyZXNcXCtob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFFYixtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUTtFQUVSLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFDRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzLytob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jZW50ZXIgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/features/+home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth */ "./src/app/core/auth/index.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
    }
    HomeComponent.prototype.goToSea = function () {
        this.router.navigate(['/dashboard/routes']);
    };
    Object.defineProperty(HomeComponent.prototype, "isAuthenticated", {
        get: function () {
            return this._authService.isAuthenticated();
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/+home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/+home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/+home/home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/features/+home/home.module.ts ***!
  \***********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routes_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/home-routing.module */ "./src/app/features/+home/routes/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/features/+home/home.component.ts");
/* harmony import */ var src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/app/layout.module */ "./src/app/layout/app/layout.module.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _routes_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                src_app_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            ],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/features/+home/routes/home-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/+home/routes/home-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.routes */ "./src/app/features/+home/routes/home.routes.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_home_routes__WEBPACK_IMPORTED_MODULE_3__["routes"]),
            ],
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/+home/routes/home.routes.ts":
/*!******************************************************!*\
  !*** ./src/app/features/+home/routes/home.routes.ts ***!
  \******************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home.component */ "./src/app/features/+home/home.component.ts");

var routes = [
    {
        path: 'home',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
];


/***/ }),

/***/ "./src/app/features/+login/components/login-form/login-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+login/components/login-form/login-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"auth-form-card\">\r\n    <form [formGroup]=\"form\" (submit)=\"onSubmit($event)\">\r\n        <mat-form-field>\r\n            <input type=\"email\" matInput formControlName=\"email\" placeholder=\"{{'auth.email' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"password\" matInput formControlName=\"password\" placeholder=\"{{'auth.password' | translate}}\">\r\n        </mat-form-field>\r\n        <button class=\"auth-form-card-button\" type=\"submit\" color=\"primary\"\r\n            mat-flat-button>{{'login' | translate}}</button>\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/features/+login/components/login-form/login-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+login/components/login-form/login-form.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-form-card {\n  width: 50rem;\n  border-radius: 4px; }\n\n.mat-form-field {\n  width: 100%; }\n\n.auth-form-card-button {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK2xvZ2luL2NvbXBvbmVudHMvbG9naW4tZm9ybS9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcK2xvZ2luXFxjb21wb25lbnRzXFxsb2dpbi1mb3JtXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzLytsb2dpbi9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXV0aC1mb3JtLWNhcmQge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYXV0aC1mb3JtLWNhcmQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/features/+login/components/login-form/login-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/+login/components/login-form/login-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(_builder) {
        this._builder = _builder;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.form = this._builder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    LoginFormComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.submit.emit(this.form.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginFormComponent.prototype, "submit", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/features/+login/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/features/+login/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/features/+login/components/register-form/register-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+login/components/register-form/register-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"auth-form-card\">\r\n    <form [formGroup]=\"form\" (submit)=\"onSubmit($event)\">\r\n        <mat-form-field>\r\n            <input type=\"email\" matInput formControlName=\"email\" placeholder=\"{{'auth.email' | translate}}\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"password\" matInput formControlName=\"password\"  placeholder=\"{{'auth.password' | translate}}\">\r\n            <mat-error *ngIf=\"form.controls.password.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"password\" matInput formControlName=\"confirmPassword\"  placeholder=\"{{'auth.confirm_password' | translate}}\">\r\n            <mat-error *ngIf=\"form.controls.confirmPassword.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <button class=\"auth-form-card-button\" type=\"submit\" color=\"primary\"\r\n            mat-flat-button>{{'register' | translate}}</button>\r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/features/+login/components/register-form/register-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+login/components/register-form/register-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-form-card {\n  width: 50rem;\n  border-radius: 4px; }\n\n.mat-form-field {\n  width: 100%; }\n\n.auth-form-card-button {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK2xvZ2luL2NvbXBvbmVudHMvcmVnaXN0ZXItZm9ybS9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcK2xvZ2luXFxjb21wb25lbnRzXFxyZWdpc3Rlci1mb3JtXFxyZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzLytsb2dpbi9jb21wb25lbnRzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXV0aC1mb3JtLWNhcmQge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYXV0aC1mb3JtLWNhcmQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/features/+login/components/register-form/register-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/+login/components/register-form/register-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(_builder, _translateService) {
        this._builder = _builder;
        this._translateService = _translateService;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._builder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.form.valueChanges.subscribe(function (value) {
            if (value.password !== value.confirmPassword) {
                _this.form.controls.password.setErrors({ notMatch: true });
                _this.form.controls.confirmPassword.setErrors({ notMatch: true });
                return;
            }
        });
    };
    RegisterFormComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.submit.emit(this.form.value);
    };
    RegisterFormComponent.prototype.getErrorMessage = function () {
        if (this.form.controls.password.hasError('notMatch') && this.form.controls.confirmPassword.hasError('notMatch')) {
            return this._translateService.instant('errors.passwords_not_match');
        }
        else {
            this.form.controls.password.setErrors(null);
            this.form.controls.confirmPassword.setErrors(null);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RegisterFormComponent.prototype, "submit", void 0);
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/features/+login/components/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/features/+login/components/register-form/register-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/features/+login/containers/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/+login/containers/index.ts ***!
  \*****************************************************/
/*! exports provided: LoginViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_view_login_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-view/login-view.component */ "./src/app/features/+login/containers/login-view/login-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function() { return _login_view_login_view_component__WEBPACK_IMPORTED_MODULE_0__["LoginViewComponent"]; });




/***/ }),

/***/ "./src/app/features/+login/containers/login-view/login-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+login/containers/login-view/login-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-holder\">\r\n    <span class=\"logo\" (click)=\"goHome()\">{{'title' | translate}} {{'login' | translate}}</span>\r\n    <app-login-form (submit)=\"login($event)\"></app-login-form>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+login/containers/login-view/login-view.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+login/containers/login-view/login-view.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #434a54; }\n\n.login-holder {\n  -webkit-transform: translateY(-7rem);\n          transform: translateY(-7rem); }\n\n.logo {\n  cursor: pointer;\n  font: 3.5rem/1.3 \"OpenSansLight\", Arial, sans-serif;\n  color: #fff;\n  text-align: center;\n  display: block;\n  margin: 0 0 3rem; }\n\n.logo img {\n    margin: 0 0 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK2xvZ2luL2NvbnRhaW5lcnMvbG9naW4tdmlldy9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcK2xvZ2luXFxjb250YWluZXJzXFxsb2dpbi12aWV3XFxsb2dpbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy8rbG9naW4vY29udGFpbmVycy9sb2dpbi12aWV3L0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxzdHlsZXNcXGJhc2VcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLG9CQ0RxQixFREV4Qjs7QUFDRDtFQUNJLHFDQUE0QjtVQUE1Qiw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLG9EQ1prRDtFRGFsRCxZQ0xRO0VETVIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxpQkFBZ0IsRUFJbkI7O0FBVkQ7SUFRUSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rbG9naW4vY29udGFpbmVycy9sb2dpbi12aWV3L2xvZ2luLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYmFzZS92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG4ubG9naW4taG9sZGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cmVtKTtcclxufVxyXG4ubG9nb3sgICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gICAgZm9udDogMy41cmVtLzEuMyAkZm9udC1mYW1pbHktbGlnaHQ7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAzcmVtO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDJyZW07XHJcbiAgICB9XHJcbn0iLCIvLyBmb250c1xyXG4kYmFzZS1mb250LXNpemU6IDEuNnJlbTtcclxuJGZvbnQtZmFtaWx5LXJlZ3VsYXI6ICdPcGVuU2Fuc1JlZ3VsYXInLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvbGQ6ICdPcGVuU2Fuc0JvbGQnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnT3BlblNhbnNMaWdodCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRtYWluLWNvbG9yOiAjNjA3ZDhiO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNDM0YTU0O1xyXG4kYmx1ZTogIzI5YWFlMTtcclxuJGRhcmstYmx1ZTogIzI3ODJhOTtcclxuJGxpZ2h0LWJsdWU6ICNkOGU4ZWY7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwOyJdfQ== */"

/***/ }),

/***/ "./src/app/features/+login/containers/login-view/login-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/+login/containers/login-view/login-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoginViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function() { return LoginViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth */ "./src/app/core/auth/index.ts");




var LoginViewComponent = /** @class */ (function () {
    function LoginViewComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    LoginViewComponent.prototype.ngOnInit = function () {
        if (this._auth.isAuthenticated()) {
            this._router.navigate(['/']);
        }
    };
    LoginViewComponent.prototype.login = function (value) {
        var _this = this;
        this._auth.authorize(value)
            .subscribe(function (isAuthorized) {
            if (isAuthorized) {
                _this._router.navigate(['/home']);
            }
            else {
                // TODO handle error;
            }
        });
    };
    LoginViewComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    LoginViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-view',
            template: __webpack_require__(/*! ./login-view.component.html */ "./src/app/features/+login/containers/login-view/login-view.component.html"),
            styles: [__webpack_require__(/*! ./login-view.component.scss */ "./src/app/features/+login/containers/login-view/login-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginViewComponent);
    return LoginViewComponent;
}());



/***/ }),

/***/ "./src/app/features/+login/containers/register-view/register-view.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+login/containers/register-view/register-view.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-holder\">\r\n    <span class=\"logo\" (click)=\"goHome()\">{{'title' | translate}} {{'registration' | translate}}</span>\r\n    <app-register-form (submit)=\"register($event)\"></app-register-form>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+login/containers/register-view/register-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+login/containers/register-view/register-view.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #434a54; }\n\n.login-holder {\n  -webkit-transform: translateY(-7rem);\n          transform: translateY(-7rem); }\n\n.logo {\n  cursor: pointer;\n  font: 3.5rem/1.3 \"OpenSansLight\", Arial, sans-serif;\n  color: #fff;\n  text-align: center;\n  display: block;\n  margin: 0 0 3rem; }\n\n.logo img {\n    margin: 0 0 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK2xvZ2luL2NvbnRhaW5lcnMvcmVnaXN0ZXItdmlldy9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcK2xvZ2luXFxjb250YWluZXJzXFxyZWdpc3Rlci12aWV3XFxyZWdpc3Rlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy8rbG9naW4vY29udGFpbmVycy9yZWdpc3Rlci12aWV3L0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxzdHlsZXNcXGJhc2VcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLG9CQ0RxQixFREV4Qjs7QUFDRDtFQUNJLHFDQUE0QjtVQUE1Qiw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLG9EQ1prRDtFRGFsRCxZQ0xRO0VETVIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxpQkFBZ0IsRUFJbkI7O0FBVkQ7SUFRUSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rbG9naW4vY29udGFpbmVycy9yZWdpc3Rlci12aWV3L3JlZ2lzdGVyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvYmFzZS92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG4ubG9naW4taG9sZGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cmVtKTtcclxufVxyXG4ubG9nb3sgICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gICAgZm9udDogMy41cmVtLzEuMyAkZm9udC1mYW1pbHktbGlnaHQ7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAzcmVtO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDJyZW07XHJcbiAgICB9XHJcbn0iLCIvLyBmb250c1xyXG4kYmFzZS1mb250LXNpemU6IDEuNnJlbTtcclxuJGZvbnQtZmFtaWx5LXJlZ3VsYXI6ICdPcGVuU2Fuc1JlZ3VsYXInLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvbGQ6ICdPcGVuU2Fuc0JvbGQnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWxpZ2h0OiAnT3BlblNhbnNMaWdodCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRtYWluLWNvbG9yOiAjNjA3ZDhiO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNDM0YTU0O1xyXG4kYmx1ZTogIzI5YWFlMTtcclxuJGRhcmstYmx1ZTogIzI3ODJhOTtcclxuJGxpZ2h0LWJsdWU6ICNkOGU4ZWY7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwOyJdfQ== */"

/***/ }),

/***/ "./src/app/features/+login/containers/register-view/register-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/+login/containers/register-view/register-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegisterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterViewComponent", function() { return RegisterViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/features/+login/services/user.service.ts");





var RegisterViewComponent = /** @class */ (function () {
    function RegisterViewComponent(_auth, _router, _userService) {
        this._auth = _auth;
        this._router = _router;
        this._userService = _userService;
    }
    RegisterViewComponent.prototype.ngOnInit = function () {
        if (this._auth.isAuthenticated()) {
            this._router.navigate(['/']);
        }
    };
    RegisterViewComponent.prototype.register = function (value) {
        var _this = this;
        this._userService.create(value).subscribe(function (user) {
            if (user) {
                _this._router.navigate(['/home']);
            }
        });
    };
    RegisterViewComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    RegisterViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-view',
            template: __webpack_require__(/*! ./register-view.component.html */ "./src/app/features/+login/containers/register-view/register-view.component.html"),
            styles: [__webpack_require__(/*! ./register-view.component.scss */ "./src/app/features/+login/containers/register-view/register-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterViewComponent);
    return RegisterViewComponent;
}());



/***/ }),

/***/ "./src/app/features/+login/index.ts":
/*!******************************************!*\
  !*** ./src/app/features/+login/index.ts ***!
  \******************************************/
/*! exports provided: LoginModule, LoginViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.module */ "./src/app/features/+login/login.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return _login_module__WEBPACK_IMPORTED_MODULE_0__["LoginModule"]; });

/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./src/app/features/+login/containers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function() { return _containers__WEBPACK_IMPORTED_MODULE_1__["LoginViewComponent"]; });





/***/ }),

/***/ "./src/app/features/+login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/features/+login/login.module.ts ***!
  \*************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routes_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/login-routing.module */ "./src/app/features/+login/routes/login-routing.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/app/features/+login/containers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/features/+login/components/login-form/login-form.component.ts");
/* harmony import */ var src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout/app/layout.module */ "./src/app/layout/app/layout.module.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _containers_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/register-view/register-view.component */ "./src/app/features/+login/containers/register-view/register-view.component.ts");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "./src/app/features/+login/components/register-form/register-form.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/features/+login/services/user.service.ts");












var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule_1 = LoginModule;
    LoginModule.forRoot = function () {
        return {
            ngModule: LoginModule_1,
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
        };
    };
    var LoginModule_1;
    LoginModule = LoginModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _routes_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            ],
            declarations: [
                _containers__WEBPACK_IMPORTED_MODULE_4__["LoginViewComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"],
                _containers_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_9__["RegisterViewComponent"],
                _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_10__["RegisterFormComponent"]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/features/+login/routes/login-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/+login/routes/login-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.routes */ "./src/app/features/+login/routes/login.routes.ts");





var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_login_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            ],
            declarations: [],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/+login/routes/login.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/features/+login/routes/login.routes.ts ***!
  \********************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers */ "./src/app/features/+login/containers/index.ts");
/* harmony import */ var _containers_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/register-view/register-view.component */ "./src/app/features/+login/containers/register-view/register-view.component.ts");


var routes = [
    {
        path: 'login',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["LoginViewComponent"],
    },
    {
        path: 'register',
        component: _containers_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_1__["RegisterViewComponent"],
    },
];


/***/ }),

/***/ "./src/app/features/+login/services/user.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/+login/services/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_core_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/settings */ "./src/app/core/settings.ts");




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.create = function (user) {
        return this._http.post(src_app_core_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].apiHost + "/user", user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/features/+project/components/project-actions/project-actions.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-actions/project-actions.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"action-btn btn\" mat-flat-button color=\"primary\" (click)=\"navigateToProjectsCreation()\">\r\n    {{ 'actions.create' | translate }}\r\n</button>\r\n<button class=\"action-btn btn\" mat-flat-button [matMenuTriggerFor]=\"menu\">{{ 'actions.actions' | translate }}</button>\r\n<mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n    <div matTooltip=\"{{'tooltips.edit_project_tooltip' | translate}}\" [matTooltipPosition]=\"'right'\">\r\n        <button class=\"menu-action tooltip\" mat-menu-item [disabled]=\"isEditDisabled()\" (click)=\"editProject()\">\r\n            {{ 'actions.edit' | translate }}\r\n        </button>\r\n    </div>\r\n    <hr />\r\n    <div matTooltip=\"{{'tooltips.share_project_tooltip' | translate}}\" [matTooltipPosition]=\"'right'\">\r\n        <button class=\"menu-action tooltip\" mat-menu-item [disabled]=\"isShareDisabled()\" (click)=\"shareProject(true)\">\r\n            {{ 'actions.share' | translate }}\r\n        </button>\r\n    </div>\r\n    <div matTooltip=\"{{'tooltips.unshare_project_tooltip' | translate}}\" [matTooltipPosition]=\"'right'\">\r\n        <button class=\"menu-action tooltip\" mat-menu-item [disabled]=\"isUnshareDisabled()\" (click)=\"shareProject(false)\">\r\n            {{ 'actions.unshare' | translate }}\r\n        </button>\r\n    </div>\r\n    <hr />\r\n    <div matTooltip=\"{{'tooltips.activate_project_tooltip' | translate}}\" [matTooltipPosition]=\"'right'\">\r\n        <button class=\"menu-action\" mat-menu-item [disabled]=\"isActivateDisabled()\" (click)=\"activate()\">\r\n            {{ 'actions.activate' | translate }}\r\n        </button>\r\n    </div>\r\n    <div matTooltip=\"{{'tooltips.deactivate_project_tooltip' | translate}}\" [matTooltipPosition]=\"'right'\">\r\n        <button class=\"menu-action\" mat-menu-item [disabled]=\"isDeactivateDisabled()\" (click)=\"deactivate()\">\r\n            {{ 'actions.deactivate' | translate }}\r\n        </button>\r\n    </div>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/features/+project/components/project-actions/project-actions.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-actions/project-actions.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding-top: 1rem;\n  display: block; }\n  @media (max-width: 1023px) {\n    :host {\n      padding: 0; } }\n  .menu-action {\n  font-size: 14px; }\n  .btn {\n  margin: 0 1.5rem 0 0; }\n  @media (max-width: 1023px) {\n    .btn {\n      width: 100%;\n      max-width: 18.5rem;\n      margin-bottom: 1.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LWFjdGlvbnMvRDpcXFRhbnlhXFxOVVJFXFxEaXBsb21hXFxXYXZlc01vZGVsbGluZy9zcmNcXGFwcFxcZmVhdHVyZXNcXCtwcm9qZWN0XFxjb21wb25lbnRzXFxwcm9qZWN0LWFjdGlvbnNcXHByb2plY3QtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixlQUFjLEVBSWpCO0VBSEc7SUFISjtNQUlRLFdBQVUsRUFFakIsRUFBQTtFQUNEO0VBQ0ksZ0JBQWUsRUFDbEI7RUFDRDtFQUNJLHFCQUFvQixFQU12QjtFQUxHO0lBRko7TUFHUSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLHNCQUFxQixFQUU1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LWFjdGlvbnMvcHJvamVjdC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCl7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG4ubWVudS1hY3Rpb257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbjogMCAxLjVyZW0gMCAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCl7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/features/+project/components/project-actions/project-actions.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-actions/project-actions.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectActionsComponent", function() { return ProjectActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/features/+project/services/project.service.ts");




var ProjectActionsComponent = /** @class */ (function () {
    function ProjectActionsComponent(_router, _projectService) {
        this._router = _router;
        this._projectService = _projectService;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.projects = [];
    }
    ProjectActionsComponent.prototype.ngOnInit = function () { };
    ProjectActionsComponent.prototype.navigateToProjectsCreation = function () {
        this._router.navigate(['/dashboard/sea/2d']);
    };
    ProjectActionsComponent.prototype.isEditDisabled = function () {
        return this.projects.length !== 1 || this.projects[0].isDeleted;
    };
    ProjectActionsComponent.prototype.isShareDisabled = function () {
        return this.projects.length !== 1 || this.projects.some(function (p) { return p.isDeleted || p.isShared; });
    };
    ProjectActionsComponent.prototype.isUnshareDisabled = function () {
        return this.projects.length !== 1 || this.projects.some(function (p) { return p.isDeleted || !p.isShared; });
    };
    ProjectActionsComponent.prototype.isDeactivateDisabled = function () {
        return this.projects.length !== 1 || this.projects.some(function (p) { return p.isDeleted; });
    };
    ProjectActionsComponent.prototype.isActivateDisabled = function () {
        return this.projects.length !== 1 || this.projects.some(function (p) { return !p.isDeleted; });
    };
    ProjectActionsComponent.prototype.editProject = function () {
        this._router.navigate(["/dashboard/sea/2d/" + this.projects[0].id]);
    };
    ProjectActionsComponent.prototype.shareProject = function (isShared) {
        var _this = this;
        this._projectService.share(this.projects[0].id, isShared).subscribe(function (_) {
            _this.reload.emit();
        });
    };
    ProjectActionsComponent.prototype.deactivate = function () {
        var _this = this;
        this._projectService.setIsActive(this.projects[0].id, false).subscribe(function (_) {
            _this.reload.emit();
        });
    };
    ProjectActionsComponent.prototype.activate = function () {
        var _this = this;
        this._projectService.setIsActive(this.projects[0].id, true).subscribe(function (_) {
            _this.reload.emit();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProjectActionsComponent.prototype, "reload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProjectActionsComponent.prototype, "projects", void 0);
    ProjectActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-actions',
            template: __webpack_require__(/*! ./project-actions.component.html */ "./src/app/features/+project/components/project-actions/project-actions.component.html"),
            styles: [__webpack_require__(/*! ./project-actions.component.scss */ "./src/app/features/+project/components/project-actions/project-actions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ProjectActionsComponent);
    return ProjectActionsComponent;
}());



/***/ }),

/***/ "./src/app/features/+project/components/project-list/project-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-list/project-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-container mat-elevation-z8\">\r\n    <div class=\"loading-indicator\" *ngIf=\"isLoading\">\r\n        <mat-spinner mode=\"indeterminate\"></mat-spinner>\r\n    </div>\r\n\r\n    <div *ngIf=\"!projects || !projects.length\" class=\"empty-projects\">\r\n        <h2>\r\n            {{'empty_projects' | translate}}\r\n        </h2>\r\n    </div>\r\n\r\n    <mat-table [dataSource]=\"dataSource\" *ngIf=\"projects && projects.length\">\r\n        <ng-container matColumnDef=\"select\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef>\r\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n                </mat-checkbox>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\">\r\n                </mat-checkbox>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell class=\"name-cell\" *matHeaderCellDef>{{'project.name' | translate}}</mat-header-cell>\r\n            <mat-cell class=\"name-cell\" *matCellDef=\"let project\">{{project.name}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"createdOn\">\r\n            <mat-header-cell *matHeaderCellDef>{{'project.creation_date' | translate}}</mat-header-cell>\r\n            <mat-cell class=\"createdOn-cell\" *matCellDef=\"let project\">\r\n                {{project.createdOn | date: 'MM/dd/yyyy hh:mm aa' | lowercase}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"sharedLink\">\r\n            <mat-header-cell *matHeaderCellDef>{{'project.shared_link' | translate}}</mat-header-cell>\r\n            <mat-cell class=\"sharedLink-cell\" *matCellDef=\"let project\">\r\n                <div *ngIf=\"project.isShared\">\r\n                    <button class=\"action-btn btn\" mat-stroked-button\r\n                        (click)=\"openSharedProj(project.id)\">{{'actions.view'  | translate }}</button>&nbsp;\r\n                    <button class=\"action-btn btn\" mat-stroked-button [matTooltip]=\"getCopyCode(project.id)\"\r\n                    (click)=\"copyCode(project.id, $event)\" [matTooltipPosition]=\"'right'\">{{'actions.copy_code'  | translate }}</button>\r\n                </div>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"selectSingle(row)\"\r\n            [ngClass]=\"{highlighted: row == selectedProject || selection.isSelected(row)}\"></mat-row>\r\n\r\n    </mat-table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/features/+project/components/project-list/project-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-list/project-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.mat-table mat-cell:first-of-type,\n.mat-table mat-footer-cell:first-of-type,\n.mat-table mat-header-cell:first-of-type {\n  width: 7rem;\n  flex: 0 0 auto; }\n\n.mat-table mat-cell.serialNumber-cell,\n.mat-table mat-footer-cell.serialNumber-cell,\n.mat-table mat-header-cell.serialNumber-cell {\n  width: 16rem;\n  flex: 0 0 auto; }\n\n.mat-table mat-cell:not(:first-of-type),\n.mat-table mat-footer-cell:not(:first-of-type),\n.mat-table mat-header-cell:not(:first-of-type) {\n  text-align: center;\n  justify-content: center; }\n\n.mat-table mat-cell:last-of-type,\n.mat-table mat-footer-cell:last-of-type,\n.mat-table mat-header-cell:last-of-type {\n  padding-right: 0; }\n\n.empty-projects {\n  text-align: center;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QvRDpcXFRhbnlhXFxOVVJFXFxEaXBsb21hXFxXYXZlc01vZGVsbGluZy9zcmNcXGFwcFxcZmVhdHVyZXNcXCtwcm9qZWN0XFxjb21wb25lbnRzXFxwcm9qZWN0LWxpc3RcXHByb2plY3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixhQUFZO0VBQ1osWUFBVztFQUNYLFdBQVU7RUFDVixlQUFjO0VBQ2QsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1AsVUFBUztFQUNULFNBQVEsRUFDVDs7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1oscUNBQWlDLEVBQ2xDOztBQUNEOzs7RUFLTSxZQUFXO0VBQ1gsZUFBYyxFQUNmOztBQVBMOzs7RUFTTSxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQVhMOzs7RUFpQk0sbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUN4Qjs7QUFuQkw7OztFQXlCTSxpQkFBZ0IsRUFDakI7O0FBR0w7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuLmxvYWRpbmctaW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG4ubG9hZGluZy1pbmRpY2F0b3I6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4ubWF0LXRhYmxle1xyXG4gIG1hdC1jZWxsLFxyXG4gIG1hdC1mb290ZXItY2VsbCxcclxuICBtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICAmOmZpcnN0LW9mLXR5cGV7XHJcbiAgICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIH1cclxuICAgICYuc2VyaWFsTnVtYmVyLWNlbGx7XHJcbiAgICAgIHdpZHRoOiAxNnJlbTtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1hdC1jZWxsLFxyXG4gIG1hdC1mb290ZXItY2VsbCxcclxuICBtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1hdC1jZWxsLFxyXG4gIG1hdC1mb290ZXItY2VsbCxcclxuICBtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICAmOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmVtcHR5LXByb2plY3RzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/features/+project/components/project-list/project-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-list/project-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/settings */ "./src/app/core/settings.ts");





var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent() {
        this.displayedColumns = ['select', 'name', 'createdOn', 'sharedLink'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.isLoading = true;
        this.selectProject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._projects = [];
        this._selectedProjects = [];
    }
    Object.defineProperty(ProjectListComponent.prototype, "projects", {
        get: function () {
            return this._projects;
        },
        set: function (projects) {
            this._projects = projects;
            if (this._projects) {
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this._projects);
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
                this.isLoading = false;
            }
            this._clearSelection();
        },
        enumerable: true,
        configurable: true
    });
    ProjectListComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ProjectListComponent.prototype, "selectedProject", {
        get: function () {
            if (this._selectedProjects.length === 1) {
                return this._selectedProjects[0];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProjectListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ProjectListComponent.prototype.toggle = function (row) {
        if (this._selectedProjects.some(function (project) { return project.id === row.id; })) {
            var indexOfRow = this._selectedProjects.indexOf(row);
            this._selectedProjects.splice(indexOfRow, 1);
        }
        else {
            this._selectedProjects.push(row);
        }
        this.selection.toggle(row);
        this.selectProject.emit(this._selectedProjects);
    };
    ProjectListComponent.prototype.masterToggle = function () {
        this.isAllSelected() ?
            this._clearSelection() :
            this._selectAll();
        this.selectProject.emit(this._selectedProjects);
    };
    ProjectListComponent.prototype.selectSingle = function (row) {
        if (this.selectedProject === row || (this._selectedProjects.length > 1)
            && this._selectedProjects.some(function (project) { return project.id === row.id; })) {
            this._clearSelection();
            return;
        }
        this._clearSelection();
        this.toggle(row);
    };
    ProjectListComponent.prototype.openSharedProj = function (id) {
        window.open(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].clientHost + "/shared/" + id, "_blank");
    };
    ProjectListComponent.prototype.getCopyCode = function (id) {
        return "<iframe src=\"" + src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].clientHost + "/shared/" + id + "\" frameBorder=\"NO\" style=\"width:1100px;height:800px;\"></iframe>";
    };
    ProjectListComponent.prototype.copyCode = function (id, event) {
        event.preventDefault();
        event.stopPropagation();
        var codeToCopy = this.getCopyCode(id);
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = codeToCopy;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    ProjectListComponent.prototype._clearSelection = function () {
        this.selection.clear();
        this._selectedProjects = [];
    };
    ProjectListComponent.prototype._selectAll = function () {
        var _this = this;
        this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this._selectedProjects = [];
        this.dataSource.data.forEach(function (row) { return _this._selectedProjects.push(row); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], ProjectListComponent.prototype, "projects", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProjectListComponent.prototype, "selectProject", void 0);
    ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/features/+project/components/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.scss */ "./src/app/features/+project/components/project-list/project-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/features/+project/components/project-search-form/project-search-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-search-form/project-search-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\">\r\n    <div class=\"projects-body\">\r\n        <div class=\"actions-top\">\r\n            <div class=\"buttons-selects-holder\">\r\n                <ng-content select=\"[buttons]\"></ng-content>\r\n            </div>\r\n            <mat-form-field class=\"search-holder\">\r\n                <input matInput type=\"search\" id=\"searchBox\" placeholder=\"{{'search_by_name' | translate}}\" formControlName=\"searchTerm\">\r\n            </mat-form-field>\r\n        </div>\r\n        <ng-content select=[table]></ng-content>\r\n        <mat-paginator #paginator [length]=\"totalCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 15, 30]\"\r\n            (page)=\"onPaginateChange($event)\"></mat-paginator>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/features/+project/components/project-search-form/project-search-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-search-form/project-search-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons-selects-holder {\n  display: flex; }\n  @media (max-width: 1023px) {\n    .buttons-selects-holder {\n      display: block; } }\n  @media (max-width: 1023px) {\n  .search-selects .mat-form-field {\n    display: block;\n    margin: 0; } }\n  .actions-top {\n  display: flex;\n  margin: 0 0 1rem; }\n  @media (max-width: 1199px) {\n    .actions-top {\n      display: block; } }\n  .actions-top .buttons-selects-holder {\n    flex: 0 0 auto; }\n  .actions-top .search-holder {\n    flex-grow: 1;\n    margin: -0.1rem 0 0; }\n  @media (max-width: 1199px) {\n      .actions-top .search-holder {\n        width: 100%;\n        max-width: 67.7rem; } }\n  @media (max-width: 1023px) {\n      .actions-top .search-holder {\n        max-width: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LXNlYXJjaC1mb3JtL0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFwrcHJvamVjdFxcY29tcG9uZW50c1xccHJvamVjdC1zZWFyY2gtZm9ybVxccHJvamVjdC1zZWFyY2gtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFJaEI7RUFIRztJQUZKO01BR1EsZUFBYyxFQUVyQixFQUFBO0VBR087RUFGUjtJQUdZLGVBQWM7SUFDZCxVQUFTLEVBRWhCLEVBQUE7RUFFTDtFQUNJLGNBQWE7RUFDYixpQkFBZ0IsRUFrQm5CO0VBakJHO0lBSEo7TUFJUSxlQUFjLEVBZ0JyQixFQUFBO0VBcEJEO0lBT1EsZUFBYyxFQUNqQjtFQVJMO0lBVVEsYUFBWTtJQUNaLG9CQUFtQixFQVF0QjtFQVBHO01BWlI7UUFhWSxZQUFXO1FBQ1gsbUJBQWtCLEVBS3pCLEVBQUE7RUFIRztNQWhCUjtRQWlCWSxnQkFBZSxFQUV0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LXNlYXJjaC1mb3JtL3Byb2plY3Qtc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucy1zZWxlY3RzLWhvbGRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG4uc2VhcmNoLXNlbGVjdHN7XHJcbiAgICAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hY3Rpb25zLXRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCl7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ucy1zZWxlY3RzLWhvbGRlcntcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIH1cclxuICAgIC5zZWFyY2gtaG9sZGVye1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtYXJnaW46IC0wLjFyZW0gMCAwO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2Ny43cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/+project/components/project-search-form/project-search-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/+project/components/project-search-form/project-search-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProjectSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSearchFormComponent", function() { return ProjectSearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var _constants_default_search_parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/default-search-parameter */ "./src/app/features/+project/constants/default-search-parameter.ts");






var ProjectSearchFormComponent = /** @class */ (function () {
    function ProjectSearchFormComponent(_projectService, _builder) {
        this._projectService = _projectService;
        this._builder = _builder;
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalCount = 0;
        this._searchParameters = _constants_default_search_parameter__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SEARCH_PARAMETERS"];
    }
    ProjectSearchFormComponent.prototype.ngOnInit = function () {
        this.searchForm = this._builder.group({
            searchTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.searchParameters.searchTerm),
        });
        this.paginator.pageSize = this.pageSize;
        this.paginator.pageIndex = this.page - 1;
        this._emit(this.searchForm.value);
        this._subscribeControlValuesChages();
    };
    Object.defineProperty(ProjectSearchFormComponent.prototype, "searchParameters", {
        get: function () {
            return this._searchParameters;
        },
        set: function (parameters) {
            this._searchParameters = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _constants_default_search_parameter__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SEARCH_PARAMETERS"], parameters);
            if (this.searchForm) {
                this.searchForm.patchValue({
                    searchTerm: this._searchParameters.searchTerm ? this._searchParameters.searchTerm : _constants_default_search_parameter__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SEARCH_PARAMETERS"].searchTerm,
                }, { emitEvent: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectSearchFormComponent.prototype, "page", {
        get: function () {
            return parseInt(this._searchParameters.page.toString(), 10);
        },
        set: function (value) {
            this._searchParameters.page = parseInt(value.toString(), 10) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectSearchFormComponent.prototype, "pageSize", {
        get: function () {
            return parseInt(this._searchParameters.perPage.toString(), 10);
        },
        set: function (value) {
            this._searchParameters.perPage = parseInt(value.toString(), 10);
        },
        enumerable: true,
        configurable: true
    });
    ProjectSearchFormComponent.prototype.filter = function (value) {
        this._emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.searchForm.value, value));
    };
    ProjectSearchFormComponent.prototype.onPaginateChange = function (event) {
        this.page = event.pageIndex;
        this.pageSize = event.pageSize;
        this._emit(this.searchForm.value);
    };
    ProjectSearchFormComponent.prototype._setupSearchParameters = function (_a) {
        var term = _a.searchTerm;
        this._searchParameters = {
            page: this.page,
            perPage: this.pageSize,
            searchTerm: term,
        };
    };
    ProjectSearchFormComponent.prototype._emit = function (value) {
        this._setupSearchParameters(value);
        this.valueChanges.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._searchParameters));
    };
    ProjectSearchFormComponent.prototype._subscribeControlValuesChages = function () {
        var _this = this;
        this.searchForm.controls.searchTerm.valueChanges.subscribe(function (value) {
            if (value.length < 1) {
                _this.filter({ searchTerm: null });
            }
            else {
                _this.filter({ searchTerm: value });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProjectSearchFormComponent.prototype, "valueChanges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProjectSearchFormComponent.prototype, "totalCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProjectSearchFormComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProjectSearchFormComponent.prototype, "searchParameters", null);
    ProjectSearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-search-form',
            template: __webpack_require__(/*! ./project-search-form.component.html */ "./src/app/features/+project/components/project-search-form/project-search-form.component.html"),
            styles: [__webpack_require__(/*! ./project-search-form.component.scss */ "./src/app/features/+project/components/project-search-form/project-search-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProjectSearchFormComponent);
    return ProjectSearchFormComponent;
}());



/***/ }),

/***/ "./src/app/features/+project/constants/default-search-parameter.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/+project/constants/default-search-parameter.ts ***!
  \*************************************************************************/
/*! exports provided: DEFAULT_SEARCH_PARAMETERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEARCH_PARAMETERS", function() { return DEFAULT_SEARCH_PARAMETERS; });
var DEFAULT_SEARCH_PARAMETERS = {
    isActive: true,
    perPage: 10,
    page: 1,
    searchTerm: null,
};


/***/ }),

/***/ "./src/app/features/+project/containers/projects-view/projects-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/+project/containers/projects-view/projects-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap projects-page\">\r\n  <div class=\"projects-search\">\r\n    <app-project-search-form [totalCount]=\"totalCount\" (valueChanges)=\"onSearch($event)\" [totalCount]=\"totalCount\"\r\n      [searchParameters]=\"searchParameters\">\r\n      <app-project-actions buttons [projects]=\"selectedProjects\" (reload)=\"reloadProjects()\">\r\n      </app-project-actions>\r\n      <app-project-list table (selectProject)=\"updateSelectedProjects($event)\" [projects]=\"projects\">\r\n      </app-project-list>\r\n    </app-project-search-form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+project/containers/projects-view/projects-view.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/+project/containers/projects-view/projects-view.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-page {\n  padding: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29udGFpbmVycy9wcm9qZWN0cy12aWV3L0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFwrcHJvamVjdFxcY29udGFpbmVyc1xccHJvamVjdHMtdmlld1xccHJvamVjdHMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvK3Byb2plY3QvY29udGFpbmVycy9wcm9qZWN0cy12aWV3L3Byb2plY3RzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMtcGFnZSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+project/containers/projects-view/projects-view.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+project/containers/projects-view/projects-view.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProjectsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsViewComponent", function() { return ProjectsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_search_abstract_search_list_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/search/abstract-search-list-view */ "./src/app/core/search/abstract-search-list-view.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var ProjectsViewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectsViewComponent, _super);
    function ProjectsViewComponent(_projectService, router, route) {
        var _this = _super.call(this) || this;
        _this._projectService = _projectService;
        _this.router = router;
        _this.route = route;
        _this.pageSize = 10;
        _this.selectedProjects = [];
        _this._isActive = true;
        _this.route.queryParams
            .subscribe(function (params) {
            _this._isActive = params.isActive;
        });
        return _this;
    }
    ProjectsViewComponent.prototype.reloadProjects = function () {
        this.loadData();
    };
    ProjectsViewComponent.prototype.onSearch = function (searchParameters) {
        searchParameters.isActive = this._isActive;
        _super.prototype.onSearch.call(this, searchParameters);
    };
    ProjectsViewComponent.prototype.updateSelectedProjects = function (projects) {
        this.selectedProjects = projects;
    };
    ProjectsViewComponent.prototype.loadData = function () {
        var _this = this;
        var searchParameters = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.searchParameters);
        this._projectService
            .getProjects(searchParameters)
            .subscribe(function (result) {
            _this.projects = result.items;
            _this.totalCount = result.totalCount;
        });
    };
    ProjectsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-view',
            template: __webpack_require__(/*! ./projects-view.component.html */ "./src/app/features/+project/containers/projects-view/projects-view.component.html"),
            styles: [__webpack_require__(/*! ./projects-view.component.scss */ "./src/app/features/+project/containers/projects-view/projects-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProjectsViewComponent);
    return ProjectsViewComponent;
}(src_app_core_search_abstract_search_list_view__WEBPACK_IMPORTED_MODULE_3__["AbstractSearchListView"]));



/***/ }),

/***/ "./src/app/features/+project/project.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/+project/project.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layout/app/layout.module */ "./src/app/layout/app/layout.module.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _routes_project_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/project-routing.module */ "./src/app/features/+project/routes/project-routing.module.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var _containers_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/projects-view/projects-view.component */ "./src/app/features/+project/containers/projects-view/projects-view.component.ts");
/* harmony import */ var _components_project_actions_project_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-actions/project-actions.component */ "./src/app/features/+project/components/project-actions/project-actions.component.ts");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/features/+project/components/project-list/project-list.component.ts");
/* harmony import */ var _components_project_search_form_project_search_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project-search-form/project-search-form.component */ "./src/app/features/+project/components/project-search-form/project-search-form.component.ts");












var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule_1 = ProjectModule;
    ProjectModule.forRoot = function () {
        return {
            ngModule: ProjectModule_1,
            providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]],
        };
    };
    var ProjectModule_1;
    ProjectModule = ProjectModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _routes_project_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjectRoutingModule"],
                src_app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _containers_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsViewComponent"],
                _components_project_actions_project_actions_component__WEBPACK_IMPORTED_MODULE_9__["ProjectActionsComponent"],
                _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_10__["ProjectListComponent"],
                _components_project_search_form_project_search_form_component__WEBPACK_IMPORTED_MODULE_11__["ProjectSearchFormComponent"],
            ],
            entryComponents: [],
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/features/+project/routes/project-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/+project/routes/project-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.routes */ "./src/app/features/+project/routes/project.routes.ts");





var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_project_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            ],
            declarations: [],
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/+project/routes/project.routes.ts":
/*!************************************************************!*\
  !*** ./src/app/features/+project/routes/project.routes.ts ***!
  \************************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/projects-view/projects-view.component */ "./src/app/features/+project/containers/projects-view/projects-view.component.ts");

var routes = [
    {
        path: '',
        component: _containers_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_0__["ProjectsViewComponent"],
    },
];


/***/ }),

/***/ "./src/app/features/+project/services/project.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/+project/services/project.service.ts ***!
  \***************************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/settings */ "./src/app/core/settings.ts");
/* harmony import */ var src_app_core_search_utils_search_request_parameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/search/utils/search-request-parameters */ "./src/app/core/search/utils/search-request-parameters.ts");
/* harmony import */ var src_app_core_search_utils_search_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/search/utils/search-response */ "./src/app/core/search/utils/search-response.ts");







var ProjectService = /** @class */ (function () {
    function ProjectService(_http) {
        this._http = _http;
    }
    ProjectService.prototype.getProjects = function (parameters) {
        var params = src_app_core_search_utils_search_request_parameters__WEBPACK_IMPORTED_MODULE_5__["SearchRequestParametersUtils"].getHttpRequestParams(parameters);
        return parameters ? this._http.get(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project", { params: params })
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(src_app_core_search_utils_search_response__WEBPACK_IMPORTED_MODULE_6__["SearchResponseUtils"].getEmptySearchResponse());
    };
    ProjectService.prototype.getProject = function (projectId) {
        return projectId ? this._http.get(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project/" + projectId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.emptyProject);
    };
    ProjectService.prototype.getShared = function (projectId) {
        return projectId ? this._http.get(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project/shared/" + projectId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.emptyProject);
    };
    ProjectService.prototype.create = function (project) {
        return this._http.post(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project", project);
    };
    ProjectService.prototype.update = function (project) {
        return this._http.post(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project", project);
    };
    ProjectService.prototype.setIsActive = function (id, isActive) {
        return this._http.put(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project/" + id, { isActive: isActive });
    };
    ProjectService.prototype.share = function (id, isShared) {
        return this._http.patch(src_app_core_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].apiHost + "/project/" + id, { isShared: isShared });
    };
    Object.defineProperty(ProjectService.prototype, "emptyProject", {
        get: function () {
            return {
                name: null,
                sea: {},
                options: {},
                userId: 0,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectService.prototype, "emptyLookupResponse", {
        get: function () {
            return {
                items: [],
                totalCount: 0,
            };
        },
        enumerable: true,
        configurable: true
    });
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>{{'options_tip_1d.meaning' | translate}}</mat-card-title>\r\n            <mat-card-subtitle>{{'options_tip_1d.tip' | translate}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"../../../../../assets/images/settings.jpg\">\r\n        <mat-card-content>\r\n            <p>{{'options_tip_1d.N' | translate}}</p>\r\n            <p>{{'options_tip_1d.Km' | translate}}</p>\r\n            <p>{{'options_tip_1d.Merge' | translate}}</p>\r\n            <p>{{'options_tip_1d.W' | translate}}</p>\r\n            <p>{{'options_tip_1d.OMEGA' | translate}}</p>\r\n        </mat-card-content>\r\n    </mat-card>"

/***/ }),

/***/ "./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL29wdGlvbnMtdGlwLTFkL0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFwrc2VhXFxjb21wb25lbnRzXFxvcHRpb25zLXRpcC0xZFxcb3B0aW9ucy10aXAtMWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQix1QkFBc0I7RUFDdEIsd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6QixzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbXBvbmVudHMvb3B0aW9ucy10aXAtMWQvb3B0aW9ucy10aXAtMWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgdXNlci1kcmFnOiBub25lOyBcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OptionsTipComponent1D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsTipComponent1D", function() { return OptionsTipComponent1D; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsTipComponent1D = /** @class */ (function () {
    function OptionsTipComponent1D() {
    }
    OptionsTipComponent1D = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-tip-1d',
            template: __webpack_require__(/*! ./options-tip-1d.component.html */ "./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.html"),
            styles: [__webpack_require__(/*! ./options-tip-1d.component.scss */ "./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsTipComponent1D);
    return OptionsTipComponent1D;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/options-tip/options-tip.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/features/+sea/components/options-tip/options-tip.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    user-drag: none; \r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-drag: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL29wdGlvbnMtdGlwL29wdGlvbnMtdGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzLytzZWEvY29tcG9uZW50cy9vcHRpb25zLXRpcC9vcHRpb25zLXRpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHVzZXItZHJhZzogbm9uZTsgXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+sea/components/options-tip/options-tip.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+sea/components/options-tip/options-tip.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>{{'options_tip.meaning' | translate}}</mat-card-title>\r\n        <mat-card-subtitle>{{'options_tip.tip' | translate}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"../../../../../assets/images/settings.jpg\">\r\n    <mat-card-content>\r\n        <p>{{'options_tip.D' | translate}}</p>\r\n        <p>{{'options_tip.N' | translate}}</p>\r\n        <p>{{'options_tip.W' | translate}}</p>\r\n        <p>{{'options_tip.R' | translate}}</p>\r\n        <p>{{'options_tip.OMEGA' | translate}}</p>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/features/+sea/components/options-tip/options-tip.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/+sea/components/options-tip/options-tip.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OptionsTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsTipComponent", function() { return OptionsTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsTipComponent = /** @class */ (function () {
    function OptionsTipComponent() {
    }
    OptionsTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-tip',
            template: __webpack_require__(/*! ./options-tip.component.html */ "./src/app/features/+sea/components/options-tip/options-tip.component.html"),
            styles: [__webpack_require__(/*! ./options-tip.component.css */ "./src/app/features/+sea/components/options-tip/options-tip.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsTipComponent);
    return OptionsTipComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/sea-1d/sea-1d.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-1d/sea-1d.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-1\">\r\n    <form [formGroup]=\"form\">\r\n        <div class=\"options\">\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"n\" class=\"right\" placeholder=\"N\" step=\"1\" />\r\n                <mat-error *ngIf=\"form.controls.n.invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"km\" class=\"right\" placeholder=\"Km\" step=\"0.01\" />\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"merge\" class=\"right\" placeholder=\"Merge\" step=\"0.001\" />\r\n                <mat-error *ngIf=\"form.controls.merge.invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"w\" class=\"right\" placeholder=\"W\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" formControlName=\"oscilOmega\" class=\"right\" placeholder=\"OMEGA\" step=\"0.01\" />\r\n            </mat-form-field>\r\n        </div>\r\n    </form>\r\n    <br />\r\n    <button class=\"action-btn\" mat-raised-button color=\"warn\" title=\"Clear\" (click)=\"clear()\">C</button>\r\n    <button class=\"action-btn\" mat-raised-button color=\"accent\" title=\"Play/Pause\" (click)=\"play()\">\r\n        <mat-icon>{{playPauseIcon}}</mat-icon>\r\n    </button>\r\n    <span id=\"info\">&nbsp;{{'timer'| translate}}: {{sea?.chronos}}</span>\r\n    <div class=\"sea\">\r\n        <canvas #canvas1dsea id=\"canvas1\" width=\"{{options.n}}\" height=\"{{options.n}}\"></canvas>\r\n    </div>\r\n    <app-ruler></app-ruler>\r\n</div>\r\n\r\n<div class=\"container col-2\">\r\n    <app-options-tip-1d></app-options-tip-1d>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-1d/sea-1d.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-1d/sea-1d.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas1d {\n  background-color: #00000000; }\n\n.action-btn {\n  margin-right: 5px;\n  margin-bottom: 5px; }\n\n.sea {\n  margin-top: 10px; }\n\n#canvas1d {\n  position: absolute;\n  top: 500;\n  left: 500; }\n\n.col-1 {\n  display: table-cell;\n  width: 1200px;\n  padding: 10px;\n  margin: 10px; }\n\n.col-2 {\n  display: table-cell;\n  padding: 10px;\n  margin: 10px;\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS0xZC9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcK3NlYVxcY29tcG9uZW50c1xcc2VhLTFkXFxzZWEtMWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTLEVBQ1o7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLGNBQWE7RUFDYixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLGFBQVk7RUFDWixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbXBvbmVudHMvc2VhLTFkL3NlYS0xZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY2FudmFzMWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bntcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2Vhe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2NhbnZhczFkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAwO1xyXG4gICAgbGVmdDogNTAwO1xyXG59XHJcblxyXG4uY29sLTEge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-1d/sea-1d.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-1d/sea-1d.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sea1DComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea1DComponent", function() { return Sea1DComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_sea_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/sea.constant */ "./src/app/features/+sea/constants/sea.constant.ts");
/* harmony import */ var _services_sea_1d_operations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sea-1d-operations.service */ "./src/app/features/+sea/services/sea-1d-operations.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var Sea1DComponent = /** @class */ (function () {
    function Sea1DComponent(_seaOperationsService, _builder) {
        this._seaOperationsService = _seaOperationsService;
        this._builder = _builder;
        this.sea = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SEA"];
        this.playPauseIcon = 'play_arrow';
        this.options = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SEA_1D_OPTIONS"];
    }
    Sea1DComponent.prototype.ngOnInit = function () {
        this._seaOperationsService.sea = this.sea;
        this._initSea();
        this._seaOperationsService.addOscillator(0, this.options.oscilOmega, 1);
        this._buildForm();
        this._createValueChangesSubscription();
    };
    Sea1DComponent.prototype.ngOnDestroy = function () {
        this._stop();
        if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
        }
    };
    Object.defineProperty(Sea1DComponent.prototype, "context1d", {
        get: function () {
            return this.canvas1d.nativeElement.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    Sea1DComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    Sea1DComponent.prototype.clear = function () {
        clearInterval(this.timerId);
        this.timerId = 0;
        this.playPauseIcon = 'play_arrow';
        this._seaOperationsService.clearSea();
        this._initSea();
        this._seaOperationsService.addOscillator(0, this.options.oscilOmega, 1);
        this.draw();
    };
    Sea1DComponent.prototype.play = function () {
        var _this = this;
        if (this.timerId) {
            this._stop();
        }
        else {
            this.playPauseIcon = 'pause';
            this.timerId = setInterval(function () {
                _this._seaOperationsService.step();
                _this.draw();
            }, 50);
        }
    };
    Sea1DComponent.prototype.draw = function () {
        var V_SCALE = 30;
        var n05 = this.sea.n / 2 | 0;
        var ctx = this.context1d;
        ctx.clearRect(0, 0, this.sea.n, this.sea.n);
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([1, 1]);
        ctx.beginPath();
        // Ox axis
        ctx.moveTo(0, n05);
        ctx.lineTo(this.sea.n, n05);
        // merge v. line
        ctx.moveTo(this.sea.n - this.options.merge, 0);
        ctx.lineTo(this.sea.n - this.options.merge, this.sea.n);
        // osc.ampl lines
        var osc = this.sea.oscillators[0];
        if (osc) {
            var h = n05 - osc.amplitude * V_SCALE;
            ctx.moveTo(0, h);
            ctx.lineTo(this.sea.n, h);
            h = n05 + osc.amplitude * V_SCALE;
            ctx.moveTo(0, h);
            ctx.lineTo(this.sea.n, h);
        }
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        for (var col = 0; col < this.options.n; col += 2) {
            var h = this.sea.water[col].x;
            ctx.beginPath();
            ctx.moveTo(col, n05);
            ctx.lineTo(col, n05 - V_SCALE * h);
            ctx.stroke();
        }
    };
    Sea1DComponent.prototype.getErrorMessage = function () {
        if (this.form.controls.n.hasError('invalidArgument') && this.form.controls.merge.hasError('invalidArgument')) {
            return 'N must be greater than Merge';
        }
        else {
            this.form.controls.n.setErrors(null);
            this.form.controls.merge.setErrors(null);
        }
    };
    Sea1DComponent.prototype._initSea = function () {
        this._seaOperationsService.initSea(this.options);
    };
    Sea1DComponent.prototype._stop = function () {
        clearInterval(this.timerId);
        this.timerId = null;
        this.playPauseIcon = 'play_arrow';
    };
    Sea1DComponent.prototype._buildForm = function () {
        this.form = this._builder.group({
            n: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.options.n, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            km: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.options.km, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            merge: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.options.merge, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            w: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.options.w, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            oscilOmega: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.options.oscilOmega, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Sea1DComponent.prototype._createValueChangesSubscription = function () {
        var _this = this;
        this._valueChangesSubscription = this.form.valueChanges.subscribe(function (value) {
            if (value.n < value.merge) {
                _this.form.controls.n.setErrors({ invalidArgument: true });
                _this.form.controls.merge.setErrors({ invalidArgument: true });
                return;
            }
            _this.options = value;
            _this.clear();
            _this._seaOperationsService.addOscillator(0, _this.options.oscilOmega, 1);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas1dsea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Sea1DComponent.prototype, "canvas1d", void 0);
    Sea1DComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-1d',
            template: __webpack_require__(/*! ./sea-1d.component.html */ "./src/app/features/+sea/components/sea-1d/sea-1d.component.html"),
            styles: [__webpack_require__(/*! ./sea-1d.component.scss */ "./src/app/features/+sea/components/sea-1d/sea-1d.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sea_1d_operations_service__WEBPACK_IMPORTED_MODULE_3__["Sea1DOperationsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], Sea1DComponent);
    return Sea1DComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/sea-2d/sea-2d.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-2d/sea-2d.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#canvas1d {\r\n    background-color: #00000000;\r\n}\r\n\r\n#canvas2d {\r\n    background-color: cyan;\r\n}\r\n\r\n.action-btn{\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.sea{\r\n    margin-top: 10px;\r\n}\r\n\r\n#canvas1d, #canvas2d {\r\n    position: absolute;\r\n    top: 500;\r\n    left: 500;\r\n}\r\n\r\n.col {\r\n    display: table-cell;\r\n    width: 50%;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS0yZC9zZWEtMmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS0yZC9zZWEtMmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY2FudmFzMWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xyXG59XHJcblxyXG4jY2FudmFzMmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcclxufVxyXG5cclxuLmFjdGlvbi1idG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlYXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNjYW52YXMxZCwgI2NhbnZhczJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAwO1xyXG4gICAgbGVmdDogNTAwO1xyXG59XHJcblxyXG4uY29sIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-2d/sea-2d.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-2d/sea-2d.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <button class=\"action-btn\" mat-raised-button color=\"warn\" title=\"Clear\" (click)=\"clear()\">C</button>\r\n    <button class=\"action-btn\" mat-raised-button color=\"accent\" title=\"Play/Pause\" (click)=\"play()\">\r\n        <mat-icon>{{playPauseIcon}}</mat-icon>\r\n    </button>\r\n    <span id=\"info\">&nbsp;{{'timer'| translate}}: {{sea?.chronos}}</span>\r\n    <div class=\"col\">\r\n        <label>Kvis</label>\r\n        <mat-slider [(ngModel)]=\"options.kvisRange\" step=\"1\" min=\"1\" max=\"30\"></mat-slider>\r\n        <div class=\"sea\">\r\n            <canvas #canvas2d id=\"canvas2d\" width=\"{{options.n}}\" height=\"{{options.n}}\"\r\n                (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\r\n                (mousemove)=\"onMouseMove($event)\"></canvas>\r\n            <canvas #canvas1d id=\"canvas1d\" width=\"{{options.n}}\" height=\"{{options.n}}\"\r\n                (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\r\n                (mousemove)=\"onMouseMove($event)\"></canvas>\r\n        </div>\r\n    </div>\r\n    <div class=\"col\">\r\n        <app-sea3d-options (valueChanges)=\"handleSettings3DChanges($event)\"></app-sea3d-options>\r\n        <div class=\"sea\">\r\n            <canvas #canvas3d id=\"canvas3d\" width=\"{{options.n}}\" height=\"{{options.n}}\"></canvas>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div *ngIf=\"energy\">\r\n        <h2>{{'energy' | translate}}:</h2> {{energy}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-2d/sea-2d.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-2d/sea-2d.component.ts ***!
  \*********************************************************************/
/*! exports provided: Sea2DComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea2DComponent", function() { return Sea2DComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sea_2d_operations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sea-2d-operations.service */ "./src/app/features/+sea/services/sea-2d-operations.service.ts");
/* harmony import */ var _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/sea.constant */ "./src/app/features/+sea/constants/sea.constant.ts");
/* harmony import */ var _services_sea_draw_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sea-draw.service */ "./src/app/features/+sea/services/sea-draw.service.ts");
/* harmony import */ var _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/handlers.enum */ "./src/app/features/+sea/models/handlers.enum.ts");
/* harmony import */ var _services_sea_3d_operations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sea-3d-operations.service */ "./src/app/features/+sea/services/sea-3d-operations.service.ts");
/* harmony import */ var _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/isle-type.enum */ "./src/app/features/+sea/models/isle-type.enum.ts");








var Sea2DComponent = /** @class */ (function () {
    function Sea2DComponent(_sea2DOperationsService, _seaDrawService, _sea3DOperationsService) {
        this._sea2DOperationsService = _sea2DOperationsService;
        this._seaDrawService = _seaDrawService;
        this._sea3DOperationsService = _sea3DOperationsService;
        this.playPauseIcon = 'play_arrow';
        this.display3DParams = {};
        this._settings3D = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_3D_SETTINGS"];
        this._options = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA_2D_OPTIONS"];
        this._optionsZ = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA_3D_OPTIONS"];
    }
    Object.defineProperty(Sea2DComponent.prototype, "sea", {
        get: function () {
            return this._sea;
        },
        set: function (sea) {
            this._sea = sea;
            this._sea2DOperationsService.sea = this._sea;
            if (this._sea.id) {
                this.redrawSea();
            }
        },
        enumerable: true,
        configurable: true
    });
    Sea2DComponent.prototype.ngOnInit = function () {
        if (!this.sea.id) {
            this._initSea();
            this._init3DSea();
        }
    };
    Object.defineProperty(Sea2DComponent.prototype, "options", {
        get: function () { return this._options; },
        set: function (options) {
            Object.assign(this._options, options);
            this.redrawSea();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sea2DComponent.prototype, "handler", {
        get: function () { return this._handler; },
        set: function (handler) {
            this._handler = handler;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sea2DComponent.prototype, "context1d", {
        get: function () {
            return this.canvas1d.nativeElement.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sea2DComponent.prototype, "context2d", {
        get: function () {
            return this.canvas2d.nativeElement.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    Sea2DComponent.prototype.ngAfterViewInit = function () {
        this.canvasData = this.context2d.getImageData(0, 0, this.options.n, this.options.n);
        this.redrawSea();
        //this._draw3D();
    };
    Sea2DComponent.prototype.ngOnDestroy = function () {
        this._stop();
    };
    Sea2DComponent.prototype.clear = function () {
        this._sea2DOperationsService.clearSea();
        this._stop();
        this.redrawSea();
    };
    Sea2DComponent.prototype.redrawSea = function () {
        var _this = this;
        this._initSea();
        this._init3DSea();
        this.context2d.clearRect(0, 0, this.options.n, this.options.n);
        this.canvasData = this.context2d.getImageData(0, 0, this.options.n, this.options.n);
        this.draw();
        this._draw3D();
        this._sea.isles.forEach(function (i) {
            if (i.type === _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_7__["IsleType"].Line) {
                _this._handler = _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Line;
                _this.onMouseDown({ offsetX: i.column, offsetY: i.row });
                _this.onMouseMove({ offsetX: i.columnTo, offsetY: i.rowTo });
                _this.onMouseUp(null);
            }
            else if (i.type === _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_7__["IsleType"].Rectangle) {
                _this._handler = _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Rect;
                _this.onMouseDown({ offsetX: i.column, offsetY: i.row });
                _this.onMouseMove({ offsetX: i.column + i.width, offsetY: i.row + i.height });
                _this.onMouseUp(null);
            }
        });
        this.handler = _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Oscil;
    };
    Sea2DComponent.prototype.play = function () {
        var _this = this;
        if (this.timerId) {
            this._stop();
        }
        else {
            this.playPauseIcon = 'pause';
            this.timerId = setInterval(function () {
                _this._sea2DOperationsService.step(_this.options);
                _this.draw();
                _this._draw3D();
            }, 50);
        }
    };
    Sea2DComponent.prototype.onMouseDown = function (event) {
        switch (this._handler) {
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Line: {
                this.o = { type: _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_7__["IsleType"].Line, column: event.offsetX, row: event.offsetY, width: this._optionsZ.lineIsleWidth };
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Oscil: {
                var c = event.offsetX;
                var r = event.offsetY;
                if (this.sea.water[r][c].free) {
                    this._sea2DOperationsService.addOscillator(r, c, this.options.omega, 1);
                }
                this.draw();
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Rect: {
                this.o = { type: _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_7__["IsleType"].Rectangle, column: event.offsetX, row: event.offsetY, width: 0, height: 0 };
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Meter: {
                this.o = { column: event.offsetX, row: event.offsetY, width: 0, height: 0 };
                break;
            }
            default:
                break;
        }
    };
    Sea2DComponent.prototype.onMouseUp = function (event) {
        var _this = this;
        var _a, _b;
        switch (this._handler) {
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Line: {
                var isle = this.o;
                if (isle) {
                    if (isle.columnTo < isle.column) {
                        _a = [isle.column, isle.columnTo], isle.columnTo = _a[0], isle.column = _a[1];
                        _b = [isle.row, isle.rowTo], isle.rowTo = _b[0], isle.row = _b[1];
                    }
                    var canvasData = this.context1d.getImageData(0, 0, this.options.n, this.options.n);
                    this._sea2DOperationsService.getRocksFromCanvasData(canvasData);
                    var theSameIsle = this.sea.isles.filter(function (i) { return i.column === _this.o.column && i.row === _this.o.row
                        && i.columnTo === _this.o.columnTo && i.rowTo === _this.o.rowTo; });
                    if (!theSameIsle.length) {
                        this.sea.isles.push(this.o);
                    }
                    this.draw();
                    this._addIsle3D(isle);
                    this._draw3D();
                    var ctx = this.context1d;
                    ctx.clearRect(0, 0, this.options.n, this.options.n);
                    this.o = null;
                }
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Rect: {
                if (this.o) {
                    var canvasData = this.context1d.getImageData(0, 0, this.options.n, this.options.n);
                    this._sea2DOperationsService.getRocksFromCanvasData(canvasData);
                    var theSameIsle = this.sea.isles.filter(function (i) { return i.column === _this.o.column && i.row === _this.o.row
                        && i.height === _this.o.height && i.width === _this.o.width; });
                    if (!theSameIsle.length) {
                        this.sea.isles.push(this.o);
                    }
                    this.draw();
                    this._addIsle3D(this.o);
                    this._draw3D();
                    var ctx = this.context1d;
                    ctx.clearRect(0, 0, this.options.n, this.options.n);
                    this.o = null;
                }
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Meter: {
                if (this.o) {
                    this.energy = this._sea2DOperationsService.energyDensity(this.o);
                    var ctx = this.context1d;
                    ctx.clearRect(0, 0, this.options.n, this.options.n);
                    this.o = null;
                }
                break;
            }
            default:
                break;
        }
    };
    Sea2DComponent.prototype.onMouseMove = function (event) {
        switch (this._handler) {
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Line: {
                if (this.o) {
                    this.o.columnTo = event.offsetX;
                    this.o.rowTo = event.offsetY;
                    this.context = this.context1d;
                    this.context.strokeStyle = "white";
                    this.context.clearRect(0, 0, this.options.n, this.options.n);
                    this.context.lineWidth = this.o.width;
                    this.context.beginPath();
                    this.context.moveTo(this.o.column, this.o.row);
                    this.context.lineTo(this.o.columnTo, this.o.rowTo);
                    this.context.stroke();
                }
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Rect: {
                if (this.o) {
                    this.o.width = event.offsetX - this.o.column;
                    this.o.height = event.offsetY - this.o.row;
                    var ctx = this.context1d;
                    ctx.fillStyle = "lightblue";
                    ctx.clearRect(0, 0, this.options.n, this.options.n);
                    ctx.fillRect(this.o.column, this.o.row, this.o.width, this.o.height);
                }
                break;
            }
            case _models_handlers_enum__WEBPACK_IMPORTED_MODULE_5__["Handler"].Meter: {
                if (this.o) {
                    this.o.width = event.offsetX - this.o.column;
                    this.o.height = event.offsetY - this.o.row;
                    var ctx = this.context1d;
                    ctx.fillStyle = "gray";
                    ctx.clearRect(0, 0, this.options.n, this.options.n);
                    ctx.fillRect(this.o.column, this.o.row, this.o.width, this.o.height);
                }
                break;
            }
            default:
                break;
        }
    };
    Sea2DComponent.prototype.draw = function () {
        this.context = this.canvas2d.nativeElement.getContext('2d');
        this._seaDrawService.draw(this.sea, this.options, this.canvasData);
        this.context.putImageData(this.canvasData, 0, 0);
    };
    Sea2DComponent.prototype.draw1 = function () {
        var ctx = this.context1d;
        this._seaDrawService.draw1(this.sea, this.options, ctx);
    };
    Sea2DComponent.prototype.handleSettings3DChanges = function (settings) {
        this._optionsZ.cameraY = this.options.n * Math.sin(settings.cameraRange);
        this._optionsZ.cameraZ = this.options.n * Math.cos(settings.cameraRange);
        this._optionsZ.lightX = settings.lightRange * this.options.n / 2;
        this._draw3D();
    };
    Sea2DComponent.prototype._initSea = function () {
        this._sea2DOperationsService.initSea(this.options);
    };
    Sea2DComponent.prototype._stop = function () {
        clearInterval(this.timerId);
        this.timerId = null;
        this.playPauseIcon = 'play_arrow';
    };
    Sea2DComponent.prototype._draw3D = function () {
        this._seaDrawService.draw3D(this.sea, this.options, this._optionsZ, this.display3DParams);
    };
    Sea2DComponent.prototype._init3DSea = function () {
        this._sea3DOperationsService.init3DSea(this.options, this.display3DParams, this.canvas3d);
        this._optionsZ.cameraZ = this.options.n * Math.cos(this._settings3D.cameraRange);
        this._optionsZ.lightX = this._settings3D.lightRange * this.options.n / 2;
    };
    Sea2DComponent.prototype._addIsle3D = function (isle) {
        var mesh = this._sea3DOperationsService.getIsleMeshToAdd(isle, this.options);
        this.display3DParams.scene.add(mesh);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas1d'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Sea2DComponent.prototype, "canvas1d", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas2d'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Sea2DComponent.prototype, "canvas2d", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas3d'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Sea2DComponent.prototype, "canvas3d", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], Sea2DComponent.prototype, "sea", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], Sea2DComponent.prototype, "options", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], Sea2DComponent.prototype, "handler", null);
    Sea2DComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-2d',
            template: __webpack_require__(/*! ./sea-2d.component.html */ "./src/app/features/+sea/components/sea-2d/sea-2d.component.html"),
            styles: [__webpack_require__(/*! ./sea-2d.component.css */ "./src/app/features/+sea/components/sea-2d/sea-2d.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sea_2d_operations_service__WEBPACK_IMPORTED_MODULE_2__["Sea2DOperationsService"],
            _services_sea_draw_service__WEBPACK_IMPORTED_MODULE_4__["SeaDrawService"],
            _services_sea_3d_operations_service__WEBPACK_IMPORTED_MODULE_6__["Sea3DOperationsService"]])
    ], Sea2DComponent);
    return Sea2DComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/sea-handler/sea-handler.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-handler/sea-handler.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button ~ .mat-radio-button {\r\n    margin-left: 16px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS1oYW5kbGVyL3NlYS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7R0FDbkIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbXBvbmVudHMvc2VhLWhhbmRsZXIvc2VhLWhhbmRsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-handler/sea-handler.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-handler/sea-handler.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <mat-radio-group formControlName=\"handler\">\r\n        <mat-radio-button [value]=\"handlerEnum.Oscil\">{{'handler.oscil' | translate}}</mat-radio-button>\r\n        <mat-radio-button [value]=\"handlerEnum.Rect\">{{'handler.rect' | translate}}</mat-radio-button>\r\n        <mat-radio-button [value]=\"handlerEnum.Line\">{{'handler.line' | translate}}</mat-radio-button>\r\n        <mat-radio-button [value]=\"handlerEnum.Meter\">{{'handler.meter' | translate}}</mat-radio-button>\r\n    </mat-radio-group>\r\n</form>"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-handler/sea-handler.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-handler/sea-handler.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SeaHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaHandlerComponent", function() { return SeaHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_handlers_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/handlers.enum */ "./src/app/features/+sea/models/handlers.enum.ts");




var SeaHandlerComponent = /** @class */ (function () {
    function SeaHandlerComponent(_builder) {
        this._builder = _builder;
        this.handlerEnum = _models_handlers_enum__WEBPACK_IMPORTED_MODULE_3__["Handler"];
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._subscriptions = [];
    }
    SeaHandlerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._builder.group({
            handler: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.handler),
        });
        var valueChangesSubscription = this.form.valueChanges.subscribe(function (value) {
            _this.valueChanges.emit(value.handler);
        });
        this._subscriptions.push(valueChangesSubscription);
    };
    SeaHandlerComponent.prototype.ngOnDestroy = function () {
        this._subscriptions
            .filter(function (subcription) { return !!subcription; })
            .forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SeaHandlerComponent.prototype, "handler", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SeaHandlerComponent.prototype, "valueChanges", void 0);
    SeaHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-handler',
            template: __webpack_require__(/*! ./sea-handler.component.html */ "./src/app/features/+sea/components/sea-handler/sea-handler.component.html"),
            styles: [__webpack_require__(/*! ./sea-handler.component.css */ "./src/app/features/+sea/components/sea-handler/sea-handler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SeaHandlerComponent);
    return SeaHandlerComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/sea-options/sea-options.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-options/sea-options.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\r\n     text-align: right;\r\n}\r\n.options{\r\n    padding: 10px;\r\n    margin: 10px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS1vcHRpb25zL3NlYS1vcHRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxrQkFBa0I7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS1vcHRpb25zL3NlYS1vcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xyXG4gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5vcHRpb25ze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-options/sea-options.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-options/sea-options.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <div class=\"options\">\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" formControlName=\"d\" class=\"right\" placeholder=\"D\">\r\n            <mat-error *ngIf=\"form.controls.d.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" formControlName=\"n\" class=\"right\" placeholder=\"N\">\r\n            <mat-error *ngIf=\"form.controls.n.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" formControlName=\"omega\" class=\"right\" placeholder=\"OMEGA\" step=\"0.0001\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" formControlName=\"w\" class=\"right\" placeholder=\"W\" step=\"0.001\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" formControlName=\"r\" class=\"right\" placeholder=\"R\">\r\n        </mat-form-field>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-options/sea-options.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-options/sea-options.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SeaOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaOptionsComponent", function() { return SeaOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SeaOptionsComponent = /** @class */ (function () {
    function SeaOptionsComponent(_builder) {
        this._builder = _builder;
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this._subscriptions = [];
    }
    Object.defineProperty(SeaOptionsComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    SeaOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._builder.group({
            d: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._options.d, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            n: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this._options.n, disabled: false }),
            omega: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._options.omega),
            w: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._options.w),
            r: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._options.r),
        });
        var valueChangesSubscription = this.form.valueChanges.subscribe(function (value) {
            if (value.n % value.d !== 0) {
                _this.form.controls.n.setErrors({ notMultiple: true });
                _this.form.controls.d.setErrors({ notMultiple: true });
                return;
            }
            _this.valueChanges.emit(value);
        });
        this._subscriptions.push(valueChangesSubscription);
    };
    SeaOptionsComponent.prototype.ngOnDestroy = function () {
        this._subscriptions
            .filter(function (subcription) { return !!subcription; })
            .forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    SeaOptionsComponent.prototype.getErrorMessage = function () {
        if (this.form.controls.D.hasError('notMultiple') && this.form.controls.N.hasError('notMultiple')) {
            return 'N % D must be 0';
        }
        else {
            this.form.controls.D.setErrors(null);
            this.form.controls.N.setErrors(null);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SeaOptionsComponent.prototype, "options", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SeaOptionsComponent.prototype, "valueChanges", void 0);
    SeaOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-options',
            template: __webpack_require__(/*! ./sea-options.component.html */ "./src/app/features/+sea/components/sea-options/sea-options.component.html"),
            styles: [__webpack_require__(/*! ./sea-options.component.css */ "./src/app/features/+sea/components/sea-options/sea-options.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SeaOptionsComponent);
    return SeaOptionsComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-popup\">\r\n    <header class=\"confirm-popup-header no-title\">\r\n    </header>\r\n    <div class=\"confirm-popup-content\">\r\n        <span class=\"confirm-popup--timer\" *ngIf=\"false\">30</span>\r\n        <div class=\"confirm-popup--msg\">\r\n            <p>{{'actions.save_new' | translate}}</p>\r\n        </div>\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"name\" required placeholder=\"{{'project.name' | translate}}\">\r\n        </mat-form-field>\r\n        <div class=\"actions-footer\">\r\n            <button mat-raised-button class=\"save\" (click)=\"save()\">\r\n                    {{'actions.save' | translate}}\r\n            </button>\r\n            <button mat-raised-button class=\"cancel\" (click)=\"close()\">\r\n                    {{'actions.cancel' | translate}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n.actions-footer {\n  margin-top: 5px;\n  float: right; }\n\nbutton.save {\n  background-color: forestgreen;\n  margin-right: 10px; }\n\nbutton.cancel {\n  background-color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb21wb25lbnRzL3NlYS1zYXZlLWRpYWxvZy9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcK3NlYVxcY29tcG9uZW50c1xcc2VhLXNhdmUtZGlhbG9nXFxzZWEtc2F2ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGFBQVksRUFDZjs7QUFFRDtFQUVRLDhCQUE2QjtFQUM3QixtQkFBa0IsRUFDckI7O0FBSkw7RUFNUSx5QkFBd0IsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbXBvbmVudHMvc2VhLXNhdmUtZGlhbG9nL3NlYS1zYXZlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWN0aW9ucy1mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5idXR0b24geyAgICBcclxuICAgICYuc2F2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJi5jYW5jZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SeaSaveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaSaveDialogComponent", function() { return SeaSaveDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SeaSaveDialogComponent = /** @class */ (function () {
    function SeaSaveDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SeaSaveDialogComponent.prototype.ngOnInit = function () {
    };
    SeaSaveDialogComponent.prototype.save = function () {
        if (!this.name) {
            return;
        }
        this.dialogRef.close(this.name);
    };
    SeaSaveDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SeaSaveDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-save-dialog',
            template: __webpack_require__(/*! ./sea-save-dialog.component.html */ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.html"),
            styles: [__webpack_require__(/*! ./sea-save-dialog.component.scss */ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], SeaSaveDialogComponent);
    return SeaSaveDialogComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/components/sea3d-options/sea3d-options.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea3d-options/sea3d-options.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzLytzZWEvY29tcG9uZW50cy9zZWEzZC1vcHRpb25zL3NlYTNkLW9wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/+sea/components/sea3d-options/sea3d-options.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea3d-options/sea3d-options.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n    <label>&nbsp;{{'camera' | translate}}\r\n        <mat-slider id=\"cameraRange\" formControlName=\"cameraRange\" step=\"0.01\" min=\"-1.57\" max=\"0\" value=\"0\">\r\n        </mat-slider>\r\n    </label>\r\n    <label>&nbsp;{{'light' | translate}}\r\n        <mat-slider id=\"lightRange\" formControlName=\"lightRange\" step=\"0.1\" min=\"-5\" max=\"5\" value=\"-2\"></mat-slider>\r\n    </label>\r\n</form>"

/***/ }),

/***/ "./src/app/features/+sea/components/sea3d-options/sea3d-options.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/+sea/components/sea3d-options/sea3d-options.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Sea3DOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea3DOptionsComponent", function() { return Sea3DOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/sea.constant */ "./src/app/features/+sea/constants/sea.constant.ts");




var Sea3DOptionsComponent = /** @class */ (function () {
    function Sea3DOptionsComponent(_builder) {
        this._builder = _builder;
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this._subscriptions = [];
    }
    Sea3DOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._builder.group({
            cameraRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_3D_SETTINGS"].cameraRange),
            lightRange: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_3D_SETTINGS"].lightRange),
        });
        var valueChangesSubscription = this.form.valueChanges.subscribe(function (value) {
            _this.valueChanges.emit(value);
        });
        this._subscriptions.push(valueChangesSubscription);
    };
    Sea3DOptionsComponent.prototype.ngOnDestroy = function () {
        this._subscriptions
            .filter(function (subcription) { return !!subcription; })
            .forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Sea3DOptionsComponent.prototype, "valueChanges", void 0);
    Sea3DOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea3d-options',
            template: __webpack_require__(/*! ./sea3d-options.component.html */ "./src/app/features/+sea/components/sea3d-options/sea3d-options.component.html"),
            styles: [__webpack_require__(/*! ./sea3d-options.component.css */ "./src/app/features/+sea/components/sea3d-options/sea3d-options.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], Sea3DOptionsComponent);
    return Sea3DOptionsComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/constants/sea.constant.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/+sea/constants/sea.constant.ts ***!
  \*********************************************************/
/*! exports provided: DEFAULT_SEA_2D_OPTIONS, DEFAULT_SEA_3D_OPTIONS, DEFAULT_3D_SETTINGS, DEFAULT_SEA_1D_OPTIONS, DEFAULT_SEA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEA_2D_OPTIONS", function() { return DEFAULT_SEA_2D_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEA_3D_OPTIONS", function() { return DEFAULT_SEA_3D_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_3D_SETTINGS", function() { return DEFAULT_3D_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEA_1D_OPTIONS", function() { return DEFAULT_SEA_1D_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEA", function() { return DEFAULT_SEA; });
var DEFAULT_SEA_2D_OPTIONS = {
    d: 2,
    n: 500,
    omega: Number((0.2 / (2 * Math.PI)).toFixed(4)),
    w: 1,
    r: 0,
    W_ROCK: 1,
    kvisRange: 9
};
var DEFAULT_SEA_3D_OPTIONS = {
    cameraY: 0,
    cameraZ: 0,
    lightX: 0,
    lineIsleWidth: 1,
    meterRadius: 20,
};
var DEFAULT_3D_SETTINGS = {
    cameraRange: 0,
    lightRange: 0,
};
var DEFAULT_SEA_1D_OPTIONS = {
    n: 300,
    w: 1,
    km: 1,
    merge: 100,
    oscilOmega: 0.1,
};
var DEFAULT_SEA = {
    chronos: -1,
    oscillators: [],
    isles: [],
    water: [],
};


/***/ }),

/***/ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin:  10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb250YWluZXJzL3NlYS0xZC13YXZlcy9zZWEtMWQtd2F2ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbnRhaW5lcnMvc2VhLTFkLXdhdmVzL3NlYS0xZC13YXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogIDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-sea-1d></app-sea-1d>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Sea1DWavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea1DWavesComponent", function() { return Sea1DWavesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Sea1DWavesComponent = /** @class */ (function () {
    function Sea1DWavesComponent() {
    }
    Sea1DWavesComponent.prototype.ngOnInit = function () {
    };
    Sea1DWavesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-1d-waves',
            template: __webpack_require__(/*! ./sea-1d-waves.component.html */ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.html"),
            styles: [__webpack_require__(/*! ./sea-1d-waves.component.css */ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Sea1DWavesComponent);
    return Sea1DWavesComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project.id\">\r\n    <div class=\"container col-1\">\r\n        <h2>{{project.name}}</h2>\r\n        <app-sea-2d [options]=\"project.options\" [sea]=\"sea\" [handler]=\"handler\"></app-sea-2d>\r\n        <app-ruler></app-ruler>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!project.id\" class=\"center\">\r\n    <img src=\"../../../../../assets/images/wave.png\" />\r\n    <h2>{{'errors.view_not_shared_proj'  | translate }}</h2>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px; }\n\n.col-1 {\n  display: table-cell;\n  width: 1200px;\n  padding: 10px;\n  margin: 10px; }\n\n.center {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  height: 100px;\n  text-align: center;\n  border-radius: 3px; }\n\n.center img {\n  width: 100px;\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb250YWluZXJzL3NlYS0yZC13YXZlcy1zaGFyZWQvRDpcXFRhbnlhXFxOVVJFXFxEaXBsb21hXFxXYXZlc01vZGVsbGluZy9zcmNcXGFwcFxcZmVhdHVyZXNcXCtzZWFcXGNvbnRhaW5lcnNcXHNlYS0yZC13YXZlcy1zaGFyZWRcXHNlYS0yZC13YXZlcy1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQ2hCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixjQUFhO0VBQ2IsYUFBWSxFQUNmOztBQUVEO0VBRUUsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixPQUFNO0VBQ04sU0FBUTtFQUNSLFVBQVM7RUFDVCxRQUFPO0VBQ1AsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbnRhaW5lcnMvc2VhLTJkLXdhdmVzLXNoYXJlZC9zZWEtMmQtd2F2ZXMtc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogIDEwcHg7XHJcbn1cclxuLmNvbC0xIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNlbnRlclxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uY2VudGVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: Sea2DWavesSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea2DWavesSharedComponent", function() { return Sea2DWavesSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_handlers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/handlers.enum */ "./src/app/features/+sea/models/handlers.enum.ts");
/* harmony import */ var _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/sea.constant */ "./src/app/features/+sea/constants/sea.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Sea2DWavesSharedComponent = /** @class */ (function () {
    function Sea2DWavesSharedComponent(_route) {
        this._route = _route;
        this.handler = _models_handlers_enum__WEBPACK_IMPORTED_MODULE_2__["Handler"].Oscil;
        this.sea = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA"];
        this.project = {
            options: _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA_2D_OPTIONS"],
            sea: _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA"]
        };
    }
    Sea2DWavesSharedComponent.prototype.ngOnInit = function () {
        this.project = this._route.snapshot.data.project ? this._route.snapshot.data.project : this.project;
        this.sea = this.project ? this.project.sea : _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA"];
    };
    Sea2DWavesSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-2d-waves-shared',
            template: __webpack_require__(/*! ./sea-2d-waves-shared.component.html */ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.html"),
            styles: [__webpack_require__(/*! ./sea-2d-waves-shared.component.scss */ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], Sea2DWavesSharedComponent);
    return Sea2DWavesSharedComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin:  10px;\r\n}\r\n.col-1 {\r\n    display: table-cell;\r\n    width: 1200px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n.col-2 {\r\n    display: table-cell;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    width: 500px;\r\n}\r\n.project-name{\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvK3NlYS9jb250YWluZXJzL3NlYS0yZC13YXZlcy9zZWEtMmQtd2F2ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy8rc2VhL2NvbnRhaW5lcnMvc2VhLTJkLXdhdmVzL3NlYS0yZC13YXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogIDEwcHg7XHJcbn1cclxuLmNvbC0xIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNvbC0yIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5wcm9qZWN0LW5hbWV7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-1\">\r\n    <app-sea-options [options]=\"project.options\" (valueChanges)=\"handleOptionsChanges($event)\"></app-sea-options>\r\n    <app-sea-handler [handler]=\"handler\" (valueChanges)=\"handleHandlerChanges($event)\"></app-sea-handler>\r\n    <app-sea-2d [options]=\"project.options\" [sea]=\"sea\" [handler]=\"handler\"></app-sea-2d>\r\n    <app-ruler></app-ruler>\r\n    <div *ngIf=\"project.id\" class=\"project-name\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"{{'project.name' | translate}}\" [(ngModel)]=\"project.name\" required>\r\n        </mat-form-field>\r\n    </div>\r\n    <br />\r\n    <button mat-raised-button color=\"accent\" *ngIf=\"!project?.id && isAuthenticated\"\r\n        (click)=\"openSavePopup()\">{{'actions.save_new' | translate}}</button>\r\n    <button mat-raised-button color=\"accent\" *ngIf=\"project?.id\"\r\n        (click)=\"saveChanges()\">{{'actions.save_changes' | translate}}</button>\r\n    &nbsp;\r\n    <button class=\"action-btn btn\" mat-flat-button color=\"primary\" (click)=\"navigateToProjectsCreation()\"\r\n        *ngIf=\"sea.id\">\r\n        {{ 'actions.create' | translate }}\r\n    </button>\r\n</div>\r\n<div class=\"container col-2\">\r\n    <app-options-tip></app-options-tip>\r\n</div>"

/***/ }),

/***/ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Sea2DWavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea2DWavesComponent", function() { return Sea2DWavesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_handlers_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/handlers.enum */ "./src/app/features/+sea/models/handlers.enum.ts");
/* harmony import */ var _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/sea.constant */ "./src/app/features/+sea/constants/sea.constant.ts");
/* harmony import */ var _components_sea_save_dialog_sea_save_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sea-save-dialog/sea-save-dialog.component */ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.ts");
/* harmony import */ var src_app_features_project_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/features/+project/services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_layout_app_dialogs_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/layout/app/dialogs/alert-dialog/alert-dialog.component */ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var src_app_core_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");











var Sea2DWavesComponent = /** @class */ (function () {
    function Sea2DWavesComponent(_dialog, _projectService, _route, _router, _authService) {
        this._dialog = _dialog;
        this._projectService = _projectService;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this.isAuthenticated = false;
        this.handler = _models_handlers_enum__WEBPACK_IMPORTED_MODULE_2__["Handler"].Oscil;
        this.sea = _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA"];
        this.project = {
            options: _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA_2D_OPTIONS"],
            sea: _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA"]
        };
    }
    Sea2DWavesComponent.prototype.ngOnInit = function () {
        this.isAuthenticated = this._authService.isAuthenticated();
        this.project = this._route.snapshot.data.project ? this._route.snapshot.data.project : this.project;
        this.sea = this.project ? this.project.sea : _constants_sea_constant__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_SEA"];
    };
    Sea2DWavesComponent.prototype.handleOptionsChanges = function (options) {
        this.project.options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.project.options, options);
    };
    Sea2DWavesComponent.prototype.handleHandlerChanges = function (handler) {
        this.handler = handler;
    };
    Sea2DWavesComponent.prototype.openSavePopup = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_components_sea_save_dialog_sea_save_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SeaSaveDialogComponent"]);
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (name) { return !!name; }))
            .subscribe(function (name) {
            var project = {
                name: name,
                sea: _this._getSeaToPost(),
                options: _this.project.options
            };
            _this._projectService.create(project).subscribe();
        });
    };
    Sea2DWavesComponent.prototype.saveChanges = function () {
        var _this = this;
        if (!this.project.name) {
            return;
        }
        var project = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.project);
        project.sea = this._getSeaToPost();
        this._projectService.update(project).subscribe(function (result) {
            return _this._dialog.open(src_app_layout_app_dialogs_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogComponent"], {
                disableClose: true,
                data: {
                    message: "Project was updated successfully."
                },
            });
        });
    };
    Sea2DWavesComponent.prototype.navigateToProjectsCreation = function () {
        this._router.navigate(['/dashboard/sea/2d']);
    };
    Sea2DWavesComponent.prototype._getSeaToPost = function () {
        var seaToPost = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.sea);
        seaToPost.water = null;
        seaToPost.point = null;
        seaToPost.oscillators.forEach(function (o) { return o.sea = null; });
        return seaToPost;
    };
    Sea2DWavesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sea-2d-waves',
            template: __webpack_require__(/*! ./sea-2d-waves.component.html */ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.html"),
            styles: [__webpack_require__(/*! ./sea-2d-waves.component.css */ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            src_app_features_project_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_core_auth__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], Sea2DWavesComponent);
    return Sea2DWavesComponent;
}());



/***/ }),

/***/ "./src/app/features/+sea/models/handlers.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/+sea/models/handlers.enum.ts ***!
  \*******************************************************/
/*! exports provided: Handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handler", function() { return Handler; });
var Handler;
(function (Handler) {
    Handler[Handler["Line"] = 0] = "Line";
    Handler[Handler["Meter"] = 1] = "Meter";
    Handler[Handler["Oscil"] = 2] = "Oscil";
    Handler[Handler["Rect"] = 3] = "Rect";
})(Handler || (Handler = {}));


/***/ }),

/***/ "./src/app/features/+sea/models/isle-type.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/features/+sea/models/isle-type.enum.ts ***!
  \********************************************************/
/*! exports provided: IsleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsleType", function() { return IsleType; });
var IsleType;
(function (IsleType) {
    IsleType[IsleType["Oscillator"] = 0] = "Oscillator";
    IsleType[IsleType["Line"] = 1] = "Line";
    IsleType[IsleType["Rectangle"] = 2] = "Rectangle";
    IsleType[IsleType["Meter"] = 3] = "Meter";
})(IsleType || (IsleType = {}));


/***/ }),

/***/ "./src/app/features/+sea/routes/sea-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/+sea/routes/sea-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SeaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaRoutingModule", function() { return SeaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sea_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sea.routes */ "./src/app/features/+sea/routes/sea.routes.ts");
/* harmony import */ var _services_sea_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sea.resolver */ "./src/app/features/+sea/services/sea.resolver.ts");





var SeaRoutingModule = /** @class */ (function () {
    function SeaRoutingModule() {
    }
    SeaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_sea_routes__WEBPACK_IMPORTED_MODULE_3__["routes"]),
            ],
            providers: [_services_sea_resolver__WEBPACK_IMPORTED_MODULE_4__["SeaResolver"]]
        })
    ], SeaRoutingModule);
    return SeaRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/+sea/routes/sea.routes.ts":
/*!****************************************************!*\
  !*** ./src/app/features/+sea/routes/sea.routes.ts ***!
  \****************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers_sea_2d_waves_sea_2d_waves_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/sea-2d-waves/sea-2d-waves.component */ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.ts");
/* harmony import */ var _containers_sea_1d_waves_sea_1d_waves_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/sea-1d-waves/sea-1d-waves.component */ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.ts");
/* harmony import */ var _services_sea_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sea.resolver */ "./src/app/features/+sea/services/sea.resolver.ts");



var routes = [
    {
        path: '2d',
        children: [
            {
                path: '',
                component: _containers_sea_2d_waves_sea_2d_waves_component__WEBPACK_IMPORTED_MODULE_0__["Sea2DWavesComponent"],
            },
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        component: _containers_sea_2d_waves_sea_2d_waves_component__WEBPACK_IMPORTED_MODULE_0__["Sea2DWavesComponent"],
                        resolve: {
                            project: _services_sea_resolver__WEBPACK_IMPORTED_MODULE_2__["SeaResolver"],
                        }
                    },
                ]
            },
        ],
    },
    {
        path: '1d',
        component: _containers_sea_1d_waves_sea_1d_waves_component__WEBPACK_IMPORTED_MODULE_1__["Sea1DWavesComponent"],
    }
];


/***/ }),

/***/ "./src/app/features/+sea/sea.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/+sea/sea.module.ts ***!
  \*********************************************/
/*! exports provided: SeaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaModule", function() { return SeaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routes_sea_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/sea-routing.module */ "./src/app/features/+sea/routes/sea-routing.module.ts");
/* harmony import */ var _components_sea_2d_sea_2d_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sea-2d/sea-2d.component */ "./src/app/features/+sea/components/sea-2d/sea-2d.component.ts");
/* harmony import */ var _services_sea_2d_operations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/sea-2d-operations.service */ "./src/app/features/+sea/services/sea-2d-operations.service.ts");
/* harmony import */ var _services_sea_draw_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/sea-draw.service */ "./src/app/features/+sea/services/sea-draw.service.ts");
/* harmony import */ var _containers_sea_2d_waves_sea_2d_waves_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/sea-2d-waves/sea-2d-waves.component */ "./src/app/features/+sea/containers/sea-2d-waves/sea-2d-waves.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_sea_options_sea_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sea-options/sea-options.component */ "./src/app/features/+sea/components/sea-options/sea-options.component.ts");
/* harmony import */ var _components_sea_handler_sea_handler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sea-handler/sea-handler.component */ "./src/app/features/+sea/components/sea-handler/sea-handler.component.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/layout/app/layout.module */ "./src/app/layout/app/layout.module.ts");
/* harmony import */ var _containers_sea_1d_waves_sea_1d_waves_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/sea-1d-waves/sea-1d-waves.component */ "./src/app/features/+sea/containers/sea-1d-waves/sea-1d-waves.component.ts");
/* harmony import */ var _components_sea_1d_sea_1d_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sea-1d/sea-1d.component */ "./src/app/features/+sea/components/sea-1d/sea-1d.component.ts");
/* harmony import */ var _services_sea_1d_operations_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/sea-1d-operations.service */ "./src/app/features/+sea/services/sea-1d-operations.service.ts");
/* harmony import */ var _components_sea3d_options_sea3d_options_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sea3d-options/sea3d-options.component */ "./src/app/features/+sea/components/sea3d-options/sea3d-options.component.ts");
/* harmony import */ var _services_sea_3d_operations_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/sea-3d-operations.service */ "./src/app/features/+sea/services/sea-3d-operations.service.ts");
/* harmony import */ var _components_options_tip_options_tip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/options-tip/options-tip.component */ "./src/app/features/+sea/components/options-tip/options-tip.component.ts");
/* harmony import */ var _components_sea_save_dialog_sea_save_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sea-save-dialog/sea-save-dialog.component */ "./src/app/features/+sea/components/sea-save-dialog/sea-save-dialog.component.ts");
/* harmony import */ var _project_services_project_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../+project/services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var _components_options_tip_1d_options_tip_1d_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/options-tip-1d/options-tip-1d.component */ "./src/app/features/+sea/components/options-tip-1d/options-tip-1d.component.ts");
/* harmony import */ var _containers_sea_2d_waves_shared_sea_2d_waves_shared_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./containers/sea-2d-waves-shared/sea-2d-waves-shared.component */ "./src/app/features/+sea/containers/sea-2d-waves-shared/sea-2d-waves-shared.component.ts");























var SeaModule = /** @class */ (function () {
    function SeaModule() {
    }
    SeaModule_1 = SeaModule;
    SeaModule.forRoot = function () {
        return {
            ngModule: SeaModule_1,
            providers: [
                _services_sea_2d_operations_service__WEBPACK_IMPORTED_MODULE_5__["Sea2DOperationsService"],
                _services_sea_draw_service__WEBPACK_IMPORTED_MODULE_6__["SeaDrawService"],
                _services_sea_1d_operations_service__WEBPACK_IMPORTED_MODULE_15__["Sea1DOperationsService"],
                _services_sea_3d_operations_service__WEBPACK_IMPORTED_MODULE_17__["Sea3DOperationsService"],
                _project_services_project_service__WEBPACK_IMPORTED_MODULE_20__["ProjectService"],
            ],
        };
    };
    var SeaModule_1;
    SeaModule = SeaModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_layout_app_layout_module__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _routes_sea_routing_module__WEBPACK_IMPORTED_MODULE_3__["SeaRoutingModule"],
                src_app_core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            declarations: [
                _components_sea_2d_sea_2d_component__WEBPACK_IMPORTED_MODULE_4__["Sea2DComponent"],
                _containers_sea_2d_waves_sea_2d_waves_component__WEBPACK_IMPORTED_MODULE_7__["Sea2DWavesComponent"],
                _components_sea_options_sea_options_component__WEBPACK_IMPORTED_MODULE_9__["SeaOptionsComponent"],
                _components_sea_handler_sea_handler_component__WEBPACK_IMPORTED_MODULE_10__["SeaHandlerComponent"],
                _containers_sea_1d_waves_sea_1d_waves_component__WEBPACK_IMPORTED_MODULE_13__["Sea1DWavesComponent"],
                _components_sea_1d_sea_1d_component__WEBPACK_IMPORTED_MODULE_14__["Sea1DComponent"],
                _components_sea3d_options_sea3d_options_component__WEBPACK_IMPORTED_MODULE_16__["Sea3DOptionsComponent"],
                _components_options_tip_options_tip_component__WEBPACK_IMPORTED_MODULE_18__["OptionsTipComponent"],
                _components_sea_save_dialog_sea_save_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SeaSaveDialogComponent"],
                _components_options_tip_1d_options_tip_1d_component__WEBPACK_IMPORTED_MODULE_21__["OptionsTipComponent1D"],
                _containers_sea_2d_waves_shared_sea_2d_waves_shared_component__WEBPACK_IMPORTED_MODULE_22__["Sea2DWavesSharedComponent"],
            ],
            entryComponents: [
                _components_sea_save_dialog_sea_save_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SeaSaveDialogComponent"],
            ]
        })
    ], SeaModule);
    return SeaModule;
}());



/***/ }),

/***/ "./src/app/features/+sea/services/sea-1d-operations.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/+sea/services/sea-1d-operations.service.ts ***!
  \*********************************************************************/
/*! exports provided: Sea1DOperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea1DOperationsService", function() { return Sea1DOperationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Sea1DOperationsService = /** @class */ (function () {
    function Sea1DOperationsService() {
    }
    Object.defineProperty(Sea1DOperationsService.prototype, "sea", {
        get: function () {
            return this._sea;
        },
        set: function (sea) {
            this._sea = sea;
        },
        enumerable: true,
        configurable: true
    });
    Sea1DOperationsService.prototype.addOscillator = function (x, omega, ampl) {
        var osc = {
            x: x,
            omega: omega,
            amplitude: ampl,
            sea: this.sea
        };
        this._sea.oscillators.push(osc);
    };
    Sea1DOperationsService.prototype.removeOscillatorNear = function (x) {
        var i = this._sea.oscillators.findIndex(function (o) { return Math.hypot(o.x - x) < 5; });
        if (i !== -1)
            this._sea.oscillators.splice(i, 1);
    };
    Sea1DOperationsService.prototype.step = function () {
        this._sea.chronos++;
        // oscillators
        for (var _i = 0, _a = this._sea.oscillators; _i < _a.length; _i++) {
            var o = _a[_i];
            if (this._sea.water[o.x].free) {
                // o.next();
                this._sea.water[o.x].x =
                    Math.sin(o.omega * this._sea.chronos) * o.amplitude;
            }
        }
        // расчет ускорений
        var n = this._sea.n;
        // крайние точки
        this._sea.water[0].a = (this._sea.water[1].x - this._sea.water[0].x) * this._sea.water[0].km;
        this._sea.water[n - 1].a = (this._sea.water[n - 2].x - this._sea.water[n - 1].x) * this._sea.water[n - 1].km;
        // внутренние точки
        for (var r = 1; r < n - 1; r++) {
            this._sea.water[r].a = (this._sea.water[r - 1].x + this._sea.water[r + 1].x - this._sea.water[r].x * 2) * this._sea.water[r].km;
        }
        // расчет отклонений
        var reflection = 0;
        // крайние точки
        if (reflection) {
            // полное отражение от границ
            this._sea.water[0].x = this._sea.water[n - 1].x = 0;
        }
        else {
            // поглощение границами (неполное)
            this._sea.water[0].x = this._sea.water[1].x - this._sea.water[1].v;
            this._sea.water[n - 1].x = this._sea.water[n - 2].x - this._sea.water[n - 2].v;
            this._sea.water[0].v = 0;
            this._sea.water[n - 1].v = 0;
        }
        // все точки
        for (var r = 1; r < n - 1; r++) {
            if (!this._sea.water[r].free)
                continue;
            // change v
            this._sea.water[r].v += this._sea.water[r].a;
            // energy dissipation
            this._sea.water[r].v *= this._sea.water[r].w;
            // change x
            this._sea.water[r].x += this._sea.water[r].v;
        }
    };
    Sea1DOperationsService.prototype.initSea = function (options) {
        this.clearSea();
        for (var c = 0; c < options.n; c++) {
            this._sea.water.push({ free: true, w: options.w, km: options.km, x: 0, a: 0, v: 0, });
        }
        var w = options.w;
        for (var i = 0; i < options.merge; i++) {
            var r = options.n - options.merge + i;
            w -= 0.001;
            this._sea.water[r].w = w;
        }
        this._sea.point = { row: 0, column: 0 };
        this._sea.n = options.n;
    };
    Sea1DOperationsService.prototype.clearSea = function () {
        this._sea.chronos = -1;
        this.sea.water = [];
        this.sea.oscillators = [];
        this.sea.isles = [];
    };
    Sea1DOperationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Sea1DOperationsService);
    return Sea1DOperationsService;
}());



/***/ }),

/***/ "./src/app/features/+sea/services/sea-2d-operations.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/+sea/services/sea-2d-operations.service.ts ***!
  \*********************************************************************/
/*! exports provided: Sea2DOperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea2DOperationsService", function() { return Sea2DOperationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Sea2DOperationsService = /** @class */ (function () {
    function Sea2DOperationsService() {
    }
    Object.defineProperty(Sea2DOperationsService.prototype, "sea", {
        get: function () {
            return this._sea;
        },
        set: function (sea) {
            this._sea = sea;
        },
        enumerable: true,
        configurable: true
    });
    Sea2DOperationsService.prototype.addOscillator = function (r, c, omega, ampl) {
        var osc = {
            row: r,
            column: c,
            omega: omega,
            amplitude: ampl,
            sea: this.sea
        };
        this._sea.oscillators.push(osc);
    };
    Sea2DOperationsService.prototype.removeOscillatorNear = function (r, c) {
        var i = this._sea.oscillators.findIndex(function (o) { return Math.hypot(o.row - r, o.column - c) < 5; });
        if (i !== -1)
            this._sea.oscillators.splice(i, 1);
    };
    Sea2DOperationsService.prototype.getRocksFromCanvasData = function (canvasData) {
        var n = this._sea.n;
        for (var r = 0; r < n; r++) {
            for (var c = 0; c < n; c++) {
                var idx = (c + r * n) * 4;
                if (canvasData.data[idx] > 0) // red
                    this._sea.water[r][c].free = false;
            }
        }
    };
    Sea2DOperationsService.prototype.step = function (opts) {
        this._sea.chronos++;
        // oscillators
        for (var _i = 0, _a = this._sea.oscillators; _i < _a.length; _i++) {
            var o = _a[_i];
            if (this._sea.water[o.row][o.column].free) {
                // o.next();
                this._sea.water[o.row][o.column].x =
                    Math.sin(2 * Math.PI * o.omega * this.sea.chronos) * o.amplitude;
            }
        }
        // расчет сил
        var n = this._sea.n;
        for (var r = 1; r < n - 1; r++) {
            for (var c = 1; c < n - 1; c++) {
                this._sea.water[r][c].f = (this._sea.water[r - 1][c].x + this._sea.water[r + 1][c].x +
                    this._sea.water[r][c - 1].x + this._sea.water[r][c + 1].x - this._sea.water[r][c].x * 4) / 4;
            }
        }
        // расчет отклонений
        // точки на периметре
        for (var p = 1; p < n - 1; p++) {
            if (opts.r) {
                // полное отражение от границ
                this._sea.water[p][0].x = this._sea.water[p][n - 1].x = this._sea.water[0][p].x = this._sea.water[n - 1][p].x = 0;
            }
            else {
                // поглощение границами (неполное)
                this._sea.water[p][0].x = this._sea.water[p][1].x - this._sea.water[p][1].v;
                this._sea.water[p][n - 1].x = this._sea.water[p][n - 2].x - this._sea.water[p][n - 2].v;
                this._sea.water[0][p].x = this._sea.water[1][p].x - this._sea.water[1][p].v;
                this._sea.water[n - 1][p].x = this._sea.water[n - 2][p].x - this._sea.water[n - 2][p].v;
            }
        }
        // внутренние точки
        for (var r = 1; r < n - 1; r++) {
            for (var c = 1; c < n - 1; c++) {
                // change v
                this._sea.water[r][c].v += this._sea.water[r][c].f;
                this._sea.water[r][c].v *= opts.w;
                // change x
                this._sea.water[r][c].x += this._sea.water[r][c].v;
                // rock
                if (!this._sea.water[r][c].free) {
                    // this.w[r][c].x = 0;
                    // eat energy
                    // this._sea.water[r][c].v = 0;
                    // this._sea.water[r][c].x = (this._sea.water[r-1][c].x + this._sea.water[r+1][c].x + this._sea.water[r][c+1].x + this._sea.water[r][c-1].x) / 4;
                    this._sea.water[r][c].v *= opts.w * opts.W_ROCK;
                    this._sea.water[r][c].x += this._sea.water[r][c].v;
                }
            }
        }
    };
    Sea2DOperationsService.prototype.initSea = function (options) {
        this._sea.chronos = -1;
        this._sea.water = [];
        for (var r = 0; r < options.n; r++) {
            var row = [];
            for (var c = 0; c < options.n; c++) {
                row.push({ x: 0, f: 0, v: 0, free: 1 });
            }
            this._sea.water.push(row);
        }
        this._sea.point = { row: 0, column: 0 };
        this._sea.n = options.n;
    };
    Sea2DOperationsService.prototype.clearSea = function () {
        if (this._sea) {
            this._sea.chronos = -1;
            this._sea.water = [];
            this.sea.oscillators = [];
            this.sea.isles = [];
        }
    };
    // замер плотности энергии в области {column, row, w, h}
    Sea2DOperationsService.prototype.energyDensity = function (o) {
        var e = 0, n = 0;
        for (var r = o.row; r < o.row + o.width; r++) {
            for (var c = o.column; c < o.column + o.height; c++) {
                var dxr = this._sea.water[r][c].x - this._sea.water[r - 1][c].x;
                var dxc = this._sea.water[r][c].x - this._sea.water[r][c - 1].x;
                var v = this._sea.water[r][c].v;
                e += (Math.pow(dxr, 2) + Math.pow(dxc, 2)) / 4 + Math.pow(v, 2);
                n++;
            }
        }
        return e / n;
    };
    // замер энергии в целом
    Sea2DOperationsService.prototype.energyTotal = function () {
        var eP = 0, eC = 0;
        for (var r = 1; r < this._sea.n - 1; r++) {
            for (var c = 1; c < this._sea.n - 1; c++) {
                var dxr = this._sea.water[r][c].x - this._sea.water[r - 1][c].x;
                var dxc = this._sea.water[r][c].x - this._sea.water[r][c - 1].x;
                var v = this._sea.water[r][c].v;
                eP += (Math.pow(dxr, 2) + Math.pow(dxc, 2)) / 4;
                eC += Math.pow(v, 2);
            }
        }
        return { eP: eP, eC: eC };
    };
    Sea2DOperationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Sea2DOperationsService);
    return Sea2DOperationsService;
}());



/***/ }),

/***/ "./src/app/features/+sea/services/sea-3d-operations.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/+sea/services/sea-3d-operations.service.ts ***!
  \*********************************************************************/
/*! exports provided: Sea3DOperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sea3DOperationsService", function() { return Sea3DOperationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/isle-type.enum */ "./src/app/features/+sea/models/isle-type.enum.ts");




var Sea3DOperationsService = /** @class */ (function () {
    function Sea3DOperationsService() {
    }
    Sea3DOperationsService.prototype.init3DSea = function (options, displayParams, canvas3d) {
        displayParams.camera = new three__WEBPACK_IMPORTED_MODULE_2__["OrthographicCamera"](-options.n / 2, options.n / 2, options.n / 2, -options.n / 2, 1, 1000);
        displayParams.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        displayParams.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xbfd1e5);
        displayParams.light = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff, 1.1);
        displayParams.light.castShadow = true;
        displayParams.scene.add(displayParams.light);
        var attr = new three__WEBPACK_IMPORTED_MODULE_2__["BufferAttribute"](this.initVertices3D(options), 3);
        attr.dytamic = true;
        displayParams.geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BufferGeometry"]();
        displayParams.geometry.addAttribute('position', attr);
        var seaMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x00FFFF });
        var seaMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](displayParams.geometry, seaMaterial);
        seaMesh.receiveShadow = true;
        seaMesh.castShadow = true;
        displayParams.scene.add(seaMesh);
        // renderer
        displayParams.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ canvas: canvas3d.nativeElement });
        displayParams.renderer.setSize(options.n, options.n);
        displayParams.renderer.shadowMap.enabled = true;
    };
    Sea3DOperationsService.prototype.initVertices3D = function (options) {
        var d = options.d;
        var v = [];
        for (var r = 0; r < options.n - d; r += d) {
            for (var c = 0; c < options.n - d; c += d) {
                // 1
                v.push(c);
                v.push(r);
                v.push(0);
                // 2
                v.push(c + d);
                v.push(r);
                v.push(0);
                // 3
                v.push(c);
                v.push(r + d);
                v.push(0);
                //3
                v.push(c);
                v.push(r + d);
                v.push(0);
                // 2
                v.push(c + d);
                v.push(r);
                v.push(0);
                // 4
                v.push(c + d);
                v.push(r + d);
                v.push(0);
            }
        }
        return new Float32Array(v);
    };
    Sea3DOperationsService.prototype.getIsleMeshToAdd = function (isle, options) {
        var isleMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x00a000 });
        var mesh = null;
        if (isle.type === _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_3__["IsleType"].Rectangle) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](isle.width, isle.height, 4);
            mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, isleMaterial);
            mesh.position.x = isle.column + isle.width / 2;
            mesh.position.y = options.n - isle.row - isle.height / 2;
        }
        else if (isle.type === _models_isle_type_enum__WEBPACK_IMPORTED_MODULE_3__["IsleType"].Line) {
            var hypot = Math.hypot(isle.rowTo - isle.row, isle.columnTo - isle.column);
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](hypot, isle.width, 4);
            mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, isleMaterial);
            mesh.position.x = (isle.column + isle.columnTo) / 2;
            mesh.position.y = options.n - (isle.row + isle.rowTo) / 2;
            var alpha = Math.atan2(isle.rowTo - isle.row, isle.columnTo - isle.column);
            mesh.rotation.z = -alpha;
        }
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        return mesh;
    };
    Sea3DOperationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Sea3DOperationsService);
    return Sea3DOperationsService;
}());



/***/ }),

/***/ "./src/app/features/+sea/services/sea-draw.service.ts":
/*!************************************************************!*\
  !*** ./src/app/features/+sea/services/sea-draw.service.ts ***!
  \************************************************************/
/*! exports provided: SeaDrawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaDrawService", function() { return SeaDrawService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeaDrawService = /** @class */ (function () {
    function SeaDrawService() {
    }
    SeaDrawService.prototype.draw = function (sea, options, canvasData) {
        var ROCK_COLOR = 160; // 0xa0
        for (var r = 0; r < options.n; r++) {
            for (var c = 0; c < options.n; c++) {
                var idx = (c + r * options.n) * 4;
                if (!sea.water[r][c].free) {
                    // draw free
                    canvasData.data[idx] = 1; // red
                    canvasData.data[idx + 1] = ROCK_COLOR; // green
                    // canvasData.data[idx + 2] = 0;  // blue
                    canvasData.data[idx + 3] = 255; // alpha
                }
                else {
                    // define alpha
                    var color = sea.water[r][c].x * Math.pow(2, options.kvisRange) | 0;
                    var maxColor = 127;
                    if (color > maxColor)
                        color = maxColor;
                    if (color < -maxColor)
                        color = -maxColor;
                    color += 127;
                    // draw water
                    canvasData.data[idx] = 0; // red
                    // canvasData.data[idx + 1] = 0;  // green
                    canvasData.data[idx + 2] = 100; // blue
                    canvasData.data[idx + 3] = color; // alpha
                }
            }
        }
        // draw oscillators
        for (var _i = 0, _a = sea.oscillators; _i < _a.length; _i++) {
            var o = _a[_i];
            var idx = (o.column + o.row * options.n) * 4;
            // alpha
            canvasData.data[idx + 3] = 0;
            canvasData.data[idx + 3 + 4] = 0;
            canvasData.data[idx + 3 - 4] = 0;
            canvasData.data[idx + 3 + (4 * options.n)] = 0;
            canvasData.data[idx + 3 - (4 * options.n)] = 0;
        }
    };
    SeaDrawService.prototype.draw1 = function (sea, options, context1d) {
        var r = sea.point.row;
        var c = sea.point.column;
        var ctx = context1d;
        ctx.clearRect(0, 0, options.n, options.n);
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 0.1;
        ctx.strokeRect(0, r, options.n - 1, 0);
        ctx.strokeRect(c, 0, 0, options.n - 1);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        for (var c_1 = 0; c_1 < options.n; c_1++) {
            var h = sea.water[r][c_1].x * (Math.pow(2, options.kvisRange));
            ctx.moveTo(c_1, r);
            ctx.lineTo(c_1, r + 30 * h);
        }
        ctx.stroke();
    };
    SeaDrawService.prototype.draw3D = function (sea, options, optionsZ, displayParams) {
        var amp = 2 * options.kvisRange;
        var optz = optionsZ;
        var half = options.n / 2 | 0;
        displayParams.camera.position.set(half, half + optz.cameraY, optz.cameraZ);
        displayParams.camera.lookAt(half, half, 0);
        displayParams.light.position.set(optz.lightX, half, options.n);
        var v = displayParams.geometry.getAttribute('position').array;
        var d = options.d;
        var i = 0;
        for (var r_ = 0; r_ < options.n - d; r_ += d) {
            var r = options.n - d - r_;
            for (var c = 0; c < options.n - d; c += d) {
                // 1
                v[i] = c;
                v[i + 1] = r_;
                v[i + 2] = sea.water[r][c].x * amp;
                // 2
                v[i + 3] = c + d;
                v[i + 4] = r_;
                v[i + 5] = sea.water[r - d][c].x * amp;
                // 3
                v[i + 6] = c;
                v[i + 7] = r_ + d;
                v[i + 8] = sea.water[r][c + d].x * amp;
                // 3
                v[i + 9] = c;
                v[i + 10] = r_ + d;
                v[i + 11] = sea.water[r][c + d].x * amp;
                // 2
                v[i + 12] = c + d;
                v[i + 13] = r_;
                v[i + 14] = sea.water[r - d][c].x * amp;
                // 4
                v[i + 15] = c + d;
                v[i + 16] = r_ + d;
                v[i + 17] = sea.water[r - d][c + d].x * amp;
                i += 18;
            }
        }
        displayParams.geometry.getAttribute('position').needsUpdate = true;
        displayParams.geometry.computeVertexNormals();
        displayParams.renderer.render(displayParams.scene, displayParams.camera);
    };
    SeaDrawService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeaDrawService);
    return SeaDrawService;
}());



/***/ }),

/***/ "./src/app/features/+sea/services/sea-shared.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/+sea/services/sea-shared.resolver.ts ***!
  \***************************************************************/
/*! exports provided: SeaSharedResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaSharedResolver", function() { return SeaSharedResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _project_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+project/services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SeaSharedResolver = /** @class */ (function () {
    function SeaSharedResolver(_projectService) {
        this._projectService = _projectService;
    }
    SeaSharedResolver.prototype.resolve = function (route, state) {
        return this._projectService.getShared(route.params.id);
    };
    SeaSharedResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], SeaSharedResolver);
    return SeaSharedResolver;
}());



/***/ }),

/***/ "./src/app/features/+sea/services/sea.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/features/+sea/services/sea.resolver.ts ***!
  \********************************************************/
/*! exports provided: SeaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeaResolver", function() { return SeaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _project_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+project/services/project.service */ "./src/app/features/+project/services/project.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SeaResolver = /** @class */ (function () {
    function SeaResolver(_projectService) {
        this._projectService = _projectService;
    }
    SeaResolver.prototype.resolve = function (route, state) {
        return this._projectService.getProject(route.params.id);
    };
    SeaResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], SeaResolver);
    return SeaResolver;
}());



/***/ }),

/***/ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-popup error\">\r\n  <header class=\"confirm-popup-header no-title\">\r\n  </header>\r\n  <div class=\"confirm-popup-content\">\r\n    <span class=\"confirm-popup--timer\" *ngIf=\"false\">30</span>\r\n    <div class=\"confirm-popup--msg\">\r\n      <p>{{ options.message }}</p>\r\n    </div>\r\n    <div class=\"confirm-actions-footer\">\r\n      <button mat-raised-button (click)=\"close()\">\r\n        {{ options.buttonLabel }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hcHAvZGlhbG9ncy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: DEFAULT_ALERT_OPTIONS, AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ALERT_OPTIONS", function() { return DEFAULT_ALERT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _simple_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../simple-dialog */ "./src/app/layout/app/dialogs/simple-dialog.ts");




var DEFAULT_ALERT_OPTIONS = {
    message: '',
    buttonLabel: 'Ok',
};
var AlertDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AlertDialogComponent, _super);
    function AlertDialogComponent(dialogRef, options) {
        var _this = _super.call(this, dialogRef) || this;
        _this.isCLosableByEsc = true;
        _this._options = DEFAULT_ALERT_OPTIONS;
        _this.options = options;
        return _this;
    }
    Object.defineProperty(AlertDialogComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this.options.buttonLabel = options.buttonLabel ? options.buttonLabel : DEFAULT_ALERT_OPTIONS.buttonLabel;
            this.options.message = options.message ? options.message : DEFAULT_ALERT_OPTIONS.message;
        },
        enumerable: true,
        configurable: true
    });
    AlertDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AlertDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-dialog',
            template: __webpack_require__(/*! ./alert-dialog.component.html */ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.html"),
            styles: [__webpack_require__(/*! ./alert-dialog.component.scss */ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AlertDialogComponent);
    return AlertDialogComponent;
}(_simple_dialog__WEBPACK_IMPORTED_MODULE_3__["SimpleDialog"]));



/***/ }),

/***/ "./src/app/layout/app/dialogs/application-dialog.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/app/dialogs/application-dialog.ts ***!
  \**********************************************************/
/*! exports provided: ApplicationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDialog", function() { return ApplicationDialog; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");

var ApplicationDialog = /** @class */ (function () {
    function ApplicationDialog(_dialogRef) {
        var _this = this;
        this._dialogRef = _dialogRef;
        this.isCLosableByEsc = true;
        this.stopEnterPropagation = true;
        this._dialogRef.keydownEvents()
            .subscribe(function (event) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ESCAPE"]) {
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ESCAPE"]) {
                    _this.closeByEsc();
                }
                event.stopPropagation();
            }
        });
    }
    ApplicationDialog.prototype.closeByEsc = function () {
        if (this.isCLosableByEsc) {
            this.close();
        }
    };
    ApplicationDialog.prototype.close = function () {
        this._dialogRef.close();
    };
    ApplicationDialog.prototype.submit = function (data) {
        this._dialogRef.close(data);
    };
    ApplicationDialog.prototype.focusFirstFormField = function (hostElement) {
        var firstFormElement = this._findInitialFocusFormElement(hostElement);
        if (firstFormElement) {
            firstFormElement.focus();
        }
    };
    ApplicationDialog.prototype._findInitialFocusFormElement = function (hostElement) {
        return hostElement.nativeElement.querySelector('[cdkFocusInitial]');
    };
    return ApplicationDialog;
}());



/***/ }),

/***/ "./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wide-buttons > button {\r\n    min-width: 215px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FwcC9kaWFsb2dzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYXBwL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRlLWJ1dHRvbnMgPiBidXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAyMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-popup\" [class.wide]=\"context?.confirmCheckboxLabel\">\r\n  <header class=\"confirm-popup-header no-title\">\r\n      <h2>{{ context?.header }}</h2>\r\n  </header>\r\n  <div class=\"confirm-popup-content\">\r\n    <span class=\"confirm-popup--timer\" *ngIf=\"false\">30</span>\r\n    <div class=\"confirm-popup--msg\" [class.block-mode]=\"context?.confirmCheckboxLabel\">\r\n      <p>{{context?.title}}</p>\r\n      <div class=\"input-checkbox\" *ngIf=\"context?.confirmCheckboxLabel\">\r\n        <mat-checkbox (change)=\"checkConfirmation()\">{{ context?.confirmCheckboxLabel | translate }}</mat-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"confirm-actions-footer\" [ngClass]=\"context?.footerButtonsClass\">\r\n      <button [mat-dialog-close]=\"true\" cdkFocusInitial [ngClass]=\"context?.cancelText ? 'btn highlight' : 'btn primary'\"\r\n        appClickStopPropagation [disabled]=\"context?.confirmCheckboxLabel && !isChecked\">\r\n        {{context?.trueText ? context?.trueText : 'button_yes' | translate}}\r\n      </button>\r\n      <button [mat-dialog-close]=\"false\" [ngClass]=\"context?.cancelText ? 'btn primary' : 'btn highlight'\"\r\n        appClickStopPropagation>\r\n        {{context?.falseText? context?.falseText : 'button_no' | translate}}\r\n      </button>\r\n      <button *ngIf=\"context?.cancelText\" (click)=\"close()\" class=\"btn highlight\" appClickStopPropagation>\r\n        {{ context?.cancelText }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _simple_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../simple-dialog */ "./src/app/layout/app/dialogs/simple-dialog.ts");




var ConfirmDialogComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConfirmDialogComponent, _super);
    function ConfirmDialogComponent(dialogRef, context) {
        var _this = _super.call(this, dialogRef) || this;
        _this.context = context;
        _this.isCLosableByEsc = true;
        _this.isChecked = false;
        return _this;
    }
    ConfirmDialogComponent.prototype.checkConfirmation = function () {
        this.isChecked = !this.isChecked;
    };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}(_simple_dialog__WEBPACK_IMPORTED_MODULE_3__["SimpleDialog"]));



/***/ }),

/***/ "./src/app/layout/app/dialogs/dialogs.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/app/dialogs/dialogs.module.ts ***!
  \******************************************************/
/*! exports provided: DialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsModule", function() { return DialogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/layout/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "./src/app/layout/app/dialogs/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/layout/material/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var ENTRY_COMPONENTS = [
    _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"],
    _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"],
];
var COMPONENTS = [ENTRY_COMPONENTS];
var DialogsModule = /** @class */ (function () {
    function DialogsModule() {
    }
    DialogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
            declarations: COMPONENTS.slice(),
            entryComponents: [ENTRY_COMPONENTS],
            exports: COMPONENTS.slice(),
        })
    ], DialogsModule);
    return DialogsModule;
}());



/***/ }),

/***/ "./src/app/layout/app/dialogs/simple-dialog.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/app/dialogs/simple-dialog.ts ***!
  \*****************************************************/
/*! exports provided: SimpleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDialog", function() { return SimpleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _application_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-dialog */ "./src/app/layout/app/dialogs/application-dialog.ts");



var SimpleDialog = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SimpleDialog, _super);
    function SimpleDialog(dialogRef) {
        var _this = _super.call(this, dialogRef) || this;
        _this.dialogRef = dialogRef;
        _this.preventEnter = false;
        _this.dialogRef.keydownEvents()
            .subscribe(function (event) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"]) {
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"] || _this.preventEnter) {
                    event.preventDefault();
                }
                event.stopPropagation();
            }
        });
        return _this;
    }
    return SimpleDialog;
}(_application_dialog__WEBPACK_IMPORTED_MODULE_2__["ApplicationDialog"]));



/***/ }),

/***/ "./src/app/layout/app/expansion-menu/expansion-menu.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/app/expansion-menu/expansion-menu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expansion-menu\" [class.active]=\"opened\">\r\n    <strong class=\"expansion-menu-title\" (click)=\"toggle()\">\r\n        <span class=\"label\">{{ title }}</span>\r\n    </strong>\r\n    <div class=\"dashboard-sidebar-section-list\">\r\n        <ng-content select=\"[app-expansion-menu-item]\"></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/app/expansion-menu/expansion-menu.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/app/expansion-menu/expansion-menu.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 0 0 1rem;\n  outline: none; }\n\n.expansion-menu {\n  position: relative; }\n\n.expansion-menu.active:after {\n    content: '-'; }\n\n.expansion-menu:after {\n    content: '+';\n    font-size: 1.8rem;\n    color: #fff;\n    position: absolute;\n    top: 0;\n    right: 0;\n    pointer-events: none; }\n\n.expansion-menu-title {\n  transition: color 0.3s ease-in-out, border 0.3s ease-in-out;\n  font: 1.8rem/1.3 \"OpenSansRegular\", Arial, sans-serif;\n  cursor: pointer;\n  display: block;\n  color: #fff; }\n\n.expansion-menu-title:hover .label {\n    border-color: #fff; }\n\n.active .expansion-menu-title {\n    margin: 0 0 1.5rem; }\n\n.expansion-menu-title .label {\n    transition: border 0.3s ease-in-out;\n    border-bottom: 1px solid transparent;\n    display: inline-block; }\n\n.dashboard-sidebar-section-list {\n  display: none; }\n\n.active .dashboard-sidebar-section-list {\n    display: block; }\n\n::ng-deep app-expansion-menu.opened .expansion-menu .expansion-menu-title .label {\n  border-color: #fff; }\n\n::ng-deep .dashboard-sidebar-section-list .app-expansion-menu-item {\n  padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FwcC9leHBhbnNpb24tbWVudS9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxsYXlvdXRcXGFwcFxcZXhwYW5zaW9uLW1lbnVcXGV4cGFuc2lvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvYXBwL2V4cGFuc2lvbi1tZW51L0Q6XFxUYW55YVxcTlVSRVxcRGlwbG9tYVxcV2F2ZXNNb2RlbGxpbmcvc3JjXFxzdHlsZXNcXGJhc2VcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2FwcC9leHBhbnNpb24tbWVudS9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcc3R5bGVzXFxiYXNlXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFlckI7O0FBaEJEO0lBSVksYUFBWSxFQUNmOztBQUxUO0lBUVEsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixZQ05JO0lET0osbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IscUJBQW9CLEVBQ3ZCOztBQUVMO0VFNE1JLDREQUh3QztFRnZNeEMsc0RDekJzRDtFRDBCdEQsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsWUNsQlEsRURnQ1g7O0FBbkJEO0lBUVksbUJDckJBLEVEc0JIOztBQUVMO0lBQ0ksbUJBQWtCLEVBQ3JCOztBQWJMO0lFNE1JLG9DQUh3QztJRnpMcEMscUNBQW9DO0lBQ3BDLHNCQUFxQixFQUN4Qjs7QUFFTDtFQUNJLGNBQWEsRUFJaEI7O0FBSEc7SUFDSSxlQUFjLEVBQ2pCOztBQUVMO0VBTXdCLG1CQzdDWixFRDhDUzs7QUFQckI7RUFjWSxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYXBwL2V4cGFuc2lvbi1tZW51L2V4cGFuc2lvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2Jhc2UvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2Jhc2UvbWl4aW5zJztcclxuXHJcbjpob3N0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZXhwYW5zaW9uLW1lbnUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogJy0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJysnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxufVxyXG4uZXhwYW5zaW9uLW1lbnUtdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgYW5pbWF0ZShjb2xvciBib3JkZXIpO1xyXG4gICAgZm9udDogMS44cmVtLzEuMyAkZm9udC1mYW1pbHktcmVndWxhcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgLmxhYmVse1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlICZ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmxhYmVse1xyXG4gICAgICAgIEBpbmNsdWRlIGFuaW1hdGUoYm9yZGVyKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi5kYXNoYm9hcmQtc2lkZWJhci1zZWN0aW9uLWxpc3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC5hY3RpdmUgJntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG46Om5nLWRlZXB7XHJcbiAgICBhcHAtZXhwYW5zaW9uLW1lbnV7XHJcbiAgICAgICAgJi5vcGVuZWR7XHJcbiAgICAgICAgICAgIC5leHBhbnNpb24tbWVudXtcclxuICAgICAgICAgICAgICAgIC5leHBhbnNpb24tbWVudS10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAubGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmQtc2lkZWJhci1zZWN0aW9uLWxpc3R7XHJcbiAgICAgICAgLmFwcC1leHBhbnNpb24tbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGZvbnRzXHJcbiRiYXNlLWZvbnQtc2l6ZTogMS42cmVtO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ09wZW5TYW5zUmVndWxhcicsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ09wZW5TYW5zQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktbGlnaHQ6ICdPcGVuU2Fuc0xpZ2h0JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJG1haW4tY29sb3I6ICM2MDdkOGI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM0MzRhNTQ7XHJcbiRibHVlOiAjMjlhYWUxO1xyXG4kZGFyay1ibHVlOiAjMjc4MmE5O1xyXG4kbGlnaHQtYmx1ZTogI2Q4ZThlZjtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7IiwiLy8gTW9zdCB1c2VkIG1peGlucy5cclxuLy9cclxuLy8gTm90ZTogSWYgeW91IHVzZSBhIGZyYW1ld29yayAoYm9vdHN0cmFwLCB6dXJiIGV0Yy4pIHRoYXQgaW5jbHVkZXMgbWl4aW5zIHlvdSBjYW4gaW1wb3J0IHRoZW0gdG9vIG9yIHJlbW92ZSB0aGlzIGZpbGUuXHJcblxyXG5cclxuXHJcbi8vIHZlcnRpY2FsIGFsaWduIGVsIGluc2lkZSBwYXJlbnQgd2l0aCBmaXhlZCBoZWlnaHQvbWluLWhlaWdodFxyXG4vLyB1c2FnZSBcclxuLy8gaHRtbCAtIC5wYXJlbnQ+LmNoaWxkXHJcbi8vIHNjc3MgLSBAaW5jbHVkZSB2LWFsaWduO1xyXG4vLyAgICAgb3IgQGluY2x1ZGUgdi1hbGlnbigyNTBweCk7XHJcbi8vICAgICBvciBAaW5jbHVkZSB2LWFsaWduKDI1MHB4LCBib3R0b20sIGJlZm9yZSk7XHJcbi8vXHJcbkBtaXhpbiB2LWFsaWduKCR2YS1oZWlnaHQ6IDEwMCUsICR2YS1kaXJlY3Rpb246IG1pZGRsZSwgJHZhLXBzZXVkbzogYWZ0ZXIpIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAmOiN7JHZhLXBzZXVkb30ge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogJHZhLWRpcmVjdGlvbjtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIG1pbi1oZWlnaHQ6ICR2YS1oZWlnaHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+ICoge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAkdmEtZGlyZWN0aW9uO1xyXG4gICAgICBtYXgtd2lkdGg6IDk5JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gdmVydGljYWwgYWxpZ24gYSBwYWlyIG9mIGNoaWxkIGVsIGluc2lkZSBwYXJlbnRcclxuICAvLyB1c2FnZSBcclxuICAvLyBodG1sIC0gLnBvc3Q+LmltYWdlKy50ZXh0XHJcbiAgLy8gc2NzcyAtIEBpbmNsdWRlIHYtYWxpZ24tcGFpcihpbWFnZSwgdGV4dCk7XHJcbiAgLy8gICAgIG9yIEBpbmNsdWRlIHYtYWxpZ24tcGFpcihpbWFnZSwgdGV4dCwgYm90dG9tKTtcclxuICAvLyAgICAgb3IgQGluY2x1ZGUgdi1hbGlnbi1wYWlyKGltYWdlLCB0ZXh0LCBtaWRkbGUsIDIwMHB4KTtcclxuICAvL1xyXG4gIEBtaXhpbiB2LWFsaWduLXBhaXIoJGNoaWxkLW5hbWUxLCAkY2hpbGQtbmFtZTIsICR2YWxpZ246IG1pZGRsZSwgJHdpZHRoMTogYXV0bywgJHdpZHRoMjogYXV0byApIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgLiN7JGNoaWxkLW5hbWUxfXtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgdmVydGljYWwtYWxpZ246ICR2YWxpZ247XHJcbiAgICAgIHdpZHRoOiAkd2lkdGgxOyBcclxuICAgIH1cclxuICAgIC4jeyRjaGlsZC1uYW1lMn0ge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogJHZhbGlnbjtcclxuICAgICAgd2lkdGg6ICR3aWR0aDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vIHZlcnRpY2FsIGFsaWduIGVsXHJcbiAgLy8gdXNhZ2U6IEBpbmNsdWRlIHZlcnRpY2FsLWFsaWduLWVsO1xyXG4gIC8vXHJcbiAgQG1peGluIHZlcnRpY2FsLWFsaWduLWVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAvLy8gTWl4aW4gaGVscGluZyBkZWZpbmluZyBib3RoIGB3aWR0aGAgYW5kIGBoZWlnaHRgIHNpbXVsdGFuZW91c2x5LlxyXG4gIC8vL1xyXG4gIC8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcclxuICAvLy9cclxuICAvLy8gQGFjY2VzcyBwdWJsaWNcclxuICAvLy9cclxuICAvLy8gQHBhcmFtIHtMZW5ndGh9ICR3aWR0aCAtIEVsZW1lbnTigJlzIGB3aWR0aGBcclxuICAvLy8gQHBhcmFtIHtMZW5ndGh9ICRoZWlnaHQgKCR3aWR0aCkgLSBFbGVtZW504oCZcyBgaGVpZ2h0YFxyXG4gIC8vL1xyXG4gIC8vLyBAZXhhbXBsZSBzY3NzIC0gVXNhZ2VcclxuICAvLy8gICAuZm9vIHtcclxuICAvLy8gICAgIEBpbmNsdWRlIHNpemUoMTBlbSk7XHJcbiAgLy8vICAgfVxyXG4gIC8vL1xyXG4gIC8vLyAgIC5iYXIge1xyXG4gIC8vLyAgICAgQGluY2x1ZGUgc2l6ZSgxMDAlLCAxMGVtKTtcclxuICAvLy8gICB9XHJcbiAgLy8vXHJcbiAgLy8vIEBleGFtcGxlIGNzcyAtIENTUyBvdXRwdXRcclxuICAvLy8gICAuZm9vIHtcclxuICAvLy8gICAgIHdpZHRoOiAxMGVtO1xyXG4gIC8vLyAgICAgaGVpZ2h0OiAxMGVtO1xyXG4gIC8vLyAgIH1cclxuICAvLy9cclxuICAvLy8gICAuYmFyIHtcclxuICAvLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vLyAgICAgaGVpZ2h0OiAxMGVtO1xyXG4gIC8vLyAgIH1cclxuICAvLy9cclxuICBAbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCkge1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLy8vIGZvbnQtc21vdGhpbmdcclxuICAvLy8gQGluY2x1ZGUgZm9udC1zbW9vdGhpbmcob24pO1xyXG4gIC8vLyBAaW5jbHVkZSBmb250LXNtb290aGluZyhvZmYpO1xyXG4gIEBtaXhpbiBmb250LXNtb290aGluZygkdmFsdWU6IG9uKXtcclxuICAgIEBpZiAkdmFsdWUgPT0gb257XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgfVxyXG4gICAgQGVsc2V7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8vIEhpZGVzIHRoZSB0ZXh0IGluIGFuIGVsZW1lbnQsIGNvbW1vbmx5IHVzZWQgdG8gc2hvdyBhbiBpbWFnZS4gU29tZSBlbGVtZW50cyB3aWxsIG5lZWQgYmxvY2stbGV2ZWwgc3R5bGVzIGFwcGxpZWQuXHJcbiAgLy8vXHJcbiAgLy8vIEBsaW5rIGh0dHA6Ly96ZWxkbWFuLmNvbS8yMDEyLzAzLzAxL3JlcGxhY2luZy10aGUtOTk5OXB4LWhhY2stbmV3LWltYWdlLXJlcGxhY2VtZW50XHJcbiAgLy8vXHJcbiAgLy8vIEBleGFtcGxlIHNjc3MgLSBVc2FnZVxyXG4gIC8vLyAgIC5lbGVtZW50IHtcclxuICAvLy8gICAgIEBpbmNsdWRlIGhpZGUtdGV4dDtcclxuICAvLy8gICB9XHJcbiAgLy8vXHJcbiAgLy8vIEBleGFtcGxlIGNzcyAtIENTUyBPdXRwdXRcclxuICAvLy8gICAuZWxlbWVudCB7XHJcbiAgLy8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vLyAgICAgdGV4dC1pbmRlbnQ6IDEwMSU7XHJcbiAgLy8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC8vLyAgIH1cclxuICAvLy9cclxuICBAbWl4aW4gaGlkZS10ZXh0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWluZGVudDogMTAxJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vLyBDcmVhdGVzIGEgdmlzdWFsIHRyaWFuZ2xlLiBcclxuICAvLy8gTWl4aW4gdGFrZXMgKCRzaXplLCAkY29sb3IsICRkaXJlY3Rpb24pXHJcbiAgLy8vIFRoZSAkc2l6ZSBhcmd1bWVudCBjYW4gdGFrZSBvbmUgb3IgdHdvIHZhbHVlc+KAlHdpZHRoIGhlaWdodC5cclxuICAvLy8gVGhlICRjb2xvciBhcmd1bWVudCBjYW4gdGFrZSBvbmUgb3IgdHdvIFxyXG4gIC8vLyB2YWx1ZXPigJRmb3JlZ3JvdW5kLWNvbG9yIGJhY2tncm91bmQtY29sb3IuXHJcbiAgLy8vIFxyXG4gIC8vLyBAYXV0aG9yIGh0dHA6Ly9ib3VyYm9uLmlvL2RvY3MvI3RyaWFuZ2xlXHJcbiAgLy8vXHJcbiAgLy8vICRkaXJlY3Rpb246IFxyXG4gIC8vLyB1cCwgZG93biwgbGVmdCwgcmlnaHQsIHVwLXJpZ2h0LCB1cC1sZWZ0LCBkb3duLXJpZ2h0LCBkb3duLWxlZnRcclxuICAvLy8gQGV4YW1wbGUgc2NzcyAtIFVzYWdlXHJcbiAgLy8vICAgQGluY2x1ZGUgdHJpYW5nbGUoMTJweCwgZ3JheSwgZG93bik7XHJcbiAgLy8vICAgQGluY2x1ZGUgdHJpYW5nbGUoMTJweCA2cHgsIGdyYXkgYmx1ZSwgdXAtbGVmdCk7XHJcbiAgLy8vXHJcbiAgQG1peGluIHRyaWFuZ2xlKCRzaXplLCAkY29sb3IsICRkaXJlY3Rpb24pIHtcclxuICAgICR3aWR0aDogbnRoKCRzaXplLCAxKTtcclxuICAgICRoZWlnaHQ6IG50aCgkc2l6ZSwgbGVuZ3RoKCRzaXplKSk7XHJcbiAgICAkZm9yZWdyb3VuZC1jb2xvcjogbnRoKCRjb2xvciwgMSk7XHJcbiAgICAkYmFja2dyb3VuZC1jb2xvcjogaWYobGVuZ3RoKCRjb2xvcikgPT0gMiwgbnRoKCRjb2xvciwgMiksIHRyYW5zcGFyZW50KTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIFxyXG4gICAgQGlmICgkZGlyZWN0aW9uID09IHVwKSBvciAoJGRpcmVjdGlvbiA9PSBkb3duKSBvciAoJGRpcmVjdGlvbiA9PSByaWdodCkgb3IgKCRkaXJlY3Rpb24gPT0gbGVmdCkge1xyXG4gICAgICAkd2lkdGg6ICR3aWR0aCAvIDI7XHJcbiAgICAgICRoZWlnaHQ6IGlmKGxlbmd0aCgkc2l6ZSkgPiAxLCAkaGVpZ2h0LCAkaGVpZ2h0LzIpO1xyXG4gIFxyXG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSB1cCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGhlaWdodCBzb2xpZCAkZm9yZWdyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gcmlnaHQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItbGVmdDogJGhlaWdodCBzb2xpZCAkZm9yZWdyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItdG9wOiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBkb3duIHtcclxuICAgICAgICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci10b3A6ICRoZWlnaHQgc29saWQgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkd2lkdGggc29saWQgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkaGVpZ2h0IHNvbGlkICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci10b3A6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSB1cC1yaWdodCkgb3IgKCRkaXJlY3Rpb24gPT0gdXAtbGVmdCkge1xyXG4gICAgICBib3JkZXItdG9wOiAkaGVpZ2h0IHNvbGlkICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gIFxyXG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSB1cC1yaWdodCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgfSBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHVwLWxlZnQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGRvd24tcmlnaHQpIG9yICgkZGlyZWN0aW9uID09IGRvd24tbGVmdCkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAkaGVpZ2h0IHNvbGlkICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gIFxyXG4gICAgICBAaWYgJGRpcmVjdGlvbiA9PSBkb3duLXJpZ2h0IHtcclxuICAgICAgICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gZG93bi1sZWZ0IHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6ICR3aWR0aCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBpbnNldC11cCkge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yICRiYWNrZ3JvdW5kLWNvbG9yICRmb3JlZ3JvdW5kLWNvbG9yO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgJHdpZHRoO1xyXG4gICAgfSBAZWxzZSBpZiAoJGRpcmVjdGlvbiA9PSBpbnNldC1kb3duKSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGZvcmVncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogJGhlaWdodCAkd2lkdGg7XHJcbiAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGluc2V0LXJpZ2h0KSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJhY2tncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3IgJGJhY2tncm91bmQtY29sb3IgJGZvcmVncm91bmQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogJHdpZHRoICRoZWlnaHQ7XHJcbiAgICB9IEBlbHNlIGlmICgkZGlyZWN0aW9uID09IGluc2V0LWxlZnQpIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvciAkZm9yZWdyb3VuZC1jb2xvciAkYmFja2dyb3VuZC1jb2xvciAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAkd2lkdGggJGhlaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8vIEFuaW1hdGUgY3NzIHByb3BlcnRpZXNcclxuICAvLyB1c2FnZSBcclxuICAvLyBzY3NzIC0gQGluY2x1ZGUgYW5pbWF0ZShjb2xvcik7XHJcbiAgLy8gICAgIG9yIEBpbmNsdWRlIGFuaW1hdGUoY29sb3Igd2lkdGgpO1xyXG4gIC8vICAgICBvciBAaW5jbHVkZSBhbmltYXRlKGNvbG9yIHdpZHRoLCAxcywgbGluZWFyKTtcclxuICAvL1xyXG4gICRhbmltYXRpb24tc3BlZWQ6IDAuM3MgIWRlZmF1bHQ7XHJcbiAgXHJcbiAgQG1peGluIGFuaW1hdGUoJHByb3BlcnRpZXMsICRkdXJhdGlvbjogJGFuaW1hdGlvbi1zcGVlZCwgJGVhc2luZzogZWFzZS1pbi1vdXQpIHtcclxuICAgICRsaXN0OigpO1xyXG4gICAgQGVhY2ggJHByb3AgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAkc3RyOiAjeyRwcm9wfSAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHN0ciwgY29tbWEpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvbjogJGxpc3Q7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vLyBNaXhpbiBmb3Igc3R5bGluZyBmb3JtLXBsYWNlaG9sZGVyc1xyXG4gIC8vLyBAZXhhbXBsZSBzY3NzIC0gVXNhZ2VcclxuICAvLy8gICBAaW5jbHVkZSBwbGFjZWhvbGRlciB7XHJcbiAgLy8vICAgIGNvbG9yOiAjMzMzO1xyXG4gIC8vLyAgIH1cclxuICAvLy9cclxuICAvLy8gICBpbnB1dFt0eXBlPSd0ZXh0J10sXHJcbiAgLy8vICAgaW5wdXRbdHlwZT0ndGVsJ10sXHJcbiAgLy8vICAgaW5wdXRbdHlwZT0nZW1haWwnXSB7XHJcbiAgLy8vICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlciB7XHJcbiAgLy8vICAgICAgY29sb3I6IHJlZDtcclxuICAvLy8gICAgIH1cclxuICAvLy8gICB9XHJcbiAgXHJcbiAgQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50O31cclxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge29wYWNpdHk6IDE7IEBjb250ZW50O31cclxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7QGNvbnRlbnQ7fVxyXG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50O31cclxuICAgICYucGxhY2Vob2xkZXIge0Bjb250ZW50O31cclxuICB9XHJcbiAgXHJcbiAgLy8vIEZvbnQtc2l6ZSBweCB0byByZW0gY2FsY1xyXG4gIC8vLyBAZXhhbXBsZSBzY3NzIC0gVXNhZ2VcclxuICAvLy8gc2VsZWN0b3Ige1xyXG4gIC8vLyAgICBAaW5jbHVkZSByZW0tZm9udC1zaXplKDE2cHgpO1xyXG4gIC8vLyB9XHJcbiAgXHJcbiAgQG1peGluIHJlbS1mb250LXNpemUoJHB4U2l6ZSkge1xyXG4gICAgZm9udC1zaXplOiAkcHhTaXplO1xyXG4gICAgZm9udC1zaXplOiAoJHB4U2l6ZSAvIDEwcHgpICsgcmVtO1xyXG4gIH1cclxuXHJcbiAgQG1peGluIG1lZGlhLXNjcmVlbigkc2NyZWVuLXNpemUpIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc2l6ZSkgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBcclxuICBAbWl4aW4gbWVkaWEtbWluLXNjcmVlbigkc2NyZWVuLXNpemUpIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tc2l6ZSkgeyBAY29udGVudDsgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/app/expansion-menu/expansion-menu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/app/expansion-menu/expansion-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExpansionMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionMenuComponent", function() { return ExpansionMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpansionMenuComponent = /** @class */ (function () {
    function ExpansionMenuComponent() {
        this.title = '';
        this.opened = false;
    }
    ExpansionMenuComponent.prototype.ngOnInit = function () { };
    ExpansionMenuComponent.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExpansionMenuComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExpansionMenuComponent.prototype, "opened", void 0);
    ExpansionMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expansion-menu',
            template: __webpack_require__(/*! ./expansion-menu.component.html */ "./src/app/layout/app/expansion-menu/expansion-menu.component.html"),
            styles: [__webpack_require__(/*! ./expansion-menu.component.scss */ "./src/app/layout/app/expansion-menu/expansion-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExpansionMenuComponent);
    return ExpansionMenuComponent;
}());



/***/ }),

/***/ "./src/app/layout/app/expansion-menu/expansion-menu.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/app/expansion-menu/expansion-menu.module.ts ***!
  \********************************************************************/
/*! exports provided: ExpansionMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionMenuModule", function() { return ExpansionMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expansion_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expansion-menu.component */ "./src/app/layout/app/expansion-menu/expansion-menu.component.ts");



var COMPONENTS = [_expansion_menu_component__WEBPACK_IMPORTED_MODULE_2__["ExpansionMenuComponent"]];
var ExpansionMenuModule = /** @class */ (function () {
    function ExpansionMenuModule() {
    }
    ExpansionMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice(),
        })
    ], ExpansionMenuModule);
    return ExpansionMenuModule;
}());



/***/ }),

/***/ "./src/app/layout/app/layout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/app/layout.module.ts ***!
  \*********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "./src/app/layout/material/material.module.ts");
/* harmony import */ var _expansion_menu_expansion_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expansion-menu/expansion-menu.module */ "./src/app/layout/app/expansion-menu/expansion-menu.module.ts");
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/dialogs.module */ "./src/app/layout/app/dialogs/dialogs.module.ts");
/* harmony import */ var _ruler_ruler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ruler/ruler.component */ "./src/app/layout/app/ruler/ruler.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var MODULES = [
    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
    _expansion_menu_expansion_menu_module__WEBPACK_IMPORTED_MODULE_3__["ExpansionMenuModule"],
    _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["DialogsModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
];
var COMPONENTS = [_ruler_ruler_component__WEBPACK_IMPORTED_MODULE_5__["RulerComponent"]];
var PIPES = [];
var SERVICES = [];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: MODULES.slice(),
            declarations: COMPONENTS.slice(),
            exports: MODULES.concat(COMPONENTS),
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/app/ruler/ruler.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/app/ruler/ruler.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ruler-box\" cdkDrag>\r\n    <ul class=\"ruler\">\r\n        <li *ngFor=\"let number of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]\">{{number}}\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/app/ruler/ruler.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/app/ruler/ruler.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ruler, .ruler li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block; }\n\n/* IE6-7 Fix */\n\n.ruler, .ruler li {\n  *display: inline; }\n\n.ruler {\n  background: lightYellow;\n  box-shadow: 0 -1px 1em #ea9862 inset;\n  border-radius: 2px;\n  border: 1px solid #ccc;\n  color: #111;\n  margin: 0;\n  height: 2em;\n  padding-right: 1cm;\n  white-space: nowrap; }\n\n.ruler li {\n  width: 20px;\n  text-align: center;\n  position: relative;\n  text-shadow: 1px 1px #bec1ee; }\n\n.ruler li:before {\n  content: '';\n  position: absolute;\n  border-left: 1px solid #ccc;\n  height: .64em;\n  top: -.64em;\n  right: 1em; }\n\n.ruler-box {\n  font: 12px Ubuntu, Arial, sans-serif;\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FwcC9ydWxlci9EOlxcVGFueWFcXE5VUkVcXERpcGxvbWFcXFdhdmVzTW9kZWxsaW5nL3NyY1xcYXBwXFxsYXlvdXRcXGFwcFxccnVsZXJcXHJ1bGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3hCOztBQUNELGVBQWU7O0FBQ2Y7R0FDSSxnQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx3QkFBdUI7RUFDdkIscUNBQThDO0VBQzlDLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLFVBQVM7RUFDVCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLDZCQUF1QyxFQUMxQzs7QUFDRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsNEJBQTJCO0VBQzNCLGNBQWE7RUFDYixZQUFXO0VBQ1gsV0FBVSxFQUNiOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hcHAvcnVsZXIvcnVsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucnVsZXIsIC5ydWxlciBsaSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4vKiBJRTYtNyBGaXggKi9cclxuLnJ1bGVyLCAucnVsZXIgbGkge1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxufVxyXG4ucnVsZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRZZWxsb3c7XHJcbiAgICBib3gtc2hhZG93OiAwIC0xcHggMWVtIGhzbCgyNCwgNzYlLCA2NSUpIGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxY207XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5ydWxlciBsaSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGhzbCgyMzYsIDU5JSwgODQlKTtcclxufVxyXG4ucnVsZXIgbGk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgaGVpZ2h0OiAuNjRlbTtcclxuICAgIHRvcDogLS42NGVtO1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnJ1bGVyLWJveCB7XHJcbiAgICBmb250OiAxMnB4IFVidW50dSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/app/ruler/ruler.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/app/ruler/ruler.component.ts ***!
  \*****************************************************/
/*! exports provided: RulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulerComponent", function() { return RulerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulerComponent = /** @class */ (function () {
    function RulerComponent() {
    }
    RulerComponent.prototype.ngOnInit = function () { };
    RulerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruler',
            template: __webpack_require__(/*! ./ruler.component.html */ "./src/app/layout/app/ruler/ruler.component.html"),
            styles: [__webpack_require__(/*! ./ruler.component.scss */ "./src/app/layout/app/ruler/ruler.component.scss")]
        })
    ], RulerComponent);
    return RulerComponent;
}());



/***/ }),

/***/ "./src/app/layout/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");







var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatchModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"],
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: MATERIAL_MODULES.slice(),
            exports: MATERIAL_MODULES.slice(),
        })
    ], MaterialModule);
    return MaterialModule;
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

module.exports = __webpack_require__(/*! D:\Tanya\NURE\Diploma\WavesModelling\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map