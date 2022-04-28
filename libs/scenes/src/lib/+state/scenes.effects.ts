import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ScenesPartialState } from './scenes.reducer';
import {
  LoadScenes,
  ScenesLoaded,
  ScenesLoadError,
  ScenesActionTypes
} from './scenes.actions';

@Injectable()
export class ScenesEffects {
  @Effect() loadScenes$ = this.dataPersistence.fetch(
    ScenesActionTypes.LoadScenes,
    {
      run: (action: LoadScenes, state: ScenesPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ScenesLoaded([]);
      },

      onError: (action: LoadScenes, error) => {
        console.error('Error', error);
        return new ScenesLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ScenesPartialState>
  ) {}
}
