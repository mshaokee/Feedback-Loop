import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Header from '../Header/Header'
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import Review from '../ReviewPage/ReviewPage';
import Feedback from '../Feedback/Feedback';
import Admin from '../Admin/Admin';


class App extends Component {

  state = {
    feedback: []
  }

  componentDidMount() {
    //check if this.props is working properly!
    this.getFeedback();
    console.log('componentDidMount');
  }

  getFeedback = () => {
    console.log('in getFeedback');
    //axios GET request
    axios.get('/api/information').then((response) => {
      //setState to information from server
      this.setState({
        feedback: response.data
      })//end setState
    }).catch((error) => {
      alert('Error Get, check console.');
      console.log(error);
    });//end axios -- need to run server side

};//end getFeedback

// //need to verify my current redux state
// buttonClick = () =>{
//   console.log('in buttonClick', this.props.reduxState);
// }//end buttonClick

/////can try doing individual info
//POST
submitBtn = (data) => {
  console.log('SUBMIT BTN', data);
  //POST request
  axios.post('/api/information', data).then(response => {
    console.log('in POST submitBtn', response);
    this.getFeedback();
  }).catch(error => {
    alert('Error submitting. please check console');
    console.log(error);
  })
};//end submitBtn

deleteHandle = (data) => { //deleteHandle sent down Admin
  console.log('DELETE', data);
  //DELETE axios
  axios.delete(`/api/information/${data}`).then(response => {
    this.getFeedback();
  }).catch(error => {
    alert('Error deleting, check console')
    console.log(error);
  });
};//end deleteHandle

render() {
  //confirm that DB is connecting
  console.log('what DB has currently', this.state.feedback);

  return (
    <div className="App">
      {/* NEED HASHROUTER TO WRAP MY ROUTES */}
      <HashRouter>
        <Route render={(props) => <Header {...props}
          dispatch={this.props.dispatch}
           />} />
        {/* <button onClick={this.buttonClick}>check</button> */}
        {/* WHEN DIRECTING PATH WITH DISPATCH, SET PROPS */}
        <Route exact path="/"
          render={(props) => <PageOne {...props}
            dispatch={this.props.dispatch} />} />

        <Route path="/pagetwo"
          render={(props) => <PageTwo {...props}
            dispatch={this.props.dispatch} />} />

        <Route path="/pagethree"
          render={(props) => <PageThree {...props}
            dispatch={this.props.dispatch} />} />

        <Route path="/pagefour"
          render={(props) => <PageFour {...props}
            dispatch={this.props.dispatch} />} />

        <Route path="/review"
          render={(props) => <Review {...props}
            dispatch={this.props.dispatch} 
            review={this.props.reduxState}
            submitBtn={this.submitBtn} />} />

        <Route path="/feedback"
          render={(props) => <Feedback {...props}
            dispatch={this.props.dispatch} />} />

        <Route path="/admin"
          render={(props) => <Admin {...props}
            feedback={this.state.feedback}
            deleteHandle={this.deleteHandle}
            dispatch={this.props.dispatch} />} />
      </HashRouter>
    </div>
  );//end return
};//end render
};//end class

//this allows connect to work with redux
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
