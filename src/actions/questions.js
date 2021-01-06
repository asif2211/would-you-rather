import { saveQuestion, saveQuestionAnswer } from '../api';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_ANSWER = 'CREATE_ANSWER';

export function getquestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}
export function createQuestions(question) {
	return {
		type: CREATE_QUESTION,
		question
	};
}

//asynchronous action creater here 
export function handleCreateQuestion(valueOne, valueTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		return saveQuestion({
			optionOneText: valueOne,
			optionTwoText: valueTwo,
			author: authedUser
		}).then((question) => dispatch(createQuestions(question)))
			
	};
}
function createAnswer({ qid, answer, authedUser }) {
	return {
	  type: CREATE_ANSWER,
	  answerinfo: {
		qid,
		answer,
		authedUser,
	  },
	};
  }
  export function handleCreateAnswer(qid, answer) {
	return (dispatch, getState) => {
	  const { authedUser } = getState();
	  
	  return saveQuestionAnswer({
		qid,
		answer,
		authedUser,
	  })
		.then(() =>
		  dispatch(
			createAnswer({
			  qid,
			  answer,
			  authedUser,
			})
		  )
		)
		
	};
  }
  