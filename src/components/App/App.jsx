import React from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import { HashRouter as Router,Route } from 'react-router-dom';
import Feeling from './Feeling';
import Understanding from './Understanding';
import Support from './Support';
import SubmitFeedback from './FeedbackSubmission';
import SuccessPage from './Success';
import Comment from './Comments';

function App() {
//the router needed for each route to be pulled for each page when the next button is pressed
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    {/* paths needed for each page on click */}
    <Route exact path='/'>
      <WelcomePage/>
    </Route>
    <Route exact path='/Feeling'>
      <Feeling/>
    </Route>
    <Route exact path='/Understanding'>
      <Understanding/>
    </Route>
    <Route exact path='/Support'>
      <Support/>
    </Route>
    <Route exact path='/Comment'>
      <Comment/>
    </Route>
    <Route exact path='/Feedback'>
      <SubmitFeedback/>
    </Route>
    <Route exact path='/Success'>
      <SuccessPage/>
    </Route>
    </Router>
  );
}

export default App;
