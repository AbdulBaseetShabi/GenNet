import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

//routes
import LoginPage from "./routes/login/login"
import HomePage from "./routes/home/home"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signup"></Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
