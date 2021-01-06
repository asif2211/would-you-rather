import React, { Component } from 'react'
import { connect } from 'react-redux';
import AnswersResults from '../AnswersResults/AnswersResults';
import UnansweredQuestions from '../UnansweredQuestions/UnansweredQuestions';

class QuestionsSelections extends Component {
    render() {
        const id = this.props.match.params.id;
        const answer = this.props.userAnswer.hasOwnProperty(id) ? true :false;
        
        return (
            <div>
                {answer ? <AnswersResults id={id}/> :  <UnansweredQuestions id ={id}/>}
            </div>
        )
    }
}

const mapStateToProps = ({authedUser,users})=>{
const userAnswer = users[authedUser].answers;
return{
    userAnswer
}
}
export default connect(mapStateToProps)(QuestionsSelections)