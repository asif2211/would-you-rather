import React, { Component } from 'react'
import AnsweredQuestions from '../AnsweredQuestions/AnsweredQuestions'
import UnAnsweredQuestions from '../UnAnsweredQuestions/UnAnsweredQuestions';
import { connect } from "react-redux";
 class Questions extends Component {
    
        
    render() {
        const { autherUserAnsweres, match } = this.props;
        const id = match.params.id;
        const answered = autherUserAnsweres.hasOwnProperty(id)? true : false
        
        return (
            <div >
                <div className="heading">
                 <h2 className="text-center my-3">
                    <small>Would You Rather...</small>
                </h2>
                </div>
                {answered ? <AnsweredQuestions id={id} /> : <UnAnsweredQuestions id={id} />}
            </div>
        )
    }
}
function mapStateToProps({ authedUser, users }) {
    const autherUserAnsweres = users[authedUser].answers;

    return {
        autherUserAnsweres
    };
}

export default connect(mapStateToProps)(Questions);
