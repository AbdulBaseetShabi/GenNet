//add new journal
//view a journal
//remove a journal***
import React from "react";
import JournalCard from "../../widget/journalCard/journalCard";
import "./journal.css";

function JournalList(props) {
  let admin_view = (
    <div
      className="fixed-button"
      onClick={() => {
        props.addNewJournal();
      }}
    >
      <i class="fas fa-plus"></i>
    </div>
  );
  return (
    <div id="journalList" className="page">
      <label className="text-center full-width">Ben's Journal(s)</label>
      <hr className="seperator" />
      <div id="journal-list">
        <JournalCard viewJournal={props.viewJournal} />
      </div>
      {props.is_admin ? admin_view : null}
    </div>
  );
}

export default JournalList;
