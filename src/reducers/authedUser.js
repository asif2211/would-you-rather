import { AUTHENTICATE_USER, UN_AUTHENTICATE_USER} from '../actions/authedUser';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case AUTHENTICATE_USER:
			return action.id;
		
		case UN_AUTHENTICATE_USER:
			return null;
		
		default:
			return state;
	}
}
