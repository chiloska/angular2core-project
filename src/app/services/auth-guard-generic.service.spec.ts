/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardGenericService } from './auth-guard-generic.service';

describe('AuthGuardGenericService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGenericService]
    });
  });

  it('should ...', inject([AuthGuardGenericService], (service: AuthGuardGenericService) => {
    expect(service).toBeTruthy();
  }));
});
