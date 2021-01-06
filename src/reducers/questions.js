import { GET_QUESTIONS,CREATE_QUESTION, CREATE_ANSWER} from '../actions/questions';
export default function getquestions(state = {}, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case CREATE_QUESTION:
			return {
				...state,
				[action.question.id] : action.question
			};
		case CREATE_ANSWER:
			const { qid, answer, authedUser } = action.answerinfo;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};
		default:
			return state;
	}	
}
