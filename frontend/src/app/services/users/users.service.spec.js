/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var users_service_1 = require('./users.service');
describe('UsersService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [users_service_1.UsersService]
        });
    });
    it('should ...', testing_1.inject([users_service_1.UsersService], function (service) {
        expect(service).toBeTruthy();
    }));
});
