import React, { Component } from "react";

import Main from './Main.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
