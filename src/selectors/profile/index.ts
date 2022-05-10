export const selectors_profile_structued = {};
/* WIP

import { RootState } from '#src/stores/model';
import { createStructuredSelector, createSelector, Selector } from 'reselect';
import { getState } from '#src/stores';


const structured = createStructuredSelector({
  profile: (state: RootState) => state.stores_profile,
});

export const createRootSelector = <RootState>(
  key: Selector<RootState, number, never>
): Selector<RootState, string, never> => createSelector(key, (_foo) => "bar");

createRootSelector(
  (state) => { state
}



export const selectors_profile_structued = createSelector(
  (state: RootState) => structured(state as RootState),
  ({ profile }) => {
    return profile;
  }
);

const res = selectors_profile_structued(getState());
*/
