import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Signup from "./Signup.jsx";
import UserHome from "./UserHome.jsx";
import Favorites from "./Favorites.jsx";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Signup} />
      <Route path="/signup" component={Signup} />
      <Route path="/userHome" component={UserHome} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  </main>
);

export default Main;
