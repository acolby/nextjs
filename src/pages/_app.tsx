import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { stores } from '#src/stores';
import { Comps_layout_main } from '#src/Comps';
import '../styles/index.css';
import type { AppProps } from 'next/app';

const layoutMap = {
  main: Comps_layout_main,
};

const store = stores.init({});

export default function App({ Component, pageProps }: AppProps) {
  const Layout = layoutMap[Component?.navigation?.layout] || Fragment;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
