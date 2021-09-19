import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

//routes
import LoginPage from "./routes/login/login"
import SignUp from "./routes/signUp/signUp"
import LandingPage from "./routes/landing/landing"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signUp"><SignUp/>
            <SignUp/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
