import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { ProtectedGuard } from './protected.guard';

describe('ProtectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ProtectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
