import React from "react";
import { Link, useParams } from "react-router-dom";

import Wrapper from "../../../shared/FormElements/Wrapper";
import UserDetails from "../../components/UserAccount/UserDetails";

import styles from "./User.module.css";

const User = () => {
  const { userId } = useParams();

  return (
    <Wrapper>
      <div className={styles["left-side-menu"]}>
        <UserDetails />
      </div>
      <div className={styles["right-side"]}>
        <ul className={styles["right-side-menu"]}>
          <li>
            <Link to={`/tickets-history/${userId}`}>Tickets History</Link>
          </li>
          <li>
            <Link to={`/concerts/${userId}`}>User Details</Link>
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
