import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers,createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feedbackList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDBACKLIST':
            return action.payload;
            default:
                return state;
    } 
}


const reduxStore = createStore(
    combineReducers({
        feedbackList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
