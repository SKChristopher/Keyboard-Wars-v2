import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div id="navbar">
    <Link to="/" style={{ textDecoration: 'none' }}><div>Home</div></Link>
    <Link to="/userHome" style={{ textDecoration: 'none' }}><div>User Home</div></Link>
    <Link to="/favorites" style={{ textDecoration: 'none' }}><div>Favorites</div></Link>
  </div>
);

export default Navbar;
