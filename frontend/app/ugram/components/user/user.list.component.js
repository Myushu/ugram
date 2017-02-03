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
var user_service_1 = require("app/ugram/services/user/user.service");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
var UserListComponent = (function () {
    function UserListComponent(_cookieService, router, userService, picturesService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.picturesService = picturesService;
        this.Route = Route;
        this.UserSurName = String;
        this.UserName = String;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.get_users().then(function (res) {
            _this.users = res.items;
            console.log(_this.users);
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: "userList",
        templateUrl: 'app/ugram/templates/user/discover.component.html',
        providers: [pictures_service_1.PicturesService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        user_service_1.UserService,
        pictures_service_1.PicturesService,
        router_1.ActivatedRoute])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user.list.component.js.map