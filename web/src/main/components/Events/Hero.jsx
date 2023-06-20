import React from "react";

import Button from "../../../shared/components/FormElements/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  let date = new Date(2023, 5, 9).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  let place = "Vienna, Austria";

  return (
    <div className={styles["hero-container"]}>
      <img
        className={styles.hero}
        src="https://www.photobox.co.uk/blog/wp-content/webp-express/webp-images/uploads/2017/07/concert-stage.jpg.webp"
        alt="hero"
      />
      <div className={styles.title}>
        <h2>Rage Against The Machine</h2>
      </div>
      <div className={styles["date-place"]}>
        <h4>
          {date}, {place}
        </h4>
      </div>
      <div className={styles["btn-hero-container"]}>
        <Button className={styles["btn-hero"]}>Get tickets</Button>
      </div>
    </div>
  );
};

export default Hero;
