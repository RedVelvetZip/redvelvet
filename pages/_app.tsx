import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';
import PageWithLayoutType from '../types/pageWithLayouts';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import LayoutDev from '../components/dev/LayoutDev';
import Layout1 from '../components/Layout';
import Layout2 from '../components/dev/LayoutDev';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
} export default MyApp

// const layouts = {
//   L1: Layout1,
//   L2: Layout2,
// };

  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
// function MyApp({ Component, pageProps }: AppProps) {
//   const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
//   return (
//     <Layout>
//       <Component {...pageProps} />{" "}
//     </Layout>
//   );
// }

// export default MyApp
