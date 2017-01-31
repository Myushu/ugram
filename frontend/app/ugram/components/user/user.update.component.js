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
var UserUpdateComponent = (function () {
    function UserUpdateComponent(_cookieService, router, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.Route = Route;
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        this.user = this._cookieService.getObject('token');
        console.log(this.user);
        this.UserSurName = this.user['lastName'];
        this.UserName = this.user['firstName'];
        this.UserTel = this.user['phoneNumber'];
        this.UserEmail = this.user['email'];
    };
    UserUpdateComponent.prototype.submitUpdate = function () {
        var userUpdate = {
            'lastName': this.UserSurName,
            'firstName': this.UserName,
            'phoneNumber': this.UserTel,
            'email': this.UserEmail
        };
        this.userService.update_user(this.user['id'], userUpdate, "353aac98-0fed-42aa-afcf-e7228f06ed53");
    };
    return UserUpdateComponent;
}());
UserUpdateComponent = __decorate([
    core_1.Component({
        selector: "update",
        templateUrl: 'app/ugram/templates/user/update.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        user_service_1.UserService,
        router_1.ActivatedRoute])
], UserUpdateComponent);
exports.UserUpdateComponent = UserUpdateComponent;
//this._cookieService.getObject('token')
//# sourceMappingURL=user.update.component.js.map