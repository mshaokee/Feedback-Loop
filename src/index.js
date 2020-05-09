import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

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
    if(action.type === 'feeling'){
        console.log('in myReducer feeling: ', action.payload);
        // return feeling to change directly
        return {feeling: action.payload};
    }
    if(action.type === 'understand'){
        console.log('in myReducer understanding:', action.payload);
        //spread to not mutate and directly change understanding through return
        return {...state, understanding: action.payload}
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
