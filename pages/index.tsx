import styles from "../styles/dev.module.scss";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo2.gif";
import DevLayout from "../components/dev/LayoutDev";
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles2 from "../styles/dev.module.scss";

function Dev() {
  return (
    <>
      <Head>
        <title>Red Velvet</title>
        <meta name="description" content="Crypto, Coding, Finance, & More" />
        <meta property="og:url" content="redvelvet.tech" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/RedVelvetZip/redvelvet/tree/main/public/logo512.png"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <body className={styles["devbody"]}>
        <main className={styles["dev"]}>
          <div className={styles["icons-row"]}>
            <div className={styles["icon-box"]}>
              <a
                href="https://twitter.com/RedVelvetZip"
                target="_blank"
                rel="noreferrer"
                className={styles["icon-link"]}
              >
                <Image alt="Twitter" src={twitterLogo}></Image>
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a
                href="https://github.com/RedVelvetZip"
                target="_blank"
                rel="noreferrer"
                className={styles["icon-link"]}
              >
                <Image alt="GitHub" src={githubLogo}></Image>
              </a>
            </div>
          </div>
          {/* <div className={styles["blog"]}>
            <Link href="https://redvelvetzip.substack.com/" passHref>
              <span className={styles["blog-home"]}>
                Writing
                <svg
                  className={styles["icon"]}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
                    className={styles["icon"]}
                  />
                </svg>
              </span>
            </Link>
          </div> */}
        </main>
      </body>
    </>
  );
}
Dev.layout = DevLayout;

export default Dev;
