"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var pictures_service_1 = require('app/services/pictures/pictures.service');
var users_service_1 = require('app/services/users/users.service');
var DiscoverComponent = (function () {
    function DiscoverComponent(router, userService, picturesService, Route) {
        this.router = router;
        this.userService = userService;
        this.picturesService = picturesService;
        this.Route = Route;
        this.users = [];
        this.images = [];
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.get_users().then(function (res) {
            _this.users = res['items'];
            console.log(_this.users);
        });
    };
    DiscoverComponent = __decorate([
        core_1.Component({
            selector: 'app-discover',
            templateUrl: './discover.component.html',
            styleUrls: ['./discover.component.css'],
            providers: [pictures_service_1.PicturesService, users_service_1.UsersService]
        })
    ], DiscoverComponent);
    return DiscoverComponent;
}());
exports.DiscoverComponent = DiscoverComponent;
