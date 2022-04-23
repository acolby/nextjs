import React, { ReactNode } from 'react';

interface Props {
  children: JSX.Element;
}

export const Comps_misc_placeholder = (props: Props) => {
  return (
    <div className="Comps_misc_placeholder relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="mt-2 block text-sm font-medium text-gray-900">
        {props.children}
      </span>
    </div>
  );
};
