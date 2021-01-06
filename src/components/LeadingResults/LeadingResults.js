import React, { Component } from 'react'
import { 
    Authorname,
    ContactListItem,
    Paragraph,
    ContactDetails
     } from "./style";
     import { connect } from "react-redux";
class LeadingResults extends Component {
    render() {
       
        return (
            <div>
                 <ContactListItem className="contact-list-item">
              <div className="avatar">
                <Authorname>{this.props.userValue.name}</Authorname>
                <img src={this.props.userValue.avatarURL} className="image" alt="avatar" />
              </div>
              <ContactDetails>
                <Paragraph>Would You Rather</Paragraph>
                <Paragraph>
                  {" "}
                  Total {Object.keys(this.props.userValue.answers).length} Questions are Answered
                </Paragraph>
                <Paragraph>Total {this.props.userValue.questions.length} Questions have been created</Paragraph>
                <div />
              </ContactDetails>
              {/* <p>Score: {this.props.totalquestionAnswered} + {this.props.totalquestionCrated}</p> */}
            </ContactListItem>
           
            </div>
        )
    }
}

const mapStateToProps = ({users},{id})=>{
   
    const userValue = users[id]
    
    return {
        userValue
    };
}

export default connect(mapStateToProps)(LeadingResults)