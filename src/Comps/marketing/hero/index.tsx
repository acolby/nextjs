import { Comps_misc_creatbutton } from '#src/Comps';
import React from 'react';

const defaultProps = {
  key: 'default',
} as {
  key?: string;
  children?: JSX.Element;
};

export const Comps_marketing_hero = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  return (
    <div className="Comps_marketing_hero hero min-h-screen bg-base-200 max-h-72">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello!!</h1>
          <p className="py-6">This is the hero component</p>
          <Comps_misc_creatbutton text="Get Started" />
        </div>
      </div>
    </div>
  );
};
