import { PostsAction, PostsActionTypes } from './posts.actions';

export const POSTS_FEATURE_KEY = 'posts';

/**
 * Interface for the 'Posts' data used in
 *  - PostsState, and
 *  - postsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface PostsState {
  list: Entity[]; // list of Posts; analogous to a sql normalized table
  selectedId?: string | number; // which Posts record has been selected
  loaded: boolean; // has the Posts list been loaded
  error?: any; // last none error (if any)
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: PostsState;
}

export const initialState: PostsState = {
  list: [],
  loaded: false
};

export function postsReducer(
  state: PostsState = initialState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionTypes.PostsLoaded: {
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
