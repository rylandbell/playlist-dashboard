import 'bootswatch/superhero/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-snapshot';

import App from './components/App';
import * as reducers from './reducers/reducers';
import fetchCalls from './fetchCalls';
import { setAccessToken, hoverOnTrack, clearHoveredTrack, stopAnimatingChart } from './actions';
import { getHashParams } from './helper';

//create a store from the above reducer, then subscribe a React render function to it
// (the second argument enables Redux dev tools in browser)
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
dispatchAccessToken();
store.subscribe(renderApp);
renderApp();

function renderApp() {
  render(
    <Provider store={store}>
      <App 
        reduxState = {store.getState()}
        
        getPlaylists = {() => {fetchCalls.getPlaylists(store)}}
                
        // handleTabSelect = {data => {store.dispatch(setActiveTab(data))}}
       
        handleTrackRowHover = {track => {store.dispatch(hoverOnTrack(track))}}
        
        handleMouseLeavesTracksTable = {() => {store.dispatch(clearHoveredTrack())}}
        
        stopAnimatingChart = {() => {store.dispatch(stopAnimatingChart())}}
      />
    </Provider>,
    document.getElementById('root')
  );
}

//send access token from URI to Redux store, before render() first called
function dispatchAccessToken() {
  const params = getHashParams();
  let data = "";
  if (params && params.access_token) {
    data = params.access_token;
  }
  store.dispatch(setAccessToken(data));
}
