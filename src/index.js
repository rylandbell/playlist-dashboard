import 'bootswatch/superhero/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-snapshot';

import App from './components/App';
import * as reducers from './reducers/main';

//create a store from the above reducer, then subscribe a React render function to it
// (the second argument enables Redux dev tools in browser)
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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