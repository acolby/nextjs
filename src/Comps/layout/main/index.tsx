import React from 'react';

import {
  Comps_layout_main_dropdownnav,
  Comps_layout_main_largeheadder,
} from '#src/Comps';

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { useSelector } from '#src/stores/hooks';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

interface Props {
  children: JSX.Element;
}

export const Comps_layout_main = (props: Props) => {
  const user = useSelector((select) => select.stores_profile);

  return (
    <>
      <div className="Comps_layout_main min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <Comps_layout_main_largeheadder
                navigation={navigation}
                userNavigation={userNavigation}
                open={open}
              />
              <Disclosure.Panel className="sm:hidden">
                <Comps_layout_main_dropdownnav
                  navigation={navigation}
                  userNavigation={userNavigation}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {props.children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
