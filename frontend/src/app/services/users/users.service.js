"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UsersService = (function () {
    function UsersService(coreApiService) {
        this.coreApiService = coreApiService;
    }
    UsersService.prototype.get_users = function () {
        var _this = this;
        var req = {
            method: "GET",
            url: this.coreApiService.getRoute().user.get_users
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UsersService.prototype.get_user = function (user_id) {
        var _this = this;
        var url = this.coreApiService.getRoute().user.get_user;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "GET",
            url: url
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UsersService.prototype.update_user = function (user_id, user, token) {
        var _this = this;
        var url = this.coreApiService.getRoute().user.update_user;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "PUT",
            url: url,
            data: JSON.stringify(user),
            token: token
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    UsersService.prototype.who_im_i = function (token) {
        var _this = this;
        var users;
        return new Promise(function (resolve, reject) {
            _this.get_users().then(function (data) {
                for (var i = 0; i < data['totalEntries']; i++) {
                    console.log('u', data['items'][i]);
                    var user = {
                        "email": data['items'][i]['email'],
                        "firstName": data['items'][i]['firstName'],
                        "lastName": data['items'][i]['lastName'],
                        "phoneNumber": data['items'][i]['phoneNumber']
                    };
                    _this.update_user(data['items'][i]['id'], user, token).then(function (data) {
                        if (data['id'])
                            resolve(data);
                    });
                }
            });
        });
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
