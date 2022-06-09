import styles from "../styles/portfolio.module.scss";
// import Header from "../components/Header";
// import Link from "next/link";
import Image from "next/image";
import linkLogo from "../assets/wallet-icons/link.svg";
// import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import discordLogo from "../assets/wallet-icons/discord.svg";
import moonLabLogo from "../assets/portfolio/MoonLab Logo4.png";
import vqLogo from "../assets/portfolio/VQ Logo1.png";
import DevLayout from '../components/dev/LayoutDev'

function Portfolio() {
  return (
    <body className={styles["devbody"]}>
      <h2 className={styles["header"]}>Portfolio</h2>
      <main className={styles["portfolio"]}>
        <h1 className={styles["section-title"]}>
          Under Construction
        </h1>
        <h2>WEB3 PROJECTS - demos links and tech stacks on the way soon I promise 😅😅  </h2>
        <p>VQ Games</p>
        <p>Tiny Tix</p>
        <p>Pablo Pieces</p>
        <p>Staking Contract</p>
        <p>Shroomies ETH MATIC</p>
        <p>Solana deployment</p>

        <br /><br />
        <h2>LANDING PAGES:</h2>
        <p>LLTK</p>
        <p>Tutorra</p>
        
        
        <p></p>
        {/* <div className={styles["flex-container"]}>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://moonlab.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    objectFit='contain'
                    src={moonLabLogo}
                    alt="MoonLab"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
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
                </div>
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
                <div className={styles["links-item"]}>
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
                </div>
              </div>
            </div>
            <p className={styles["description"]}>
              MoonLab is the parent company for MoonFactory and LunarCapital.
              MoonFactory is a <strong>web3 gig platform</strong>, creating an accessible
              marketplace for talent and community. LunarCapital is an <strong>education</strong> platform
              aimed at teaching personal finance, defi, and overall onboarding users into web3.
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
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
                  <div >
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
                <div className={styles["links-item"]}>
                  <div >
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
                  <div >
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
              VQ Games is a series of <strong>group-strategy, turn-by-turn, blockchain
                games</strong>. Comparable to board games or card games where both luck and
              skill come into play.
            </p>
            <p className={styles["stack"]}>
              Stack: Next, Typescript, Solidity, Firebase, Web3React, Eth
              Mainnet, Chainlink VRF
            </p>
          </div>
        </div> */}
      </main>
    </body>
  );
}
Portfolio.layout = DevLayout

export default Portfolio;
