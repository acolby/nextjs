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
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    loggedIn: true,
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
    // async renameAsync(payload: string, state) {
    //   dispatch.stores_profile.rename(payload);
    // },
  }),
});
