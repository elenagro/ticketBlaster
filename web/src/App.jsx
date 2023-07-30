import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeLayout } from "./main/layouts/HomeLayout";
import CreateAccount from "./main/pages/CreateAccount/CreateAccount";
import LogIn from "./main/pages/LogIn/LogIn";
import User from "./main/pages/User/User";
import ForgotPassword from "./main/pages/ForgotPassword/ForgotPassword";
import Home from "./main/pages/Home/Home";
import StandupComedies from "./main/pages/StandupComedy/StandupComedies";
import MusicalConcerts from "./main/pages/MusicalConcerts/MusicalConcerts";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/concerts" element={<MusicalConcerts />} />
        {/* /:userId */}
        <Route path="/users" element={<User />} />
        <Route path="/comedies" element={<StandupComedies />} />
      </Route>
    </Routes>
  );
};

export default App;
