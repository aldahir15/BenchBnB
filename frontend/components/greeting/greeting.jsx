import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    return(
    this.props.current_user ?
      <div>
        <h1>HELLO! WELCOME BACK</h1>
        <button onClick ={this.props.logout} >Log out</button>
      </div>
      :
        <div>
          <Link to="afdas"> signup</Link>
          <Link to="adfasfd"> login</Link>
        </div>
    );
  }
}

export default Greeting;
