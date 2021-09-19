import React from "react";
import "./modal.css";

const inputContainer = { width: "80%", margin: "0 auto" };

function AddMember(props) {
  if (props.showModal) {
    return (
      <div className="modal-options">
        <div className="modal-options-content">
          <div className="input-group" style={inputContainer}>
            <input
              type="email"
              placeholder="What member are you looking for?"
              style={{ width: "80%" }}
              onChange={(e) => {
                props.memberToAdd(e.target.value);
              }}
            />
            <div className="input-group-append" style={{ width: "20%" }}>
              <div
                id="add"
                className="btn btn-outline-secondary full-width"
                type="button"
                onClick={(e) => props.addMember()}
              >
                Add
              </div>
              <i
                className="fas fa-2x fa-times"
                style={{
                  position: "absolute",
                  right: "-10%",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  props.closeModal();
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default AddMember;
