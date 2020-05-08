import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import PageOne from '../PageOne/PageOne'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <PageOne />

        
        </HashRouter>
      </div>
    );//end return
  };//end render
};//end class

export default App;
