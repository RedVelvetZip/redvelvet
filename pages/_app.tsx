import React from 'react';
import { AppProps } from 'next/app'
import '../styles/globals.scss';
import { LayoutBlog } from '../components/Layout';
import { LayoutDev } from '../components/dev/LayoutDev';
const layouts = {
  L1: LayoutBlog,
  L2: LayoutDev,
};

const App = ({ Component, pageProps }: AppProps) => {
  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <LayoutBlog>
      <Component {...pageProps} />
    </LayoutBlog>
  );
};
export default App;

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;
