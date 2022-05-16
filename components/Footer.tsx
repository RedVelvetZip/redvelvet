import React from 'react';
import Link from "next/link";
import styles from "../styles/footer.module.scss";

type Props = {};

const currentYear = new Date().getFullYear();

const Footer = (props: Props) => {
  return (
    <>
      {/* <nav className={styles["footer"]}>
        <ul className={styles["footer-foot"]}>
          <li className={styles["foot-item"]}>
            <Link href="/" className={styles["foot-link"]}>
              <a href="#" className={styles["foot-link"]}>
                <span className={styles["link-text"]}>Home</span>
              </a>
            </Link>
          </li >
          <li className={styles["foot-item"]}>
            <Link href="/posts" className={styles["foot-link"]}>
              <a href="#" className={styles["foot-link"]}>
                <span className={styles["link-text"]}>Blog</span>
              </a>
            </Link>
          </li >

          <li className={styles["foot-item"]}>
            <Link href="/portfolio" className={styles["foot-link"]}>
              <a href="#" className={styles["foot-link"]}>
                <span className={styles["link-text"]}>Portfolio</span>
              </a>
            </Link>
          </li >

          <li className={styles["foot-item"]}>
            <Link href="/about" className={styles["foot-link"]}>
              <a href="#" className={styles["foot-link"]}>
                <span className={styles["link-text"]}>About</span>
              </a>
            </Link>
          </li >
          <li className={styles["foot-item"]}>
            <Link href="/contact" className={styles["foot-link"]}>
              <a href="#" className={styles["foot-link"]}>
                <span className={styles["link-text"]}>Contact</span>
              </a>
            </Link>
          </li >
        </ul>
      </nav> */}
      <div className={styles["copyright"]}>
        Copyright @ {currentYear} Red Velvet
      </div>
    </>
  );
};

export default Footer;