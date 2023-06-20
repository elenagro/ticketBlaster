import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${styles["input-label"]} ${props.className}`}>
      <label htmlFor={props.htmlFor} className={styles.label}>
        {props.label}
      </label>
      <input
        className={props.error ? styles.invalid : styles.valid}
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        style={props.style}
      />
    </div>
  );
};

export default Input;
