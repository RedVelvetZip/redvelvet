import React from "react";
import Head from 'next/head'
import Header from "./Header";
import logo from '../assets/logo192.png'

const LayoutBlog = ({children} : { children: any}) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Crypto, Coding, Finance, and more"
      />
      {/* <meta
        property="og:image"
        content={logo}
      /> */}
      <meta name="og:title" content="Red Velvet" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header />
    {children}
  </>
);

export default LayoutBlog;
