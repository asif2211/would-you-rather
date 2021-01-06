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
            {this.props.unansvalue.map((item,index) => (
                <ContactList className="contact-list" key={index}>
                  <ContactListItem className="contact-list-item">
                    <div className="avatar">
                      <Authorname>{item.author} {"  "}Ask</Authorname>
                      <img
                        src={this.props.unansauthor[item.author].avatarURL}
                        className="image"
                        alt="avatar"
                      />
                    </div>
                    <ContactDetails>
                      <Paragraph>Would You Rather</Paragraph>
                      <Paragraph>{item.optionOne.text.slice(0, 50)}</Paragraph>
                      <Paragraph>or ...</Paragraph>
                      <div>
                        <LinkBtn className="button" to={`/questions/${item.id}`}>
                          Answered
                        </LinkBtn>
                      </div>
                    </ContactDetails>
                    <div>{formatDate(item.timestamp)}</div>
                  </ContactListItem>
                </ContactList>
              ))}
            </TabPanel>
            <TabPanel>
              {this.props.value.map((item) => (
                <ContactList className="contact-list" key={item.id}>
                  <ContactListItem className="contact-list-item">
                    <div className="avatar">
              <Authorname>{item.author}</Authorname>
                      <img
                        src={this.props.author[item.author].avatarURL}
                        className="image"
                        alt="avatar"
                      />
                    </div>
                    <ContactDetails>
                      <Paragraph>Would You Rather</Paragraph>
                      <Paragraph>{item.optionOne.text.slice(0, 50)}</Paragraph>
                      <Paragraph>or ...</Paragraph>
                      <div>
                        <LinkBtn className="button" to={`/questions/${item.id}`}>
                          Answered
                        </LinkBtn>
                      </div>
                    </ContactDetails>
                    <div>{formatDate(item.timestamp)}</div>
                  </ContactListItem>
                </ContactList>
              ))}
            </TabPanel>
          </Tabs>
        </TabContainer>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUser, questions, users }) => {
  // geting answerid and value objects on the basis of authedUsers when questions id match wiht  authedUsers answer id.
  const answeredId = Object.keys(questions).filter((id) =>
    users[authedUser].answers.hasOwnProperty(id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  
  const value = answeredId.map((id) => questions[id]);
  
  const author = users
  
// geting Unanswerid and value objects on the basis of not match authedUsers wiht authedUsers answer id.
  const unansweredId = Object.keys(questions).filter((id) =>
    !users[authedUser].answers.hasOwnProperty(id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    ;
  const unansvalue = unansweredId.map((id) => questions[id]);
  const unansauthor = users;
  return {
    value,
    author,
    unansvalue,unansauthor
  }
  
};

export default connect(mapStateToProps)(HomePage);
