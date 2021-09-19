import React from "react";
import "./familyTreeCard.css";

function FamilyTreeCard(props) {
  return (
    <div className="family-tree-card row">
      <div style={{ width: "70%" }}>
        <label className="full-width text-center">{props.tree_data.familyName}</label>
        <hr className="seperator" />
        <p>{props.tree_data.description}</p>
      </div>
      <div style={{ width: "30%", padding: "0 5%", borderLeft: "1px solid" }}>
        <button
          id="login-button"
          className="full-width outline-button btn custom-button"
          onClick={(e) => props.viewFamilyTree(props.tree_data.familyID)}
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
