import React from "react";
import "./home.css";

import FamilyTreeCard from "../../widget/familyTreeCard/familyTreeCard";
import AddFamilyTree from "../addModals/add-family-tree";
const inputContainer = { width: "80%", margin: "0 auto" };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.changeTreeData = this.changeTreeData.bind(this);
    this.openCloseModal = this.openCloseModal.bind(this);
    this.createFamilyTree = this.createFamilyTree.bind(this);
    this.search_value = "";
    this.new_family_tree = {
      title: "",
      description: "",
    };
  }

  changeSearchValue(value) {
    this.search_value = value;
  }

  changeTreeData(target, value) {
    this.new_family_tree[target] = value;
  }

  search() {
    this.search_value = this.search_value.trim();
    if (this.search_value.length > 0) {
      window.alert(this.search_value);
    }
  }

  createFamilyTree() {
    let is_successful_call = true;
    window.alert(JSON.stringify(this.new_family_tree));
    if (is_successful_call) {
      this.openCloseModal();
    }
  }

  openCloseModal() {
    this.setState((prevState, prevProps) => {
      if (prevState.showModal) {
        this.new_family_tree = {
          title: "",
          description: ""
        }
        return { showModal: false };
      } else {
        return { showModal: true };
      }
    });
  }

  render() {
    return (
      <div id="home-container" className="page">
        <AddFamilyTree
          showModal={this.state.showModal}
          changeTreeData={this.changeTreeData}
          closeModal={this.openCloseModal}
          createFamilyTree={this.createFamilyTree}
        />
        <div id="home-image-div"></div>
        <hr className="seperator" />
        <div className="input-group mb-3" style={inputContainer}>
          <input
            type="text"
            placeholder="Looking for a family tree?"
            style={{ width: "70%", marginRight: "10px" }}
            onChange={(e) => {
              this.changeSearchValue(e.target.value);
            }}
          />
          <div className="input-group-append" style={{ width: "20%" }}>
            <div
              id="search"
              className="btn btn-outline-secondary"
              type="button"
              style={{ width: "100%" }}
              onClick={(e) => this.search()}
            >
              Search
            </div>
          </div>
        </div>
        <button id="signup-button" className="full-width btn custom-button" onClick={(e)=> this.openCloseModal()}>
          Create New Family Tree
        </button>
        <div id="home-search-result" className="full-width">
          <FamilyTreeCard
            viewFamilyTree={this.props.viewFamilyTree}
            viewJournal={this.props.viewJournal}
          />
        </div>
      </div>
    );
  }
}

export default Home;
