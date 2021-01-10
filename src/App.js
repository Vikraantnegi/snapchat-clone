import React from 'react';
import './App.css';
import WebCamCapture from './app/Components/WebCamCapture/WebCamCapture';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewImage from './app/Components/ViewImage/ViewImage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="snapchat-app">
        <Switch>
          <Route exact path="/">
            <WebCamCapture />
          </Route>
          <Route exact path="/view">
            <ViewImage />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
