import React from "react";

import Title from "../../../shared/FormElements/Title";
import { EVENTS } from "./DUMMY_DATA";
import styles from "./StandupComedies.module.css";
import Card from "../../../shared/UI/Card";

const StandupComedies = (props) => {
  const comedyEvents = EVENTS.filter((event) => event.category === "comedy");
  return (
    <div className={styles["comedies-container"]}>
      <Title title="Stand-up Comedy" />
      <div className={`${styles["main-comedies-grid"]} ${props.className}`}>
        {comedyEvents.map((card) => (
          <Card
            key={card.id}
            id={card.id}
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

export default StandupComedies;
