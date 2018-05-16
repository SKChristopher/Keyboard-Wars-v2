import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div id="navbar">
    <Link to="/">Home</Link>
    <Link to="/userHome">User Home</Link>
  </div>
);

export default Navbar;
