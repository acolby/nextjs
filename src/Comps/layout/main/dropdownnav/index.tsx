import React from 'react';

import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { useSelector } from '#src/stores/hooks';
import { useRouter } from 'next/router';

interface Props {
  navigation: any[];
  userNavigation: any[];
}

export const Comps_layout_main_dropdownnav = (props: Props) => {
  const user = useSelector((selects) => selects.stores_profile);
  const router = useRouter();
  const { navigation = [], userNavigation = [] } = props;

  console.log(router.pathname);

  return (
    <div className="Comps_layout_main_dropdownnav">
      <div className="pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={
              (item.current
                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800') +
              ' block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            }
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">
              {user.name}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {user.email}
            </div>
          </div>
          <button
            type="button"
            className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          {userNavigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    </div>
  );
};
