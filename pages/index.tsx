import styles from "../styles/about.module.scss";
import NavbarSide from "../components/dev/NavbarSide";
import Head from 'next/head';

function Dev(props: { posts: any; }) {
  return (
    <>
     <Head>
        <title>Red Velvet</title>
        <meta
          name='description'
          content='Crypto, Coding, Finance, and more'
        ></meta>
      </Head>
      <NavbarSide />
      <main className={styles["about"]}>
        <div className={styles["abstract"]}>
          <p>
            Under Construction. But the blog is up <a href="/blog">HERE</a>
          </p>
        </div>
      </main>
    </>
  );
}
Dev.layout = "L2";

export default Dev;

