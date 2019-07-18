import React from "react";
import TextBox from "../Commons/TextBox";
import PasswordTextBox from "../Commons/PasswordTextBox";
import Button from "../Commons/Button";
import { fail } from "assert";

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props, 'props login form')
    this.state = {
      form:{}
    }
    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { target } = event;
    const { name, value } = target;
    this.setState((previousState, previousProps) => {
      previousState.form = Object.assign({}, {...previousState.form}, {[name]:value})
      return {
        form: previousState.form
      };
    });

  }

  onClick () {
    this.props.onClick(this.state.form);
  }
  componentDidUpdate() {
    console.log('props', this.props)
  }
  render() {
    console.log('rendering login form', this.props)
    return (
      <div className="form-vertical">
        <div className="input-group">
          <label>Username</label>
          <TextBox className="txt" name="username" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <label>Password</label>
          <PasswordTextBox name="password" className="txt" onChange={this.handleChange}/>
        </div>
        <div className="input-group">
        <Button className="btn btn-primary btn-large" disabled={this.props.login.isVerifying} onClick={this.onClick}>
            {this.props.login.isVerifying?"Verifying, Please wait...":"Log In"}
        </Button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
