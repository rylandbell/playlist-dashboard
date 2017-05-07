import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + store.getState().accessToken
            },
          }
          fetch('https://api.spotify.com/v1/me/playlists?limit=50', requestOptions)
            .then(res => res.json())
            .then(res => {
              console.log('fetched playlists: ', res.items);
              store.dispatch({
                type: 'ADD_PLAYLISTS_DATA',
                data: res.items
              });
            })
            .catch(console.log)
        }
      }
      handlePlaylistSelect={
        function(id) {
          const action = {
            type: 'TOGGLE_PLAYLIST_SELECT',
            id: id
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