import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware'
import App from './App';
import rootReducer from './reducers/';
import './index.css';


const store = createStore(rootReducer,middleware)
ReactDOM.render(
	<Provider store={store}>
    
		<App />
    
	</Provider>,
	document.getElementById('root')
);
