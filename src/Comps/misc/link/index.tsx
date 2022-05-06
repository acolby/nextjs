import React from 'react';

import Link from 'next/link';
import { useSelector } from '#src/stores/hooks';

interface Props {
  page: string;
  className: string;
}

export const Comps_misc_link = (props: Props) => {
  const { page = '' } = props;
  const navigations = useSelector((state) => state.stores_navigation);

  const navigation = navigations.find((nav) => {
    return nav.comp === page;
  }) || { layout: 'none', name: 'unknown' };

  const href = `/${page.split('_').slice(1).join('/')}`;
  const name = navigation.name;

  return (
    <Link href={href} key={name}>
      <a className={props.className}>{name}</a>
    </Link>
  );
};
