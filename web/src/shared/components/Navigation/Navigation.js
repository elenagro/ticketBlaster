import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Header from "./Header";
import styles from "./Navigation.module.css";
import logo from "../../../assets/Path 1.svg";
import cart from "../../../assets/cart-shopping-solid.svg";

const Navigation = (props) => {
  return (
    <Header>
      <ul className={styles["left-side"]}>
        <li>
          <Link to="/">
            <img src={logo} className={styles.logo} />
          </Link>
          <li>
            <Link to="/concerts" className={styles["nav-link"]}>
              Musical Concerts
            </Link>
          </li>
          <li>
            <Link to="/comedies" className={styles["nav-link"]}>
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
          <Link to="#">
            <img src={cart} className={styles.cart} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="../../../assets/user-solid.png" />
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default Navigation;
