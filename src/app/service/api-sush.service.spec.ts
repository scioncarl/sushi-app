import { TestBed } from '@angular/core/testing';

import { ApiSushService } from './api-sush.service';

describe('ApiSushService', () => {
  let service: ApiSushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
