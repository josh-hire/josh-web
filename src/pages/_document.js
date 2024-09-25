import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { createStylesServer, ServerStyles } from '@mantine/ssr';

const stylesServer = createStylesServer();
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} key="styles" server={stylesServer} />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <Script id="google-tagmanager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WRPN6TD');
            `}
          </Script>
        </Head>
        <body>
          <noscript>
            <iframe
              height="0"
              src="https://www.googletagmanager.com/ns.html?id=GTM-WRPN6TD"
              style={{ display: 'none', Digital: 'hidden' }}
              width="0"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
