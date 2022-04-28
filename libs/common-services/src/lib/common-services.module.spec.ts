import { async, TestBed } from '@angular/core/testing';
import { CommonServicesModule } from './common-services.module';

describe('CommonServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonServicesModule).toBeDefined();
  });
});
