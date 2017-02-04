"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var nav_component_1 = require('./components/nav/nav.component');
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var picture_component_1 = require('./components/picture/picture.component');
var discover_component_1 = require('./components/users/discover/discover.component');
var feed_component_1 = require('./components/users/feed/feed.component');
var profile_component_1 = require('./components/users/profile/profile.component');
var update_component_1 = require('./components/users/update/update.component');
var upload_component_1 = require('./components/users/upload/upload.component');
//service
var global_event_manager_service_1 = require('./services/globalEventManager/global-event-manager.service');
var api_service_1 = require('./services/api/api.service');
var users_service_1 = require('./services/users/users.service');
var pictures_service_1 = require('./services/pictures/pictures.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                picture_component_1.PictureComponent,
                discover_component_1.DiscoverComponent,
                feed_component_1.FeedComponent,
                profile_component_1.ProfileComponent,
                update_component_1.UpdateComponent,
                upload_component_1.UploadComponent,
                nav_component_1.NavComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                global_event_manager_service_1.GlobalEventManagerService,
                api_service_1.ApiService,
                cookies_service_1.CookieService,
                users_service_1.UsersService,
                pictures_service_1.PicturesService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
