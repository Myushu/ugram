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