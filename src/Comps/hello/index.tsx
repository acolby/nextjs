import React from 'react';

interface Props {}

export const Comps_hello = (props: Props) => {
  return (
    <div>
      <p>
        I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
        at
        <a className="underline decoration-sky-500">My Company, Inc</a>. Outside
        of work, I like to{' '}
        <a className="underline decoration-pink-500">watch pod-racing</a> and
        have <a className="underline decoration-indigo-500">light-saber</a>{' '}
        fights.
      </p>
    </div>
  );
};
