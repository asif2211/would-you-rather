import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData } from '../api';
import { getusers } from './users';
import { getquestions } from './questions';


export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading)
		return getInitialData().then(({ users, questions }) => {
			dispatch(getusers(users));
			dispatch(getquestions(questions));
			dispatch(hideLoading)
			
		});
	};
}
