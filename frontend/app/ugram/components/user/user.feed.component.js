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