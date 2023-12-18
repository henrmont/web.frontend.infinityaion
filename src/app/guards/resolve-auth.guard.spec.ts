import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resolveAuthGuard } from './resolve-auth.guard';

describe('resolveAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resolveAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
