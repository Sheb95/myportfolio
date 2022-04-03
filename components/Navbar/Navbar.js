import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
   return (
      <div className={styles.nav}>
         <Link href="/about">
            <a>About me</a>
         </Link>
         <Link href="/contact">
            <a>Say Hello</a>
         </Link>
         <Link href="/gallery">
            <a>My Photography</a>
         </Link>
         <Link href="/portfolio">
            <a>Portfolio</a>
         </Link>
         <Link href="/">
            <a>Home</a>
         </Link>
      </div>
   );
};

export default Navbar;
