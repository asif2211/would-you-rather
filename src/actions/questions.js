
export const GET_QUESTIONS = 'GET_QUESTIONS';
// export const CREATE_QUESTION = 'CREATE_QUESTION';
// export const CREATE_ANSWER = 'CREATE_ANSWER';

export function getquestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}

