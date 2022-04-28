import { Entity, ScenesState } from './scenes.reducer';
import { scenesQuery } from './scenes.selectors';

describe('Scenes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getScenesId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createScenes = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      scenes: {
        list: [
          createScenes('PRODUCT-AAA'),
          createScenes('PRODUCT-BBB'),
          createScenes('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Scenes Selectors', () => {
    it('getAllScenes() should return the list of Scenes', () => {
      const results = scenesQuery.getAllScenes(storeState);
      const selId = getScenesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedScenes() should return the selected Entity', () => {
      const result = scenesQuery.getSelectedScenes(storeState);
      const selId = getScenesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = scenesQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = scenesQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
