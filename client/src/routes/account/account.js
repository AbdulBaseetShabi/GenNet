import React from "react";
import "./account.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  saveChanges() {
    this.changeMode();
  }

  changeMode() {
    this.setState((prevState, prevProps) => {
      return { editMode: !prevState.editMode };
    });
  }

  render() {
    let buttonIcon;
    if (this.state.editMode) {
      buttonIcon = <i className="fas fa-save"></i>;
    } else {
      buttonIcon = <i className="fas fa-edit"></i>;
    }
    return (
      <div className="page" id="account-page">
        <label className="text-center full-width">Account</label>
        <hr className="seperator" />
        <div className="full-width row">
          <div className="col-6">
            <label className="full-width">First Name</label>
            <input
              className="full-width"
              type="text"
              readOnly={!this.state.editMode}
            />
          </div>
          <div className="col-6">
            <label className="full-width">Last Name</label>
            <input
              className="full-width"
              type="text"
              readOnly={!this.state.editMode}
            />
          </div>
          <div className="col-6">
            <label className="full-width">Email</label>
            <input
              className="full-width"
              type="email"
              readOnly={!this.state.editMode}
            />
          </div>
          <div className="col-6">
            <label className="full-width">Phone</label>
            <input
              className="full-width"
              type="tel"
              readOnly={!this.state.editMode}
            />
          </div>
        </div>
        <div
          className="fixed-button"
          onClick={() => {
            if (this.state.editMode) {
              this.saveChanges();
            }else{
                this.changeMode();
            }
          }}
        >
          {buttonIcon}
        </div>
      </div>
    );
  }
}

export default Account;
