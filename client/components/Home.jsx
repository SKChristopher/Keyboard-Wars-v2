import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    updateInType: inType => dispatch(actions.updateInType(inType))
  };
};

const mapStateToProps = store => ({});

const Home = props => (
  <div>
    <img
      class="background-image"
      src="https://www.hdwallpapers.in/download/hong_kong-wide.jpg"
    />
    <div onClick={() => props.updateInType("log")}>
      <Link to="/login">Click to login</Link>
    </div>
    <br />
    <div onClick={() => props.updateInType("sign")}>
      <Link to="/signup">Click to sign up</Link>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
