import { init as initStore } from '@rematch/core';
import { RootState, RootModel, Actions, models } from '#src/stores/model';

export const actions = {} as Actions;

let _getState = (): RootState => {
  return {} as RootState;
};
export function getState(): RootState {
  return _getState();
}

export const stores = {
  init: (initial: any = {}) => {
    const _store = initStore<RootModel>({
      models,
    }); // TODO join immer
    // add the dispatch metthods to the dispatcher
    Object.keys(_store.dispatch).forEach((key) => {
      actions[key] = _store.dispatch[key];
    });
    _getState = _store.getState;
    return _store;
  },
};
