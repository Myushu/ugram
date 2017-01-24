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
require("rxjs/add/operator/toPromise");
var core_api_service_1 = require("app/ugram/services/api/core.api.service");
var CoreUserService = (function () {
    function CoreUserService(coreApiService, _cookieService, router) {
        this.coreApiService = coreApiService;
        this._cookieService = _cookieService;
        this.router = router;
    }
    CoreUserService.prototype.Signin = function (email, password) {
        var _this = this;
        var req = {
            method: "POST",
            //url: CoreApiService.getRoute().user.sign_in,
            data: "email=" + email + "&password=" + password,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                if (data.ok == true) {
                    console.log(data);
                    var token = {
                        'access-token': data.headers.get('access-token'),
                        'client': data.headers.get('client'),
                        'uid': data.headers.get('uid')
                    };
                    _this._cookieService.putObject('type_user', JSON.parse(data._body).type_user);
                    _this._cookieService.putObject('token', token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    CoreUserService.prototype.Signup = function (email, password, confirm) {
        var _this = this;
        var req = {
            method: "POST",
            //surl: CoreApiService.getRoute().user.sign_up,
            data: "email=" + email + "&password=" + password + "&password_confirmation=" + confirm,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                resolve(data);
            });
        });
    };
    CoreUserService.prototype.isLogIn = function () {
        if (this._cookieService.get('token'))
            return (true);
        return (false);
    };
    CoreUserService.prototype.check = function (superadmin) {
        if (superadmin === void 0) { superadmin = 0; }
        if (!this.isLogIn())
            this.router.navigate(['/signin']);
    };
    return CoreUserService;
}());
CoreUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_api_service_1.CoreApiService,
        core_2.CookieService,
        router_1.Router])
], CoreUserService);
exports.CoreUserService = CoreUserService;
//# sourceMappingURL=core.user.service.js.map