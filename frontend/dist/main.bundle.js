webpackJsonp([1,4],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.baseUrl = "http://api.ugram.net";
    }
    ApiService.prototype.request = function (req) {
        req.url = this.baseUrl + req.url;
        if (req.header)
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](req.header);
        else
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        if (req.body)
            var body = req.body;
        else
            var body = null;
        headers.append('Content-Type', 'application/json');
        if (req.token)
            headers.append('Authorization', 'Bearer ' + req.token);
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            method: req.method,
            url: req.url,
            headers: headers,
            body: body,
        });
        if (req.data)
            request.body = req.data;
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](request))
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (res) { return res; });
    };
    ApiService.prototype.postWithFile = function (url, postData, files) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this._cookieService.getObject('token')['token']);
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
            var returnReponse = new Promise(function (resolve, reject) {
                _this.http.post(_this.baseUrl + url, formData, {
                    headers: headers
                }).subscribe(function (res) {
                    _this.responseData = res.json();
                    resolve(_this.responseData);
                });
            });
            return returnReponse;
        }
    };
    ApiService.prototype.getRoute = function () {
        return {
            pictures: {
                get_pictures: "/pictures",
                get_user_pictures: "/users/{user_id}/pictures",
                get_user_picture: "/users/{user_id}/pictures/{picture_id}",
                delete_user_picture: "/users/{user_id}/pictures/{picture_id}",
                update_user_picture: "/users/{user_id}/pictures/{picture_id}"
            },
            user: {
                get_user: "/users/{user_id}",
                get_users: "/users",
                update_user: "/users/{user_id}"
            }
        };
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === 'function' && _b) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/api.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEventManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalEventManagerService = (function () {
    function GlobalEventManagerService() {
        this._showNavBar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.showNavBarEmitter = this._showNavBar.asObservable();
    }
    GlobalEventManagerService.prototype.showNavBar = function (ifShow) {
        console.log('show', ifShow);
        this._showNavBar.next(ifShow);
    };
    GlobalEventManagerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GlobalEventManagerService);
    return GlobalEventManagerService;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/global-event-manager.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_pictures_pictures_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_users_users_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_globalEventManager_global_event_manager_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(_cookieService, router, picturesService, userService, config) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.config = config;
        this.images = [];
        this.page = 0;
        this.pageSize = 20;
        this.totalEntries = 0;
        if (!this._cookieService.get('token'))
            this.router.navigate(['/login']);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.getPicture();
    };
    HomeComponent.prototype.onPager = function (event) {
        document.body.scrollTop = 0;
        this.page = event - 1;
        this.getPicture();
    };
    HomeComponent.prototype.getPicture = function () {
        var _this = this;
        this.picturesService.get_pictures(this.pageSize, this.page).then(function (res) {
            _this.totalEntries = res['totalEntries'];
            _this.images = res['items'];
            _this.images = _this.picturesService.format_picture(_this.images);
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(764),
            styles: [__webpack_require__(754)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_app_services_pictures_pictures_service__["a" /* PicturesService */], __WEBPACK_IMPORTED_MODULE_5_app_services_users_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_6_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbPaginationConfig */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_pictures_pictures_service__["a" /* PicturesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_pictures_pictures_service__["a" /* PicturesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbPaginationConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbPaginationConfig */]) === 'function' && _e) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/home.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_globalEventManager_global_event_manager_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_cookieService, router, userService, globalEventsManager) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.globalEventsManager = globalEventsManager;
        this.token = "353aac98-0fed-42aa-afcf-e7228f06ed53";
        if (this._cookieService.get('token'))
            this.router.navigate(['/home']);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.who_im_i(this.token).then(function (data) {
            data['token'] = _this.token;
            _this._cookieService.putObject('token', data);
            _this.router.navigate(['/home']);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(765),
            styles: [__webpack_require__(755)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_4_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/login.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PictureComponent = (function () {
    function PictureComponent(_cookieService, router, picturesService, Route, usersService) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.Route = Route;
        this.usersService = usersService;
        this.tags = [];
        this.mentions = [];
        this.image = [];
        this.updated = 0;
        this.users = [];
    }
    PictureComponent.prototype.deleteImage = function () {
        var _this = this;
        this.picturesService.delete_picture(this.userId, this.imageId).then(function (res) {
            _this.router.navigate(['home']);
        });
    };
    PictureComponent.prototype.changeState = function () {
        this.updated = 1;
    };
    PictureComponent.prototype.updateImage = function () {
        var _this = this;
        console.log('tags', this.tags);
        console.log('mentions', this.mentions);
        var body = {
            description: this.image['description'],
            mentions: [],
            tags: []
        };
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i]['value'])
                body.tags.push(this.tags[i]['value']);
            else
                body.tags.push(this.tags[i]);
        }
        for (var i = 0; i < this.mentions.length; i++) {
            if (this.mentions[i]['value'])
                body.mentions.push(this.mentions[i]['value']);
            else
                body.mentions.push(this.mentions[i]);
        }
        this.picturesService.updateImage(this.userId, this.imageId, body).then(function (res) {
            _this.image = _this.picturesService.format_picture(res);
            _this.updated = 0;
        });
    };
    PictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._cookieService.getObject('token');
        console.log('user', this.user);
        this.Route.params.subscribe(function (params) {
            _this.userId = params['userid'];
            _this.imageId = params['id'];
            _this.picturesService.get_picture(_this.userId, _this.imageId).then(function (res) {
                console.log(res);
                _this.image = _this.picturesService.format_picture(res);
                _this.tags = _this.image['tags'];
                _this.mentions = _this.image['mentions'];
                _this.usersService.get_users(9999, 0).then(function (res) {
                    for (var i = 0; i < res['items'].length; i++) {
                        _this.users.push(res['items'][i]['id']);
                    }
                });
                console.log(_this.users);
            });
        });
    };
    PictureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-picture',
            template: __webpack_require__(767),
            styles: [__webpack_require__(757)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__["a" /* PicturesService */], __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__["a" /* PicturesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__["a" /* PicturesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _e) || Object])
    ], PictureComponent);
    return PictureComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/picture.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscoverComponent = (function () {
    function DiscoverComponent(router, userService, picturesService, Route) {
        this.router = router;
        this.userService = userService;
        this.picturesService = picturesService;
        this.Route = Route;
        this.users = [];
        this.images = [];
        this.page = 0;
        this.pageSize = 20;
        this.totalEntries = 0;
    }
    DiscoverComponent.prototype.onPager = function (event) {
        document.body.scrollTop = 0;
        this.page = event - 1;
        this.getUser();
    };
    DiscoverComponent.prototype.ngOnInit = function () {
    };
    DiscoverComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.get_users(this.pageSize, this.page).then(function (res) {
            console.log(res);
            _this.totalEntries = res['totalEntries'];
            _this.users = res['items'];
        });
    };
    DiscoverComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(768),
            styles: [__webpack_require__(758)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__["a" /* PicturesService */], __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__["a" /* PicturesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__["a" /* PicturesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], DiscoverComponent);
    return DiscoverComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/discover.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedComponent = (function () {
    function FeedComponent(
        //private _cookieService:CookieService,
        router, picturesService, userService, Route) {
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.Route = Route;
        this.images = [];
        this.user = [];
        this.nb_image = 0;
        this.page = 0;
        this.pageSize = 20;
        this.totalEntries = 0;
        this.idUser = "";
    }
    FeedComponent.prototype.onPager = function (event) {
        document.body.scrollTop = 0;
        this.getUserPicture();
    };
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Route.params.subscribe(function (params) {
            _this.idUser = params['userid'];
            console.log(_this.page);
            _this.getUserPicture();
        });
    };
    FeedComponent.prototype.getUserPicture = function () {
        var _this = this;
        this.userService.get_user(this.idUser).then(function (res) {
            _this.user = res;
            _this.picturesService.get_user_picture(_this.idUser, _this.pageSize, _this.page - 1).then(function (res) {
                _this.images = res['items'];
                _this.images = _this.picturesService.format_picture(_this.images);
                _this.nb_image = res['totalEntries'];
                _this.totalEntries = res['totalEntries'];
            });
        });
    };
    FeedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(769),
            styles: [__webpack_require__(759)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__["a" /* PicturesService */], __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__["a" /* PicturesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_pictures_pictures_service__["a" /* PicturesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], FeedComponent);
    return FeedComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/feed.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(_cookieService, router, picturesService, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.Route = Route;
        this.images = [];
        this.user = [];
        this.nb_image = 0;
        this.page = 0;
        this.pageSize = 20;
        this.totalEntries = 0;
    }
    ProfileComponent.prototype.onPager = function (event) {
        document.body.scrollTop = 0;
        this.getUserPicture();
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.getUserPicture = function () {
        var _this = this;
        this.userService.get_user(this._cookieService.getObject('token')['id']).then(function (res) {
            _this.user = res;
            _this.picturesService.get_user_picture(_this._cookieService.getObject('token')['id'], _this.pageSize, _this.page - 1).then(function (res) {
                _this.images = res['items'];
                _this.images = _this.picturesService.format_picture(_this.images);
                _this.nb_image = res['totalEntries'];
                _this.totalEntries = res['totalEntries'];
            });
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(770),
            styles: [__webpack_require__(760)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__["a" /* PicturesService */], __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__["a" /* PicturesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_pictures_pictures_service__["a" /* PicturesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/profile.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateComponent = (function () {
    function UpdateComponent(_cookieService, router, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.Route = Route;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.user = this._cookieService.getObject('token');
        console.log(this.user);
        this.UserSurName = this.user['lastName'];
        this.UserName = this.user['firstName'];
        this.UserTel = this.user['phoneNumber'];
        this.UserEmail = this.user['email'];
    };
    UpdateComponent.prototype.submitUpdate = function () {
        var _this = this;
        var userUpdate = {
            'lastName': this.UserSurName,
            'firstName': this.UserName,
            'phoneNumber': this.UserTel,
            'email': this.UserEmail
        };
        this.userService.update_user(this.user['id'], userUpdate, "353aac98-0fed-42aa-afcf-e7228f06ed53").then(function (res) {
            _this.router.navigate(['/profile']);
        });
    };
    UpdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(771),
            styles: [__webpack_require__(761)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], UpdateComponent);
    return UpdateComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/update.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_api_api_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadComponent = (function () {
    function UploadComponent(_cookieService, router, usersService, apiService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.usersService = usersService;
        this.apiService = apiService;
        this.Route = Route;
        this.tags = [];
        this.mentions = [];
        this.desc = "";
        this.users = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.get_users(9999, 0).then(function (res) {
            for (var i = 0; i < res['items'].length; i++) {
                _this.users.push(res['items'][i]['id']);
            }
            console.log(_this.users);
        });
    };
    UploadComponent.prototype.changeActionPic = function (event) {
        this.image = event;
    };
    UploadComponent.prototype.uploadPicture = function () {
        var _this = this;
        console.log("coucou2");
        var user_id = this._cookieService.getObject('token')['id'];
        var postData = {
            description: this.desc,
            mentions: [],
            tags: []
        };
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i]['value'])
                postData.tags.push(this.tags[i]['value']);
            else
                postData.tags.push(this.tags[i]);
        }
        for (var i = 0; i < this.mentions.length; i++) {
            if (this.mentions[i]['value'])
                postData.mentions.push(this.mentions[i]['value']);
            else
                postData.mentions.push(this.mentions[i]);
        }
        var url = this.apiService.getRoute().pictures.get_user_pictures;
        var url = url.replace("{user_id}", user_id);
        this.apiService.postWithFile(url, postData, this.image.target.files).then(function (result) {
            console.log(result);
            _this.router.navigate(['home']);
        });
    };
    UploadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(772),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_users_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_api_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_api_api_service__["a" /* ApiService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], UploadComponent);
    return UploadComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/upload.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_api_api_service__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(coreApiService) {
        this.coreApiService = coreApiService;
    }
    UsersService.prototype.get_users = function (page_size, page) {
        var _this = this;
        var req = {
            method: "GET",
            url: this.coreApiService.getRoute().user.get_users + '?page=' + page + '&perPage=' + page_size
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UsersService.prototype.get_user = function (user_id) {
        var _this = this;
        var url = this.coreApiService.getRoute().user.get_user;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "GET",
            url: url
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UsersService.prototype.update_user = function (user_id, user, token) {
        var _this = this;
        var url = this.coreApiService.getRoute().user.update_user;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "PUT",
            url: url,
            data: JSON.stringify(user),
            token: token
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UsersService.prototype.who_im_i = function (token) {
        var _this = this;
        var users;
        return new Promise(function (resolve, reject) {
            _this.get_users(999, 0).then(function (data) {
                for (var i = 0; i < data['totalEntries']; i++) {
                    console.log('u', data['items'][i]);
                    var user = {
                        "email": data['items'][i]['email'],
                        "firstName": data['items'][i]['firstName'],
                        "lastName": data['items'][i]['lastName'],
                        "phoneNumber": data['items'][i]['phoneNumber']
                    };
                    _this.update_user(data['items'][i]['id'], user, token).then(function (data) {
                        if (data['id'])
                            resolve(data);
                    });
                }
            });
        });
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_api_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_api_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/users.service.js.map

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 474;


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(595);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/main.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_picture_picture_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_feed_feed_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_users_update_update_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_users_profile_profile_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_users_upload_upload_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_users_discover_discover_component__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'picture/:userid/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_picture_picture_component__["a" /* PictureComponent */] },
    { path: 'user/:userid', component: __WEBPACK_IMPORTED_MODULE_5__components_users_feed_feed_component__["a" /* FeedComponent */] },
    { path: 'update', component: __WEBPACK_IMPORTED_MODULE_6__components_users_update_update_component__["a" /* UpdateComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_users_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_8__components_users_upload_upload_component__["a" /* UploadComponent */] },
    { path: 'discover', component: __WEBPACK_IMPORTED_MODULE_9__components_users_discover_discover_component__["a" /* DiscoverComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/app-routing.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(763),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/app.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_tag_input__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nav_nav_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_picture_picture_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_users_discover_discover_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_feed_feed_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_users_profile_profile_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_users_update_update_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_users_upload_upload_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_globalEventManager_global_event_manager_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_api_api_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_users_users_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_pictures_pictures_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_picture_picture_component__["a" /* PictureComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_users_discover_discover_component__["a" /* DiscoverComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_users_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_users_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_users_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_users_upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_nav_nav_component__["a" /* NavComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_tag_input__["TagInputModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */],
                __WEBPACK_IMPORTED_MODULE_19__services_api_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_20__services_users_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_21__services_pictures_pictures_service__["a" /* PicturesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/app.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_globalEventManager_global_event_manager_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(globalEventsManager, _cookieService, router) {
        this.globalEventsManager = globalEventsManager;
        this._cookieService = _cookieService;
        this.router = router;
        this.showNavBar = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.showMenu = function () {
        return (this._cookieService.get('token'));
    };
    NavComponent.prototype.logoutAction = function () {
        this._cookieService.removeAll();
        this.router.navigate(['/login']);
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(766),
            styles: [__webpack_require__(756)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_globalEventManager_global_event_manager_service__["a" /* GlobalEventManagerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavComponent);
    return NavComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/nav.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/environment.js.map

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "body {\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  background-color: #F1F5F8;\n}\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "#page-wrapper {\n  background-color: #FAFAFA;\n  padding: 0;\n  height: 100%;\n  padding-top: 40px;\n  overflow: auto; }\n  #page-wrapper .photo-container {\n    text-align: center;\n    padding: 20px; }\n    #page-wrapper .photo-container .photo-card {\n      padding: 20px;\n      width: 100%;\n      max-width: 600px;\n      display: inline-block;\n      background-color: #fff;\n      border: 1px solid #e6e6e6; }\n      #page-wrapper .photo-container .photo-card div.user {\n        height: 60px; }\n        #page-wrapper .photo-container .photo-card div.user ul {\n          padding: 10px; }\n          #page-wrapper .photo-container .photo-card div.user ul li {\n            list-style: none;\n            border: 0; }\n            #page-wrapper .photo-container .photo-card div.user ul li.name {\n              width: 100%;\n              float: left;\n              text-align: inherit; }\n              #page-wrapper .photo-container .photo-card div.user ul li.name a {\n                font-size: 18px;\n                color: #696D70;\n                text-decoration: none; }\n            #page-wrapper .photo-container .photo-card div.user ul li.date {\n              font-size: 12px;\n              color: #bdbdbd;\n              padding-top: 0; }\n      #page-wrapper .photo-container .photo-card div.img img {\n        width: 100%; }\n\n/*# sourceMappingURL=home.component.css.map */\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "#page-wrapper.login {\n  text-align: center; }\n  #page-wrapper.login .login-container {\n    width: 60%;\n    background-color: #fff;\n    padding: 40px;\n    display: inline-block;\n    border: 1px solid #e6e6e6; }\n\n/*# sourceMappingURL=login.component.css.map */\n"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 80px;\n  margin-bottom: 0;\n  background-color: #fff; }\n  .navbar .navbar-header .navbar-brand {\n    width: 150px;\n    height: auto; }\n  .navbar .navbar-collapse .navbar-right li {\n    height: 78px; }\n    .navbar .navbar-collapse .navbar-right li a {\n      line-height: 48px;\n      font-size: 15px; }\n    .navbar .navbar-collapse .navbar-right li:last-child {\n      border-right: 0; }\n\n/*# sourceMappingURL=nav.component.css.map */\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "#page-wrapper .container {\n  margin-left: 20px;\n  padding: 20px; }\n  #page-wrapper .container .image img {\n    max-width: 100%; }\n  #page-wrapper .container .infos ul li {\n    list-style: none; }\n    #page-wrapper .container .infos ul li.user {\n      font-size: 24px;\n      color: #696D70;\n      text-decoration: none;\n      width: 100%;\n      text-align: initial; }\n    #page-wrapper .container .infos ul li.time {\n      color: #bdbdbd;\n      border: 0; }\n\n/*# sourceMappingURL=picture.component.css.map */\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "#page-wrapper .discover {\n  text-align: center;\n  width: 100%; }\n  #page-wrapper .discover .discover-container {\n    background-color: #fff;\n    border: 1px solid #e6e6e6;\n    width: 600px;\n    display: inline-block; }\n    #page-wrapper .discover .discover-container .discover-feed {\n      padding: 20px;\n      list-style: none;\n      border-bottom: 1px solid #e6e6e6; }\n      #page-wrapper .discover .discover-container .discover-feed li {\n        overflow: hidden;\n        list-style: none; }\n        #page-wrapper .discover .discover-container .discover-feed li.infos {\n          text-align: initial; }\n          #page-wrapper .discover .discover-container .discover-feed li.infos ul {\n            padding: 0;\n            list-style: none; }\n            #page-wrapper .discover .discover-container .discover-feed li.infos ul li {\n              list-style: none; }\n              #page-wrapper .discover .discover-container .discover-feed li.infos ul li:first-child {\n                font-weight: bold; }\n              #page-wrapper .discover .discover-container .discover-feed li.infos ul li:last-child {\n                font-size: 13px; }\n        #page-wrapper .discover .discover-container .discover-feed li.images {\n          padding: 3px; }\n          #page-wrapper .discover .discover-container .discover-feed li.images ul {\n            padding: 0; }\n            #page-wrapper .discover .discover-container .discover-feed li.images ul li {\n              height: 160px;\n              overflow: hidden;\n              display: inline-block; }\n              #page-wrapper .discover .discover-container .discover-feed li.images ul li img {\n                width: 300px;\n                margin-left: -50%; }\n      #page-wrapper .discover .discover-container .discover-feed:first-child {\n        text-align: start;\n        font-weight: bold;\n        color: #999; }\n\n/*# sourceMappingURL=discover.component.css.map */\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "#page-wrapper .header_profile {\n  text-align: center; }\n  #page-wrapper .header_profile img {\n    height: 6em; }\n  #page-wrapper .header_profile .main_profile1 {\n    margin: -90px auto 0;\n    padding-bottom: 20px;\n    background-color: #FAFAFA;\n    text-align: center; }\n    #page-wrapper .header_profile .main_profile1 .profile-name {\n      padding-top: 90px; }\n    #page-wrapper .header_profile .main_profile1 .update {\n      background-color: #3498db;\n      color: #fff;\n      font-size: 15px;\n      border: 0;\n      border-radius: 0; }\n      #page-wrapper .header_profile .main_profile1 .update:hover {\n        color: #3498db;\n        background-color: #fff;\n        border: 1px solid #3498db; }\n    #page-wrapper .header_profile .main_profile1 h2 {\n      margin-top: 0;\n      font-size: 15px; }\n    #page-wrapper .header_profile .main_profile1 .container {\n      margin-left: 0;\n      display: inline-block; }\n      #page-wrapper .header_profile .main_profile1 .container > .btn {\n        width: 10% !important; }\n#page-wrapper .row {\n  width: 70%;\n  display: inline-block; }\n  #page-wrapper .row div .thumbnail {\n    height: 350px;\n    width: 350px;\n    overflow: hidden;\n    border: none;\n    display: inline-block;\n    padding: 0;\n    border-radius: 0; }\n    #page-wrapper .row div .thumbnail .img img {\n      margin-left: -50%;\n      width: 600px; }\n\n/*# sourceMappingURL=feed.component.css.map */\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "#page-wrapper .header_profile {\n  text-align: center; }\n  #page-wrapper .header_profile img {\n    height: 6em; }\n  #page-wrapper .header_profile .main_profile1 {\n    margin: -90px auto 0;\n    padding-bottom: 20px;\n    background-color: #FAFAFA;\n    text-align: center; }\n    #page-wrapper .header_profile .main_profile1 .profile-name {\n      padding-top: 90px; }\n    #page-wrapper .header_profile .main_profile1 .update {\n      background-color: #3498db;\n      color: #fff;\n      font-size: 15px;\n      border: 0;\n      border-radius: 0; }\n      #page-wrapper .header_profile .main_profile1 .update:hover {\n        color: #3498db;\n        background-color: #fff;\n        border: 1px solid #3498db; }\n    #page-wrapper .header_profile .main_profile1 h2 {\n      margin-top: 0;\n      font-size: 15px; }\n    #page-wrapper .header_profile .main_profile1 .container {\n      margin-left: 0;\n      display: inline-block; }\n      #page-wrapper .header_profile .main_profile1 .container > .btn {\n        width: 10% !important; }\n#page-wrapper .row {\n  width: 70%;\n  display: inline-block; }\n  #page-wrapper .row div .thumbnail {\n    height: 350px;\n    width: 350px;\n    overflow: hidden;\n    border: none;\n    display: inline-block;\n    padding: 0;\n    border-radius: 0; }\n    #page-wrapper .row div .thumbnail .img img {\n      margin-left: -50%;\n      width: 600px; }\n\n/*# sourceMappingURL=profile.component.css.map */\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "#page-wrapper .update-container {\n  text-align: center; }\n  #page-wrapper .update-container .update {\n    background-color: #fff;\n    border: 1px solid #e6e6e6;\n    padding: 20px;\n    display: inline-block;\n    width: 600px; }\n    #page-wrapper .update-container .update .form-group {\n      text-align: start; }\n    #page-wrapper .update-container .update h3 {\n      margin: 0;\n      font-size: 15px;\n      color: #999;\n      margin-bottom: 20px; }\n\n/*# sourceMappingURL=update.component.css.map */\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "#page-wrapper .upload-container {\n  text-align: center; }\n  #page-wrapper .upload-container .upload {\n    background-color: #fff;\n    border: 1px solid #e6e6e6;\n    padding: 20px;\n    display: inline-block;\n    width: 600px; }\n    #page-wrapper .upload-container .upload .form-group .inputfile {\n      width: 0.1px;\n      height: 0.1px;\n      opacity: 0;\n      overflow: hidden;\n      position: absolute;\n      z-index: -1; }\n    #page-wrapper .upload-container .upload .form-group .inputfile + label {\n      padding: 10px;\n      color: white;\n      background-color: #337ab7;\n      display: inline-block;\n      cursor: pointer; }\n\n/*# sourceMappingURL=upload.component.css.map */\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <navbar></navbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"public_photos\">\n    <div class=\"photo-container col-md-12\" *ngFor=\"let image of images;\">\n      <!--<a [routerLink]=\"['/picture/:userid/:id']\" [queryParams]=\"{'userid': image.userId, 'id': image.id}\">-->\n      <div class=\"photo-card\">\n        <div class=\"img\"> <a routerLink=\"/picture/{{image.userId}}/{{image.id}}\"><img src=\"{{image.url}}\" width=\"600px\"></a></div>\n        <div class=\"user\">\n          <ul>\n            <li class=\"name\"><a href=\"#\">{{image.userId}}</a></li>\n            <li class=\"date\">{{image.timeSince}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <ngb-pagination style=\"text-align: center\" (pageChange)=\"onPager($event)\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [collectionSize]=\"totalEntries\" [(pageSize)]=\"pageSize\" [(page)]=\"page\"></ngb-pagination>\n  </div>\n</div>\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\" class=\"login\">\n  <div class=\"login-container\">\n    <h1>UGRAM</h1>\n    <div class=\"form-group\">\n      <label for=\"token\">Token</label>\n      <input value=\"353aac98-0fed-42aa-afcf-e7228f06ed53\" [(ngModel)]=\"token\" type=\"text\" class=\"form-control\" id=\"token\" placeholder=\"Token\">\n    </div>\n    <button (click)=\"login()\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"showMenu()\" class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <img class=\"navbar-brand\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png\">\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a routerLink=\"/home/\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> FEED</a>\n        </li>\n        <li>\n          <a routerLink=\"/discover/\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> EXPLORE</a>\n        </li>\n        <!--<li>\n          <a href=\"#\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i> DIRECT</a>\n        </li>-->\n        <li>\n          <a routerLink=\"/upload/\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> UPLOAD</a>\n        </li>\n        <li>\n          <a routerLink=\"/profile/\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> PROFILE</a>\n        </li>\n        <li>\n          <a (click)=\"logoutAction()\" ><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> LOGOUT</a>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"container col-md-12\">\n    <div class=\"image col-md-8\">\n      <img src=\"{{image.url}}\" width=\"100%\">\n    </div>\n    <div class=\"infos col-md-4\">\n      <ul>\n        <li class=\"user\"><a routerLink=\"/user/{{image.userId}}\">{{image.userId}}</a></li>\n        <li class=\"time\">{{image.timeSince}}</li>\n        <li>\n          {{image.description}}\n        </li>\n        <li>\n          <tag-input [ngModel]=\"image.tags\" [readonly]=\"true\"></tag-input>\n        </li>\n        <li>\n          <tag-input [ngModel]=\"image.mentions\" [readonly]=\"true\" [theme]=\"'minimal'\"></tag-input>\n        </li>\n      </ul>\n      <div *ngIf=\"updated\">\n        <div style=\"width: 90%\" class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Description</label>\n          <div class=\"col-10\">\n            <input [(ngModel)]=\"image.description\" class=\"form-control\" type=\"text\" value='{{image.description}}'>\n          </div>\n        </div>\n\n        <div style=\"width: 90%\" class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Tag</label>\n          <div class=\"col-10\">\n            <tag-input [(ngModel)]=\"tags\" [theme]=\"'minimal'\"></tag-input>\n          </div>\n        </div>\n\n        <div style=\"width: 90%\" class=\"form-group row\">\n          <label class=\"col-2 col-form-label\">Mention</label>\n          <div class=\"col-10\">\n            <tag-input [(ngModel)]=\"mentions\" [theme]=\"'minimal'\">\n              <tag-input-dropdown [autocompleteItems]=\"users\">\n              </tag-input-dropdown>\n            </tag-input>\n          </div>\n        </div>\n        <button class=\"btn btn-success\" (click)=\"updateImage()\">Update</button>\n      </div>\n      <div *ngIf=\"image.userId == user.id && updated == 0\" style=\"text-align: center\">\n        <button class=\"btn btn-success\" (click)=\"changeState()\">Update</button>\n        <button class=\"btn btn-danger\" (click)=\"deleteImage()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"page-wrapper\">\n  <div class=\"discover\">\n    <div class=\"discover-container\">\n      <ul class=\"discover-feed\">\n        <li>DISCOVER PEOPLE</li>\n      </ul>\n      <ul class=\"discover-feed\">\n        <li class=\"infos\">\n          <ul>\n            <li>Antonin Bouscarel</li>\n            <li>@Bousca_a</li>\n          </ul>\n        </li>\n        <li class=\"images\">\n          <ul>\n            <li class=\"col-md-4\">\n              <img src=\"http://images.ugram.net/ylakhdar/190.jpg\">\n            </li>\n            <li class=\"col-md-4\">\n              <img src=\"http://images.ugram.net/ylakhdar/190.jpg\">\n            </li>\n            <li class=\"col-md-4\">\n              <img src=\"http://images.ugram.net/ylakhdar/190.jpg\">\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>-->\n\n<div id=\"page-wrapper\">\n  <div class=\"discover\">\n    <div class=\"discover-container\">\n      <ul class=\"discover-feed\">\n        <li>DISCOVER PEOPLE</li>\n      </ul>\n      <ul *ngFor=\"let user of users;\" class=\"discover-feed\">\n        <li class=\"infos\">\n          <ul>\n            <li><a routerLink=\"/user/{{user.id}}\">{{user.firstName}} {{user.lastName}}</a></li>\n            <li>@{{user.id}}</li>\n          </ul>\n        </li>\n      </ul>\n      <ngb-pagination style=\"text-align: center\" (pageChange)=\"onPager($event)\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [collectionSize]=\"totalEntries\" [(pageSize)]=\"pageSize\" [(page)]=\"page\"></ngb-pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"header_profile\">\n    <!--<img src=\"{{user.pictureUrl}}\" class=\"profile-img\">-->\n    <img src=\"https://image.freepik.com/free-icon/user-male-shape-in-a-circle-ios-7-interface-symbol_318-39025.jpg\" class=\"profile-img\">\n    <div class=\"main_profile1\">\n      <h1 class=\"profile-name\">{{user.firstName}} {{user.lastName}}</h1>\n      <h2>@{{user.id}}</h2>\n      <section class=\"buttons\">\n        <div class=\"container\">\n          <div class=\"btn btn-3\" style=\"width:33%;\">posts\n            <div style=\"clear:both;\"></div>\n            <span style=\"font-size:20px; font-weight:bold;\">{{nb_image}}</span>\n          </div>\n          <div class=\"btn btn-3\" style=\"width:36%; border-right:1px solid rgba(0, 0, 0, 0.1); border-left:1px solid rgba(0, 0, 0, 0.1)\">followers\n\n            <div style=\"clear:both;\"></div>\n            <span style=\"font-size:20px; font-weight:bold;\">125</span>\n          </div>\n          <div class=\"btn btn-2\" style=\" width:23%;\">following\n            <div style=\"clear:both;\"></div>\n            <span style=\"font-size:20px; font-weight:bold;\">25</span>\n          </div>\n        </div>\n      </section>\n      <div style=\"clear:both;\"></div>\n    </div>\n  </div>\n\n  <div class=\"image-container\" style=\"text-align: center\">\n    <div class=\"row\">\n      <div *ngFor=\"let image of images;\" class=\"col-xs-6 col-md-4\">\n        <a routerLink=\"/picture/{{image.userId}}/{{image.id}}\" class=\"thumbnail\">\n          <div class=\"img\"><img  src=\"{{image.url}}\"></div>\n        </a>\n      </div>\n    </div>\n    <ngb-pagination style=\"text-align: center\" (pageChange)=\"onPager($event)\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [collectionSize]=\"totalEntries\" [(pageSize)]=\"pageSize\" [(page)]=\"page\"></ngb-pagination>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"header_profile\">\n    <!--<img src=\"{{user.pictureUrl}}\" class=\"profile-img\">-->\n    <img src=\"https://image.freepik.com/free-icon/user-male-shape-in-a-circle-ios-7-interface-symbol_318-39025.jpg\" class=\"profile-img\">\n    <div class=\"main_profile1\">\n      <h1 class=\"profile-name\">{{user.firstName}} {{user.lastName}}</h1>\n      <h2>@{{user.id}}</h2>\n      <section class=\"buttons\">\n        <div class=\"container\">\n          <div class=\"btn btn-3\" style=\"width:33%;\">posts\n            <div style=\"clear:both;\"></div>\n            <span style=\"font-size:20px; font-weight:bold;\">{{nb_image}}</span>\n          </div>\n          <div class=\"btn btn-3\" style=\"width:36%; border-right:1px solid rgba(0, 0, 0, 0.1); border-left:1px solid rgba(0, 0, 0, 0.1)\">followers\n\n            <div style=\"clear:both;\"></div>\n            <span style=\"font-size:20px; font-weight:bold;\">125</span>\n          </div>\n          <div class=\"btn btn-2\" style=\" width:23%;\">following\n            <div style=\"clear:both;\"></div>\n            <span style=\"font-size:20px; font-weight:bold;\">25</span>\n          </div>\n        </div>\n      </section>\n      <div style=\"clear:both;\"></div>\n      <a routerLink=\"/update/\" class=\"btn btn-primary update\">Update Profile</a>\n    </div>\n  </div>\n\n  <div class=\"image-container\" style=\"text-align: center\">\n    <div class=\"row\">\n      <div *ngFor=\"let image of images;\" class=\"col-xs-6 col-md-4\" style=\"width: 350px;height: 350px;\">\n        <a routerLink=\"/picture/{{image.userId}}/{{image.id}}\" class=\"thumbnail\">\n          <div class=\"img\"><img  src=\"{{image.url}}\"></div>\n        </a>\n      </div>\n    </div>\n    <ngb-pagination style=\"text-align: center\" (pageChange)=\"onPager($event)\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [collectionSize]=\"totalEntries\" [(pageSize)]=\"pageSize\" [(page)]=\"page\"></ngb-pagination>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n  <div class=\"update-container\">\n    <div class=\"update\">\n      <h2>Edit Profile</h2>\n      <h3>@{{user.id}}</h3>\n      <div class=\"form-group row\">\n        <label for=\"user-surname-update\" class=\"col-2 col-form-label\">Surname</label>\n        <div class=\"col-10\">\n          <input [(ngModel)]=\"UserSurName\" class=\"form-control\" type=\"text\" value='{{UserSurName}}'\n                 id=\"user-surname-update\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"user-name-update\" class=\"col-2 col-form-label\">Name</label>\n        <div class=\"col-10\">\n          <input [(ngModel)]=\"UserName\" class=\"form-control\" type=\"text\" value='{{UserName}}' id=\"user-name-update\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"user-email-update\" class=\"col-2 col-form-label\">Email</label>\n        <div class=\"col-10\">\n          <input [(ngModel)]=\"UserEmail\" class=\"form-control\" type=\"email\" value='{{UserEmail}}' id=\"user-email-update\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"user-tel-update\" class=\"col-2 col-form-label\">Telephone</label>\n        <div class=\"col-10\">\n          <input [(ngModel)]=\"UserTel\" class=\"form-control\" type=\"tel\" value='{{UserTel}}' id=\"user-tel-update\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <button (click)=\"submitUpdate()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n    <div class=\"upload-container\">\n        <div class=\"upload\">\n            <h2 style=\"margin-bottom: 30px\">Upload Photo</h2>\n            <div class=\"form-group\">\n                <label for=\"description\">Description</label>\n                <textarea [(ngModel)]=\"desc\" class=\"form-control\" id=\"description\" placeholder=\"Description\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <input (change)=\"changeActionPic($event)\" type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" />\n                <label for=\"file\">Choose a file</label>\n            </div>\n            <div class=\"form-group\">\n              <tag-input [(ngModel)]=\"tags\" [theme]=\"'minimal'\"></tag-input>\n            </div>\n\n            <div class=\"form-group\">\n              <tag-input [(ngModel)]=\"mentions\" [theme]=\"'minimal'\">\n                <tag-input-dropdown [autocompleteItems]=\"users\">\n                </tag-input-dropdown>\n              </tag-input>\n            </div>\n            <div style=\"text-align: start\" class=\"form-group\">\n                <button (click)=\"uploadPicture()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(475);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_api_api_service__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PicturesService = (function () {
    function PicturesService(coreApiService, _cookieService) {
        this.coreApiService = coreApiService;
        this._cookieService = _cookieService;
    }
    PicturesService.prototype.get_pictures = function (page_size, page) {
        var _this = this;
        var req = {
            method: "GET",
            url: this.coreApiService.getRoute().pictures.get_pictures + '?page=' + page + '&perPage=' + page_size,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.get_picture = function (user_id, image_id) {
        var _this = this;
        var url = this.coreApiService.getRoute().pictures.get_user_picture;
        var url = url.replace("{user_id}", user_id);
        var url = url.replace("{picture_id}", image_id);
        var req = {
            method: "GET",
            url: url,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.get_user_picture = function (user_id, page_size, page) {
        var _this = this;
        var url = this.coreApiService.getRoute().pictures.get_user_pictures + '?page=' + page + '&perPage=' + page_size;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "GET",
            url: url
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.delete_picture = function (user_id, image_id) {
        var _this = this;
        var url = this.coreApiService.getRoute().pictures.delete_user_picture;
        var url = url.replace("{user_id}", user_id);
        var url = url.replace("{picture_id}", image_id);
        var req = {
            method: "DELETE",
            url: url,
            token: this._cookieService.getObject('token')['token']
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.updateImage = function (user_id, image_id, body) {
        var _this = this;
        var url = this.coreApiService.getRoute().pictures.update_user_picture;
        var url = url.replace("{user_id}", user_id);
        var url = url.replace("{picture_id}", image_id);
        var req = {
            method: "PUT",
            url: url,
            token: this._cookieService.getObject('token')['token'],
            data: JSON.stringify(body)
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.timeSince = function (date) {
        var seconds = Math.floor((+new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };
    PicturesService.prototype.format_picture = function (pics) {
        if (!pics.length)
            pics.timeSince = this.timeSince(pics.createdDate);
        else {
            for (var i = 0; i < pics.length; i++) {
                pics[i].timeSince = this.timeSince(pics[i].createdDate);
            }
        }
        return (pics);
    };
    PicturesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_api_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_api_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _b) || Object])
    ], PicturesService);
    return PicturesService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bousca_a/Doc/laval-session-2/web/ugram-h17-team-06/frontend/src/pictures.service.js.map

/***/ })

},[803]);
//# sourceMappingURL=main.bundle.map