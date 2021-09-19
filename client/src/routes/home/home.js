import React from "react";
import "./home.css";

import FamilyTreeCard from "../../widget/familyTreeCard/familyTreeCard";
const inputContainer = { width: "80%", margin: "0 auto" };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.search_value = "";
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

  viewFamilyTree(){

  }

  render() {
    return (
      <div id="home-container" className="page">
        <div id="home-image-div"></div>
        <hr className="seperator" />
        <div className="input-group mb-3" style={inputContainer}>
          <input
            type="text"
            placeholder="Looking for a family tree?"
            style={{ width: "80%" }}
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
        <button id="signup-button" className="full-width btn custom-button">
          Create New Family Tree
        </button>
        <div id="home-search-result" className="full-width">
          <FamilyTreeCard viewFamilyTree={this.props.viewFamilyTree} viewJournal={this.props.viewJournal}/>
        </div>
      </div>
    );
  }
}

export default Home;
