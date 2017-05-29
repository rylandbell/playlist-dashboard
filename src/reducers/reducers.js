import { combineReducers } from 'redux';
import * as fetchStatusReducers from './fetchStatus';
import * as uiReducers from './ui';
import * as authReducers from './auth';

export const fetchStatus = combineReducers(fetchStatusReducers);
export const ui = combineReducers(uiReducers);
export const auth = combineReducers(authReducers);

export const playlists = (state = [], action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      const shapedData = action.data.items
        .map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          ownerId: playlist.owner.id
        }));
      return shapedData;
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
      const shapedTracks = action.data
        .map(data => ({
          id: data.track.id,
          name: data.track.name,
          artist: data.track.artists[0].name,
          duration_ms: data.track.duration_ms,
          popularity: data.track.popularity,
          uri: data.track.uri
      }));
      return shapedTracks;
    default:
      return state;
  }
}

export const selectedPlaylistAudioFeatures = (state = [], action) => {
  switch (action.type){
    case 'SELECT_PLAYLIST':
      return action.data ? [] : state;
    case 'ADD_AUDIO_FEATURES':
      return action.data.slice();
    default:
      return state;
  }
}

const filtersInitial = [
  {
    name: 'danceability',
    displayName: 'Danceability',
    shortName: 'Dance',
    isActive: true,
    isGraphed: true,
    showReferenceLine: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#5bc0de'
  },
  {
    name: 'energy',
    displayName: 'Energy',
    shortName: 'Energy',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#d9534f'
  },
  {
    name: 'valence',
    displayName: 'Positivity',
    shortName: 'Pos',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#5CB85C'
  },
  {
    name: 'acousticness',
    displayName: 'Acousticness',
    shortName: 'Acous',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#f0ad4e'
  },
  {
    name: 'liveness',
    displayName: 'Liveness',
    shortName: 'Live',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#DF691A'
  },
  {
    name: 'instrumentalness',
    displayName: 'Instrumentalness',
    shortName: 'Inst',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#EBEBEB'
  }
];

export const filters = (state = filtersInitial, action) => {
  let targetFilter, updatedFilter;
  switch(action.type) {
    case 'UPDATE_FILTER':
      targetFilter = Object.assign({}, state[action.filterIndex]);
      updatedFilter = Object.assign(targetFilter, {currentValue: action.data});
      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    case 'TOGGLE_CHARTED_FEATURE':
      return state.map( (filter, index) => {
        if (index === action.filterIndex) {
          return Object.assign(filter, {showReferenceLine: false, isGraphed: action.newValue})
        } else {
          return Object.assign({}, filter, {showReferenceLine: false});
        }
      });
    case 'START_DRAGGING_FEATURE_SLIDER':
      return state.map( (filter,index) => {
        if (index === action.filterIndex) {
          return Object.assign({}, filter, {showReferenceLine: true, isGraphed: true});
        } else {
          return Object.assign({}, filter, {showReferenceLine: false, isGraphed: false});
        }
      });
    case 'SELECT_PLAYLIST':
      return state.map( filter => Object.assign(filter, {showReferenceLine: false}) );
    default:
      return state;
  }
}
