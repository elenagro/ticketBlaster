import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Header from "./Header";

import styles from "./Navigation.module.css";
import logo from "../../../assets/Path 1.svg";

const Navigation = (props) => {
  return (
    <Header>
      <ul className={styles["left-side"]}>
        <li>
          <Link to="/">
            <img src={logo} className={styles.logo} alt="TicketBlaster logo" />
          </Link>
          <li>
            <Link to="/concerts" className={styles["musical-concerts"]}>
              Musical Concerts
            </Link>
          </li>
          <li>
            <Link to="/comedies" className={styles["standup-comedies"]}>
              Stand-up Comedy
            </Link>
          </li>
        </li>
      </ul>

      <ul className={styles["right-side"]}>
        <li>
          <input placeholder="Search" className={styles["search-bar"]} />
        </li>
        <li>
          <Link to="/log-in">
            <button className={styles.login}>Log in</button>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button className={styles["create-account"]}>Create Account</button>
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default Navigation;
