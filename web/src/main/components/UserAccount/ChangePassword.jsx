import React from "react";

import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

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
      <div>
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