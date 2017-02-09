"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = "http://api.ugram.net";
    }
    ApiService.prototype.request = function (req) {
        req.url = this.baseUrl + req.url;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (req.token)
            headers.append('Authorization', 'Bearer ' + req.token);
        var request = new http_1.RequestOptions({
            method: req.method,
            url: req.url,
            headers: headers
        });
        if (req.data)
            request.body = req.data;
        console.log('request', request);
        return this.http.request(new http_1.Request(request))
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (res) { return res; });
    };
    ApiService.prototype.getRoute = function () {
        return {
            pictures: {
                get_pictures: "/pictures",
                get_user_pictures: "/users/{user_id}/pictures",
                get_user_picture: "/users/{user_id}/pictures/{picture_id}"
            },
            user: {
                get_user: "/users/{user_id}",
                get_users: "/users?perPage=1000",
                update_user: "/users/{user_id}"
            }
        };
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
