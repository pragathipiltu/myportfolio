import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pragathi</h1>
        <p className={styles.description}>
          I’m currently a Support Engineer at Amazon with a strong focus on software engineering. 
          I work extensively with Java, Python, AWS, and CI/CD pipeline management.
          I also have experience with JavaScript , React.js and I'm familiar with SpringBoot and MySQL.
          I’m passionate about delivering effective technical solutions and optimizing performance. Feel free to reach out!
        </p>
        <a href="mailto:pragathipiltu234@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};