import React from "react";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["fixed-container"]}>
        <header className={styles.header}>{props.children}</header>
      </div>
    </div>
  );
};

export default Header;
