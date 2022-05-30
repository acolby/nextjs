import React from 'react';

// import { createStructureSelector } from '#src/selectors/util'
// ipoort { userSelector } from '#src/stors/hooks';

const defaultProps = {
  key: 'default',
  text: '',
} as {
  text: string;
  key?: string;
  children?: JSX.Element;
};

// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_misc_creatbutton = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  // const selected = useSelector((state) => selector(state, props));

  return (
    <button className="Comps_misc_creatbutton btn btn-primary">
      {props.text}
    </button>
  );
};
