import { createSelector, createStructuredSelector } from '#src/selectors/util';

const selected = createStructuredSelector({
  navigation: (root) => root.stores_navigation,
});

export const selectors_mainnavlinks = createSelector(
  selected,
  ({ navigation }) => {
    return navigation.filter((item) => item.layout === 'Comps_layout_main');
  }
);
