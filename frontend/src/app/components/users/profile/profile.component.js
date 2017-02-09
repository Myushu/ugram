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
    }
    ProfileComponent.prototype.ngOnInit = function () {
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
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css'],
            providers: [pictures_service_1.PicturesService, users_service_1.UsersService]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
