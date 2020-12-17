import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/';
import './index.css';


const store = createStore(rootReducer)
ReactDOM.render(
	<Provider store={store}>
    
		<App />
    
	</Provider>,
	document.getElementById('root')
);
