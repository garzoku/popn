import { TestBed } from '@angular/core/testing';

import { CensorService } from './censor.service';

describe('CensorService', () => {
  let service: CensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
