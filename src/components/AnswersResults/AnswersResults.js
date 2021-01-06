import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate }from '../../helper'
import {
  Authorname,
  ContactList,
  ContactListItem,
  ContactDetails,
  List,
  ListItem
} from "./style";
import Progress from "react-progressbar";
class AnswersResults extends Component {
    render() {
      // destructuring
    const { question, usersinfo, authedUser } = this.props;
    // getting values 
    const { optionOne, optionTwo,timestamp } = question;
    // votes results according to option one and two
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const choiceOnePercntage = Math.round((question.optionOne.votes.length / totalVotes) * 100);
    const choiceTwoPercntage = Math.round((question.optionTwo.votes.length / totalVotes) * 100);
        return (
            <div>
      <div className="answer-container">
        <ContactList>
          <ContactListItem>
            <div className="avatar">
              <Authorname>{usersinfo.name}</Authorname>
              <img src={usersinfo.avatarURL} className="image" alt="avatar" />
            </div>
            <ContactDetails>
              <List>
                <ListItem>
                  {authedUser}
                  {" "}
                  {optionOne.text}
                  {optionOne.votes.includes(authedUser) ? (
                    <span className="text-danger ml-2">&lt;- Selection</span>
                  ) : null}
                </ListItem>
                <ListItem>
                  {`${choiceOnePercntage}%`}
                  <Progress
                    style={{ backgroundColor: "#ccc" }}
                    completed={choiceOnePercntage}
                    
                  />
                </ListItem>
                <ListItem>
                chosen by {optionOne.votes.length} out of {totalVotes}{' '}
                                    users
                </ListItem>
                <ListItem>
                  {" "}
                  {optionTwo.text}
                  {optionTwo.votes.includes(authedUser) ? (
                    <span className="text-danger ml-2">&lt;- Selection</span>
                  ) : null}
                </ListItem>
                <ListItem>
                {`${choiceTwoPercntage}%`}
                  <Progress
                    style={{ backgroundColor: "#ccc" }}
                    completed={choiceTwoPercntage}
                    
                  />
                </ListItem>
                <ListItem>
                chosen by {optionTwo.votes.length} out of {totalVotes}{' '}
                                    users
                </ListItem>
                
              </List>
            </ContactDetails>
            <div>{formatDate(timestamp)}</div>
          </ContactListItem>
        </ContactList>
      </div>
            </div>
        )
    }
}

const mapStateToProps = ({questions, users, authedUser},{id}) =>
{
  // properties is getting as second aurguments {id}
 // getting questions,users and authedUsers objects
 const question  = questions[id];
  return {
    question: question ? question:null, 
    usersinfo :question ? users[question.author] : null,
    authedUser
  }
}

export default connect(mapStateToProps)(AnswersResults)