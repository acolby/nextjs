import { RematchRootState, RematchDispatch, Models } from '@rematch/core';

import { stores_navigation } from '#src/stores/navigation';
import { stores_profile } from '#src/stores/profile';
import { stores_profile_wallet } from '#src/stores/profile/wallet';

export interface RootModel extends Models<RootModel> {
  stores_navigation: typeof stores_navigation;
  stores_profile: typeof stores_profile;
  stores_profile_wallet: typeof stores_profile_wallet;
}

export const models: RootModel = {
  stores_navigation,
  stores_profile,
  stores_profile_wallet,
}

export type RootState = RematchRootState<RootModel>;
export type Actions = RematchDispatch<RootModel>;