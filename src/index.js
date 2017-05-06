import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//create a store from the above reducer, then subscribe a React render function to it
const store = createStore(reducers);
store.subscribe(render);
render();

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
