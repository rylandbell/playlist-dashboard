import 'bootswatch/superhero/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-snapshot';
import { responsiveStoreEnhancer } from 'redux-responsive';

import App from './components/App';
import * as reducers from './reducers/root';
import { apiMiddleware } from './middleware/apiMiddleware';
import { userFlowMiddleware } from './middleware/userFlowMiddleware';
import { authMiddleware } from './middleware/authMiddleware';

// (Enables Redux dev tools in browser)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(
    responsiveStoreEnhancer,
    applyMiddleware(userFlowMiddleware, authMiddleware, apiMiddleware)
  )
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
