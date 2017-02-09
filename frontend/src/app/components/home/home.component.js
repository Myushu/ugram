"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-cookie/core');
var pictures_service_1 = require('app/services/pictures/pictures.service');
var users_service_1 = require('app/services/users/users.service');
var global_event_manager_service_1 = require("app/services/globalEventManager/global-event-manager.service");
var HomeComponent = (function () {
    function HomeComponent(_cookieService, router, picturesService, userService, globalEventsManager) {
        this._cookieService = _cookieService;
        this.router = router;
        this.picturesService = picturesService;
        this.userService = userService;
        this.globalEventsManager = globalEventsManager;
        this.images = [];
        this.currentPage = 0;
        if (!this._cookieService.get('token'))
            this.router.navigate(['/login']);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.picturesService.get_pictures(20, this.currentPage).then(function (res) {
            _this.images = res['items'];
            _this.images = _this.picturesService.format_pucture(_this.images);
            console.log(_this.images);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            providers: [core_2.CookieService, pictures_service_1.PicturesService, users_service_1.UsersService, global_event_manager_service_1.GlobalEventManagerService]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
