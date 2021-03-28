import { configureAppStore } from '../configureStore';
import { history } from 'router';

describe('configureStore', () => {
  it('should return a store with injected enhancers', () => {
    const store = configureAppStore(history);
    expect(store).toEqual(
      expect.objectContaining({
        runSaga: expect.any(Function),
        injectedReducers: expect.any(Object),
        injectedSagas: expect.any(Object),
      }),
    );
  });

  it('should return an empty store', () => {
    const store = configureAppStore(history);
    expect(store.getState()).toBeUndefined();
  });
});
