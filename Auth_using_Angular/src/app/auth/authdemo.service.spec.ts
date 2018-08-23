import { TestBed, inject } from '@angular/core/testing';

import { AuthdemoService } from './authdemo.service';

describe('AuthdemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthdemoService]
    });
  });

  it('should be created', inject([AuthdemoService], (service: AuthdemoService) => {
    expect(service).toBeTruthy();
  }));
});
