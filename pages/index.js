import Head from "next/head";
import Navbar from "../components/Navbar/Navbar.js";
import { RoughNotationGroup } from "react-rough-notation";

import styles from "../styles/Home.module.css";
import btnstyles from "../components/Button/styles.module.css";
import { RainbowHighlight } from "../components/RainbowHighlight.js";

export default function Home() {
   const colors = ["#cf9fff", "#6622CC"];
   return (
      <div className={styles.container}>
         <Head>
            <title>Sheb Saunders</title>
            <meta
               name="A portfolio page"
               content="Sheb's web development portfoilo"
            />
         </Head>
         <Navbar />
         <div className={styles.wrapper}>
            <div className={styles.heading}>
               <RoughNotationGroup show={true}>
                  <RainbowHighlight color={colors[1]}>
                     <h1>Hello &#128075;&#127998;, I am Sheb. </h1>
                  </RainbowHighlight>

                  <RainbowHighlight color={colors[0]}>
                     <h2>
                        A Full-stack Developer&#128105;&#127998;&#8205;&#128187;
                     </h2>
                  </RainbowHighlight>
               </RoughNotationGroup>

               <div className={styles.imageContainer}>
                  <img
                     className={styles.image}
                     src="/dp.jpg"
                     height="250"
                  ></img>
               </div>

               <div className={btnstyles.icons}>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/sheban-saunders/"
                  >
                     <div className={styles.icons8linkedin}></div>
                  </a>
                  <a target="_blank" href="https://github.com/Sheb95">
                     <div className={styles.icons8github}></div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
