import { createSelector, createStructuredSelector } from '#src/selectors/util';

const selected = createStructuredSelector({
  property1: (root, props) => true,
  property2: (root, props) => false,
});

export const CREDITOR_UNDERSCORE_NAME = createSelector(
  selected,
  ({ property1, property2 }) => {
    return property1 && property2;
  }
);
