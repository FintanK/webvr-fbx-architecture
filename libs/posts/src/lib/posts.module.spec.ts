import { async, TestBed } from '@angular/core/testing';
import { PostsModule } from './posts.module';

describe('PostsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PostsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PostsModule).toBeDefined();
  });
});
