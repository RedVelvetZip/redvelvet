import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import BlogLayout from '../components/Layout'
class MyDocument extends Document {
  static layout: import("../types/pageWithLayouts").LayoutProps;
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="https://redvelvet.tech/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Crypto, Coding, Finance & More. View my projects, my articles, and my portfolio."
          />

          <meta property="og:url" content="redvelvet.tech" />
          <meta property="og:type" content="website" />
          <meta data-hid="og:title" name="og:title" property="og:title" content="Red Velvet Blog" />
          <meta data-hid="og:description" name="og:description" property="og:description" content="Crypto, Coding, Finance & More" />
          <meta data-hid="og:image" name="og:image" property="og:image" content="https://github.com/RedVelvetZip/redvelvet/tree/main/public/logo512.png" />
          <meta data-hid="og:image:secure_url" name="og:image:secure_url" property="og:image:secure_url" content="https://github.com/RedVelvetZip/redvelvet/tree/main/public/logo512.png" />
          <meta data-hid="og:image:alt" name="og:image:alt" property="og:image:alt" content="Red Velvet" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@redvelvetzip" />
          <meta data-hid="twitter:title" name="twitter:title" property="twitter:title" content="Red Velvet Blog" />
          <meta data-hid="twitter:description" name="twitter:description" property="twitter:description" content="Crypto, Coding, Finance & More" />
          <meta data-hid="twitter:image" name="twitter:image" property="twitter:image" content="https://github.com/RedVelvetZip/redvelvet/tree/main/public/logo512.png" />
          <meta data-hid="twitter:image:alt" name="twitter:image:alt" property="twitter:image:alt" content="Red Velvet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.layout = BlogLayout

export default MyDocument;
