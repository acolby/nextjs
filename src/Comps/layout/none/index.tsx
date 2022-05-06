import React from 'react';

interface Props {
  children: JSX.Element;
}

export const Comps_layout_none = (props: Props) => {
  return <div className="Comps_layout_none">{props.children}</div>;
};
