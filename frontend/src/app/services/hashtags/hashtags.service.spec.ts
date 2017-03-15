/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HashtagsService } from './hashtags.service';

describe('HashtagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashtagsService]
    });
  });

  it('should ...', inject([HashtagsService], (service: HashtagsService) => {
    expect(service).toBeTruthy();
  }));
});
