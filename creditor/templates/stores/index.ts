import { createModel } from '@rematch/core';
import type { RootModel } from '#src/stores/model';

type CREDITOR_UNDERSCORE_NAME_State = {
  name: string;
};

export const CREDITOR_UNDERSCORE_NAME = createModel<RootModel>()({
  state: {
    name: 'CREDITOR_UNDERSCORE_NAME',
  } as CREDITOR_UNDERSCORE_NAME_State,
  reducers: {
    rename(state, payload: string) {
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
