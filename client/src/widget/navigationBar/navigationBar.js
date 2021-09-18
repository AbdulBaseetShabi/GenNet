import React from "react";
import "./navigationBar.css";
  
const navItem = {
  paddingLeft: "2%",
  cursor: "pointer",
}

function NavigationBar(props) {
  return (
    <div id="navigation-bar-container">
      <label className="full-width text-center" style={{marginBottom: "0rem"}}>Navigation</label>
      <hr className="seperator" style={{margin: "0.5rem auto", borderTop: "1px solid #fffffe"}} />
      <div className="navigation-item-container">
        <div className="navigation-item" onClick={(e)=>props.changePath(0)}>
          <i className="fas fa-home"></i>
          <label style={navItem}>Home</label>
        </div>
        <div className="navigation-item" onClick={(e)=>props.changePath(1)}>
          <i className="fas fa-bell"></i>
          <label style={navItem}>Notifications</label>
        </div>
        <div className="navigation-item" onClick={(e)=>props.changePath(2)}>
          <i className="fas fa-cog"></i>
          <label style={navItem}>Settings</label>
        </div>
      </div>
      <hr className="seperator" style={{margin: "0.5rem auto", borderTop: "1px solid #fffffe"}} />
    </div>
  );
}

export default NavigationBar;
