import React from 'react';
import { useSelector, useDispatch } from '#src/stores/hooks';

import { Comps_misc_placeholder } from '#src/Comps';

interface Props {}

export const Comps_misc_aaronsmess = (props: Props) => {
  const amount = useSelector(
    (stores) => stores.count.amount + stores.count.amount
  );
  const actions = useDispatch();

  return (
    <div className="Comps_misc_aaronsmess">
      <Comps_misc_placeholder>
        <p
          onClick={() => {
            actions.count.increment(3);
          }}
        >
          {amount}
        </p>
      </Comps_misc_placeholder>
    </div>
  );
};
