import Navbar from "../components/Navbar/Navbar.js";
import styles from "../styles/About.module.css";
import { RoughNotation } from "react-rough-notation";

export default function About() {
   return (
      <div className={styles.wrapper}>
         <Navbar />
         <header className={styles.heading}>
            <RoughNotation show={true} type="underline">
               <h1>About me</h1>
            </RoughNotation>
         </header>
         <main className={styles.container}>
            <img className={styles.image} src="/hk.jpg"></img>
            <p className={styles.text}>
               I'm baby thundercats PBR&B enamel pin fixie drinking vinegar
               chambray butcher beard. Godard skateboard plaid jean shorts.
               Single-origin coffee roof party blue bottle, leggings shoreditch
               listicle hell of prism humblebrag etsy mixtape keffiyeh locavore
               forage. Craft beer vinyl thundercats, marfa pickled pop-up +1
               lyft shabby chic mumblecore. 8-bit four loko jianbing mixtape
               hella microdosing readymade VHS neutra. Master cleanse iceland
               letterpress mustache pickled leggings copper mug fingerstache.
               Church-key helvetica subway tile, ugh bushwick tattooed
               asymmetrical photo booth selfies pabst wayfarers. Scenester
               tumeric brooklyn, hoodie cornhole pop-up prism quinoa keytar
               iPhone. Succulents venmo neutra man braid mixtape la croix
               raclette gochujang trust fund godard kombucha 3 wolf moon. Yuccie
               semiotics palo santo church-key neutra prism.
            </p>
         </main>
      </div>
   );
}
