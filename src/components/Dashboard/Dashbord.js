import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import "react-tabs/style/react-tabs.css";
import {
  TabContainer,
  
} from "./style";

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
            <Tab>UnAnswered</Tab>
              <Tab>Answered</Tab>
              
            </TabList>
            <TabPanel>
                <Answered listIds={unansweredQuestionIds} 
                 title="Answer Poll"
                 emptyListNote="No more Unswered Questions! Time to create some new ones! " />
            </TabPanel>
            <TabPanel>
            
                <Answered listIds={answeredQuestionIds}
                 title="Result Poll"
                 emptyListNote="No more Answered Questions! what we should do! " />
              
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
