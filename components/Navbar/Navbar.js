import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
   return (
      <div className={styles.nav}>
         <h2>Sheban Saunders</h2>
         <nav className={styles.navigation}>
            <Link href="/about">
               <a>About Me</a>
            </Link>
            <Link href="/portfolio">
               <a>Portfolio</a>
            </Link>
            <Link href="/">
               <a>Home</a>
            </Link>
         </nav>
      </div>
   );
};

export default Navbar;
