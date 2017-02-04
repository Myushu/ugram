"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var users_service_1 = require('app/services/users/users.service');
var UpdateComponent = (function () {
    function UpdateComponent(_cookieService, router, userService, Route) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.Route = Route;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.user = this._cookieService.getObject('token');
        console.log(this.user);
        this.UserSurName = this.user['lastName'];
        this.UserName = this.user['firstName'];
        this.UserTel = this.user['phoneNumber'];
        this.UserEmail = this.user['email'];
    };
    UpdateComponent.prototype.submitUpdate = function () {
        var userUpdate = {
            'lastName': this.UserSurName,
            'firstName': this.UserName,
            'phoneNumber': this.UserTel,
            'email': this.UserEmail
        };
        this.userService.update_user(this.user['id'], userUpdate, "353aac98-0fed-42aa-afcf-e7228f06ed53");
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-update',
            templateUrl: './update.component.html',
            styleUrls: ['./update.component.css'],
            providers: [users_service_1.UsersService]
        })
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;
