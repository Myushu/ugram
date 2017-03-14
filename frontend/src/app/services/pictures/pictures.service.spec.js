/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var pictures_service_1 = require('./pictures.service');
describe('PicturesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [pictures_service_1.PicturesService]
        });
    });
    it('should ...', testing_1.inject([pictures_service_1.PicturesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
