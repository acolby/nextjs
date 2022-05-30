import React from 'react';

import { Comps_misc_placeholder } from '#src/Comps';

// import { createStructureSelector } from '#src/selectors/util'
// import { userSelector } from '#src/stors/hooks';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const CREDITOR_UNDERSCORE_NAME = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  // const selected = useSelector((state) => selector(state, props));
  const key = props.idKey || 'default';

  return (
    <div id={`CREDITOR_UNDERSCORE_NAME:${key}`} key={key}>
      <Comps_misc_placeholder>
        <p>CREDITOR_UNDERSCORE_NAME</p>
      </Comps_misc_placeholder>
    </div>
  );
};
