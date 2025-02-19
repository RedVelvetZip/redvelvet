import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import PageWithLayoutType from "../types/pageWithLayouts";
import "../styles/globals.scss";
import BlogLayout from "../components/Layout";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || BlogLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
