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
var router_1 = require("@angular/router");
var pictures_service_1 = require("app/ugram/services/picture/pictures.service");
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
    return PictureComponent;
}());
PictureComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: 'app/ugram/templates/picture/picture.component.html',
        providers: [pictures_service_1.PicturesService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        pictures_service_1.PicturesService,
        router_1.ActivatedRoute])
], PictureComponent);
exports.PictureComponent = PictureComponent;
//# sourceMappingURL=picture.component.js.map