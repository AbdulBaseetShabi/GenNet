import React from "react";
import "./notification.css";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enable_email_notifications: true,
      enable_phone_notifications: false,
    };
  }

  render() {
    return (
      <div id="notification-container" className="page">
        <label className="text-center full-width">Notification</label>
        <hr className="seperator" />
        <div className="full-width row">
          <div className="col-6">
            <label>
              {this.state.enable_email_notifications ? "Disable" : "Enable"}{" "}
              email notification
            </label>
          </div>
          <div className="col-6 d-flex align-items-center">
            <input
              type="checkbox"
              checked={this.state.enable_email_notifications}
            ></input>
          </div>
        </div>
        <div className="full-width row">
          <div className="col-6">
            <label>
              {this.state.enable_phone_notifications ? "Disable" : "Enable"}{" "}
              phone notification
            </label>
          </div>
          <div className="col-6 d-flex align-items-center">
            <input
              type="checkbox"
              checked={this.state.enable_phone_notifications}
            ></input>
          </div>
        </div>      </div>
    );
  }
}

export default Notifications;
