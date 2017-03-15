/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MentionsService } from './mentions.service';

describe('MentionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentionsService]
    });
  });

  it('should ...', inject([MentionsService], (service: MentionsService) => {
    expect(service).toBeTruthy();
  }));
});
