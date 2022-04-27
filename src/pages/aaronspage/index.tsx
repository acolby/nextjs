import Head from 'next/head';
import { Comps_layout_main } from '#src/Comps';

export const pages_aaronspage = () => {
  return (
    <div>
      <Head>
        <title>{'pages_aaronspage'.split('_').slice(1).join('/')}</title>
        <meta name="description" content="pages_aaronspage Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>pages_aaronspage</h1>
      </main>
    </div>
  );
};

export default pages_aaronspage;

export const navigation = {
  name: 'Aarons',
  layout: 'main',
  href: '#',
};

pages_aaronspage.navigation = navigation;
