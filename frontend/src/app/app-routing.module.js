"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Components
//import { SignInComponent }              from './ugram/components/sign-in/sign-in.component';
//import { SignUpComponent }              from './ugram/components/sign-in/sign-up.component';
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var picture_component_1 = require('./components/picture/picture.component');
var feed_component_1 = require("./components/users/feed/feed.component");
var update_component_1 = require("./components/users/update/update.component");
var profile_component_1 = require("./components/users/profile/profile.component");
var upload_component_1 = require("./components/users/upload/upload.component");
var discover_component_1 = require("./components/users/discover/discover.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'picture/:userid/:id', component: picture_component_1.PictureComponent },
    { path: 'user/:userid', component: feed_component_1.FeedComponent },
    { path: 'update', component: update_component_1.UpdateComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'upload', component: upload_component_1.UploadComponent },
    { path: 'discover', component: discover_component_1.DiscoverComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
