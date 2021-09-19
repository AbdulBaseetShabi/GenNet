import React from "react";
import Member from "../../widget/member/member";
import AddMember from "../addModals/add-member";
import "./familyTree.css";

const inputContainer = { width: "80%", margin: "0 auto" };

class FamilyTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.addMember = this.addMember.bind(this);
    this.openCloseModal = this.openCloseModal.bind(this);
    this.memberToAdd = this.memberToAdd.bind(this);
    this.search_value = "";
    this.new_member = "";
  }

  changeSearchValue(value) {
    this.search_value = value;
  }

  search() {
    this.search_value = this.search_value.trim();
    if (this.search_value.length > 0) {
      window.alert(this.search_value);
    }
  }

  memberToAdd(value){
    this.new_member = value;
  }

  addMember() {
    let is_successful_call = true;
    window.alert(this.new_member);
    if (is_successful_call) {
      
      this.openCloseModal();
    }
  }

  openCloseModal() {
    this.setState((prevState, prevProps) => {
      if (prevState.showModal) {
        this.new_member = "";
        return { showModal: false };
      } else {
        return { showModal: true };
      }
    });
  }

  render() {
    let family_name = "default";
    return (
      <div id="family-tree-container" className="page">
        <AddMember
          showModal={this.state.showModal}
          addMember={this.addMember}
          closeModal={this.openCloseModal}
          memberToAdd = {this.memberToAdd}
        />
        <label className="text-center full-width">
          Welcome to the <i>{family_name.toUpperCase()}</i> family
        </label>
        <hr className="seperator" />
        <div className="input-group mb-3" style={inputContainer}>
          <input
            type="text"
            placeholder="What member are you looking for?"
            style={{ width: "80%" }}
            onChange={(e) => {
              this.changeSearchValue(e.target.value);
            }}
          />
          <div className="input-group-append" style={{ width: "20%" }}>
            <div
              id="search"
              className="btn btn-outline-secondary full-width"
              type="button"
              onClick={(e) => this.search()}
            >
              Search
            </div>
          </div>
        </div>
        <button
          id="signup-button"
          className="full-width btn custom-button"
          onClick={(e) => {
            this.openCloseModal();
          }}
        >
          Add New Member
        </button>
        <div id="family-tree-search-result">
          <Member viewJournal={this.props.viewJournal} />
        </div>
      </div>
    );
  }
}

export default FamilyTree;
