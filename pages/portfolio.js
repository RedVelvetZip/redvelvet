import styles from "../styles/portfolio.module.scss";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import linkLogo from "../assets/wallet-icons/link.svg";
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import discordLogo from "../assets/wallet-icons/discord.svg";
import moonLabLogo from "../assets/portfolio/MoonLab Logo1.png";
import vqLogo from "../assets/portfolio/VQ Logo1.png";

function Portfolio() {
  return (
    <>
      {/* <Header /> */}
      <main className={styles["portfolio"]}>
        Under Construction
        <div className={styles["flex-container"]}>
          <div className={styles["flex-item"]}>
          <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a className={styles["logo-case"]}
                  href="https://vastquestions.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    // layout='fill'
                    objectFit='contain'
                    src={vqLogo}
                    alt="VQ Games"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div className={styles["logo"]}>
                    <a
                      href="https://vastquestions.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="VQ Games Website"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}></div>
                <div className={styles["links-item"]}>
                  <div className={styles["logo"]}>
                    <a
                      href="https://twitter.com/VQGamesOfficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={twitterLogo}
                        alt="VQ Games Twitter"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div className={styles["logo"]}>
                    <a
                      href="https://t.co/vvnoW0vXWH"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={discordLogo}
                        alt="VQ Games Discord"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles["description"]}>
              VQ Games is a series of group-strategy, turn-by-turn, blockchain
              games. Comparable to board games or card games where both luck and
              skill come into play.
            </p>
            <p className={styles["stack"]}>
              Stack: Next, Typescript, Solidity, Firebase, Web3React, Eth
              Mainnet, Chainlink VRF
            </p>
            <div className={styles["links"]}>
              <p>
                <a
                  href="https://vastquestions.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Battle for New Venice Website
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/VQGamesOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  VQ Games Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://t.co/vvnoW0vXWH"
                  target="_blank"
                  rel="noreferrer"
                >
                  VQ Games Discord
                </a>
              </p>
            </div>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  href="https://moonlab.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    // layout='fill'
                    objectFit='contain'
                    src={moonLabLogo}
                    alt="MoonLab"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div className={styles["logo"]}>
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
                </div>
                <div className={styles["links-item"]}></div>
                <div className={styles["links-item"]}>
                  <div className={styles["logo"]}>
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
                <div className={styles["links-item"]}>
                  <div className={styles["logo"]}>
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
                </div>
              </div>
            </div>
            <p className={styles["description"]}>
              MoonLab is the parent company for MoonFactory and LunarCapital.
              MoonFactory is a web3 gig platform, creating a permissionless
              marketplace for talent. LunarCapital is an education platform
              aimed at onboarding users into web3.
            </p>
            <div className={styles["links"]}>
              <p>
                <a
                  href="https://moonlab.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  MoonLab Website
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/Moonlab_HQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  MoonLab Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://discord.gg/2gwcaPK4xK"
                  target="_blank"
                  rel="noreferrer"
                >
                  MoonLab Discord
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
