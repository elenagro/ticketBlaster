import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import Wrapper from "../../shared/FormElements/Wrapper";
import Footer from "../../shared/Navigation/Footer";

import styles from "./HomeLayout.module.css";

export const HomeLayout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
};
