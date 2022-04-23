import '../styles/index.css';

import { Comps_layout_main } from '#src/Comps';

function MyApp({ Component, pageProps }) {
  return (
    <Comps_layout_main>
      <Component {...pageProps} />
    </Comps_layout_main>
  );
}

export default MyApp;
