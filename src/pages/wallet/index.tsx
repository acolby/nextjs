import Head from 'next/head';
import { Comps_webthree_walletoverview } from '#src/Comps';

export const pages_wallet = () => {
  return (
    <div>
      <Head>
        <title>{'pages_wallet'.split('_').slice(1).join('/')}</title>
        <meta name="description" content="pages_wallet Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Your Wallet</h1>
        <Comps_webthree_walletoverview token={'asdfsad'} />
      </main>
    </div>
  );
};

export default pages_wallet;

export const navigation = {
  name: 'Wallet',
  comp: 'pages_wallet',
  layout: 'Comps_layout_main',
};
