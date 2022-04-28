import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SCENES_FEATURE_KEY, ScenesState } from './scenes.reducer';

// Lookup the 'Scenes' feature state managed by NgRx
const getScenesState = createFeatureSelector<ScenesState>(SCENES_FEATURE_KEY);

const getLoaded = createSelector(
  getScenesState,
  (state: ScenesState) => state.loaded
);
const getError = createSelector(
  getScenesState,
  (state: ScenesState) => state.error
);

const getAllScenes = createSelector(
  getScenesState,
  getLoaded,
  (state: ScenesState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getScenesState,
  (state: ScenesState) => state.selectedId
);
const getSelectedScenes = createSelector(
  getAllScenes,
  getSelectedId,
  (scenes, id) => {
    const result = scenes.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const scenesQuery = {
  getLoaded,
  getError,
  getAllScenes,
  getSelectedScenes
};
