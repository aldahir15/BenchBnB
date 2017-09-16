import React from 'react';
import {Link} from "react-router-dom";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: ''};
  }

  handleChange(key){
    return e => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    let currentPage;
    let otherPage;
    if(this.props.formType === "login"){
      currentPage = "Log in";
      otherPage = "Sign up";
    }
    else {
      currentPage = "Sign up";
      otherPage = "Log in";
    }
    return(
      <div>
        <h1>{currentPage}</h1>
        <Link to={this.props.formType === "login" ? "/signup" : "/login"}>{otherPage}</Link>
        <form>
          <label> Username:
            <input onChange = {this.handleChange('username')}
              type="text" name="" value="" />
          </label>

          <label> Password:
            <input onChange = {this.handleChange('password')}
              type="password" name="" value="" />
          </label>

          <input onClick = {this.handleSubmit}
            type="Submit" name="" value="Submit" />
        </form>
      </div>
    );
  }
}
