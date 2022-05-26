import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";
import logo from "../assets/logo-circle.png";

import styles from "../styles/navbar.module.scss";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white-400 py-8">
        <div className="absolute md:float-left block">
          <Link href="/">
            <div className="h-20 w-20 relative">
              <Image
                src={logo}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                // className="rounded-full" // just an example
              ></Image>
            </div>
          </Link>
        </div>
        <div className="md:float-left block px-25px">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              [ Red Velvet ]
            </span>
          </Link>
        </div>
        <div>
          <Link href={"contact"}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              Contact
            </span>
          </Link>

          <Link href={"about"}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              About
            </span>
          </Link>
          <Link href={"portfolio"}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              Portfolio
            </span>
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
