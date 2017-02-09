"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-cookie/core');
var global_event_manager_service_1 = require("app/services/globalEventManager/global-event-manager.service");
var NavComponent = (function () {
    function NavComponent(globalEventsManager, _cookieService, router) {
        this.globalEventsManager = globalEventsManager;
        this._cookieService = _cookieService;
        this.router = router;
        this.showNavBar = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.showMenu = function () {
        return (this._cookieService.get('token'));
    };
    NavComponent.prototype.logoutAction = function () {
        this._cookieService.removeAll();
        this.router.navigate(['/login']);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css'],
            providers: [core_2.CookieService, global_event_manager_service_1.GlobalEventManagerService]
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
