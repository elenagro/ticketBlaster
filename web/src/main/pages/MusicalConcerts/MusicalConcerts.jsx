import React from "react";

import Title from "../../../shared/FormElements/Title";
import { EVENTS } from "../StandupComedy/DUMMY_DATA";
import styles from "./MusicalConcerts.module.css";
import Card from "../../../shared/UI/Card";

const MusicalConcerts = (props) => {
  return (
    <div className={styles["concerts-container"]}>
      <Title title="Musical Concerts" />
      <div className={`${styles["main-concerts-grid"]} ${props.className}`}>
        {EVENTS.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
            date={card.date}
            location={card.location}
            className={styles["limited-rows"]}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicalConcerts;
