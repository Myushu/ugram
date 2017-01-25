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
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
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
var AppComponent = (function () {
    function AppComponent(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
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
        core_2.CookieService])
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
//Components
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./ugram/components/nav/navbar.component");
var home_component_1 = require("app/ugram/components/home/home.component");
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
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent,
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
var HomeComponent = (function () {
    function HomeComponent(_cookieService, router, picturesService) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.images = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.picturesService.get_pictures().then(function (res) {
            _this.images = res['items'];
            console.log(_this.images);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/home/home.component.html',
        providers: [pictures_service_1.PicturesService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        pictures_service_1.PicturesService])
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
        this.router.navigate(['/signin']);
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
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var request = new http_1.RequestOptions({
            method: req.method,
            url: req.url,
            headers: headers,
        });
        if (req.data)
            request.body = req.data;
        return this.http.request(new http_1.Request(request))
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (res) { return res; });
    };
    CoreApiService.getRoute = function () {
        return {
            pictures: {
                get_pictures: "/pictures"
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
    PicturesService.prototype.get_pictures = function () {
        var _this = this;
        var req = {
            method: "GET",
            url: core_api_service_1.CoreApiService.getRoute().pictures.get_pictures,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
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
var core_2 = require("angular2-cookie/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var core_api_service_1 = require("app/ugram/services/api/core.api.service");
var CoreUserService = (function () {
    function CoreUserService(coreApiService, _cookieService, router) {
        this.coreApiService = coreApiService;
        this._cookieService = _cookieService;
        this.router = router;
    }
    CoreUserService.prototype.Signin = function (email, password) {
        var _this = this;
        var req = {
            method: "POST",
            //url: CoreApiService.getRoute().user.sign_in,
            data: "email=" + email + "&password=" + password,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                if (data.ok == true) {
                    console.log(data);
                    var token = {
                        'access-token': data.headers.get('access-token'),
                        'client': data.headers.get('client'),
                        'uid': data.headers.get('uid')
                    };
                    _this._cookieService.putObject('type_user', JSON.parse(data._body).type_user);
                    _this._cookieService.putObject('token', token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    CoreUserService.prototype.Signup = function (email, password, confirm) {
        var _this = this;
        var req = {
            method: "POST",
            //surl: CoreApiService.getRoute().user.sign_up,
            data: "email=" + email + "&password=" + password + "&password_confirmation=" + confirm,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                resolve(data);
            });
        });
    };
    CoreUserService.prototype.isLogIn = function () {
        if (this._cookieService.get('token'))
            return (true);
        return (false);
    };
    CoreUserService.prototype.check = function (superadmin) {
        if (superadmin === void 0) { superadmin = 0; }
        if (!this.isLogIn())
            this.router.navigate(['/signin']);
    };
    return CoreUserService;
}());
CoreUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_api_service_1.CoreApiService,
        core_2.CookieService,
        router_1.Router])
], CoreUserService);
exports.CoreUserService = CoreUserService;
//# sourceMappingURL=core.user.service.js.map