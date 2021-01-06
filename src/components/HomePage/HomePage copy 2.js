import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import "react-tabs/style/react-tabs.css";
import {formatDate} from '../../helper'
import {
  Authorname,
  ContactList,
  ContactListItem,
  ContactDetails,
  Paragraph,
  LinkBtn,
  TabContainer,
} from "./style";
import UnAnswered from "../unAnswered/UnAnswered";

class HomePage extends Component {
  render() {
    
    return (
      <div>
        <hr />
        <TabContainer>
          <Tabs>
            <TabList>
              <Tab>UnAnswered</Tab>
              <Tab>Answered</Tab>
            </TabList>
            <TabPanel>
            {this.props.unansweredId.map((id) => (
                <UnAnswered id={id} key={id}/>
              ))}
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
          </Tabs>
        </TabContainer>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUsers, questions, users }) => {
  // geting answerid and value objects on the basis of authedUsers when questions id match wiht  authedUsers answer id.
  const answeredId = Object.keys(questions).filter((id) =>
    users[authedUsers].answers.hasOwnProperty(id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  

  
// geting Unanswerid and value objects on the basis of not match authedUsers wiht authedUsers answer id.
  const unansweredId = Object.keys(questions).filter((id) =>
    !users[authedUsers].answers.hasOwnProperty(id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    
  
  return {
    answeredId,
    unansweredId,
    
  }
  
};

export default connect(mapStateToProps)(HomePage);
