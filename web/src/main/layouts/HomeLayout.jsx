import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../shared/components/Navigation/Navigation";

export const HomeLayout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
