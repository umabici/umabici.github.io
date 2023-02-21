import 'bootstrap/scss/bootstrap.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="stylesheet" type="text/css" href="/css/paper-kit.css" />
      <link rel="stylesheet" type="text/css" href="/css/app.css" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>
    <Component {...pageProps} />;
  </>;
}
