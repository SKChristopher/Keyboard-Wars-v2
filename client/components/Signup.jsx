import React from "react";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addUser: (event, inType) => dispatch(actions.addUser(event, inType)),
    verifyUser: (event, inType) => dispatch(actions.verifyUser(event, inType))
  };
};

const mapStateToProps = store => ({
  inType: store.inType,
  loggedIn: store.loggedIn,
});

let submit;
let buttonText;

const Signup = props => {
  if (props.inType === "sign") {
    submit = props.addUser;
    buttonText = "Sign up";
  } else {
    submit = props.verifyUser;
    buttonText = "Log in";
  }

  return (
    <div>
      <img
        class="background-image"
        src="https://www.hdwallpapers.in/download/hong_kong-wide.jpg"
      />
      <div class="user-form">
        <form onSubmit={submit}>
          <input id="username" name="username" placeholder="username" />
          <br />
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <br />
          <button>{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
