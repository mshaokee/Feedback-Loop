import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//set initalstate which will be an array 
const reducerInitialState = 0;

const myReducer = (state = reducerInitialState, action) => {
    console.log('in myReducer', state, action);   
    return state;
};//end myReducer

const myStore = createStore(myReducer);

ReactDOM.render(
    <Provider store={myStore}>
    <App />
    </Provider>,
    document.getElementById('root')
    );

registerServiceWorker();
