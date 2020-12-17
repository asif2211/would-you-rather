export const GET_USERS = 'GET_USERS';

export function getusers(users) {
	return {
		type: GET_USERS,
		users
	};
}
