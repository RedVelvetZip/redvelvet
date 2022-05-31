import styles from "../styles/about.module.scss";
import NavbarSide from "../components/dev/NavbarSide";
import Head from 'next/head';
import Link from "next/link";

import DevLayout from '../components/dev/LayoutDev'
function Dev() {
  return (
    <>
     <Head>
        <title>Red Velvet</title>
        <meta
          name='description'
          content='Crypto, Coding, Finance, and more'
        ></meta>
      </Head>
      {/* <NavbarSide /> */}
      <main className={styles["about"]}>
        <div className={styles["abstract"]}>
          <p>
            Under Construction. But the blog is live <Link href="/blog">HERE</Link>
          </p>
        </div>
      </main>
    </>
  );
}
Dev.layout = DevLayout

export default Dev;

