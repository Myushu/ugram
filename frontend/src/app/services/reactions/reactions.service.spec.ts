/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReactionsService } from './reactions.service';

describe('ReactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactionsService]
    });
  });

  it('should ...', inject([ReactionsService], (service: ReactionsService) => {
    expect(service).toBeTruthy();
  }));
});
