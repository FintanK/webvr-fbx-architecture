import { PostsLoaded } from './posts.actions';
import {
  PostsState,
  Entity,
  initialState,
  postsReducer
} from './posts.reducer';

describe('Posts Reducer', () => {
  const getPostsId = it => it['id'];
  let createPosts;

  beforeEach(() => {
    createPosts = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Posts actions ', () => {
    it('should return set the list of known Posts', () => {
      const postss = [createPosts('PRODUCT-AAA'), createPosts('PRODUCT-zzz')];
      const action = new PostsLoaded(postss);
      const result: PostsState = postsReducer(initialState, action);
      const selId: string = getPostsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = postsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
