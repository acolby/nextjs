import React from 'react';

import { Menu } from '@headlessui/react';
import { useSelector, useDispatch } from '#src/stores/hooks';

interface Props {
  userNavigation: any[];
}

export const Comps_layout_main_profilemenu = (props: Props) => {
  const user = useSelector((selects) => selects.stores_profile);
  const actions = useDispatch();

  const { userNavigation } = props;
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
        </Menu.Button>
      </div>

      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {userNavigation.map((item) => (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <a
                href={item.href}
                className={
                  (active ? 'bg-gray-100' : '') +
                  ' block px-4 py-2 text-sm text-gray-700'
                }
              >
                {item.name}
                {user.name}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
