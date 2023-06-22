import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../../shared/FormElements/Wrapper";
import UserDetails from "../../components/UserAccount/UserDetails";

import styles from "./User.module.css";

const User = () => {
  return (
    <Wrapper>
      <div className={styles["left-side-menu"]}>
        <UserDetails />
      </div>
      <div className={styles["right-side"]}>
        <ul className={styles["right-side-menu"]}>
          <li>
            <Link to="/tickets-history">Tickets History</Link>
          </li>
          <li>
            <Link to="/concerts">User Details</Link>
          </li>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default User;
