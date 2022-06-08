import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";
import searchIcon from "../assets/wallet-icons/search.svg";
import hamburger from "../assets/wallet-icons/hamburger.svg";
import styles from "../styles/header.module.scss";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  const [active, setActive] = useState(false);

  return (
    <div className={styles["header"]}>
      <div className={styles["header-content"]}>
        <div className={styles["title-box"]}>
          <Link href="/" passHref>
            <span className={styles["title"]}>[ Red Velvet ]</span>
          </Link>
          <Link href="/blog" passHref>
            <span className={styles["blog-title"]}> | Blog</span>
          </Link>
        </div>
        <div className={styles["center"]}>
          <div className={styles["hamburger"]}>
            <div
              className={styles["icon-menu"]}
              onClick={() => setActive(!active)}
            >
              <Image alt="search" src={hamburger}></Image>
            </div>
          </div>
          <div className={styles["searchbar"]}>
            <div className={styles["icon"]}>
              <Image alt="search" src={searchIcon}></Image>
            </div>
            <form>
              <input type="text" placeholder="Search..(coming soon)"></input>
            </form>
          </div>
        </div>
        {/* <div className={styles["dev"]}>
          <Link href="/" passHref>
            <span className={styles["portfolio"]}>
              Portfolio
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
        </div> */}
        {active && (
          <div
            className={styles["navbar-holder"]}
            onClick={() => setActive(false)}
          >
            <div className={styles["navbar-nav"]}>
              <div className={styles["navbar-basics"]}>
                <Link href="/blog" passHref prefetch={false}>
                  Home
                </Link>
                <Link href="/blog" passHref prefetch={false}>
                  All Posts
                </Link>
                <Link href="/" passHref prefetch={false}>
                  Portfolio
                </Link>
              </div>
              <div className={styles["navbar-categories"]}>
                {/* <div className={styles["cols-title"]}>
                <p>Categories</p>
              </div> */}
                <div className={styles["cols"]}>
                  <div className={styles["col"]}>
                    <Link href="/category/crypto-concepts" prefetch={false}>
                      Crypto Concepts
                    </Link>
                    <Link href="/category/crypto-protocols" prefetch={false}>
                      Crypto Protocols
                    </Link>
                    <Link href="/category/crypto-tips" prefetch={false}>
                      Quick Crypto Tips
                    </Link>
                  </div>
                  <div className={styles["col"]}>
                    <Link
                      href="/category/defi-concepts"
                      passHref
                      prefetch={false}
                    >
                      DeFi Concepts
                    </Link>
                    <Link
                      href="/category/defi-protocols"
                      passHref
                      prefetch={false}
                    >
                      DeFi Protocols
                    </Link>
                    <Link href="/category/tradfi" passHref prefetch={false}>
                      Traditional Finance
                    </Link>
                  </div>
                  <div className={styles["col"]}>
                    <Link href="/category/dev" passHref prefetch={false}>
                      Software Development
                    </Link>
                    <Link href="/category/privacy" prefetch={false}>
                      Privacy
                    </Link>
                    <Link href="/category/dev-tips" prefetch={false}>
                      Quick Dev Tips
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div> */
}
