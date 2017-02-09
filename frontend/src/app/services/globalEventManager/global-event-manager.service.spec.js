/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var global_event_manager_service_1 = require('./global-event-manager.service');
describe('GlobalEventManagerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [global_event_manager_service_1.GlobalEventManagerService]
        });
    });
    it('should ...', testing_1.inject([global_event_manager_service_1.GlobalEventManagerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
