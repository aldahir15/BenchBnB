import {RECEIVE_CURRENT_USER} from '../actions/session_actions';


const sessionReducer = (state = {current_user: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {current_user: action.user});
    default:
      return state;
  }
};



export default sessionReducer;
