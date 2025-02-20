import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
