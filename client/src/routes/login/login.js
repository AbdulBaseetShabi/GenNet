import React from "react";
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import APICall from "../../services/api-connect";
import FirebaseApp from "../../services/firebase";
const inputContainer = { width: "80%", margin: "0 auto" };

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("user")) {
      window.location.replace("/home");
    }
  }

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  signUp() {
    window.location.replace("/signUp");
  }

  logInEmailAndPassword() {
    const auth = getAuth(FirebaseApp);
    signInWithEmailAndPassword(
      auth,
      this.credentials["email"],
      this.credentials["password"]
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("user", JSON.stringify(user));
        APICall("/login", { email: user.email }, (res) => {
          if (res["status"] === 200) {
            sessionStorage.setItem("user_2", JSON.stringify(res["response"]));
            window.alert("User LoggedIN");
            window.location.replace("/home");
          }
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
            id="login-button"
            className="full-width outline-button btn custom-button"
            onClick={(e) => this.logInEmailAndPassword()}
          >
            Login
          </button>
          <button
            id="signup-button"
            className="full-width btn custom-button"
            onClick={(e) => this.signUp()}
          >
            SignUp
          </button>
        </div>
      </div>
    );
  }
}

export default LogIn;
