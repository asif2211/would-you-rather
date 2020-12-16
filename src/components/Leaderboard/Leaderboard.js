import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserResults from '../UserResults/UserResults'
import {
    ContactList, 
  } from "./style";
class Leaderboard extends Component {
    
    render() {
        return (
        <div className="answer-container">
        <ContactList className="contact-list">
            {this.props.userIDs.map((id) => (
                    <UserResults key={id} id={id} />
            ))}
         
        </ContactList>
      </div>
        )
    }
}


function mapStateToProps({ users }) {
    //sort UserIDs by the score for each user, desc
    const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
        const scoreA =
            Object.keys(users[idA].answers).length + users[idA].questions.length;
        const scoreB =
            Object.keys(users[idB].answers).length + users[idB].questions.length;

        return scoreB - scoreA;
    });

    return {
        userIDs: sortedUserIDs
    };
}

export default connect(mapStateToProps)(Leaderboard);
