import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeLayout } from "./main/layouts/HomeLayout";
import CreateAccount from "./main/pages/CreateAccount/CreateAccount";
import ForgotPassword from "./main/pages/ForgotPassword/ForgotPassword";
import LogIn from "./main/pages/LogIn/LogIn";
import User from "./main/pages/User/User";
import Home from "./main/pages/Home/Home";
import StandupComedies from "./main/pages/StandupComedy/StandupComedies";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/concerts" element={<User />} />
        <Route path="/comedies" element={<StandupComedies />} />
      </Route>
    </Routes>
  );
};

export default App;
