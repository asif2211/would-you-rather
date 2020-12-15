import React, { Component } from "react";
import {
  Authorname,
  ContactList,
  ContactListItem,
  ContactDetails,
} from "./style";

import { formatDate } from "../../helper";
import { connect } from "react-redux";
import { handleAddAnswer } from "../../actions/questions";
class UnAnsweredQuestions extends Component {
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
    const { question, author } = this.props;

    if (question === null) {
      return "Page not found";
    }
    const { optionOne, optionTwo, timestamp,id } = question;
    const { name, avatarURL } = author;
    const { errorMsg } = this.state;
    return (
      <div className="answer-container">
        <ContactList className="contact-list">
          <ContactListItem className="contact-list-item">
            <div className="avatar">
              <Authorname>{name}</Authorname>
              <img src={avatarURL} className="image" alt="avatar" />
            </div>
            <ContactDetails>
              <form onSubmit={(e) => this.handleSubmit(id, e)}
                ref={(f) => (this.form = f)}>
                <div>{errorMsg}</div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="optionOne"
                    label={optionOne.text}
                    value="optionOne"
                    name="answer"
                  />{" "}
                  {optionOne.text}
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="optionTwo"
                    label={optionTwo.text}
                    value="optionTwo"
                    name="answer"
                  />{" "}
                  {optionTwo.text}
                </div>

                <div className="radio-button">
                  <button>Vote</button>
                </div>
              </form>
            </ContactDetails>
            <div>{formatDate(timestamp)}</div>
          </ContactListItem>
        </ContactList>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
  };
}

export default connect(mapStateToProps)(UnAnsweredQuestions);
