import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

import Navigation from "./shared/components/Navigation/Navigation";
import LogIn from "./main/pages/LogIn/LogIn";
import CreateAccount from "./main/pages/CreateAccount/CreateAccount";

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/log-in" exact>
            <LogIn />
          </Route>
          <Route path="/register" exact>
            <CreateAccount />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
