export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECIEVE_ERRORS = "RECIEVE_ERRORS";

import * as APIUtil from "../util/session_api_util";

export const login = user => {
  return dispatch => {
    APIUtil.login(user).then(data => dispatch(receiveCurrentUser(data)));
  };
};

export const logout = () => dispatch =>(
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch =>(
  APIUtil.signup(user).then(data => dispatch(receiveCurrentUser(data)))
);

export const receiveCurrentUser = user =>(
  {type: RECEIVE_CURRENT_USER,
  user}
);

export const receiveErrors = errors => (
  {type: RECIEVE_ERRORS,
  errors}
);
