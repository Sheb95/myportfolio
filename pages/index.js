import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Sheb's Portfolio Page</title>
            <meta
               name="A portfolio page"
               content="Sheb's web development portfoilo"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <h1>Hello, I'm Sheb.</h1>
         <Link href="/about">
            <a>About me</a>
         </Link>{" "}
         <Link href="/contact">
            <a>Contact</a>
         </Link>{" "}
         <Link href="/gallery">
            <a>My Photography</a>
         </Link>
      </div>
   );
}
