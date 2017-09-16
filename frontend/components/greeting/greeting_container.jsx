import React from 'react';
import Greeting from './greeting';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

const mapStateToProps = (state) => (
  {
    current_user: state.session.current_user
  }
);


const mapDispatchToProps = (dispatch) => (
  {
    logout: () => {
      dispatch(logout());
    }
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
