import styles from "../styles/dev.module.scss";
import Head from "next/head";
import Image from "next/image";
// import logo from "../assets/logo512.png"
import logo from "../assets/logo2.gif";
import DevLayout from "../components/dev/LayoutDev";
import Link from "next/link";
import emailLogo from "../assets/wallet-icons/email.svg";
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import discordLogo from "../assets/wallet-icons/discord.svg";
import linkedinLogo from "../assets/wallet-icons/linkedin.svg";
import warpLogo from "../assets/wallet-icons/warpcast.png";
import { InlineWidget } from "react-calendly";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { reviewOne, reviewTwo } from "../components/Carousel/Data";

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
            {/* <div className={styles["icon-box"]}>
              <a href="https://warpcast.com/redvelvet" target="_blank" rel="noreferrer" className={styles["icon-link"]}>
                <Image alt="farcaster" src={warpLogo}></Image>
              </a>
            </div> */}
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
            <div className={styles["icon-box"]}>
              <a
                href="mailto:bradley.t.sheehan@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles["icon-link"]}
              >
                <Image alt="email" src={emailLogo}></Image>
              </a>
            </div>
            <div className={styles["icon-box"]}>
              <a
                href="https://www.linkedin.com/in/bradleysheehan/"
                target="_blank"
                rel="noreferrer"
                className={styles["icon-link"]}
              >
                <Image alt="LinkedIn" src={linkedinLogo}></Image>
              </a>
            </div>
          </div>
          <div className={styles["blog"]}>
            <Link href="https://messari.io/research/red-sheehan" passHref>
              <span className={styles["blog-home"]}>
                Messari Research
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
          <div className={styles["blog"]}>
            <Link href="https://redvelvetzip.substack.com/" passHref>
              <span className={styles["blog-home"]}>
                Personal Blog
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
          {/* <div className={styles["carousel"]}>
            <div className={styles["carousel-arrow"]}>
              <p>x</p>
            </div>
            <div className={styles["carousel-item"]}>
              {reviewOne.text}
              <p>- {reviewOne.name}</p>
            </div>
            <div className={styles["carousel-item"]}>
              {reviewTwo.text}
              <p>- {reviewTwo.name}</p>
            </div>
            <Carousel
              infiniteLoop={true}
            >
              <div>
                <img src="/logo512.png" alt="image1" />
                <p className="legend">Red was knowledgeable and quick in building out my NFT project. He set up the smart contract, metadata, art generation, and minting dapp. Would definitely work with him again! - Conner, PabloPieces</p>

              </div>
              <div>
                <img src="/logo512.png" alt="image1" />
                <p className="legend">Image 2</p>

              </div>
            </Carousel>
          </div> */}
          {/* <div className={styles["temp"]}>
  <strong>MOON</strong>EDU
</div> */}
          {/* <div className={styles["calendly"]}>
            Get In Touch
          </div> */}
          {/* <InlineWidget
            url="https://calendly.com/bradley-s/15-min-discovery?primary_color=760a02"
            styles={{
              height: '1000px',
              width: '90%',
              maxWidth: '1050px',
              // padding: '0px',
              // margin: '0px',
              // border: '2px solid white'
            }}
          /> */}
          {/* <div className={styles["circle"]}>
            <div className={styles["logo"]}>
              <Image
                src={logo}
                alt="Red Velvet logo"
                layout="responsive"
                objectFit="contain"
              >
              </Image>
            </div>
          </div> */}
        </main>
      </body>
    </>
  );
}
Dev.layout = DevLayout;

export default Dev;
