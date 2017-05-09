// import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/superhero/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
import fetchCalls from './fetchCalls';

import './index.css';

// import 'bootstrap/dist/css/bootstrap-theme.css';

//create a store from the above reducer, then subscribe a React render function to it
const store = createStore(reducers);
dispatchAccessToken();
store.subscribe(render);
render();

function render() {
  ReactDOM.render(
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
        function(data) {
          const action = {
            type: 'SELECT_PLAYLIST',
            data: data
          }
          store.dispatch(action);
          
          if(data) {
            fetchCalls.getTracks(store, data);
          }
        }
      }
      handleViewChange={
        function(view) {
          const action = {
            type: 'CHANGE_VIEW',
            view: view
          }
          store.dispatch(action);
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
        function(filterName) {
          const action = {
            type: 'TOGGLE_CHARTED_FEATURE',
            data: filterName
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