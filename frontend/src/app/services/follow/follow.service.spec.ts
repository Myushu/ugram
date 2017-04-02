/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FollowService } from './follow.service';

describe('FollowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowService]
    });
  });

  it('should ...', inject([FollowService], (service: FollowService) => {
    expect(service).toBeTruthy();
  }));
});
