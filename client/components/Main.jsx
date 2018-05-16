import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Signup from "./Signup.jsx";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Signup} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </main>
);

export default Main;
