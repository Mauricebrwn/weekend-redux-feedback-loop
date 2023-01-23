//all of the imports needed for react and redux
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers,createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
//the submit feedback function also returns state
const SubmitFeedback = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDBACKLIST':
            return [...state, action.payload]
            default:
                return state;
    } 
}
//each function used to grab values from inputs
const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING_NUMBER') {
        let feelingInput = Number(action.payload);
        return feelingInput
    }
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING_NUMBER') {
        let understandingInput = Number(action.payload);
        return understandingInput
    }
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT_NUMBER') {
        let supportInput = Number(action.payload);
        return supportInput
    }
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        let commentsInput = (action.payload);
        return commentsInput
    }
    return state;
}


//the redux store with where all of the reducers live 
const reduxStore = createStore(
    combineReducers({
        SubmitFeedback,
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);
//provider wrapped around the app
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
