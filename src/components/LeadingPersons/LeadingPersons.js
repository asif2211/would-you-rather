import React, { Component } from "react";
import { 
    ContactList,
     } from "./style";
import { connect } from "react-redux";
import LeadingResults from "../LeadingResults/LeadingResults";
class LeadingPersons extends Component {
  render() {
  
    return (
      <div className="answer-container">
        <ContactList className="contact-list">
          {this.props.userId.map((id) => (
            <LeadingResults id={id} key={id}/>
          ))}
        </ContactList>
      </div>
    );
  }
}

const mapStateToProps = ({users})=>{
   
    const userId = Object.keys(users)
    
    return {
        userId
    };
}

export default connect(mapStateToProps)(LeadingPersons)