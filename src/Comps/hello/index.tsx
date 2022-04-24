import React from 'react';

interface Props {}

export const Comps_hello = (props: Props) => {
  console.log('--Comps_hello');
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
      <ul className="list-disc list-inside">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      <p className="diagonal-fractions">1/2 3/4 5/6</p>
      <label className="btn btn-circle swap swap-rotate">
        <input type="checkbox" />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  );
};
