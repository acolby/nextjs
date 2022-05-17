/* CREDITOR_GENERATED */
import { RematchRootState, RematchDispatch, Models } from '@rematch/core';

import { stores_navigation } from '#src/stores/navigation';
import { stores_profile } from '#src/stores/profile';
import { stores_wallet } from '#src/stores/wallet';

export interface RootModel extends Models<RootModel> {
  stores_navigation: typeof stores_navigation;
  stores_profile: typeof stores_profile;
  stores_wallet: typeof stores_wallet;
}

export const models: RootModel = {
  stores_navigation,
  stores_profile,
  stores_wallet,
}

export type RootState = RematchRootState<RootModel>;
export type Actions = RematchDispatch<RootModel>;