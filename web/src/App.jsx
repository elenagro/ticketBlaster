import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./main/store/auth-context";

import { HomeLayout } from "./main/layouts/HomeLayout";
import CreateAccount from "./main/pages/CreateAccount/CreateAccount";
import LogIn from "./main/pages/LogIn/LogIn";
import User from "./main/pages/User/User";
import ForgotPassword from "./main/pages/ForgotPassword/ForgotPassword";
import Home from "./main/pages/Home/Home";
import StandupComedies from "./main/pages/StandupComedy/StandupComedies";
import MusicalConcerts from "./main/pages/MusicalConcerts/MusicalConcerts";
import Users from "./main/pages/UsersList/UsersList";
import Events from "./main/pages/Events/Events";
import TicketsHistory from "./main/pages/TicketsHistory/TicketsHistory";
import EventDetails from "./main/pages/EventDetails/EventDetails";
import SearchResults from "./main/pages/SearchResults/SearchResults";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/events" element={<Events />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/concerts" element={<MusicalConcerts />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
          {/* /:userId */}
          <Route path="/users" element={<Users />} />
          <Route path="/comedies" element={<StandupComedies />} />
          <Route path="/tickets-history" element={<TicketsHistory />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
