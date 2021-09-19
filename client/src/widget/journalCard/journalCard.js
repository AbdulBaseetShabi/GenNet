import React from "react";
import "./journalCard.css";

function JournalCard(props) {
  return (
    <div className="journal-card row">
      <div style={{ width: "70%" }}>
        <label className="full-width text-center">Journal Title</label>
        <hr className="seperator" />
        <p>THis is a preview text</p>
      </div>
      <div style={{ width: "30%", padding: "0 5%", borderLeft: "1px solid" }}>
        <button
          id="login-button"
          className="full-width outline-button btn custom-button"
          onClick={(e) => props.viewJournal("ID")}
        >
          View
        </button>
        <button id="signup-button" className="full-width btn custom-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default JournalCard;
