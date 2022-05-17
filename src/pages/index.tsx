import Head from 'next/head';
import { Comps_marketing_hero } from '#src/Comps';

export default function index() {
  return (
    <div>
      <Head>
        <title>{'pages_splash'.split('_').slice(1).join('/')}</title>
        <meta name="description" content="pages_splash Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Comps_marketing_hero />
      </main>
    </div>
  );
}

export const navigation = {
  name: 'Splash',
  comp: 'index',
  layout: 'Comps_layout_none',
};
