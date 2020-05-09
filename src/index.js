import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//set initalstate which will be an array 
const reducerInitialState = {
    feeling: [],
    understanding: [],
    support: [],
    comments: []
}

//set myReducer function for state
const myReducer = (state = reducerInitialState, action) => {
    console.log('in myReducer store', state, action);
    if(action.type === 'feeling'){
        console.log('in myReducer feeling: ', action.payload);
        state.feeling = [...state.feeling, action.payload]
        console.log('in myReducer NOW: ', state);
        return state.feeling;
    }
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
