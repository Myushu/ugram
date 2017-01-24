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
var global_event_manager_service_1 = require("app/ugram/services/globalEventManager/global.event.manager.service");
var NavBarComponent = (function () {
    function NavBarComponent(globalEventsManager, _cookieService, router) {
        var _this = this;
        this.globalEventsManager = globalEventsManager;
        this._cookieService = _cookieService;
        this.router = router;
        this.showNavBar = false;
        //if (this._cookieService.get('token'))
        this.showNavBar = true;
        this.globalEventsManager.showNavBar.subscribe(function (mode) {
            _this.showNavBar = mode;
        });
    }
    NavBarComponent.prototype.logoutAction = function () {
        this._cookieService.removeAll();
        this.globalEventsManager.showNavBar.emit(false);
        this.router.navigate(['/signin']);
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: "navbar",
        templateUrl: 'app/ugram/templates/menu/menu.component.html',
    }),
    __metadata("design:paramtypes", [global_event_manager_service_1.GlobalEventsManager,
        core_2.CookieService,
        router_1.Router])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map