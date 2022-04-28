import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, PostsState } from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

const getLoaded = createSelector(
  getPostsState,
  (state: PostsState) => state.loaded
);
const getError = createSelector(
  getPostsState,
  (state: PostsState) => state.error
);

const getAllPosts = createSelector(
  getPostsState,
  getLoaded,
  (state: PostsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getPostsState,
  (state: PostsState) => state.selectedId
);
const getSelectedPosts = createSelector(
  getAllPosts,
  getSelectedId,
  (posts, id) => {
    const result = posts.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const postsQuery = {
  getLoaded,
  getError,
  getAllPosts,
  getSelectedPosts
};
