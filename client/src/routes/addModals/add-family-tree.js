import React from "react";
import "./modal.css";

const inputContainer = { width: "80%", margin: "0 auto" };

function AddFamilyTree(props) {
  if (props.showModal) {
    return (
      <div className="modal-options">
        <div className="modal-options-content">
          <div className="input-group" style={inputContainer}>
            <div className="full-width">
              <label>First Name</label>
              <br />
              <input
                type="text"
                placeholder="What would you like to name your family tree?"
                className="full-width"
                onChange={(e) => {
                  props.changeTreeData("title", e.target.value);
                }}
              />
            </div>
            <br />
            <div className="full-width">
              <label>Description</label>
              <br />
              <textarea
                type="text"
                placeholder="How would you describe your family?"
                className="full-width"
                rows="5"
                style={{resize: "none"}}
                onChange={(e) => {
                  props.changeTreeData("description", e.target.value);
                }}
              />
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
            <button
              id="signup-button"
              className="full-width btn custom-button"
              onClick={(e) => {
                props.createFamilyTree();
              }}
            >
              Create Family Tree
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default AddFamilyTree;
