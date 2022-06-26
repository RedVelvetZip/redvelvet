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
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
          {/* <title>
            Red Velvet
          </title> */}
          <meta property="og:url" content="redvelvet.tech" />
          <meta property="og:type" content="website" />
          {/* <meta
          property="og:title"
          content="Social Media Preview Working?"
        /> */}
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:description"
            content="Crypto, Coding, Finance & More"
          />
          <meta property="og:image" content={"url of image"} />
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
