import React from 'react';

import { Disclosure } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSelector } from '#src/stores/hooks';
import { useRouter } from 'next/router';
import { Comps_misc_link, Comps_layout_main_profilemenu } from '#src/Comps';

interface Props {
  open: boolean;
  navigation: any[];
  userNavigation: any[];
}

export const Comps_layout_main_largeheadder = (props: Props) => {
  const navigation = useSelector((selects) => selects.stores_navigation);
  const router = useRouter();

  const { userNavigation, open = false } = props;

  return (
    <div className="Comps_layout_main_largeheadder max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {navigation
              .filter((item) => item.layout === 'Comps_layout_main')
              .map((item) => {
                const current =
                  `/${item.comp.split('_').slice(1).join('/')}` ===
                  router.pathname;
                return (
                  <Comps_misc_link
                    page={item.comp}
                    className={
                      (current
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700') +
                      ' inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    }
                  />
                );
              })}
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            type="button"
            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Comps_layout_main_profilemenu userNavigation={userNavigation} />
        </div>
        <div className="-mr-2 flex items-center sm:hidden">
          {/* Mobile menu button */}
          <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>
    </div>
  );
};
