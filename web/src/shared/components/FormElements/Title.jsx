import React from "react";

import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <h2 className={`${styles.title} ${props.className}`}>{props.title}</h2>
  );
};

export default Title;
