import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

import Navigation from "./shared/components/Navigation/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
