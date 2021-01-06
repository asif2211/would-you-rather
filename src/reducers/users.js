import { GET_USERS } from '../actions/users';
import { CREATE_QUESTION,CREATE_ANSWER } from '../actions/questions';

export default function getUsers(state = {}, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users
			};
		case CREATE_QUESTION:
			return {
				...state,[action.question.author]:{
					...state[action.question.author],
					questions:state[action.question.author].questions.concat([action.question.id])
				}
				
			};
		case CREATE_ANSWER:
			const { qid, answer, authedUser } = action.answerinfo;

			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			};

		default:
			return state;
	}
}
