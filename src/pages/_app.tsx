import React from 'react';
import { Provider } from 'react-redux';
import { stores } from '#src/stores';
import '../styles/index.css';
import { Comps_layout_main } from '#src/Comps';

interface Props {
  Component: React.ElementType;
}

const store = stores.init();

function MyApp({ Component }: Props) {
  return (
    <Provider store={store}>
      <Comps_layout_main>
        <Component />
      </Comps_layout_main>
    </Provider>
  );
}

export default MyApp;
