import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { getCategories } from "../services";
import searchIcon from "../assets/wallet-icons/search.svg";
import hamburger from "../assets/wallet-icons/hamburger.svg";
import styles from "../styles/header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   getCategories().then((newCategories) => {
  //     setCategories(newCategories);
  //   });
  // }, []);
  const [active, setActive] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const router = useRouter()
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    router.push(
      "search/",
    )
  }

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchInput(e.target.value)}
              ></input>
              <button type="submit">
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
              </button>
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
                <Link href="/search" passHref prefetch={false}>
                  All Posts
                </Link>
                <Link href="/" passHref prefetch={false}>
                  Portfolio
                </Link>
              </div>
              <div className={styles["navbar-categories"]}>
                <div className={styles["cols-title"]}>
                  <p>Categories</p>
                </div>
                <div className={styles["flex-container"]}>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/crypto-concepts" passHref prefetch={false}>
                      Crypto Concepts
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/crypto-protocols" passHref prefetch={false}>
                      Crypto Protocols
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/crypto-tips" passHref prefetch={false}>
                      Quick Crypto Tips
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link
                      href="/category/defi-concepts"
                      passHref
                      prefetch={false}
                    >
                      DeFi Concepts
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link
                      href="/category/defi-protocols"
                      passHref
                      prefetch={false}
                    >
                      DeFi Protocols
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/tradfi" passHref prefetch={false}>
                      Traditional Finance
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/dev" passHref prefetch={false}>
                      Software Development
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/dev-tips" prefetch={false}>
                      Quick Dev Tips
                    </Link>
                  </div>
                  <div className={styles["flex-item"]}>
                    <Link href="/category/privacy" prefetch={false}>
                      Privacy
                    </Link>
                  </div>
                  {/* <div className={styles["flex-item"]}>
                    <Link href="/category/random" passHref prefetch={false}>
                      Random
                    </Link>
                  </div> */}
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