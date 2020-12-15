import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "react-tabs";
import { connect } from "react-redux";
import "react-tabs/style/react-tabs.css";
import {
  TabContainer,
  Contact_list,
  Contact_list_item,
  Contact_details,
  Paragraph,
} from "./style";
import { FaBars } from "react-icons/fa";
import Answered from "../Answered/Answered";

class Dashbord extends Component {
  render() {
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;
    return (
      <div>
        <hr />
        <TabContainer className="tab-container">
          <Tabs>
            <TabList>
              <Tab>Answered</Tab>
              <Tab>UnAnswered</Tab>
            </TabList>
            <TabPanel>
              {answeredQuestionIds.map((id) => (
                <Answered id={id} key={id} title="Answer Poll"/>
              ))}
            </TabPanel>
            <TabPanel>
            {unansweredQuestionIds.map((id) => (
                <Answered id={id} key={id} title="Result Poll"/>
              ))}
             </TabPanel>
          </Tabs>
        </TabContainer>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answeredQuestionIds = Object.keys(questions)
    .filter((id) => users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestionIds = Object.keys(questions)
    .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
}

export default connect(mapStateToProps)(Dashbord);
