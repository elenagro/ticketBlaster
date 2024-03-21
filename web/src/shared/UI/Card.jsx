import React from "react";

import Button from "../FormElements/Button";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["left-card"]}>
        <img
          className={styles["image-inside-card"]}
          src={props.image}
          alt="event"
        />
      </div>
      <div className={styles["right-card"]}>
        <div className={styles["card-top"]}>
          <h2 className={styles["card-title"]}>{props.title}</h2>
          <span className={styles["card-date"]}>{props.date}</span>
          <p className={`${styles["card-text"]} ${props.className}`}>
            {props.text}
          </p>
        </div>
        <div className={styles["card-bottom"]}>
          <span className={styles["card-location"]}>{props.date}</span>
          <Link to={`/event-details/${props.id}`}>
            <Button className={styles["card-btn"]}>Get tickets</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
