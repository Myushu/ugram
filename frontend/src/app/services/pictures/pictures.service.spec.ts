/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PicturesService } from './pictures.service';

describe('PicturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicturesService]
    });
  });

  it('should ...', inject([PicturesService], (service: PicturesService) => {
    expect(service).toBeTruthy();
  }));
});
