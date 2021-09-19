import React from "react";
import "./navigationBar.css";

const navItem = {
  paddingLeft: "2%",
  cursor: "pointer",
};

function NavigationBar(props) {
  return (
    <div id="navigation-bar-container">
      <label
        className="full-width text-center"
        style={{ marginBottom: "0rem" }}
      >
        Navigation
      </label>
      <hr
        className="seperator"
        style={{ margin: "0.5rem auto", borderTop: "1px solid #fffffe" }}
      />
      <div className="navigation-item-container">
        <div
          className="navigation-item row"
          onClick={(e) => props.changePath(0)}
        >
          <div style={{ width: "10%", textAlign: "center" }}>
            <i className="fas fa-home"></i>
          </div>
          <label style={navItem}>Home</label>
        </div>
        <div
          className="navigation-item row"
          onClick={(e) => props.changePath(2)}
        >
          <div style={{ width: "10%", textAlign: "center" }}>
            <i className="fas fa-clipboard"></i>
          </div>
          <label style={navItem}>Journals</label>
        </div>
        <div
          className="navigation-item row"
          onClick={(e) => props.changePath(4)}
        >
          <div style={{ width: "10%", textAlign: "center" }}>
            <i className="fas fa-bell"></i>
          </div>
          <label style={navItem}>Notifications</label>
        </div>
        <div
          className="navigation-item row"
          onClick={(e) => props.changePath(4)}
        >
          <div style={{ width: "10%", textAlign: "center" }}>
            <i className="fas fa-cog"></i>
          </div>
          <label style={navItem}>Account</label>
        </div>
      </div>
      {/* <hr
        className="seperator"
        style={{ margin: "0.5rem auto", borderTop: "1px solid #fffffe" }}
      /> */}

      <div className="text-center btn" id="log-out-button" onClick={(e) => {props.logOut()}}>
        <label style={navItem}>
          Log Out
          <i class="fas fa-sign-out-alt" style={{paddingLeft: "2px"}}></i>
        </label>
      </div>
    </div>
  );
}

export default NavigationBar;
