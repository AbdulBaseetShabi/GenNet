import React from "react";
import "./landing.css";

import NavigationBar from "../../widget/navigationBar/navigationBar";
import Home from "../home/home";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_path: 0,
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(index) {
    window.alert(index);
    // this.setState({ current_path: path });
  }

  render() {
    const current_path = this.state.current_path;
    let view;
    if (current_path === 0) {
      view = <Home/>
    }

    return (
      <div id="landing-container" className="row">
        <div style={{ width: "25%" }}>
          <NavigationBar changePath = {this.navigate}/>
        </div>
        <div style={{ width: "75%" }}>
          {view}
        </div>
      </div>
    );
  }
}

export default Landing;
