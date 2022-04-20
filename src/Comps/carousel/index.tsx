import React from 'react';

import { Comps_misc_placeholder } from '#src/Comps';

interface Props {}

export const Comps_carousel = (props: Props) => {
  return (
    <div className="Comps_carousel carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
          className="w-full"
        />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
          className="w-full"
        />
      </div>
      <div id="item3" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
          className="w-full"
        />
      </div>
      <div id="item4" className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
          className="w-full"
        />
      </div>
    </div>
  );
};
