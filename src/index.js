import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

//set initalstate which will be an array 
const reducerInitialState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

//set myReducer function for state
const myReducer = (state = reducerInitialState, action) => {
    console.log('in myReducer store', state, action);
    if (action.type === 'feeling') {
        console.log('in myReducer feeling: ', action.payload);
        // return feeling to change directly
        return { ...state, feeling: action.payload };
    } else if (action.type === 'understand') {
        console.log('in myReducer understanding:', action.payload);
        //spread to not mutate and directly change understanding through return
        return { ...state, understanding: action.payload }
    } else if (action.type === 'support') {
        console.log('in myReducer support:', action.payload);
        //spread to not mutate and directly change understanding through return
        return { ...state, support: action.payload }
    } else if (action.type === 'comments') {
        console.log('in myReducer comments:', action.payload);
        //spread to not mutate and directly change understanding through return
        return { ...state, comments: action.payload }
    } else if (action.type === 'submit') {
        console.log('submiting Feedback:', state);
        let feedback = {
            feeling: state.feeling,
            understanding: state.understanding,
            support: state.support,
            comments: state.comments
        }//end feedback variable
        axios.post('/api/information', feedback).then((response) => {
            console.log('back from POST:', response.data);
        }).catch((error) => {
            alert('Error Post redux');
            console.log(error);
        });//end axios   
    } else if(action.type === 'reset'){
        console.log('reset data');
        return state;
    }
    //must return something
    return state;
};//end myReducer

const myStore = createStore(myReducer);

ReactDOM.render(
    // allow App.js to collect store info
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
