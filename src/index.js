import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './conteiners/app.js'; 
import reducer from './reducers/index.js';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </ Provider >,
    document.getElementById('root'));