import { Action } from '@ngrx/store';
import { Entity } from './scenes.reducer';

export enum ScenesActionTypes {
  LoadScenes = '[Scenes] Load Scenes',
  ScenesLoaded = '[Scenes] Scenes Loaded',
  ScenesLoadError = '[Scenes] Scenes Load Error'
}

export class LoadScenes implements Action {
  readonly type = ScenesActionTypes.LoadScenes;
}

export class ScenesLoadError implements Action {
  readonly type = ScenesActionTypes.ScenesLoadError;
  constructor(public payload: any) {}
}

export class ScenesLoaded implements Action {
  readonly type = ScenesActionTypes.ScenesLoaded;
  constructor(public payload: Entity[]) {}
}

export type ScenesAction = LoadScenes | ScenesLoaded | ScenesLoadError;

export const fromScenesActions = {
  LoadScenes,
  ScenesLoaded,
  ScenesLoadError
};
