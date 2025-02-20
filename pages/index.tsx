import styles from "../styles/dev.module.scss";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo2.gif";
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Dev() {
  return (
    <>
      <Head>
        <title>Red Velvet</title>
        <meta name="description" content="Crypto, Coding, Finance, & More" />
        <meta property="og:url" content="https://redvelvet.tech" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://redvelvet.tech/logo512.png"
        />{" "}
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className={styles["devbody"]}>
        {" "}
        <main className={styles["dev"]}>
          <div className={styles["icons-row"]}>
            <div className={styles["icon-box"]}>
              <a
                href="https://twitter.com/RedVelvetZip"
                target="_blank"
                rel="noreferrer"
                className={styles["icon-link"]}
              >
                <Image alt="Twitter" src={twitterLogo} />
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a
                href="https://github.com/RedVelvetZip"
                target="_blank"
                rel="noreferrer"
                className={styles["icon-link"]}
              >
                <Image alt="GitHub" src={githubLogo} />
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dev;
