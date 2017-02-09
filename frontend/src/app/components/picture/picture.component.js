"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var pictures_service_1 = require('app/services/pictures/pictures.service');
var PictureComponent = (function () {
    function PictureComponent(
        //private _cookieService:CookieService,
        router, picturesService, Route) {
        this.router = router;
        this.picturesService = picturesService;
        this.Route = Route;
        this.image = [];
    }
    PictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Route.params.subscribe(function (params) {
            _this.userId = params['userid'];
            _this.imageId = params['id'];
            _this.picturesService.get_picture(_this.userId, _this.imageId).then(function (res) {
                console.log(res);
                _this.image = _this.picturesService.format_pucture(res);
                console.log(_this.image);
            });
        });
    };
    PictureComponent = __decorate([
        core_1.Component({
            selector: 'app-picture',
            templateUrl: './picture.component.html',
            styleUrls: ['./picture.component.css'],
            providers: [pictures_service_1.PicturesService]
        })
    ], PictureComponent);
    return PictureComponent;
}());
exports.PictureComponent = PictureComponent;
