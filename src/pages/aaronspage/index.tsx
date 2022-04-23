import { Comps_misc_aaronsmess } from '#src/Comps';
import Head from 'next/head';

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
        <Comps_misc_aaronsmess />
      </main>
    </div>
  );
};

export default pages_aaronspage;
