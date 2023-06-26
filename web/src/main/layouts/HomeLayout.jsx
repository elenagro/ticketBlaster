import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import Wrapper from "../../shared/FormElements/Wrapper";
import Footer from "../../shared/Navigation/Footer";

export const HomeLayout = () => {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
};
