import { TestBed } from '@angular/core/testing';

import { ScenesService } from './scenes.service';

describe('ScenesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScenesService = TestBed.get(ScenesService);
    expect(service).toBeTruthy();
  });
});
