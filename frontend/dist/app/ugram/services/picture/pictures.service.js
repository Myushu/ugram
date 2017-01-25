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
var core_api_service_1 = require("app/ugram/services/api/core.api.service");
var PicturesService = (function () {
    function PicturesService(coreApiService) {
        this.coreApiService = coreApiService;
    }
    PicturesService.prototype.get_pictures = function () {
        var _this = this;
        var req = {
            method: "GET",
            url: core_api_service_1.CoreApiService.getRoute().pictures.get_pictures,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    return PicturesService;
}());
PicturesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_api_service_1.CoreApiService])
], PicturesService);
exports.PicturesService = PicturesService;
