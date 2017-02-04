"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-cookie/core');
var users_service_1 = require('app/services/users/users.service');
var global_event_manager_service_1 = require("app/services/globalEventManager/global-event-manager.service");
var LoginComponent = (function () {
    function LoginComponent(_cookieService, router, userService, globalEventsManager) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.globalEventsManager = globalEventsManager;
        this.token = "";
        if (this._cookieService.get('token'))
            this.router.navigate(['/home']);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.who_im_i(this.token).then(function (data) {
            _this._cookieService.putObject('token', data);
            _this.router.navigate(['/home']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [core_2.CookieService, users_service_1.UsersService, global_event_manager_service_1.GlobalEventManagerService]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
