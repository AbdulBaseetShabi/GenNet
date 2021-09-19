import React from "react";
import "./notification.css";

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enable_email_notifications: false,
            enable_phone_notifications: false,
        }
    }

    render() {
        return (
            <div id="notification-container" className="page">
                <label className="text-center full-width">Notification</label>
                <hr className="seperator" />
            </div>
        );
    }
}

export default Notifications;