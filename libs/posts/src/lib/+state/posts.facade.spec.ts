import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { PostsEffects } from './posts.effects';
import { PostsFacade } from './posts.facade';

import { postsQuery } from './posts.selectors';
import { LoadPosts, PostsLoaded } from './posts.actions';
import {
  PostsState,
  Entity,
  initialState,
  postsReducer
} from './posts.reducer';

interface TestSchema {
  posts: PostsState;
}

describe('PostsFacade', () => {
  let facade: PostsFacade;
  let store: Store<TestSchema>;
  let createPosts;

  beforeEach(() => {
    createPosts = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('posts', postsReducer, { initialState }),
          EffectsModule.forFeature([PostsEffects])
        ],
        providers: [PostsFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(PostsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allPosts$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allPosts$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `PostsLoaded` to manually submit list for state management
     */
    it('allPosts$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allPosts$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new PostsLoaded([createPosts('AAA'), createPosts('BBB')])
        );

        list = await readFirst(facade.allPosts$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
