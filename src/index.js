import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
	<Provider store={store}>
    <BrowserRouter>
		<App />
    </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
