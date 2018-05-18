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
    <div className="home-box">
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <div onClick={() => props.updateInType("log")}>Click to login</div>
      </Link>
      <br />
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <div onClick={() => props.updateInType("sign")}>Click to sign up</div>
      </Link>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
