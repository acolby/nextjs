import { Comps_marketing_hero } from '#src/Comps';
import Head from 'next/head';

export default function pages_splash() {
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
