import React from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={`${styles["form-container"]} ${props.className}`}>
      <form className={styles.form} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </div>
  );
};

export default Form;
