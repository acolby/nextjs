import Head from 'next/head';

export const pages_exchange = () => {
  return (
    <div>
      <Head>
        <title>{'pages_exchange'.split('_').slice(1).join('/')}</title>
        <meta name="description" content="pages_exchange Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>pages_exchange</h1>
      </main>
    </div>
  );
};

export default pages_exchange;

export const navigation = {
  name: 'Exchange',
  comp: 'pages_exchange',
  layout: 'Comps_layout_main',
};
