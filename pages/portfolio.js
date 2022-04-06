import Navbar from "../components/Navbar/Navbar.js";
import styles from "../styles/Portfolio.module.css";
import { RoughNotation } from "react-rough-notation";
import Typewriter from "typewriter-effect";
export default function Portfolio() {
   return (
      <div className={styles.container}>
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
         <p>Make your own dinasour name</p>
         <p>WeShare</p>
         <p>School of Code Bootcamper Resources Website</p>
         <p>Natural Hair API</p>
         <p>Link to github</p>
      </div>
   );
}
