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
      return action.payload.items
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
      return action.payload.items
        .map(data => ({
          id: data.track.id,
          name: data.track.name,
          artist: data.track.artists[0].name,
          duration_ms: data.track.duration_ms,
          popularity: data.track.popularity ? data.track.popularity/100 : 0,
          uri: data.track.uri
        }));
    case 'ADD_AUDIO_FEATURES':
      const features = action.payload.audio_features;
      return state.map((stateData, index) => {
        if (features[index] && (stateData.id === features[index].id)) {
          return {...stateData, 
            danceability: features[index].danceability,
            energy: features[index].energy,
            valence: features[index].valence,
            acousticness: features[index].acousticness,
            liveness: features[index].liveness,
            instrumentalness: features[index].instrumentalness
          }
        } else {
          console.log('ID mismatch');
          return state;
        }
      });
    default:
      return state;
  }
}