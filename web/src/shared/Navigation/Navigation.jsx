import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../main/store/auth-context";
import Header from "./Header";

import styles from "./Navigation.module.css";
import logo from "../../assets/Path 1.svg";
import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart-shopping-solid.svg";

const Navigation = (props) => {
  const { isLoggedIn, isLoggedOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search-results?search=${searchQuery}`);
  };

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

      <form onSubmit={handleSearchSubmit} className={styles["search-form"]}>
        <input
          placeholder="Search"
          className={styles["search-bar"]}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </form>

      <ul className={styles["right-side"]}>
        <li>
          {isLoggedIn && !isLoggedOut ? (
            <>
              <Link to="/shopping-cart">
                <img src={cartIcon} alt="Cart Icon" className={styles.icons} />
              </Link>
              <Link to="/tickets-history">
                <img src={userIcon} alt="User Icon" className={styles.icons} />
              </Link>
            </>
          ) : (
            <>
              <Link to="/log-in">
                <button className={styles.login}>Log in</button>
              </Link>
              <Link to="/register">
                <button className={styles["create-account"]}>
                  Create Account
                </button>
              </Link>
            </>
          )}
        </li>
      </ul>
    </Header>
  );
};

export default Navigation;
