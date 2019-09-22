import { TestBed } from '@angular/core/testing';

import { EglobalService } from './eglobal.service';

describe('EglobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EglobalService = TestBed.get(EglobalService);
    expect(service).toBeTruthy();
  });
});
