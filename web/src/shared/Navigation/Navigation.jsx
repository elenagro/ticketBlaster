import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../main/store/auth-context";
import Header from "./Header";

import styles from "./Navigation.module.css";
import logo from "../../assets/Path 1.svg";
import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart-shopping-solid.svg";

const Navigation = (props) => {
  const { isLoggedIn, isLoggedOut } = useAuth();

  return (
    <Header>
      <div className={styles["logo-left-nav"]}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="TicketBlaster logo" />
        </Link>
        <ul className={styles["left-side"]}>
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
        </ul>
      </div>

      <ul className={styles["right-side"]}>
        <li>
          <input placeholder="Search" className={styles["search-bar"]} />
        </li>
        {isLoggedIn && !isLoggedOut ? (
          <>
            <li>
              <Link to="/shopping-cart">
                <img src={cartIcon} alt="Cart Icon" className={styles.icons} />
              </Link>
            </li>
            <li>
              <Link to="/tickets-history">
                <img src={userIcon} alt="User Icon" className={styles.icons} />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/log-in">
                <button className={styles.login}>Log in</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className={styles["create-account"]}>
                  Create Account
                </button>
              </Link>
            </li>{" "}
          </>
        )}
      </ul>
    </Header>
  );
};

export default Navigation;
