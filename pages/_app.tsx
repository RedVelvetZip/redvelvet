import React from 'react';
import { AppProps } from 'next/app'
import '../styles/globals.scss';
import Layout from '../components/Layout';
import LayoutDev from '../components/dev/LayoutDev';
const layouts = {
  L1: Layout,
  L2: LayoutDev,
};

  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp
