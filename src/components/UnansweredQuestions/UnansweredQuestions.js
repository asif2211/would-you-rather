import React, { Component } from "react";
import {
  Authorname,
  ContactList,
  ContactListItem,
  ContactDetails,
} from "./style";
import { connect } from "react-redux";
import { formatDate } from "../../helper";
import { handleCreateAnswer } from "../../actions/questions";
import ErrorMessge from "../ErrorMessge";
class UnansweredQuestions extends Component {
  constructor() {
    super();
    this.state = {
      valuechoice: "",
      error: "",
      toggle: false,
    };
  }

  handleOptions = (id, e) => {
    
    const answer = this.form.answer.value;
    
    const { dispatch } = this.props;
    e.preventDefault();
    if (answer !== "") {
    
      dispatch(handleCreateAnswer(id,answer))
     
    } else {
      this.setState({
        error:"404 return to home page"
      })
    }
  };
  render() {
   
    const {questionId,users} = this.props;
    if(questionId == null)
    {
      return <ErrorMessge/>
    }
     else{
    return (
      <div className="answer-container">
        <ContactList className="contact-list">
          <ContactListItem className="contact-list-item">
            <div className="avatar">
              <Authorname>
                {this.props.users[questionId.author].name}
              </Authorname>
              <img
                src={this.props.users[questionId.author].avatarURL}
                className="image"
                alt="avatar"
              />
            </div>
            <ContactDetails>
              <form
                onSubmit={(e) => this.handleOptions(questionId.id, e)}
                ref={(ref) => (this.form = ref)}
              >
                <div>{this.state.error}</div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="optionOne"
                    name="answer"
                    value="optionOne"
                  />{" "}
                  {questionId.optionOne.text.slice(0, 50)}
                </div>
                <div className="radio-button">
                  <input 
                  type="radio" 
                  name="answer" 
                  value="optionTwo" 
                  id="optionTwo"/>{" "}
                  {questionId.optionTwo.text.slice(0, 50)}
                </div>

                <div className="radio-button">
                  <button >Vote</button>
                </div>
              </form>
            </ContactDetails>
            <div>{formatDate(questionId.timestamp)}</div>
          </ContactListItem>
        </ContactList>
      </div>
    ) 
    ;
     }
  }
}

const mapStateToProps = ({ questions, users },{id}) => {
  
    const questionId = questions[id];
    return {
      questionId,
      users,
    };
  
  
 
};

export default connect(mapStateToProps)(UnansweredQuestions);
