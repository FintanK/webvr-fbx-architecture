import { Action } from '@ngrx/store';
import { Entity } from './posts.reducer';

export enum PostsActionTypes {
  LoadPosts = '[Posts] Load Posts',
  PostsLoaded = '[Posts] Posts Loaded',
  PostsLoadError = '[Posts] Posts Load Error'
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
}

export class PostsLoadError implements Action {
  readonly type = PostsActionTypes.PostsLoadError;
  constructor(public payload: any) {}
}

export class PostsLoaded implements Action {
  readonly type = PostsActionTypes.PostsLoaded;
  constructor(public payload: Entity[]) {}
}

export type PostsAction = LoadPosts | PostsLoaded | PostsLoadError;

export const fromPostsActions = {
  LoadPosts,
  PostsLoaded,
  PostsLoadError
};
