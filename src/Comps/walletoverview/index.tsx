import React from 'react';

import { Comps_misc_placeholder } from '#src/Comps';

import { createStructuredSelector } from '#src/selectors/util';
import { useSelector } from '#src/stores/hooks';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

const selector = createStructuredSelector({
  balance: (root) => root.stores_wallet.balance,
});

export const Comps_walletoverview = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  const selected = useSelector((state) => selector(state, props));
  const key = props.idKey || 'default';

  return (
    <div id={`Comps_walletoverview:${key}`} key={key}>
      <Comps_misc_placeholder>
        <p>Comps_walletoverview :: {selected.balance}</p>
      </Comps_misc_placeholder>
    </div>
  );
};
