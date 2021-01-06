import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/';
import './index.css';
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composerEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
	<Provider store={store}>
    
		<App />
    
	</Provider>,
	document.getElementById('root')
);
