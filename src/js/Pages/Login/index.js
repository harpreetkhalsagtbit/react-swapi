import React from "react";
import LoginFormContainer from "../../Containers/LoginFormContainer";
import './index.css';

class Login extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="login-container">
          <h3 className="login-title">Log in</h3>
          <LoginFormContainer />
        </div>
      </main>
    );
  }
}

export default Login;
