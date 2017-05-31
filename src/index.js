import 'bootswatch/superhero/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-snapshot';

import App from './components/App';
import * as reducers from './reducers/main';
import {apiMiddleware} from './middleware/apiMiddleware';
import {userFlowMiddleware} from './middleware/userFlowMiddleware';

// (the second argument enables Redux dev tools in browser)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(userFlowMiddleware, apiMiddleware))
);

store.subscribe(renderApp);
renderApp();

function renderApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}