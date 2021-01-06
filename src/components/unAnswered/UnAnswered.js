import React, { Component } from 'react'
import { formatDate}from '../../helper'
import {
    Authorname,
    ContactList,
    ContactListItem,
    ContactDetails,
    Paragraph,
    LinkBtn,
    TabContainer,
  } from "./style";
import { connect } from 'react-redux';
class UnAnswered extends Component {
    render() { 
        const {question,author} = this.props
        const {avatarURL} = author;
        
        return (
            <div>
              <ContactList className="contact-list">
                  <ContactListItem className="contact-list-item">
                    <div className="avatar">
                      <Authorname>{question.author}</Authorname>
                      <img
                        src={avatarURL}
                        className="image"
                        alt="avatar"
                      />
                    </div>
                    <ContactDetails>
                      <Paragraph>Would You Rather</Paragraph>
                      <Paragraph>{question.optionOne.text.slice(0, 50)}</Paragraph>
                      <Paragraph>or ...</Paragraph>
                      <div>
                        <LinkBtn className="button" to={`/questions/${question.id}`}>
                          Answered
                        </LinkBtn>
                      </div>
                    </ContactDetails>
                    <div>{formatDate(question.timestamp)}</div>
                  </ContactListItem>
                </ContactList>  
            </div>
        )
    }
}

const mapStateToProps = ({questions, users},{id})=>{
 const question = questions[id]
 return{
    question,
    author: users[question.author]
 }
}

export default connect(mapStateToProps)(UnAnswered)