import Image from "next/image";
import Link from "next/link";
// import WalletConnection from "./WalletConnection";
import styles from "../styles/navbar.module.scss";
// import WalletInjected from "./WalletInjected";
import iconChevron from '../assets/wallet-icons/chevron.svg';
// import iconTwitter from '../assets/wallet-icons/twitter.svg';
// import iconDiscord from '../assets/wallet-icons/discord.svg';

// import WalletConnect from "./WalletConnect";

const Navbar = () => {

  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["navbar-mobile-menu"]}>
          <div className={styles["nav-mobile-dropdown"]}>
            <div className={styles["nav-mobile-icon"]}>
              <Image
                src={iconChevron}
                alt="menu dropdown"
                layout="responsive"
                objectFit="contain"
              >
              </Image>
            </div>
            <ul className={styles["submenu-mobile"]}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/bar">Bar</Link>
              </li>
              <li>
                <Link href="/play">Faction Voting</Link>
              </li>
              <li>
                <Link href="/howtoplay">How To Play</Link>
              </li>
              <li>
                <Link href="/items">Items</Link>
              </li>
              <li>
                <Link href="/specialcharacters">Special Characters</Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className={styles["navbar-nav"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className={styles["nav-factions-li"]}>
            <div className={styles["nav-icon"]}>
              <Image
                src={iconChevron}
                alt="factions dropdown"
                layout="responsive"
                objectFit="contain"
              >
              </Image>
            </div>
            <Link href="/bar">The Bar</Link>
            <ul className={styles["submenu"]}>
              <li>
                <Link href="/bar">The Bar</Link>
              </li>
              <li>
                <Link href="/play">Faction Voting</Link>
              </li>
              <li>
                <Link href="/howtoplay">How To Play</Link>
              </li>
            </ul>
          </li>

         

        </ul>
        {/* <div className={styles["nav-socials"]}>
          <a href="https://twitter.com/VastQuestions" target="_blank" rel="noreferrer">
            <Image
              src={iconTwitter}
              alt="twitter"
              layout="fill"
              objectFit="contain"
            >
            </Image>
          </a>
        </div>
        <div className={styles["nav-socials"]}>
          <a href="https://discord.com/invite/Hf7CRUPUG3" target="_blank" rel="noreferrer">
            <Image
              src={iconDiscord}
              alt="twitter"
              layout="fill"
              // layout="responsive"
              objectFit="contain"
            >
            </Image>
          </a>
        </div> */}
        <div className={styles["connect"]}>
          {/* <WalletConnect /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
