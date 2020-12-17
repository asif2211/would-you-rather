import { GET_USERS } from '../actions/users';
// import { GET_USERS, ADD_ANSWER } from '../actions/questions';

export default function getUsers(state = {}, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users
			};

		default:
			return state;
	}
}
