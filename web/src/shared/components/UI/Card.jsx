import React from "react";

import Button from "../FormElements/Button";

import styles from "./Card.module.css";

const Card = (props) => {
  <div>
    <div className={styles["left-card"]}>
      <img
        className={styles["image-inside-card"]}
        src="https://www.photobox.co.uk/blog/wp-content/uploads/2017/07/concert-stage.jpg"
        alt="event"
      />
    </div>
    <div className={styles["right-card"]}>
      <h2 className={styles["card-title"]}>Incubus</h2>
      <h3 className={styles["card-date"]}>June 9th, 2023</h3>
      <p className={styles["card-text"]}>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
        vel maleficia?
      </p>
      <div>
        <span className={styles["card-location"]}>Zagreb, Croatia</span>
        <Button className={styles["card-btn"]} />
      </div>
    </div>
  </div>;
};

export default Card;
