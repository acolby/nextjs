import { RematchRootState, RematchDispatch, Models } from '@rematch/core';

import { stores_profile } from '#src/stores/profile';

export interface RootModel extends Models<RootModel> {
  stores_profile: typeof stores_profile;
}

export const models: RootModel = {
  stores_profile,
}

export type RootState = RematchRootState<RootModel>;
export type Actions = RematchDispatch<RootModel>;