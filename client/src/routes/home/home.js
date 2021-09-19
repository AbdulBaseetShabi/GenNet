import React from "react";
import "./home.css";

import FamilyTreeCard from "../../widget/familyTreeCard/familyTreeCard";
import AddFamilyTree from "../addModals/add-family-tree";
import APICall from "../../services/api-connect";
const inputContainer = { width: "80%", margin: "0 auto" };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      familyTrees: [],
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

  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem("user_2"));
    this.setState({"familyTrees": user.FamilyTrees})
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
    let user = JSON.parse(sessionStorage.getItem("user_2"));
    let data = {...this.new_family_tree, admin: user["email"], members: [user["email"]], FamilyTrees: user.FamilyTrees}
    APICall("/create/familytree", data, (res => {
      if(res["status"] === 200){
        window.alert("Successfully created family")
        window.location.reload();
      }
    }))    
  }

  openCloseModal() {
    this.setState((prevState, prevProps) => {
      if (prevState.showModal) {
        this.new_family_tree = {
          title: "",
          description: "",
        };
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
        <button
          id="signup-button"
          className="full-width btn custom-button"
          onClick={(e) => this.openCloseModal()}
        >
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
