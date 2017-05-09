import { combineReducers } from 'redux';

const accessToken = (state = "", action) => {
  switch (action.type){
    case 'SET_ACCESS_TOKEN':
      return action.data;
    default:
      return state;
  }
}

const playlists = (state = [], action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      return action.data.slice();
    default:
      return state;
  }
}

const selectedPlaylist = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_PLAYLIST':
      return action.data;
    default:
      return state;
  }
}

const selectedPlaylistTracks = (state = [], action) => {
  switch (action.type){
    case 'SELECT_PLAYLIST':
      return [];
    case 'ADD_TRACKS_DATA':
      return action.data.slice();
    default:
      return state;
  }
}

const audioFeaturesData = (state = [], action) => {
  switch (action.type){
    case 'SELECT_PLAYLIST':
      return [];
    case 'ADD_AUDIO_FEATURES':
      return action.data.slice();
    default:
      return state;
  }
}

const hoveredTrack = (state = null, action) => {
  switch (action.type){
    case 'HOVER_ON_TRACK':
      return action.data;
    case 'CLEAR_HOVERED_TRACK':
      return null
    default:
      return state;
  }
}

const hasReceivedPlaylists = (state = false, action) => {
  switch(action.type) {
    case 'ADD_PLAYLISTS_DATA':
      return true;
    default:
      return state;
  }
}

const hasReceivedTracks = (state = false, action) => {
  switch(action.type) {
    case 'ADD_TRACKS_DATA':
      return true;
    default:
      return state;
  }
}

const chartedFeaturesDefault = {
  danceability: true,
  instrumentalness: false,
  valence: false
}

const chartedFeatures = (state = chartedFeaturesDefault, action) => {
  switch (action.type){
    case 'TOGGLE_CHARTED_FEATURE':
      const featureToToggle = action.data;
      const update = {};
      update[featureToToggle] = !state[featureToToggle];
      return Object.assign({}, state, update);
    default:
      return state;
  }
}

const activeView = (state = "preAuth", action) => {
  switch (action.type){
    case 'CHANGE_VIEW':
      return action.view;
    case 'SET_ACCESS_TOKEN':
      const isToken = action.data && action.data.length > 0;
      const view = isToken ? "auth" : "preAuth";
      return view;
    default:
      return state;
  }
}

//next colors: #d9534f #DF691A

const filtersInitial = [
  {
    name: 'danceability',
    displayName: 'Danceability',
    isActive: true,
    isGraphed: true,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#5bc0de'
  },
  {
    name: 'instrumentalness',
    displayName: 'Instrumentalness',
    isActive: true,
    isGraphed: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#5CB85C'
  },
  {
    name: 'valence',
    displayName: 'Valence',
    isActive: true,
    isGraphed: true,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#f0ad4e'
  },
];

const filters = (state = filtersInitial, action) => {
  switch(action.type) {
    case 'UPDATE_FILTER':
      const targetFilter = Object.assign({}, state[action.filterIndex]);
      const updatedFilter = Object.assign(targetFilter, {currentValue: action.data});
      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    default:
      return state;
  }
}

// const filtersInitial = {
//   danceability: [0,1],
//   instrumentalness: [0,1],
//   valence: [0,1]
// }

// const filters = (state = filtersInitial, action) => {
//   switch(action.type) {
//     case 'UPDATE_FILTER':
//       const updatedFilter = {};
//       updatedFilter[action.name] = action.data;
//       return Object.assign({}, state, updatedFilter);
//     default:
//       return state;
//   }
// }

const app = combineReducers({
  accessToken,
  playlists,
  selectedPlaylist,
  selectedPlaylistTracks,
  audioFeaturesData,
  chartedFeatures,
  activeView,
  hoveredTrack,
  hasReceivedPlaylists,
  hasReceivedTracks,
  filters
});

export default app;
