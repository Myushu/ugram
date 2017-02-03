/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalEventManagerService } from './global-event-manager.service';

describe('GlobalEventManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalEventManagerService]
    });
  });

  it('should ...', inject([GlobalEventManagerService], (service: GlobalEventManagerService) => {
    expect(service).toBeTruthy();
  }));
});
