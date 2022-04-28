import { ScenesLoaded } from './scenes.actions';
import {
  ScenesState,
  Entity,
  initialState,
  scenesReducer
} from './scenes.reducer';

describe('Scenes Reducer', () => {
  const getScenesId = it => it['id'];
  let createScenes;

  beforeEach(() => {
    createScenes = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Scenes actions ', () => {
    it('should return set the list of known Scenes', () => {
      const sceness = [
        createScenes('PRODUCT-AAA'),
        createScenes('PRODUCT-zzz')
      ];
      const action = new ScenesLoaded(sceness);
      const result: ScenesState = scenesReducer(initialState, action);
      const selId: string = getScenesId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = scenesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
