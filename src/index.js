import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/**
 * redux
 */
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducer from 'reducer';
/**
 * react-router
 */
import { Router, hashHistory } from 'react-router';
import routes from './router';
/**
 * css
 */
import 'css/public/index.css';
import 'normalize.css';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes()}>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();