export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const UN_AUTHENTICATE_USER = 'UN_AUTHENTICATE_USER';


export function getAuthdUsers(id) {
	return {
		type: AUTHENTICATE_USER,
		id
	};
}
export function logoutUsers(id) {
	return {
		type: UN_AUTHENTICATE_USER,
		
	};
}
