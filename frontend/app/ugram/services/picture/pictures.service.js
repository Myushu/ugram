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
    PicturesService.prototype.get_pictures = function (page_size, page) {
        var _this = this;
        var req = {
            method: "GET",
            url: core_api_service_1.CoreApiService.getRoute().pictures.get_pictures + '?page=' + page + '&perPage=' + page_size,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.get_picture = function (user_id, image_id) {
        var _this = this;
        var url = core_api_service_1.CoreApiService.getRoute().pictures.get_user_picture;
        var url = url.replace("{user_id}", user_id);
        var url = url.replace("{picture_id}", image_id);
        var req = {
            method: "GET",
            url: url,
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.get_user_picture = function (user_id) {
        var _this = this;
        var url = core_api_service_1.CoreApiService.getRoute().pictures.get_user_pictures;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "GET",
            url: url
        };
        return new Promise(function (resolve, reject) {
            _this.coreApiService.request(req).then(function (data) {
                var json = JSON.parse((data._body));
                resolve(json);
            });
        });
    };
    PicturesService.prototype.timeSince = function (date) {
        var seconds = Math.floor((+new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };
    PicturesService.prototype.format_pucture = function (pics) {
        if (!pics.length)
            pics.timeSince = this.timeSince(pics.createdDate);
        else {
            for (var i = 0; i < pics.length; i++) {
                pics[i].timeSince = this.timeSince(pics[i].createdDate);
            }
        }
        return (pics);
    };
    return PicturesService;
}());
PicturesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_api_service_1.CoreApiService])
], PicturesService);
exports.PicturesService = PicturesService;
//# sourceMappingURL=pictures.service.js.map