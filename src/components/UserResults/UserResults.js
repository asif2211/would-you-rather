import React, { Component } from "react";

import {
  Authorname,
  ContactListItem,
  ContactDetails,
  Paragraph,
} from "./style";
import { connect } from "react-redux";
class UserResults extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;
    return (
      <ContactListItem className="contact-list-item">
        <div className="avatar">
          <Authorname>{name}</Authorname>
          <img src={avatarURL} className="image" alt="avatar" />
        </div>
        <ContactDetails>
          <Paragraph>Would You Rather</Paragraph>
          <Paragraph> Answered Questions: {Object.keys(answers).length}
          </Paragraph>
          <Paragraph>Created Questions: {questions.length}</Paragraph>
          <div />
        </ContactDetails>
        <p>Score: {Object.keys(answers).length + questions.length}</p>
      </ContactListItem>

    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(UserResults);
