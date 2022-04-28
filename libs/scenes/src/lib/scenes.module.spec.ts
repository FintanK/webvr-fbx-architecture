import { async, TestBed } from '@angular/core/testing';
import { ScenesModule } from './scenes.module';

describe('ScenesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScenesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScenesModule).toBeDefined();
  });
});
