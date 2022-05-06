import React from 'react';
import { Provider } from 'react-redux';
import { stores } from '#src/stores';
import { Comps_layout_main, Comps_layout_none } from '#src/Comps';
import '../styles/index.css';
import type { AppProps } from 'next/app';

type LayoutMap = {
  [key: string]: typeof Comps_layout_main;
};

const layoutMap: LayoutMap = {
  Comps_layout_main: Comps_layout_main,
  Comps_layout_none: Comps_layout_none,
};

const store = stores.init({});

export default function App({ Component, pageProps }: AppProps) {
  const navigation = store.getState().stores_navigation.find((nav) => {
    return nav.comp === Component.name;
  }) || { layout: 'Comps_layout_none' };

  const Layout = layoutMap[navigation.layout];

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
