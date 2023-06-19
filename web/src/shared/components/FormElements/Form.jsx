import React from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles.form}>{props.children}</form>
    </div>
  );
};

export default Form;
