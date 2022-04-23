import Head from 'next/head';

export default function pages_settings() {
  return (
    <div>
      <Head>
        <title>
          {'pages_settings'.split('_').slice(1).join('/')}
        </title>
        <meta name="description" content="pages_settings Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>pages_settings</h1>
      </main>
    </div>
  );
}
