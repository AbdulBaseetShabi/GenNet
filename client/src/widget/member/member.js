import React from "react";
import "./member.css";

function Member(props) {
  return (
    <div className="member-card row">
      <label style={{width: '80%'}} className="d-flex align-items-center">Member Name</label>
      <div style={{width: '20%', padding: "3px"}}>
        <button id="signup-button" className="full-width btn custom-button" onClick={()=>props.viewJournal()}>
          View Journals
        </button>
      </div>
    </div>
  );
}

export default Member;
