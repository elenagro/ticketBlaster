import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../shared/FormElements/Button";
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
        src="https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?w=740&t=st=1687771518~exp=1687772118~hmac=4a7290acfe18ad1949e0b2c8802193c287288b245eb6020c5140df6b8246fc98"
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
        <Link to={`/event-details/17`}>
          <Button className={styles["btn-hero"]}>Get tickets</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
