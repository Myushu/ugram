"use strict";
var app_po_1 = require('./app.po');
describe('ugram App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.UgramPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
