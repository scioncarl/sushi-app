import { TestBed } from '@angular/core/testing';

import { ApiSusiService } from './api-susi.service';

describe('ApiSusiService', () => {
  let service: ApiSusiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSusiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
