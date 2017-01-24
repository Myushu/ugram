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
var http_1 = require("@angular/http");
var core_2 = require("angular2-cookie/core");
require("rxjs/add/operator/toPromise");
var CoreApiService = (function () {
    function CoreApiService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.baseUrl = "http://api.ugram.net";
    }
    CoreApiService.prototype.request = function (req) {
        req.url = this.baseUrl + req.url;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var request = new http_1.RequestOptions({
            method: req.method,
            url: req.url,
            headers: headers,
        });
        if (req.data)
            request.body = req.data;
        return this.http.request(new http_1.Request(request))
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (res) { return res; });
    };
    CoreApiService.getRoute = function () {
        return {
            pictures: {
                get_pictures: "/pictures"
            }
        };
    };
    return CoreApiService;
}());
CoreApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_2.CookieService])
], CoreApiService);
exports.CoreApiService = CoreApiService;
//# sourceMappingURL=core.api.service.js.map