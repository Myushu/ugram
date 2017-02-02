"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Components
//import { SignInComponent }              from './ugram/components/sign-in/sign-in.component';
//import { SignUpComponent }              from './ugram/components/sign-in/sign-up.component';
var home_component_1 = require("app/ugram/components/home/home.component");
var picture_component_1 = require("app/ugram/components/picture/picture.component");
var user_feed_component_1 = require("app/ugram/components/user/user.feed.component");
var user_update_component_1 = require("app/ugram/components/user/user.update.component");
var login_component_1 = require("app/ugram/components/login/login.component");
var user_profile_component_1 = require("app/ugram/components/user/user.profile.component");
var user_upload_component_1 = require("app/ugram/components/user/user.upload.component");
var user_discover_component_1 = require("app/ugram/components/user/user.discover.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'picture/:userid/:id', component: picture_component_1.PictureComponent },
    { path: 'user/:userid', component: user_feed_component_1.UserFeedComponent },
    { path: 'update', component: user_update_component_1.UserUpdateComponent },
    { path: 'user/:userid', component: user_feed_component_1.UserFeedComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', component: user_profile_component_1.UserProfileComponent },
    { path: 'upload', component: user_upload_component_1.UserUploadComponent },
    { path: 'discover', component: user_discover_component_1.UserDiscoverComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("angular2-cookie/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AppComponent = (function () {
    function AppComponent(router, _cookieService, modalService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.modalService = modalService;
        //if (!this._cookieService.get('token'))
        //    this.router.navigate(['/login']);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div id=\"wrapper\">\n                <navbar></navbar>\n                <router-outlet></router-outlet>\n                </div>\n                "
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.CookieService,
        ng_bootstrap_1.NgbModal])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
//Routing
var app_routing_module_1 = require("./app-routing.module");
var ng2_tag_input_1 = require("ng2-tag-input");
//Components
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./ugram/components/nav/navbar.component");
var home_component_1 = require("app/ugram/components/home/home.component");
var picture_component_1 = require("app/ugram/components/picture/picture.component");
var user_feed_component_1 = require("app/ugram/components/user/user.feed.component");
var login_component_1 = require("app/ugram/components/login/login.component");
var user_profile_component_1 = require("app/ugram/components/user/user.profile.component");
var user_upload_component_1 = require("app/ugram/components/user/user.upload.component");
var user_update_component_1 = require("app/ugram/components/user/user.update.component");
var user_discover_component_1 = require("app/ugram/components/user/user.discover.component");
//Services
var core_api_service_1 = require("./ugram/services/api/core.api.service");
var global_event_manager_service_1 = require("./ugram/services/globalEventManager/global.event.manager.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            ng2_tag_input_1.TagInputModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent,
            picture_component_1.PictureComponent,
            user_feed_component_1.UserFeedComponent,
            login_component_1.LoginComponent,
            user_profile_component_1.UserProfileComponent,
            user_upload_component_1.UserUploadComponent,
            user_update_component_1.UserUpdateComponent,
            user_discover_component_1.UserDiscoverComponent
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            core_api_service_1.CoreApiService,
            cookies_service_1.CookieService,
            global_event_manager_service_1.GlobalEventsManager
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
//import * as path from 'path';
"use strict";
//require('app-module-path').addPath(path.resolve(__dirname, '..'));
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//noinspection TypeScriptCheckImport
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var user_service_1 = require("app/ugram/services/user/user.service");
var HomeComponent = (function () {
    function HomeComponent(lc, _cookieService, router, picturesService, userService) {
        var _this = this;
        this.lc = lc;
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.images = [];
        this.currentPage = 0;
        if (!this._cookieService.get('token'))
            this.router.navigate(['/login']);
        window.onscroll = function () {
            var windowHeight = "innerHeight" in window ? window.innerHeight
                : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            var windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                console.log('bottom anchor');
                _this.currentPage += 1;
                console.log('page', _this.currentPage);
                _this.picturesService.get_pictures(20, _this.currentPage).then(function (res) {
                    res['items'] = _this.picturesService.format_pucture(res['items']);
                    _this.images = _this.images.concat(res['items']);
                });
            }
            lc.run(function () {
                //this.statusText = status;
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.picturesService.get_pictures(20, this.currentPage).then(function (res) {
            _this.images = res['items'];
            _this.images = _this.picturesService.format_pucture(_this.images);
            console.log(_this.images);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/home/home.component.html',
        providers: [pictures_service_1.PicturesService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        core_2.CookieService,
        router_1.Router,
        pictures_service_1.PicturesService,
        user_service_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
var global_event_manager_service_1 = require("app/ugram/services/globalEventManager/global.event.manager.service");
var NavBarComponent = (function () {
    function NavBarComponent(globalEventsManager, _cookieService, router) {
        var _this = this;
        this.globalEventsManager = globalEventsManager;
        this._cookieService = _cookieService;
        this.router = router;
        this.showNavBar = false;
        //if (this._cookieService.get('token'))
        this.showNavBar = true;
        this.globalEventsManager.showNavBar.subscribe(function (mode) {
            _this.showNavBar = mode;
        });
    }
    NavBarComponent.prototype.logoutAction = function () {
        this._cookieService.removeAll();
        this.globalEventsManager.showNavBar.emit(false);
        this.router.navigate(['/login']);
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: "navbar",
        templateUrl: 'app/ugram/templates/menu/menu.component.html',
    }),
    __metadata("design:paramtypes", [global_event_manager_service_1.GlobalEventsManager,
        core_2.CookieService,
        router_1.Router])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
var user_service_1 = require("app/ugram/services/user/user.service");
var global_event_manager_service_1 = require("app/ugram/services/globalEventManager/global.event.manager.service");
var LoginComponent = (function () {
    function LoginComponent(_cookieService, router, userService, globalEventsManager) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.globalEventsManager = globalEventsManager;
        this.token = "";
        this.globalEventsManager.showNavBar.emit(false);
        if (this._cookieService.get('token'))
            this.router.navigate(['/home']);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.who_im_i(this.token).then(function (data) {
            _this.globalEventsManager.showNavBar.emit(true);
            _this._cookieService.putObject('token', data);
            _this.router.navigate(['/home']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/login/login.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        user_service_1.UserService,
        global_event_manager_service_1.GlobalEventsManager])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var PictureComponent = (function () {
    function PictureComponent(
        //private _cookieService:CookieService,
        router, picturesService, Route) {
        this.router = router;
        this.picturesService = picturesService;
        this.Route = Route;
        this.image = [];
    }
    PictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Route.params.subscribe(function (params) {
            _this.userId = params['userid'];
            _this.imageId = params['id'];
            _this.picturesService.get_picture(_this.userId, _this.imageId).then(function (res) {
                console.log(res);
                _this.image = _this.picturesService.format_pucture(res);
                console.log(_this.image);
            });
        });
    };
    return PictureComponent;
}());
PictureComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/picture/picture.component.html',
        providers: [pictures_service_1.PicturesService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        pictures_service_1.PicturesService,
        router_1.ActivatedRoute])
], PictureComponent);
exports.PictureComponent = PictureComponent;
//# sourceMappingURL=picture.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var user_service_1 = require("app/ugram/services/user/user.service");
var UserDiscoverComponent = (function () {
    function UserDiscoverComponent(//private _cookieService:CookieService,
        router, picturesService, userService, Route) {
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.Route = Route;
    }
    UserDiscoverComponent.prototype.ngOnInit = function () {
    };
    return UserDiscoverComponent;
}());
UserDiscoverComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/user/discover.component.html',
        providers: [pictures_service_1.PicturesService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        pictures_service_1.PicturesService,
        user_service_1.UserService,
        router_1.ActivatedRoute])
], UserDiscoverComponent);
exports.UserDiscoverComponent = UserDiscoverComponent;
//# sourceMappingURL=user.discover.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var user_service_1 = require("app/ugram/services/user/user.service");
var UserFeedComponent = (function () {
    function UserFeedComponent(
        //private _cookieService:CookieService,
        router, picturesService, userService, Route) {
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.Route = Route;
        this.images = [];
        this.user = [];
        this.nb_image = 0;
    }
    UserFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Route.params.subscribe(function (params) {
            _this.userService.get_user(params['userid']).then(function (res) {
                _this.user = res;
                console.log(_this.user);
                _this.picturesService.get_user_picture(_this.user['id']).then(function (res) {
                    _this.images = res['items'];
                    _this.images = _this.picturesService.format_pucture(_this.images);
                    _this.nb_image = _this.images['length'];
                });
            });
        });
    };
    return UserFeedComponent;
}());
UserFeedComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/user/feed.component.html',
        providers: [pictures_service_1.PicturesService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        pictures_service_1.PicturesService,
        user_service_1.UserService,
        router_1.ActivatedRoute])
], UserFeedComponent);
exports.UserFeedComponent = UserFeedComponent;
//# sourceMappingURL=user.feed.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var user_service_1 = require("app/ugram/services/user/user.service");
var UserProfileComponent = (function () {
    function UserProfileComponent(_cookieService, router, picturesService, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.Route = Route;
        this.images = [];
        this.user = [];
        this.nb_image = 0;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Route.params.subscribe(function (params) {
            _this.userService.get_user(_this._cookieService.getObject('token')['id']).then(function (res) {
                _this.user = res;
                console.log(_this.user);
                _this.picturesService.get_user_picture(_this._cookieService.getObject('token')['id']).then(function (res) {
                    _this.images = res['items'];
                    _this.images = _this.picturesService.format_pucture(_this.images);
                    _this.nb_image = _this.images['length'];
                });
            });
        });
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/user/profile.component.html',
        providers: [pictures_service_1.PicturesService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        pictures_service_1.PicturesService,
        user_service_1.UserService,
        router_1.ActivatedRoute])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user.profile.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
var user_service_1 = require("app/ugram/services/user/user.service");
var UserUpdateComponent = (function () {
    function UserUpdateComponent(_cookieService, router, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.Route = Route;
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        this.user = this._cookieService.getObject('token');
        console.log(this.user);
        this.UserSurName = this.user['lastName'];
        this.UserName = this.user['firstName'];
        this.UserTel = this.user['phoneNumber'];
        this.UserEmail = this.user['email'];
    };
    UserUpdateComponent.prototype.submitUpdate = function () {
        var userUpdate = {
            'lastName': this.UserSurName,
            'firstName': this.UserName,
            'phoneNumber': this.UserTel,
            'email': this.UserEmail
        };
        this.userService.update_user(this.user['id'], userUpdate, "353aac98-0fed-42aa-afcf-e7228f06ed53");
    };
    return UserUpdateComponent;
}());
UserUpdateComponent = __decorate([
    core_1.Component({
        selector: "update",
        templateUrl: 'app/ugram/templates/user/update.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        user_service_1.UserService,
        router_1.ActivatedRoute])
], UserUpdateComponent);
exports.UserUpdateComponent = UserUpdateComponent;
//this._cookieService.getObject('token')
//# sourceMappingURL=user.update.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var user_service_1 = require("app/ugram/services/user/user.service");
var UserUploadComponent = (function () {
    function UserUploadComponent(_cookieService, router, picturesService, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.Route = Route;
        this.items = ['Typescript', 'Angular2'];
    }
    UserUploadComponent.prototype.ngOnInit = function () {
    };
    return UserUploadComponent;
}());
UserUploadComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/user/upload.component.html',
        providers: [pictures_service_1.PicturesService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        pictures_service_1.PicturesService,
        user_service_1.UserService,
        router_1.ActivatedRoute])
], UserUploadComponent);
exports.UserUploadComponent = UserUploadComponent;
//# sourceMappingURL=user.upload.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var core_2 = require("angular2-cookie/core");
require("rxjs/add/operator/toPromise");
var CoreApiService = (function () {
    function CoreApiService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.baseUrl = "http://api.ugram.net";
    }
    CoreApiService.prototype.request = function (req) {
        req.url = this.baseUrl + req.url;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (req.token)
            headers.append('Authorization', 'Bearer ' + req.token);
        var request = new http_1.RequestOptions({
            method: req.method,
            url: req.url,
            headers: headers,
        });
        if (req.data)
            request.body = req.data;
        console.log('request', request);
        return this.http.request(new http_1.Request(request))
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (res) { return res; });
    };
    CoreApiService.getRoute = function () {
        return {
            pictures: {
                get_pictures: "/pictures",
                get_user_pictures: "/users/{user_id}/pictures",
                get_user_picture: "/users/{user_id}/pictures/{picture_id}",
            },
            user: {
                get_user: "/users/{user_id}",
                get_users: "/users?perPage=1000",
                update_user: "/users/{user_id}"
            }
        };
    };
    return CoreApiService;
}());
CoreApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_2.CookieService])
], CoreApiService);
exports.CoreApiService = CoreApiService;
//# sourceMappingURL=core.api.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var GlobalEventsManager = (function () {
    function GlobalEventsManager() {
        this.showNavBar = new core_1.EventEmitter();
    }
    return GlobalEventsManager;
}());
GlobalEventsManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GlobalEventsManager);
exports.GlobalEventsManager = GlobalEventsManager;
//# sourceMappingURL=global.event.manager.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_api_service_1 = require("app/ugram/services/api/core.api.service");
var PicturesService = (function () {
    function PicturesService(coreApiService) {
        this.coreApiService = coreApiService;
    }
    PicturesService.prototype.get_pictures = function (page_size, page) {
        var _this = this;
        var req = {
            method: "GET",
            url: core_api_service_1.CoreApiService.getRoute().pictures.get_pictures + '?page=' + page + '&perPage=' + page_size,
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
        var url = core_api_service_1.CoreApiService.getRoute().pictures.get_user_picture;
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
    PicturesService.prototype.get_user_picture = function (user_id) {
        var _this = this;
        var url = core_api_service_1.CoreApiService.getRoute().pictures.get_user_pictures;
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
    PicturesService.prototype.format_pucture = function (pics) {
        if (!pics.length)
            pics.timeSince = this.timeSince(pics.createdDate);
        else {
            for (var i = 0; i < pics.length; i++) {
                pics[i].timeSince = this.timeSince(pics[i].createdDate);
            }
        }
        return (pics);
    };
    return PicturesService;
}());
PicturesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_api_service_1.CoreApiService])
], PicturesService);
exports.PicturesService = PicturesService;
//# sourceMappingURL=pictures.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_api_service_1 = require("app/ugram/services/api/core.api.service");
var UserService = (function () {
    function UserService(coreApiService) {
        this.coreApiService = coreApiService;
    }
    UserService.prototype.get_users = function () {
        var _this = this;
        var req = {
            method: "GET",
            url: core_api_service_1.CoreApiService.getRoute().user.get_users
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UserService.prototype.get_user = function (user_id) {
        var _this = this;
        var url = core_api_service_1.CoreApiService.getRoute().user.get_user;
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
    UserService.prototype.update_user = function (user_id, user, token) {
        var _this = this;
        var url = core_api_service_1.CoreApiService.getRoute().user.update_user;
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
    UserService.prototype.who_im_i = function (token) {
        var _this = this;
        var users;
        return new Promise(function (resolve, reject) {
            _this.get_users().then(function (data) {
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
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_api_service_1.CoreApiService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map