"use strict";
var protractor_1 = require('protractor');
var UgramPage = (function () {
    function UgramPage() {
    }
    UgramPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    UgramPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return UgramPage;
}());
exports.UgramPage = UgramPage;
