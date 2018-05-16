import React from "react";
import { Link } from 'react-router-dom';

const Home = props => (
  <div>
    <Link to="/login">Click to login</Link>
    <br />
    <Link to="/signup">Click to sign up</Link>
  </div>
);

export default Home;
