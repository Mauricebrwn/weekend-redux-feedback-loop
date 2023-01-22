import React from 'react';
import axios from 'axios';
import './App.css';
import WelcomePage from './WelcomePage';
import { HashRouter as Router,Route } from 'react-router-dom';
import Feeling from './Feeling';
import Understanding from './Understanding';
import Support from './Support';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
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

    </Router>
  );
}

export default App;
