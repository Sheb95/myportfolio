import Head from "next/head";
import Button from "../components/Button/Button.js";
import Navbar from "../components/Navbar/Navbar.js";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import styles from "../styles/Home.module.css";
import { RainbowHighlight } from "../components/RainbowHighlight.js";

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
         <Navbar />
         <div className="heading">
            <RoughNotation show={true}>
               <RainbowHighlight>
                  <h1>Hello, I am Sheb.</h1>
               </RainbowHighlight>
            </RoughNotation>
         </div>

         <h2>A Fullstack Developer</h2>
         <img src="/me.png" height="250"></img>
         <Button text="CV" />
         <Button text="Random Fact About Me" />
      </div>
   );
}
