import React from "react";

import Hero from "../../components/Events/Hero";
import MusicalConcerts from "../MusicalConcerts/MusicalConcerts";
import StandupComedies from "../StandupComedy/StandupComedies";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Hero />
      <div className={styles["home-events"]}>
        <MusicalConcerts className={styles.event} />
        <StandupComedies className={styles.event} />
      </div>
    </>
  );
};

export default Home;
