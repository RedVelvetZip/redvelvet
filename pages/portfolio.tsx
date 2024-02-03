import styles from "../styles/portfolio.module.scss";
import Head from "next/head";
// import Header from "../components/Header";
// import Link from "next/link";
import Image from "next/image";
import linkLogo from "../assets/wallet-icons/link.svg";
import githubLogo from "../assets/wallet-icons/github.svg";
import twitterLogo from "../assets/wallet-icons/twitter.svg";
import discordLogo from "../assets/wallet-icons/discord.svg";
import infoLogo from "../assets/wallet-icons/info.svg";
import ethLogo from "../assets/wallet-icons/eth.png";
import polygonLogo from "../assets/wallet-icons/polygon.png";
import DevLayout from '../components/dev/LayoutDev'
import lltk from "../assets/portfolio/LLTK.png";
import moonlab from "../assets/portfolio/moonlab.png";
import shroomies from "../assets/portfolio/shroomies.png";
import tutorra from "../assets/portfolio/tutorra.png";
import vqgames from "../assets/portfolio/VQ.png";
import tinytix from "../assets/portfolio/tinytix.png";
import pablo from "../assets/portfolio/pablo.png";
import blog from "../assets/portfolio/blog.png";
import opcode from "../assets/portfolio/opcode-critters.png";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <body className={styles["devbody"]}>
        <h2 className={styles["header"]}>Portfolio</h2>
        <main className={styles["portfolio"]}>
          <div className={styles["flex-container"]}>
          <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://opcodecritters.redvelvet.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={opcode}
                      alt="Tiny Tix"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://opcodecritters.redvelvet.tech/"
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
                    <div >
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
                    <div >
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
                    <div >
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
              <h2 className={styles["proj-title"]}>Opcode Critters</h2>
              <p className={styles["description"]}>
                An educational game
              </p>
              <p className={styles["stack"]}>
                React
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
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={vqgames}
                      alt="VQ Games"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
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
                    <div >
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
                  <div className={styles["links-item"]}>
                    <div >
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
              <h2 className={styles["proj-title"]}>Battle for New Venice</h2>
              <p className={styles["description"]}>
                Group-strategy, turn-by-turn, blockchain games
              </p>
              <p className={styles["stack"]}>
                Next, TS, Solidity, Firebase
              </p>
            </div>
            <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://www.redvelvet.tech/post/tiny-tix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={tinytix}
                      alt="Tiny Tix"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://tinytix.xyz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={linkLogo}
                          alt="Tiny Tix demo"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://www.redvelvet.tech/post/tiny-tix"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={infoLogo}
                          alt="TinyTix article"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://github.com/tinytix"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={githubLogo}
                          alt="Tiny Tix github"
                        ></Image>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className={styles["proj-title"]}>Tiny Tix</h2>
              <p className={styles["description"]}>
                Tickets on the blockchain
              </p>
              <p className={styles["stack"]}>
                React, Solidity, Go
              </p>
            </div>
            <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://pablo-pieces.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={pablo}
                      alt="Pablo Pieces"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://pablo-pieces.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={linkLogo}
                          alt="TinyTix article"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://etherscan.io/address/0x86f0f8592f1f4fb4fbfa7f02c39188e8bf992a31"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={ethLogo}
                          alt="Pablo smart contract"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://www.redvelvet.tech/post/shroomies"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={infoLogo}
                          alt="NFT article"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://github.com/RedVelvetZip/PabloPieces"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={githubLogo}
                          alt="Tiny Tix github"
                        ></Image>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className={styles["proj-title"]}>Pablo Pieces</h2>
              <p className={styles["description"]}>
                Pfp NFT project
              </p>
              <p className={styles["stack"]}>
                React, Solidity
              </p>
            </div>
            <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://redvelvet.tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={blog}
                      alt="redvelvet"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://redvelvet.tech/blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={linkLogo}
                          alt="RedVelvet blog"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://github.com/RedVelvetZip/redvelvet"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={githubLogo}
                          alt="RedVelvet Github"
                        ></Image>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className={styles["proj-title"]}>Red Velvet Blog</h2>
              <p className={styles["description"]}>
                My personal crypto/tech blog
              </p>
              <p className={styles["stack"]}>
                Next, GraphCMS, TS
              </p>
            </div>
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
                      objectFit='cover'
                      src={moonlab}
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
              <h2 className={styles["proj-title"]}>MoonLab</h2>
              <p className={styles["description"]}>
                Agency landing page
              </p>
              <p className={styles["stack"]}>
                Webflow
              </p>
            </div>
            <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://shroomies.redvelvetwiki.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={shroomies}
                      alt="Shroomies"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://shroomies.redvelvetwiki.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={linkLogo}
                          alt="Shroomies minting dapp"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://polygonscan.com/token/0xc49e6cde4a903391824b99fd20a0094ccff7ab13"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={polygonLogo}
                          alt="Shroomies smart contract"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://www.redvelvet.tech/post/shroomies"
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
              <h2 className={styles["proj-title"]}>Shroomies</h2>
              <p className={styles["description"]}>
                Minting Dapp for Polygon ERC721 NFT token
              </p>
              <p className={styles["stack"]}>
                React, Solidity, Polygon
              </p>
            </div>
            <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://lltk.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={lltk}
                      alt="Long Live The Kiks"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://lltk.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={linkLogo}
                          alt="LLTK website"
                        ></Image>
                      </a>
                    </div>
                  </div>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://twitter.com/LongLiveTheKiks"
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
                        href="https://www.redvelvet.tech/post/blockchain-validation-of-physical-items"
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
              <h2 className={styles["proj-title"]}>Long Live The Kiks</h2>
              <p className={styles["description"]}>
                NFT shoe project with on-chain validation of physical products
              </p>
              <p className={styles["stack"]}>
                React, AVAX
              </p>
            </div>
            <div className={styles["flex-item"]}>
              <div className={styles["title"]}>
                <div className={styles["logo"]}>
                  <a
                    className={styles["logo-case"]}
                    href="https://jp.redvelvetwiki.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      // layout='fill'
                      objectFit='cover'
                      src={tutorra}
                      alt="Tutorra"
                    ></Image>
                  </a>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["links-item"]}>
                    <div >
                      <a
                        href="https://jp.redvelvetwiki.com"
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
                        href="https://github.com/RedVelvetZip/JP"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          object-fit="contain"
                          src={githubLogo}
                          alt="Tutorra Github"
                        ></Image>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className={styles["proj-title"]}>Tutorra</h2>
              <p className={styles["description"]}>
                Tutoring landing page
              </p>
              <p className={styles["stack"]}>
                React
              </p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
Portfolio.layout = DevLayout

export default Portfolio;
