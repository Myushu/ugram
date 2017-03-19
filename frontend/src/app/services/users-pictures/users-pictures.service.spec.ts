/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersPicturesService } from './users-pictures.service';

describe('UsersPicturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersPicturesService]
    });
  });

  it('should ...', inject([UsersPicturesService], (service: UsersPicturesService) => {
    expect(service).toBeTruthy();
  }));
});
