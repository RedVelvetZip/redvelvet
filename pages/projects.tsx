import styles from "../styles/projects.module.scss";
import Image from "next/image";
import linkLogo from "../assets/wallet-icons/link.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import telegramLogo from "../assets/wallet-icons/tg.png";
import meetupLogo from "../assets/wallet-icons/meetup.png";
import discordLogo from "../assets/wallet-icons/discord.svg";
import hack3rsLogo from "../assets/portfolio/Hack3rs.jpg";
import moonLabLogo from "../assets/portfolio/MoonLab Logo4.png";
import lemondropLogo from "../assets/portfolio/lemondrop.png";
import cryptoradoLogo from "../assets/portfolio/cryptoradoBanner_wide.png";
import messariLogo from "../assets/portfolio/messari.png";
import bitcoinlayersLogo from "../assets/portfolio/bitcoinlayers.png";
import degenLogo from "../assets/portfolio/degenofficehrs.png";
import githubLogo from "../assets/wallet-icons/github.svg";
import infoLogo from "../assets/wallet-icons/info.svg";
import ethLogo from "../assets/wallet-icons/eth.png";
import vqgames from "../assets/portfolio/VQ.png";
import opcode from "../assets/portfolio/opcode-critters.png";

function Projects() {
  return (
    <div className={styles["devbody"]}>
      <h2 className={styles["header"]}>Current</h2>
      <div className={styles["portfolio"]}>
        <div className={styles["flex-container"]}>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://www.lemondrop.finance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={lemondropLogo} alt="Lemondrop"></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://www.lemondrop.finance/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Lemondrop"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://twitter.com/lemondropfi"
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
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Co-founder / CTO, Lemondrop</p>
            </div>
            <p className={styles["description"]}>
              Lemondrop is a BTC savings tool for crypto users. With everyone
              memecoin trade on Solana, stack some sats in the background.
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="http://bitcoinlayers.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={bitcoinlayersLogo} alt="bitcoinlayers"></Image>
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
                      href="https://github.com/bitcoinlayers/bitcoinlayers"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={githubLogo}
                        alt="github"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://github.com/bitcoinlayers/data-ingestion"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={githubLogo}
                        alt="github"
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
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Co-founder / CTO, Bitcoin Layers</p>
            </div>
            <p className={styles["description"]}>
              Bitcoin Layers is an open-source research and data dashboard
              focused on bitcoin scaling technology. I built the data ingestion
              pipeline and initial frontend. I still maintain the community and
              data.
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
                  <Image src={cryptoradoLogo} alt="cryptorado"></Image>
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
              <p className={styles["role"]}>
                Steward and Event Host, Cryptorado
              </p>
            </div>
            <p className={styles["description"]}>
              Cryptorado is a community in Denver, Colorado for all things
              crypto. Coworking, lectures, workshops, hangouts, and adventures.
              I speak at and help organize some of these events.
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles["header"]}>Previous</h2>
      <div className={styles["portfolio"]}>
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
                  <Image src={messariLogo} alt="messari"></Image>
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
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Research Analyst, Messari</p>
            </div>
            <p className={styles["description"]}>
              Messari is the Bloomberg of crypto. I'm a research analyst
              covering base layer protocol (L1s and L2s) architectures and
              privacy protocols.
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
                  <Image src={hack3rsLogo} alt="Hack3rsClub"></Image>
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
              <p className={styles["name"]}>Solidity Educator, Hack3rsClub</p>
            </div>
            <p className={styles["description"]}>
              I created a curriculum and taught Solidity in live weekly
              code-alongs. Hack3rsClub is a community of developers hosted by
              BeMyApp and Hackathon.com. I teach Web2 developers the basics of
              Web3 development through webinars, code-alongs, and workshops.
            </p>
          </div>
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://vq-2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={vqgames} alt="VQ Games"></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://vq-2.vercel.app/"
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
                  <div>
                    <a
                      href="https://etherscan.io/address/0x12e106626b84ed5fc38cfde56ce05eafef17d424"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={ethLogo}
                        alt="VQ Games smart contract"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
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
                  <div>
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
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://medium.com/@TheEsportsPlug/behind-the-curtains-creation-of-a-long-term-nft-project-8e8c57ffe988"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={infoLogo}
                        alt="Article"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["name"]}>Co-founder / CTO, VQ Games</p>
            </div>
            <p className={styles["description"]}>
              Battle for New Venice is a group-strategy, turn-by-turn, NFT game.
              This game is more similar to a board game than a video game and
              was deployed on Ethereum mainnet.
            </p>
          </div>
          {/* <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={moonLabLogo}
                    alt="MoonLab"
                  ></Image>
                </a>
              </div>
              <div className={styles["links"]}>
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
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Co-founder / CTO, MoonLab</p>
            </div>
            <p className={styles["description"]}>
              MoonLab is a full-service web3 agency that takes
              ideas from concept to launch. We offer a la carte services for
              every step of the business development process.
            </p>
          </div> */}
          <div className={styles["flex-item"]}>
            <div className={styles["title"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["logo-case"]}
                  href="https://redvelvetzip.github.io/pokemon-battle-system/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={opcode} alt="Tiny Tix"></Image>
                </a>
              </div>
              <div className={styles["links"]}>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://github.com/RedVelvetZip/opcodecritters"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={githubLogo}
                        alt="Website github"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://redvelvetzip.github.io/pokemon-battle-system/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={linkLogo}
                        alt="Opcode Critters hosting"
                      ></Image>
                    </a>
                  </div>
                </div>
                <div className={styles["links-item"]}>
                  <div>
                    <a
                      href="https://github.com/RedVelvetZip/pokemon-battle-system"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        object-fit="contain"
                        src={githubLogo}
                        alt="Website github"
                      ></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["project"]}>
              <p className={styles["role"]}>Developer, Opcode Critters</p>
            </div>
            <p className={styles["description"]}>
              This is an educational game about OP_CAT, a Bitcoin opcode,
              created for a Taproot Wizards initiative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
