//view journal
//edit journal if owner
import React from "react";
import "./journal.css";

class JournalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   editMode: this.props.is_edit_mode,
          editMode: false,
    };
  }

  changeMode() {
    if (this.state.editMode) {
      window.alert("Save");
    } else {
      window.alert("Editing");
    }
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
      <div id="journal-view-container" className="page">
        <label className="text-center full-width">Journal Title</label>
        <hr className="seperator" />
        <textarea
          id="journal-content"
          style={{ width: "100%", minHeight: "80%" }}
          disabled={!this.state.editMode}
        />
        <div
          className="fixed-button"
          onClick={() => {
            this.changeMode();
          }}
        >
          {buttonIcon}
        </div>
      </div>
    );
  }
}

export default JournalView;
