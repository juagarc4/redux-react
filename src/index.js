import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import CounterContainer from "./containers/Counter";
import {counterApp} from "./reducers";

import {Provider} from 'react-redux'

const store = createStore(counterApp)

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
