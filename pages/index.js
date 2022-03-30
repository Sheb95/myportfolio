import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Sheb Saunders</title>
            <meta
               name="A portfolio page"
               content="Sheb's web development portfoilo"
            />
         </Head>
         <h1>Hello, I&#39m Sheb.</h1>
         <Link href="/about">
            <a>About me</a>
         </Link>
         <Link href="/contact">
            <a>Contact</a>
         </Link>
         <Link href="/gallery">
            <a>My Photography</a>
         </Link>
      </div>
   );
}
