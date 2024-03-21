import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Events/Hero";
import Button from "../../../shared/FormElements/Button";

import styles from "./Home.module.css";
import { EVENTS } from "../StandupComedy/DUMMY_DATA";
import Card from "../../../shared/UI/Card";

const Home = () => {
  const concertEvents = EVENTS.filter((event) => event.category === "concert");
  const comedyEvents = EVENTS.filter((event) => event.category === "comedy");

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Hero />
      <div className={styles["home-events"]}>
        <div className={styles["events-flex"]}>
          {concertEvents.slice(0, 4).map((card) => (
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
          {EVENTS.length > 4 && (
            <Link to="/concerts" onClick={handleClick}>
              <Button className={styles.button}>
                See All Musical Concerts
              </Button>
            </Link>
          )}
        </div>
        <div className={styles["events-flex"]}>
          {comedyEvents.slice(0, 4).map((card) => (
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
          {EVENTS.length > 4 && (
            <Link to="/comedies" onClick={handleClick}>
              <Button className={styles.button}>See All Comedy Shows</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
