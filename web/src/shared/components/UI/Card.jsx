import React from "react";

import Button from "../FormElements/Button";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["left-card"]}>
        <img
          className={styles["image-inside-card"]}
          src="https://www.photobox.co.uk/blog/wp-content/uploads/2017/07/concert-stage.jpg"
          alt="event"
        />
      </div>
      <div className={styles["right-card"]}>
        <div className={styles["card-top"]}>
          <h2 className={styles["card-title"]}>Incubus</h2>
          <span className={styles["card-date"]}>June 9th, 2023</span>
          <p className={styles["card-text"]}>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum
            cerebro. De carne lumbering animata corpora quaeritis. Summus
            brains, morbo vel maleficia?
          </p>
        </div>
        <div className={styles["card-bottom"]}>
          <span className={styles["card-location"]}>Zagreb, Croatia</span>
          <Button className={styles["card-btn"]}>Get tickets</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
