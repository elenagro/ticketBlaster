import React from "react";

import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import styles from "./ChangePassword.module.css";

const ChangePassword = (props) => {
  return (
    <React.Fragment>
      <div className={styles["reset-pass-inputs"]}>
        <Input
          htmlFor="password"
          label="Password"
          id="password"
          type="text"
          style={{ width: "226px" }}
        />
        <Input
          htmlFor="password2"
          label="Re-type Password"
          id="password2"
          type="text"
          style={{ width: "226px" }}
        />
      </div>
      <div className={styles["reset-pass-btn"]}>
        <Button
          type="submit"
          style={{ width: "128px", backgroundColor: "#000" }}
        >
          Submit
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
