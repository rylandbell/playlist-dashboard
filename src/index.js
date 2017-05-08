import 'bootstrap/dist/css/bootstrap.css';

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

// function _getPlaylists() {
//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.getState().accessToken
//     },
//   }
//   fetch('https://api.spotify.com/v1/me/playlists?limit=50', requestOptions)
//     .then(res => res.json())
//     .then(res => {
//       console.log('fetched playlists: ', res.items);
//       store.dispatch({
//         type: 'ADD_PLAYLISTS_DATA',
//         data: res.items
//       });
//     })
//     .catch(console.log);
// }

function render() {
  ReactDOM.render(
    <App 
      reduxState={store.getState()}
      getPlaylists={
        function() {
          fetchCalls.getPlaylists(store)
        }
      }
      handlePlaylistSelect={
        function(data) {
          //dispatch name of selected playlist to Redux store:
          const action = {
            type: 'SELECT_PLAYLIST',
            data: data
          }
          store.dispatch(action);
          
          if(data) {
            fetchCalls.getTracks(store, data);
            // //get track list from Spotify, dispatch to Redux store:
            // const requestOptions = {
            //   method: 'GET',
            //   headers: {
            //     Authorization: 'Bearer ' + store.getState().accessToken
            //   },
            // }

            // const userId = data.owner.id;
            // const playlistId = data.id;
            // const playlistURI = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;

            // fetch(playlistURI, requestOptions)
            //   .then(res => res.json())
            //   .then(res => {
            //     console.log('fetched tracks: ', res.items);
            //     store.dispatch({
            //       type: 'ADD_TRACKS_DATA',
            //       data: res.items
            //     });
            //   })
            //   .catch(console.log)
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
        function(filterName, inputValue) {
          const action = {
            type: 'UPDATE_FILTER',
            name: filterName,
            data: inputValue
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