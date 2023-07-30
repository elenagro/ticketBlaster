import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./UserNav.module.css";

import Title from "../../../shared/FormElements/Title";

const UserNav = () => {
  const { userId } = useParams();
  return (
    <div className={styles["menu"]}>
      <Title title="User Details" />
      <ul className={styles["right-side-menu"]}>
        <li>
          <Link to="#" className={styles["menu-link"]}>
            Events
          </Link>
        </li>
        <li>
          <Link to="#" className={styles["menu-link"]}>
            Users
          </Link>
        </li>
        <li>
          <Link
            to={`/tickets-history/${userId}`}
            className={styles["menu-link"]}
          >
            Tickets History
          </Link>
        </li>
        {/* /${userId} */}
        <li>
          <Link to={`/users`} className={styles["menu-link"]}>
            User Details
          </Link>
        </li>
        <li>
          <Link to="/" className={styles["menu-link"]}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
