import React, { useState } from "react";

import Avatar from "../../../shared/UI/Avatar";
import Button from "../../../shared/FormElements/Button";
import Input from "../../../shared/FormElements/Input";
import ChangePassword from "./ChangePassword";
import Title from "../../../shared/FormElements/Title";
import styles from "./UserDetails.module.css";

const UserDetails = (props) => {
  const [shouldShow, setShouldShow] = useState(false);

  const changePassHandler = (e) => {
    e.preventDefault();
    setShouldShow((prevShouldShow) => !prevShouldShow);
  };

  return (
    <React.Fragment>
      <div className={styles["u-info"]}>
        <div className={styles["left-details"]}>
          <Avatar image="https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" />
          <Button
            style={{
              width: "128px",
              backgroundColor: "#fff",
              color: "#FF48AB",
              border: "1px solid #000",
            }}
          >
            Upload Avatar
          </Button>
        </div>

        <div className={styles["right-details"]}>
          <Input
            htmlFor="full_name"
            label="Full Name"
            id="full_name"
            type="text"
          />
          <Input htmlFor="email" label="E-mail" id="email" type="text" />
        </div>
      </div>
      <div className={styles["btn-submit"]}>
        <Button style={{ width: "128px", backgroundColor: "#000" }}>
          Submit
        </Button>
      </div>
      <div className={styles["reset-pass"]}>
        <Title title="Password" />
        <Button onClick={changePassHandler} style={{ width: "229px" }}>
          Change Password
        </Button>
      </div>
      <div>{shouldShow && <ChangePassword />}</div>
    </React.Fragment>
  );
};

export default UserDetails;
