import 'bootswatch/superhero/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { render } from 'react-snapshot';
import { createStore, combineReducers } from 'redux';

import App from './components/App';
import * as reducers from './reducers/reducers';
import fetchCalls from './fetchCalls';
import { setAccessToken, selectPlaylist, setActiveTab, changeNameText, updateFilter, startDraggingFilter, toggleChartedFeature, hoverOnTrack, clearHoveredTrack, stopAnimatingChart } from './actions';
import { getHashParams } from './helper';

//create a store from the above reducer, then subscribe a React render function to it
// (the second argument enables Redux dev tools)
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
dispatchAccessToken();
store.subscribe(renderApp);
renderApp();

function renderApp() {
  render(
    <App 
      reduxState = {store.getState()}
      
      getPlaylists = {() => {fetchCalls.getPlaylists(store)}}
      
      handleAuthRequest = {fetchCalls.handleAuthRequest}
      
      handlePlaylistSelect={(playlist, forceTabSwitch) => {
          store.dispatch(selectPlaylist(playlist, forceTabSwitch));
          fetchCalls.getTracks(store, playlist);
      }}
      
      handleTabSelect = {data => {store.dispatch(setActiveTab(data))}}
      
      handleNameTextEntry = {data => {store.dispatch(changeNameText(data))}}
      
      handleSavePlaylist = {name => {fetchCalls.handleSavePlaylist(store, name)}}
      
      handleFilterChange = {(filterIndex, inputValue) => {store.dispatch(updateFilter(filterIndex, inputValue))}}
      
      startDraggingFilter = {filterIndex => {store.dispatch(startDraggingFilter(filterIndex))}}
      
      handleChartedFeaturesToggle = {(filterIndex, newValue) => {store.dispatch(toggleChartedFeature(filterIndex, newValue))}}
     
      handleTrackRowHover = {track => {store.dispatch(hoverOnTrack(track))}}
      
      handleMouseLeavesTracksTable = {() => {store.dispatch(clearHoveredTrack())}}
      
      stopAnimatingChart = {() => {store.dispatch(stopAnimatingChart())}}
    />,
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
