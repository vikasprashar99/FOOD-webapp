import { TestBed } from '@angular/core/testing';

import { GlobalcolorService } from './globalcolor.service';

describe('GlobalcolorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalcolorService = TestBed.get(GlobalcolorService);
    expect(service).toBeTruthy();
  });
});
