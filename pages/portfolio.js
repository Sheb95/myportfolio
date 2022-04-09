import Navbar from "../components/Navbar/Navbar.js";
import styles from "../styles/Portfolio.module.css";
import Head from "next/head";

import Typewriter from "typewriter-effect";
export default function Portfolio() {
   return (
      <div className={styles.container}>
         <Head>
            <title>My Portfolio</title>
            <meta
               name="Projects"
               content="A page that displays all the author's projects"
            />
         </Head>
         <Navbar />
         <header className={styles.heading}>
            <h1>
               <Typewriter
                  onInit={(typewriter) => {
                     typewriter.typeString("My Projects").start();
                  }}
               />
            </h1>
         </header>
         <p>
            {" "}
            Under construction. But click the image to be directed to my Github
            profile.{" "}
         </p>
         <a href="https://github.com/Sheb95">
            <img
               src="https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png"
               width={500}
            ></img>
         </a>
      </div>
   );
}
