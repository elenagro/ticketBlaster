import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.htmlFor} className={styles.label}>
        {props.label}
      </label>
      <input
        className={styles.input}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
