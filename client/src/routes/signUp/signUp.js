import React from "react";
import "./signUp.css";
import FirebaseApp from "../../services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import APICall from "../../services/api-connect";

const inputContainer = { width: "80%", margin: "0 auto" };

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  logInEmailAndPassword() {
    window.location.replace("/login");
  }

  signUp() {
    console.log(this.credentials);
    this.signUpEmailAndPassword(
      this.credentials["email"],
      this.credentials["password"]
    );
  }

  signUpEmailAndPassword(email, password) {
    const auth = getAuth(FirebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        APICall(
          "/register",
          {
            first_name: this.credentials["first_name"],
            email: this.credentials["email"],
            last_name: this.credentials["last_name"],
          },
          (response) => {
            if (response["status"] === 200) {
              window.alert("User Created");
              sessionStorage.setItem("user", JSON.stringify(user));
              this.logInEmailAndPassword()
            }
          }
        );

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
              type="text"
              placeholder="First Name"
              style={{ width: "38.5%", marginRight: "10px" }}
              onChange={(e) => {
                this.modifyLoginCredentials("first_name", e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{ width: "38.5%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("last_name", e.target.value);
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
          <button
            id="signup-button"
            className="full-width btn custom-button"
            onClick={(e) => this.signUp()}
          >
            SignUp
          </button>
          <button
            id="login-button"
            className="full-width outline-button btn custom-button"
            onClick={(e) => this.logInEmailAndPassword()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
