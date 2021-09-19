import React from "react";
import "./signUp.css";

const inputContainer = { width: "80%", margin: "0 auto" };

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      email: "",
      password: "",
    };
  }

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  logInEmailAndPassword() {
    console.log(this.credentials);
    window.location.replace("/home");
  }

  render() {
    return (
      <div
        id="login-container"
        className="d-flex justify-content-center align-items-center"
      >
        <div id="login-card">
          <label className="header-one full-width text-center">
            Welcome to GenNet
          </label>
          <hr className="seperator" />
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "20%" }}
            >
              <i className="fas fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="First Name"
              style={{ width: "38.5%", marginRight: "10px" }}
              onChange={(e) => {
                this.modifyLoginCredentials("email", e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Last Name"
              style={{ width: "38.5%"}}
              onChange={(e) => {
                this.modifyLoginCredentials("email", e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "20%" }}
            >
              <i className="fas fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="Enter your email address ..."
              style={{ width: "80%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("email", e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "20%" }}
            >
              <i className="fas fa-lock"></i>
            </div>
            <input
              type="password"
              placeholder="Enter your password ..."
              style={{ width: "80%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("password", e.target.value);
              }}
            />
          </div>
          <hr className="seperator" />
          <button id="signup-button" className="full-width btn custom-button">SignUp</button>
          <button id="login-button" className="full-width outline-button btn custom-button" onClick={(e) => this.logInEmailAndPassword()}>Login</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
