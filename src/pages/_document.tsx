import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />

        <meta name="application-name" content="Uma bici" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Uma bici" />
        <meta name="description" content="Uma bici, várias histórias" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000" />

        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://umabici.com" />
        <meta name="twitter:title" content="Uma bici" />
        <meta name="twitter:description" content="Uma bici, várias histórias" />
        <meta name="twitter:image" content="https://umabici.com/icons/android-chrome-192x192.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Uma bici" />
        <meta property="og:description" content="Uma bici, várias histórias." />
        <meta property="og:site_name" content="Uma bici" />
        <meta property="og:url" content="https://umabici.com" />
        <meta property="og:image" content="https://umabici.com/icons/apple-touch-icon.png" />

        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZL3TCPXP3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8ZL3TCPXP3');`
          }}
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
