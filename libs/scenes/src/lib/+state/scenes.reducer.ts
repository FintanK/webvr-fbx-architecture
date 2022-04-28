import { ScenesAction, ScenesActionTypes } from './scenes.actions';

export const SCENES_FEATURE_KEY = 'scenes';

/**
 * Interface for the 'Scenes' data used in
 *  - ScenesState, and
 *  - scenesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ScenesState {
  list: Entity[]; // list of Scenes; analogous to a sql normalized table
  selectedId?: string | number; // which Scenes record has been selected
  loaded: boolean; // has the Scenes list been loaded
  error?: any; // last none error (if any)
}

export interface ScenesPartialState {
  readonly [SCENES_FEATURE_KEY]: ScenesState;
}

export const initialState: ScenesState = {
  list: [],
  loaded: false
};

export function scenesReducer(
  state: ScenesState = initialState,
  action: ScenesAction
): ScenesState {
  switch (action.type) {
    case ScenesActionTypes.ScenesLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
