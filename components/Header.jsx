import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";
import logo from "../assets/logo-circle.png";

import styles from "../styles/header.module.scss";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className={styles["header"]}>
      <div className={styles["header-content"]}>
        <div className={styles["title-box"]}>
          <Link href="/" passHref>
            <span className={styles["title"]}>[ Red Velvet ]</span>
          </Link>
          <span className={styles["spacer"]}>|</span>
          <Link href="/blog" passHref>
            <span className={styles["blog-title"]}>Blog</span>
          </Link>
        </div>
        <div className={styles["dev"]}>
          <Link href="/" passHref>
            <span className={styles["portfolio"]}>Portfolio</span>
          </Link>
        </div>
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
