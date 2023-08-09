import React from "react";

import Wrapper from "../../../shared/FormElements/Wrapper";
import UserDetails from "../../components/UserAccount/UserDetails";
import UserNav from "../../components/UserAccount/UserNav";

import styles from "./User.module.css";

const User = () => {
  return (
    <Wrapper>
      <div className={styles["right-side"]}>
        <UserNav />
      </div>
      <div className={styles["left-side-menu"]}>
        <UserDetails />
      </div>
    </Wrapper>
  );
};
export default User;
