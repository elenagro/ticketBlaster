import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../shared/components/Navigation/Navigation";
import Wrapper from "../../shared/components/FormElements/Wrapper";

export const HomeLayout = () => {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
};
