import React from "react";
import "./landing.css";

import NavigationBar from "../../widget/navigationBar/navigationBar";
import Home from "../home/home";
import FamilyTree from "../familyTree/familyTree";
import JournalView from "../journals/journal-view";
import JournalList from "../journals/journals-list";

//0 - Home; 1 - FamilyTreeView
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_path: 0,
    };
    this.navigate = this.navigate.bind(this);
    this.addNewJournal = this.addNewJournal.bind(this);
    this.viewJournal = this.viewJournal.bind(this);
    this.viewFamilyTree = this.viewFamilyTree.bind(this);
    this.logOut = this.logOut.bind(this);
    this.new_page_data = "";
  }

  logOut(){
    window.location.replace("/login");
  }

  navigate(index) {
    this.setState({ current_path: index });
  }
  
  viewJournal(id){
    this.navigate(3);
  }

  addNewJournal(){
    this.navigate(3)
  }
  
  viewFamilyTree(tree_id) {
    this.navigate(1);
  }

  render() {
    const current_path = this.state.current_path;
    let view;
    if (current_path === 0) {
      view = <Home viewFamilyTree={this.viewFamilyTree}/>;
    } else if (current_path === 1) {
      view = <FamilyTree viewJournal={this.viewJournal}/>;
    } else if (current_path === 2) {
      view = <JournalList viewJournal={this.viewJournal} addNewJournal={this.addNewJournal}/>;
    } else if (current_path === 3) {
      view = <JournalView id={this.new_page_data}/>;
    } else if (current_path === 4){
      
    }else if (current_path === 5){

    }

    return (
      <div id="landing-container" className="row">
        <div style={{ width: "25%" }}>
          <NavigationBar changePath={this.navigate} logOut={this.logOut}/>
        </div>
        <div style={{ width: "75%" }}>{view}</div>
      </div>
    );
  }
}

export default Landing;
