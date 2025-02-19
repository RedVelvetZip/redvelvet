import React, { ReactElement } from "react";
import Head from "next/head";
import Header from "./Header";
import logo from "../assets/logo192.png";
import { Analytics } from "@vercel/analytics/next";
import type { LayoutProps } from "../types/pageWithLayouts";

const BlogLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crypto, Coding, Finance, & More" />
        {/* <meta
          property="og:image"
          content={logo}
        /> */}
        <meta name="og:title" content="Red Velvet" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Analytics />
    </>
  );
};

export default BlogLayout;
