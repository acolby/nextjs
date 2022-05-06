import { createModel } from '@rematch/core';
import type { RootModel } from '#src/stores/model';

type stores_user_State = {
  name: string;
  email: string;
  imageUrl: string;
  loggedIn: boolean;
};

export const stores_profile = createModel<RootModel>()({
  state: {
    name: '',
    email: '',
    imageUrl: '',
    loggedIn: false,
  } as stores_user_State,
  reducers: {
    logout(state) {
      return {
        name: '',
        email: '',
        imageUrl: '',
        loggedIn: false,
      };
    },
  },
  effects: (dispatch) => ({
    async login(payload: string, state) {},
  }),
});
