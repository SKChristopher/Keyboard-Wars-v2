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
  inType: store.inType
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
    <div class="user-form">
      <form onSubmit={submit}>
        <input name="username" placeholder="username" />
        <br />
        <input name="password" placeholder="password" type="password" />
        <br />
        <button>{buttonText}</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
