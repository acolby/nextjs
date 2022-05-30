import React from 'react';

import { useSelector } from '#src/stores/hooks';

interface Props {
  tokens?: string;
}

export const Comps_webthree_walletoverview = (props: Props) => {
  const wallet = useSelector((state) => state.stores_wallet);

  return (
    <div className="Comps_webthree_walletoverview">type = {wallet.balance}</div>
  );
};
