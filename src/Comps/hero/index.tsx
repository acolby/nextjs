import React from 'react';

import { Comps_misc_placeholder } from '#src/Comps';

interface Props {}

export const Comps_hero = (props: Props) => {
  return (
    <div className="Comps_hero hero min-h-screen bg-base-200 max-h-72">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};