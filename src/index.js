import 'bootswatch/superhero/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
import fetchCalls from './fetchCalls';

import './index.css';

//create a store from the above reducer, then subscribe a React render function to it
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
dispatchAccessToken();
store.subscribe(renderApp);
renderApp();

function renderApp() {
  render(
    <App 
      reduxState={store.getState()}
      getPlaylists={
        function() {
          fetchCalls.getPlaylists(store)
        }
      }
      handleAuthRequest={
        fetchCalls.handleAuthRequest
      }
      handlePlaylistSelect={
        function(data, forceTabSwitch) {
          const action = {
            type: 'SELECT_PLAYLIST',
            forceTabSwitch: forceTabSwitch,
            data: data
          }
          store.dispatch(action);
          
          if(data) {
            fetchCalls.getTracks(store, data);
          }
        }
      }
      handleTabSelect={
        function(data) {
          const action ={
            type: 'SET_ACTIVE_TAB',
            data: data.substring(4)
          }
          store.dispatch(action);
        }
      }
      handleNameTextEntry={
        function(data) {
          const action ={
            type: 'CHANGE_NAME_TEXT',
            data: data
          }
          store.dispatch(action);
        }
      }
      handleSavePlaylist={
        function(name) {
          fetchCalls.handleSavePlaylist(store, name);
        }
      }
      handleFilterChange={
        function(filterIndex, inputValue) {
          const action = {
            type: 'UPDATE_FILTER',
            filterIndex: filterIndex,
            data: inputValue
          }
          store.dispatch(action);
        }
      }
      handleChartedFeaturesToggle={
        function(filterIndex, newValue) {
          const action = {
            type: 'TOGGLE_CHARTED_FEATURE',
            filterIndex: filterIndex,
            newValue: newValue
          }
          store.dispatch(action);
        }
      }
      handleTrackRowHover={
        function(track) {
          const action = {
            type: 'HOVER_ON_TRACK',
            data: track
          }
          store.dispatch(action);
        }
      }
      handleMouseLeavesTracksTable={
        function() {
          const action = {
            type: 'CLEAR_HOVERED_TRACK',
          }
          store.dispatch(action);
        }
      }
      stopAnimatingChart={
        function() {
          const action = {
            type: 'STOP_ANIMATING_CHART',
          }
          store.dispatch(action);
        }
      }
    />,
    document.getElementById('root')
  );
}

//helper functions:
function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  e = r.exec(q);
  while ( e ) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
     e = r.exec(q)
  }
  return hashParams;
}

function dispatchAccessToken() {
  const params = getHashParams();
  let data = "";
  if (params && params.access_token) {
    data = params.access_token;
  }
  const action = {
    type: 'SET_ACCESS_TOKEN',
    data: data
  }
  store.dispatch(action);
}
