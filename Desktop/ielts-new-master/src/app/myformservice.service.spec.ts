import { TestBed } from '@angular/core/testing';

import { MyformserviceService } from './myformservice.service';

describe('MyformserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyformserviceService = TestBed.get(MyformserviceService);
    expect(service).toBeTruthy();
  });
});
