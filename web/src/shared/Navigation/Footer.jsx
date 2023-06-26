import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Path 1.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles["fixed-container"]}>
        <footer className={styles.footer}>
          <div className={styles["logo-left-nav"]}>
            <Link to="/">
              <img
                src={logo}
                className={styles.logo}
                alt="TicketBlaster logo"
              />
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
          <div className={styles["right-side"]}>
            <span className={styles.copyright}>
              Copyright TicketBlaster © {year}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
