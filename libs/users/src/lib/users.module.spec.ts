import { async, TestBed } from '@angular/core/testing';
import { UsersModule } from './users.module';

describe('UsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UsersModule).toBeDefined();
  });
});
