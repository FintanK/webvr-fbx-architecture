import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ScenesEffects } from './scenes.effects';
import { LoadScenes, ScenesLoaded } from './scenes.actions';

describe('ScenesEffects', () => {
  let actions: Observable<any>;
  let effects: ScenesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ScenesEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ScenesEffects);
  });

  describe('loadScenes$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadScenes() });
      expect(effects.loadScenes$).toBeObservable(
        hot('-a-|', { a: new ScenesLoaded([]) })
      );
    });
  });
});
