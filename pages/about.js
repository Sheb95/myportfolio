import Navbar from "../components/Navbar/Navbar.js";
import styles from "../styles/About.module.css";
import { RoughNotation } from "react-rough-notation";

export default function About() {
   return (
      <div className={styles.wrapper}>
         <Head>
            <title>About Me</title>
            <meta
               name="About me"
               content="A brief introduction about the author"
            />
         </Head>
         <Navbar />
         <header className={styles.heading}>
            <RoughNotation show={true} type="underline">
               <h1>About me</h1>
            </RoughNotation>
         </header>
         <main className={styles.container}>
            <img className={styles.image} src="/hk.jpg"></img>
            <article className={styles.content}>
               <p className={styles.text}>
                  Hello! My name is Sheban (pronounced just as it looks) but
                  most people call me Sheb. If you are expecting a background
                  story where I entered this world with a keyboard and mouse
                  tightly nestled into my arms, then I am sorry to disappoint
                  you. My entrance into computer programming actually started in
                  March 2021, when I discovered Python through Zed Shaw's "Learn
                  Python The Hard Way". Boring right? But, for me, that was the
                  moment that changed my life forever.
               </p>
               <p className={styles.text}>
                  I learned how to code initially because I wanted to change the
                  trajectory of my life. I worked at a supermarket despite
                  having a degree. I was fed up with making ends meet and saw
                  learning how to code a pathway out of barely surviving.
                  However, I stuck with it simply because I fell in love with
                  it. I enjoy the process of planning, building and solving
                  problems.
               </p>
               <p className={styles.text}>
                  My skills were boosted when I learned full-stack development
                  at The School Of Code Bootcamp. Here, I learned the
                  foundations of web development (JavaScript, CSS and HTML) in
                  addition to other tech stacks (i.e. React, Express, SQL,
                  Node.js). I also learned and practised agile methodologies
                  within group projects.
               </p>
               <p className={styles.text}>
                  Now, I am excited about what is ahead. The journey is far from
                  over. I am eager to learn, thrive and grow in this industry.
               </p>
            </article>
         </main>
      </div>
   );
}
