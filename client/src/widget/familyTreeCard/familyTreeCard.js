import React from "react";
import "./familyTreeCard.css";

function FamilyTreeCard(props) {
  return (
    <div className="family-tree-card row">
      <div style={{ width: "70%" }}>
        <label className="full-width text-center">Description</label>
        <hr className="seperator" />
        <p>This is the description of</p>
      </div>
      <div style={{ width: "30%", padding: "0 5%", borderLeft: "1px solid" }}>
        <button
          id="login-button"
          className="full-width outline-button btn custom-button"
          onClick={(e) => props.viewFamilyTree()}
        >
          View
        </button>
        <button id="signup-button" className="full-width btn custom-button">
          Leave
        </button>
      </div>
    </div>
  );
}

export default FamilyTreeCard;
