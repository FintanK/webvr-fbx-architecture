import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { PostsEffects } from './posts.effects';
import { LoadPosts, PostsLoaded } from './posts.actions';

describe('PostsEffects', () => {
  let actions: Observable<any>;
  let effects: PostsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        PostsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(PostsEffects);
  });

  describe('loadPosts$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadPosts() });
      expect(effects.loadPosts$).toBeObservable(
        hot('-a-|', { a: new PostsLoaded([]) })
      );
    });
  });
});
