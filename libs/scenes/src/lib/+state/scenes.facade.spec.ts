import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { ScenesEffects } from './scenes.effects';
import { ScenesFacade } from './scenes.facade';

import { scenesQuery } from './scenes.selectors';
import { LoadScenes, ScenesLoaded } from './scenes.actions';
import {
  ScenesState,
  Entity,
  initialState,
  scenesReducer
} from './scenes.reducer';

interface TestSchema {
  scenes: ScenesState;
}

describe('ScenesFacade', () => {
  let facade: ScenesFacade;
  let store: Store<TestSchema>;
  let createScenes;

  beforeEach(() => {
    createScenes = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('scenes', scenesReducer, { initialState }),
          EffectsModule.forFeature([ScenesEffects])
        ],
        providers: [ScenesFacade]
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
      facade = TestBed.get(ScenesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allScenes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allScenes$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ScenesLoaded` to manually submit list for state management
     */
    it('allScenes$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allScenes$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new ScenesLoaded([createScenes('AAA'), createScenes('BBB')])
        );

        list = await readFirst(facade.allScenes$);
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
