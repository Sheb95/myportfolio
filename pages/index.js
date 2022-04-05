import Head from "next/head";
import Button from "../components/Button/Button.js";
import Navbar from "../components/Navbar/Navbar.js";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import styles from "../styles/Home.module.css";
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
         <div className="heading">
            <RoughNotationGroup show={true}>
               <RainbowHighlight color={colors[1]}>
                  <h1>Hello, I am Sheb.</h1>
               </RainbowHighlight>
               <RainbowHighlight color={colors[0]}>
                  <h2>A Fullstack Developer</h2>
               </RainbowHighlight>
            </RoughNotationGroup>
         </div>

         <img src="/me.png" height="250"></img>
         <Button text="CV" />
         <Button text="Random Fact About Me" />
      </div>
   );
}
