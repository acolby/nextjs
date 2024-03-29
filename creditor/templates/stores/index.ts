import { createModel } from '@rematch/core';
import type { RootModel } from '#src/stores/model';

const defaultState = {
  name: '',
};

export const CREDITOR_UNDERSCORE_NAME = createModel<RootModel>()({
  state: defaultState,
  reducers: {
    rename(state, payload: string): typeof defaultState {
      return {
        ...state,
        name: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // async renameAsync(payload: string, state) {
    //   dispatch.CREDITOR_UNDERSCORE_NAME.rename(payload);
    // },
  }),
});
