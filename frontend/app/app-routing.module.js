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
var user_list_component_1 = require("app/ugram/components/user/user.list.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'picture/:userid/:id', component: picture_component_1.PictureComponent },
    { path: 'user/:userid', component: user_feed_component_1.UserFeedComponent },
    { path: 'update', component: user_update_component_1.UserUpdateComponent },
    { path: 'user/:userid', component: user_feed_component_1.UserFeedComponent },
    { path: 'users', component: user_list_component_1.UserListComponent },
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