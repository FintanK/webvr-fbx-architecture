import { async, TestBed } from '@angular/core/testing';
import { OpenapiModule } from './openapi.module';

describe('OpenapiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OpenapiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OpenapiModule).toBeDefined();
  });
});
