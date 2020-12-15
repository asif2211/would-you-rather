import React, { Component } from "react";
import { formatDate } from "../../helper";
import {
  Authorname,
  ContactList,
  ContactListItem,
  ContactDetails,
  Paragraph,
  LinkBtn,
} from "./style";
import { connect } from "react-redux";
class QuestionsList extends Component {
  render() {
    const { question, author } = this.props;
    const { optionOne, timestamp, id } = question;
    const { name, avatarURL } = author;
    
    
    const { title } = this.props;
    return (
      <div>
        <ContactList className="contact-list">
          <ContactListItem className="contact-list-item">
            <div className="avatar">
              <Authorname>{name}</Authorname>
              <img src={avatarURL} className="image" alt="avatar" />
            </div>
            <ContactDetails>
              <Paragraph>Would You Rather</Paragraph>
              <Paragraph>{optionOne.text.slice(0, 50)}</Paragraph>
              <Paragraph>or ...</Paragraph>
              <div>
                
                  <LinkBtn className="button" to={`/questions/${id}`}>
                    {title}
                  </LinkBtn>
                
              </div>
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
        author: question ? users[question.author] : null
    };
}


export default connect(mapStateToProps)(QuestionsList);
