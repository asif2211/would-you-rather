import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../api';
import { getusers } from './users';
import { getquestions } from './questions';
import { getAuthdUsers } from './authedUsers';

export function handleInitialData() {
	return (dispatch) => {
		
		return getInitialData().then(({ users, questions }) => {
			dispatch(getusers(users));
			dispatch(getquestions(questions));
			
			
		});
	};
}
