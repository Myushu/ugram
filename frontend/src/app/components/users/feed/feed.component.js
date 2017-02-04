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
    }
    FeedComponent.prototype.ngOnInit = function () {
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
    FeedComponent = __decorate([
        core_1.Component({
            selector: 'app-feed',
            templateUrl: './feed.component.html',
            styleUrls: ['./feed.component.css'],
            providers: [pictures_service_1.PicturesService, users_service_1.UsersService]
        })
    ], FeedComponent);
    return FeedComponent;
}());
exports.FeedComponent = FeedComponent;
