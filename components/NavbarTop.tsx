import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbartop.module.scss";
// import WalletConnect from "./WalletConnect";
import logo from "../assets/logo-circle.png"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from "./Header";

const NavbarTop = () => {
    return (
      <>
        <nav className={styles["navbar"]}>
          <ul className={styles["navbar-nav"]}>
            <li className={styles["nav-item"]}>
              <Link href="/" className={styles["nav-link"]}>
                <Header />
              </Link>
            </li>
  
            <li className={styles["nav-item"]}>
              <Link href="/posts" className={styles["nav-link"]}>
                Blog
              </Link>
            </li>
  
            <li className={styles["nav-item"]}>
              <Link href="/portfolio" className={styles["nav-link"]}>
                Portfolio
              </Link>
            </li>
  
            <li className={styles["nav-item"]}>
              <Link href="/about" className={styles["nav-link"]}>
               About
              </Link>
            </li>
  
            <li className={styles["nav-item"]}>
              <Link href="/contact" className={styles["nav-link"]}>
               Contact
              </Link>
            </li>

            <li className={styles["nav-item"]}>
              {/* <ConnectButton /> */}
            </li>
          </ul>
        </nav>
      </>
    );
  };
  
  export default NavbarTop;
