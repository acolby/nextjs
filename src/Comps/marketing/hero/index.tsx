import React from 'react';

interface Props {}

export const Comps_marketing_hero = (props: Props) => {
  return (
    <div className="Comps_marketing_hero hero min-h-screen bg-base-200 max-h-72">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello!!</h1>
          <p className="py-6">This is the hero component</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
