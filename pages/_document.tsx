import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import BlogLayout from '../components/Layout'
class MyDocument extends Document {
  static layout: import("c:/Users/brads/Desktop/GitHub/redvelvet/types/pageWithLayouts").LayoutProps;
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
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
