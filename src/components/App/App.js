import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Header from '../Header/Header'
import PageOne from '../PageOne/PageOne';
// import PageTwo from '../PageTwo/PageTwo';
// import PageThree from '../PageThree/PageThree';
// import PageFour from '../PageFour/PageFour';
// import Review from '../Review/Review';
// import Feedback from '../Feedback/Feedback';


class App extends Component {

  componentDidMount(){
    console.log('componentDidMount', this.props);
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
        <Header />
        <Route exact path="/"
          render={(props) => <PageOne {...props}
          dispatch={this.props.dispatch} />} />
        </HashRouter>
      </div>
    );//end return
  };//end render
};//end class

const reduxStateToProps = (reduxState) => ({reduxState});

export default connect(reduxStateToProps)(App);
