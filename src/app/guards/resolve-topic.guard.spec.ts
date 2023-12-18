import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resolveTopicGuard } from './resolve-topic.guard';

describe('resolveTopicGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resolveTopicGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
