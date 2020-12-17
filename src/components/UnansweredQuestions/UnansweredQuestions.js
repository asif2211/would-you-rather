import React, { Component } from 'react'
import {
    Authorname,
    ContactList,
    ContactListItem,
    ContactDetails,
  } from "./style";
import { connect } from 'react-redux';
import {formatDate} from '../../helper'
class UnansweredQuestions extends Component {
    render() {
        const id = this.props.match.params.id;
        const questionId = this.props.questions[id];
        alert(questionId.optionOne.text)
        
        return (
            <div className="answer-container">
        <ContactList className="contact-list">
          <ContactListItem className="contact-list-item">
            <div className="avatar">
              <Authorname>{this.props.users[questionId.author].name}</Authorname>
              <img src={this.props.users[questionId.author].avatarURL} className="image" alt="avatar" />
            </div>
            <ContactDetails>
              <form>
                
                
                <div className="radio-button">
                  <input
                    type="radio"
                    id="optionOne"
                    value="optionOne"
                    name="answer"
                  />{" "}
                  {questionId.optionOne.text.slice(0,50)}
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    value="optionTwo"
                    name="answer"
                  />{" "}
                  {questionId.optionTwo.text.slice(0,50)}
                </div>

                <div className="radio-button">
                  <button>Vote</button>
                </div>
              </form>
            </ContactDetails>
            <div>{formatDate(questionId.timestamp)}</div>
          </ContactListItem>
        </ContactList>
      </div>
        )
    }
}

const mapStateToProps = ({questions,users}) => {
    
    return {
        questions ,
        users
    }
}

export default connect(mapStateToProps)(UnansweredQuestions)