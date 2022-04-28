import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ScenesPartialState } from './scenes.reducer';
import { scenesQuery } from './scenes.selectors';
import { LoadScenes } from './scenes.actions';

@Injectable()
export class ScenesFacade {
  loaded$ = this.store.pipe(select(scenesQuery.getLoaded));
  allScenes$ = this.store.pipe(select(scenesQuery.getAllScenes));
  selectedScenes$ = this.store.pipe(select(scenesQuery.getSelectedScenes));

  constructor(private store: Store<ScenesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadScenes());
  }
}
