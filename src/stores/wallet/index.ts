import { createModel } from '@rematch/core';
import type { RootModel } from '#src/stores/model';

type stores_wallet_State = {
  type?: 'Solana' | 'Ethereum' | 'BSC';
  connect: boolean;
  balance: number;
};

export const stores_wallet = createModel<RootModel>()({
  state: {
    type: undefined,
    connect: false,
    balance: 30,
  } as stores_wallet_State,
  reducers: {
    set(state, payload: stores_wallet_State) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async connectWallet(payload: string, state) {
      dispatch.stores_wallet.set({
        type: 'Solana',
        connect: true,
        balance: 30,
      });
    },
  }),
});
