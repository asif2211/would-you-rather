import React, { Component } from "react";
import { connect } from 'react-redux';
import { formatDate } from '../../helper';
import {
    Authorname,
    Contact_list,
    Contact_list_item,
    Contact_details,
    Paragraph
   } from './style';
import { Link } from "react-router-dom";
 class Answered extends Component {
  render() {
    const { question, author } = this.props;
        const { optionOne, timestamp, id } = question;
        const { name, avatarURL } = author;
        const {title} = this.props;
    return (
      <div>
        <Contact_list className="contact-list">
          <Contact_list_item className="contact-list-item">
            <div className="avatar">
              <Authorname>{name}</Authorname>
              <img src={avatarURL} className="image"/>
            </div>
            <Contact_details>
              <Paragraph>Would You Rather</Paragraph>
              <Paragraph>{optionOne.text.slice(0, 50)}</Paragraph>
              <Paragraph>or ...</Paragraph>
              <div className="">
                <Link to={`/questions/${id}`}>{title}</Link>
              </div>
              
            </Contact_details>
            <div>
              {formatDate(timestamp)}
              </div>
          </Contact_list_item>
        </Contact_list>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
      question:question,
      author: question ? users[question.author] : null
  };
}

export default connect(mapStateToProps)(Answered);
