import styles from "../styles/dev.module.scss";
import Head from 'next/head';
import Image from "next/image";
import logoGif from "../assets/logo2.gif"
// import logoWebm from "../assets/logo2.webm"
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
      <main className={styles["dev"]}>
        <div className={styles["circle"]}>
          <div className={styles["logo"]}>
            <Image
              src={logoGif}
              alt="Red Velvet logo"
              layout="responsive"
              objectFit="contain"
            >
            </Image>
          </div>
        </div>
      </main>
    </>
  );
}
Dev.layout = DevLayout

export default Dev;

