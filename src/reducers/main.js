import { combineReducers } from 'redux';

import * as fetchStatusReducers from './fetchStatus';
import * as uiReducers from './ui';
import * as authReducers from './auth';
import { filterValues } from './filters';

export const fetchStatus = combineReducers(fetchStatusReducers);
export const ui = combineReducers(uiReducers);
export const auth = combineReducers(authReducers);
export {filterValues};

export const playlists = (state = [], action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      return action.data.items
        .map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          ownerId: playlist.owner.id
        }));
    default:
      return state;
  }
}

export const selectedPlaylist = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_PLAYLIST':
      return {...action.data};
    default:
      return state;
  }
}

export const tracks = (state = [], action) => {
  switch (action.type){
    case 'SELECT_PLAYLIST':
      return action.data ? [] : state;
    case 'ADD_TRACKS_DATA':
      return action.data
        .map(data => ({
          id: data.track.id,
          name: data.track.name,
          artist: data.track.artists[0].name,
          duration_ms: data.track.duration_ms,
          popularity: data.track.popularity ? data.track.popularity/100 : 0,
          uri: data.track.uri
        }));
    case 'ADD_AUDIO_FEATURES':
      return state.map((stateData, index) => {
        if (action.data[index] && (stateData.id === action.data[index].id)) {
          return Object.assign({}, stateData, {
            danceability: action.data[index].danceability,
            energy: action.data[index].energy,
            valence: action.data[index].valence,
            acousticness: action.data[index].acousticness,
            liveness: action.data[index].liveness,
            instrumentalness: action.data[index].instrumentalness
          })
        } else {
          console.log('ID mismatch');
          return state;
        }
      });
    default:
      return state;
  }
}