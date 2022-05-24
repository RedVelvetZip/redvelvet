import styles from "../styles/portfolio.module.scss";
import Header from "../components/Header";

function Portfolio() {
  return (
    <>
      <Header />
      <main className={styles["portfolio"]}>
        Under Construction
        <br />
        <br />
        <br />
        <br />
        <div className={styles["flex-container"]}>
          
          <div className={styles["flex-item"]}>
            <h1 className={styles["title"]}>VQ Games</h1>
            <p className={styles["description"]}>
              VQ Games is a series of group-strategy, turn-by-turn, blockchain
              games. Comparable to board games or card games where both luck and skill come into play.
            </p>
            <p className={styles["stack"]}>
              Stack: Next, Typescript, Solidity, Firebase, Web3React, Eth
              Mainnet, Chainlink VRF
            </p>
            <div className={styles["links"]}>
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
              <p>
                <a
                  href="https://vastquestions.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Battle for New Venice Website
                </a>
              </p>
            </div>
          </div>
          <div className={styles["flex-item"]}>
            <h1 className={styles["title"]}>MoonLab</h1>
            <p className={styles["description"]}>
              MoonLab is the parent company for MoonFactory and LunarCapital.
              MoonFactory is a web3 gig platform, creating a permissionless
              marketplace for talent. LunarCapital is an education platform
              aimed at onboarding users into web3.
            </p>

            <div className={styles["links"]}>
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
              <p>
                <a
                  href="https://moonlab.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  MoonLab Website
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
