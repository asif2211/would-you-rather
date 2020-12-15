import React, { Component } from "react";
import { formatDate } from "../../helper";
import {
  Authorname,
  ContactList,
  ContactListItem,
  ContactDetails,
  List,
  ListItem
} from "./style";
import { connect } from "react-redux";
import Progress from "react-progressbar";
import { handleAddAnswer } from "../../actions/questions";
class AnsweredQuestions extends Component {
  state = {
    errorMsg: "",
  };

  handleSubmit = (id, e) => {
    const answer = this.form.answer.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (answer !== "") {
      dispatch(handleAddAnswer(id, answer));
    } else {
      this.setState({ errorMsg: "You must make a choice" });
    }
  };
  render() {
    const { question, author, authedUser } = this.props;

    if (question === null) {
      return "page not found";
    }
    const { optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = author;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOnePercent = Math.round(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoPercent = Math.round(
      (optionTwo.votes.length / totalVotes) * 100
    );
    return (
      <div className="answer-container">
        <ContactList>
          <ContactListItem>
            <div className="avatar">
              <Authorname>{name}</Authorname>
              <img src={avatarURL} className="image" alt="avatar" />
            </div>
            <ContactDetails>
              <List>
                <ListItem>
                  {" "}
                  {optionOne.text}
                  {optionOne.votes.includes(authedUser) ? (
                    <span className="text-danger ml-2">&lt;- Your choice</span>
                  ) : null}
                </ListItem>
                <ListItem>
                  {`${optionOnePercent}%`}
                  <Progress
                    style={{ backgroundColor: "#ccc" }}
                    completed={optionOnePercent}
                    
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
                    <span className="text-danger ml-2">&lt;- Your choice</span>
                  ) : null}
                </ListItem>
                <ListItem>
                {`${optionTwoPercent}%`}
                  <Progress
                    style={{ backgroundColor: "#ccc" }}
                    completed={optionTwoPercent}
                    
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
    );
  }
}
function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(AnsweredQuestions);
