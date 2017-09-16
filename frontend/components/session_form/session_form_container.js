import {connect} from "react-redux";
import React from "react";
import {login , signup} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) =>({
  logged_in: Boolean(state.session.current_user),
  errors: state.errors,
  formType: ownProps.pathName.location.includes("login") ? "login" : "signUp"
});

const mapDispatch = (dispatch, ownProps) => {
  const actionCreator= undefined;
  if (ownProps.formType === 'login') {
    actionCreator = login;
  } else {
    actionCreator = signup;
  }
  return {
    processForm: () => {
      dispatch(actionCreator());
    }
  };
};
