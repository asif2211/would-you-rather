import { AUTHENTICATE_USER, UN_AUTHENTICATE_USER} from '../actions/authedUsers';

export default function authedUsers(state = null, action) {
	switch (action.type) {
		case AUTHENTICATE_USER:
			return action.id;
		
		case UN_AUTHENTICATE_USER:
			return null;
		
		default:
			return state;
	}
}
