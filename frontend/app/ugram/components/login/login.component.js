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
var global_event_manager_service_1 = require("app/ugram/services/globalEventManager/global.event.manager.service");
var LoginComponent = (function () {
    function LoginComponent(_cookieService, router, userService, globalEventsManager) {
        this._cookieService = _cookieService;
        this.router = router;
        this.userService = userService;
        this.globalEventsManager = globalEventsManager;
        this.token = "";
        this.globalEventsManager.showNavBar.emit(false);
        if (this._cookieService.get('token'))
            this.router.navigate(['/home']);
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.who_im_i(this.token).then(function (data) {
            _this.globalEventsManager.showNavBar.emit(true);
            _this._cookieService.putObject('token', data);
            _this.router.navigate(['/home']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/login/login.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [core_2.CookieService,
        router_1.Router,
        user_service_1.UserService,
        global_event_manager_service_1.GlobalEventsManager])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map