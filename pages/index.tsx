import styles from "../styles/dev.module.scss";
import Head from 'next/head';
import Image from "next/image";
import logoGif from "../assets/logo2.gif"
// import logo from "../assets/logo512.png"
// import logoMp4 from "../assets/logo2.mp4"
import DevLayout from '../components/dev/LayoutDev'
import Link from "next/link";
import emailLogo from '../assets/wallet-icons/email.svg'
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import discordLogo from "../assets/wallet-icons/discord.svg";
import linkedinLogo from "../assets/wallet-icons/linkedin.svg";
// import video from "../assets/bg3.mp4";

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

      <body className={styles["devbody"]}>
        <main className={styles["dev"]}>
          <video className={styles["bg-video"]} autoPlay loop muted>
            <source src="/video/bg3.mp4" type="video/mp4" />
          </video>
          <div className={styles["icons-row"]}>
            <div className={styles["icon-box"]}>
              <a href="mailto:bradley.t.sheehan@gmail.com" target="_blank" rel="noreferrer" className={styles["icon-link"]}>
                <Image alt="email" src={emailLogo}></Image>
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a href="https://github.com/RedVelvetZip" target="_blank" rel="noreferrer" className={styles["icon-link"]}>
                <Image alt="GitHub" src={githubLogo}></Image>
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a href="https://twitter.com/RedVelvetZip" target="_blank" rel="noreferrer" className={styles["icon-link"]}>
                <Image alt="Twitter" src={twitterLogo}></Image>
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a href="https://discordapp.com/users/redvelvet#4018" target="_blank" rel="noreferrer">
                <Image alt="Discord" src={discordLogo}></Image>
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a href="https://www.linkedin.com/in/bradleysheehan/" target="_blank" rel="noreferrer" className={styles["icon-link"]}>
                <Image alt="LinkedIn" src={linkedinLogo} ></Image>
              </a>
            </div>
          </div>
          <div className={styles["blog"]}>
            <Link href="/blog" passHref>
              <span className={styles["blog-home"]}>
                Blog
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
          </div>
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
      </body>
    </>
  );
}
Dev.layout = DevLayout

export default Dev;

