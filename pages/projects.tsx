import styles from "../styles/projects.module.scss";
// import Header from "../components/Header";
// import Link from "next/link";
import Image from "next/image";
import linkLogo from "../assets/wallet-icons/link.svg";
// import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import telegramLogo from "../assets/wallet-icons/tg.png";
import warpcastLogo from "../assets/wallet-icons/warpcast.png";
import meetupLogo from "../assets/wallet-icons/meetup.png";
import discordLogo from "../assets/wallet-icons/discord.svg";
import hack3rsLogo from "../assets/portfolio/Hack3rs.jpg";
// import infoLogo from "../assets/wallet-icons/info.svg";
import moonLabLogo from "../assets/portfolio/MoonLab Logo4.png";
import cryptoradoLogo from "../assets/portfolio/cryptoradoBanner_wide.png";
import messariLogo from "../assets/portfolio/messari.png";
import bitcoinlayersLogo from "../assets/portfolio/bitcoinlayers.png";
import degenLogo from "../assets/portfolio/degenofficehrs.png";
import redvelvetLogo from "../assets/logo2.gif";
// import vqLogo from "../assets/portfolio/VQ Logo1.png";
import DevLayout from "../components/dev/LayoutDev";

function Projects() {
  return (
    <body className={styles["devbody"]}>
      <h2 className={styles["header"]}>Current Roles</h2>
      <main className={styles["portfolio"]}>
        <div className={styles["flex-container"]}>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="http://bitcoinlayers.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    objectFit="contain"
                    src={bitcoinlayersLogo}
                    alt="bitcoinlayers"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://www.bitcoinlayers.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Bitcoin Layers"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://twitter.com/BitcoinLayers"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={twitterLogo}
                        alt="Twitter"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={telegramLogo}
                        alt="telegram"
                      ></Image>
                    </a>
                  </div>
                </div>
                {/* <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://warpcast.com/~/channel/bitcoinlayers"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={warpcastLogo}
                        alt="Warpcast"
                      ></Image>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>
                Co-founder / CTO, LX Research Labs
              </p>
            </div>
            <p className={styles["description"]}>
              Bitcoin-only research and protocol services. I do a lil devving, research, and
              community management.
            </p>
          </div>
       
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://sanko.tv/degenofficehrs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    objectFit="contain"
                    src={degenLogo}
                    alt="degen"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://sanko.tv/degenofficehrs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Sanko TV"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://x.com/degenofficehrs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={twitterLogo}
                        alt="Twitter"
                      ></Image>
                    </a>
                  </div>
                </div>
                {/* <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={telegramLogo}
                        alt="telegram"
                      ></Image>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Host, Degen Office Hours</p>
            </div>
            <p className={styles["description"]}>
              Live every week on crypto streaming platform Sanko.tv. Discussing
              the latest in crypto.
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="http://cryptorado.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    objectFit="contain"
                    src={cryptoradoLogo}
                    alt="cryptorado"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://www.meetup.com/cryptorado-community/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={meetupLogo}
                        alt="Cryptorado Meetup page"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="http://cryptorado.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Cryptorado website"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://twitter.com/CryptoradoCom"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={twitterLogo}
                        alt="Cryptorado Twitter"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://discord.com/invite/gWcej9rUxN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={discordLogo}
                        alt="Cryptorado Discord"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["project"]}>
              {/* <p className={styles["name"]}>
                            MoonLab
                            </p> */}
              <p className={styles["role"]}>Steward, Cryptorado</p>
            </div>
            <p className={styles["description"]}>
              Cryptorado is a community in Denver, Colorado for all things
              crypto. Coworking, lectures/workshops, hangouts, and adventures. I
              speak at and help organize some of these events.
            </p>
          </div>
        </div>
      </main>
      <h2 className={styles["header"]}>Previous Roles</h2>
      <main className={styles["portfolio"]}>
        <div className={styles["flex-container"]}>
        <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://messari.io/research/red-sheehan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    objectFit="contain"
                    src={messariLogo}
                    alt="messari"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://messari.io/research/red-sheehan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Messari website"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://twitter.com/messaricrypto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={twitterLogo}
                        alt="Twitter"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://warpcast.com/~/channel/messari"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={warpcastLogo}
                        alt="Warpcast"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Research Analyst, Messari</p>
            </div>
            <p className={styles["description"]}>
              Messari is the Bloomberg of crypto. I'm a research analyst
              covering base layer protocols (L1s and L2s) and privacy protocols.
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  // href="https://moonlab.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    objectFit="contain"
                    src={moonLabLogo}
                    alt="MoonLab"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                {/* <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://moonlab.space"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="MoonLab Website"
                      ></Image>
                    </a>
                  </div>
                </div> */}
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://twitter.com/Moonlab_HQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={twitterLogo}
                        alt="MoonLab Twitter"
                      ></Image>
                    </a>
                  </div>
                </div>
                {/* <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://discord.gg/2gwcaPK4xK"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={discordLogo}
                        alt="MoonLab Discord"
                      ></Image>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Co-founder / CTO, MoonLab</p>
            </div>
            <p className={styles["description"]}>
              MoonLab is a <strong>full-service web3 agency</strong> that takes
              ideas from concept to launch. We offer a la carte services for
              every step of the business development process.
            </p>
            <p className={styles["stack"]}>
              Tools: Webflow, Figma, Notion, Hubspot, Miro
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://hack3rs.hackathon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    // layout='fill'
                    objectFit="contain"
                    src={hack3rsLogo}
                    alt="Hack3rsClub"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://hack3rs.hackathon.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Hack3rsClub Website"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://discord.com/invite/XAhxSgaM3E"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={discordLogo}
                        alt="Hack3rsClub Discord"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["name"]}>Educator, Hack3rsClub</p>
            </div>
            <p className={styles["description"]}>
              Hack3rsClub is a community of developers hosted by BeMyApp and
              Hackathon.com. I{" "}
              <strong>
                teach Web2 developers the basics of Web3 development
              </strong>{" "}
              through webinars, code-alongs, and workshops.
            </p>
            <p className={styles["stack"]}>
              Tools: Discord, Solidity, VS Code, React, Canva
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://redvelvet.tech/blog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    // layout='fill'
                    objectFit="contain"
                    src={redvelvetLogo}
                    alt="Red Velvet Blog"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://redvelvet.tech/blog/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Blog"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Content Writer, RedVelvetBlog</p>
            </div>
            <p className={styles["description"]}>
              This is my personal{" "}
              <strong>crypto/software development/finance/tech blog</strong>. I
              do all the research, create all the content, and design the
              graphics for these articles. It started out as me creating finance
              guides for friends, and has grown into something much bigger! I
              now write for Messari and on Substack.
            </p>
            <p className={styles["stack"]}>Tools: NextJS, GraphCMS, Canva</p>
          </div>
        </div>
      </main>
    </body>
  );
}
Projects.layout = DevLayout;

export default Projects;
