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
      return action.data.items.slice();
    default:
      return state;
  }
}

const userId = (state = "", action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      const href = action.data.href;
      const userId = href.substring(33,43);
      return userId;
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
      return action.data ? [] : state;
    case 'ADD_TRACKS_DATA':
      return action.data.slice();
    default:
      return state;
  }
}

const audioFeaturesData = (state = [], action) => {
  switch (action.type){
    case 'SELECT_PLAYLIST':
      return action.data ? [] : state;
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

const activeView = (state = "preAuth", action) => {
  switch (action.type){
    case 'SET_ACCESS_TOKEN':
      const isToken = action.data && action.data.length > 0;
      const view = isToken ? "auth" : "preAuth";
      return view;
    default:
      return state;
  }
}

// on first playlist select, automatically push user to Filters tab. after that, let user control tabs
const autoTabSwitch = (state = true, action) => {
  switch (action.type) {
    case 'SELECT_PLAYLIST':
      return false;
    default:
      return state;
  }
}

const activeTab = (state = "playlists", action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return action.data;
    case 'SELECT_PLAYLIST':
      return action.forceTabSwitch ? "filters" : state;
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
    isDragging: false,
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
    isDragging: false,
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
    isDragging: false,
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
    isDragging: false,
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
    isDragging: false,
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
    isDragging: false,
    currentValue: [0,1],
    min: 0,
    max: 1,
    color: '#EBEBEB'
  }
];

const filters = (state = filtersInitial, action) => {
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
      targetFilter = Object.assign({}, state[action.filterIndex]);
      updatedFilter = Object.assign(targetFilter, {isGraphed: action.newValue});

      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    case 'START_DRAGGING_FILTER':
      targetFilter = Object.assign({}, state[action.filterIndex]);
      updatedFilter = Object.assign(targetFilter, {isDragging: true});

      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    case 'STOP_DRAGGING_FILTER':
      targetFilter = Object.assign({}, state[action.filterIndex]);
      updatedFilter = Object.assign(targetFilter, {isDragging: false});

      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    default:
      return state;
  }
}

const newPlaylistName = (state = "", action) => {
  switch (action.type) {
    case 'SELECT_PLAYLIST':
      return "Modified: " + action.data.name;
    case 'CHANGE_NAME_TEXT':
      return action.data;
    default:
      return state;
  }
}

const animateNextChartDraw = (state = true, action) => {
  switch (action.type) {
    case 'STOP_ANIMATING_CHART':
      return false;
    case 'ADD_AUDIO_FEATURES':
      return true;
    // case 'TOGGLE_CHARTED_FEATURE':
    //   return true;
    default:
      return state;
  }
}

//~~~~~~~~~fetch statuses:~~~~~~~~~~~

const getPlaylistsPending = (state = false, action) => {
  switch(action.type) {
    case 'GET_PLAYLISTS_PENDING':
      return true;
    case 'GET_PLAYLISTS_SUCCESS':
      return false;
    case 'GET_PLAYLISTS_FAILURE':
      return false;
    case 'ADD_PLAYLISTS_DATA':
      return false;
    default:
      return state;
  }
}

const getPlaylistsSuccess = (state = false, action) => {
  switch(action.type) {
    case 'GET_PLAYLISTS_PENDING':
      return false;
    case 'GET_PLAYLISTS_SUCCESS':
      return true;
    case 'GET_PLAYLISTS_FAILURE':
      return false;
    case 'ADD_PLAYLISTS_DATA':
      return true;
    default:
      return state;
  }
}

const getPlaylistsFailure = (state = false, action) => {
  switch(action.type) {
    case 'GET_PLAYLISTS_PENDING':
      return false;
    case 'GET_PLAYLISTS_SUCCESS':
      return false;
    case 'GET_PLAYLISTS_FAILURE':
      return true;
    case 'ADD_PLAYLISTS_DATA':
      return false;
    default:
      return state;
  }
}

const getTracksPending = (state = false, action) => {
  switch(action.type) {
    case 'GET_TRACKS_PENDING':
      return true;
    case 'GET_TRACKS_SUCCESS':
      return false;
    case 'GET_TRACKS_FAILURE':
      return false;
    case 'ADD_TRACKS_DATA':
      return false;
    default:
      return state;
  }
}

const getTracksSuccess = (state = false, action) => {
  switch(action.type) {
    case 'GET_TRACKS_PENDING':
      return false;
    case 'GET_TRACKS_SUCCESS':
      return true;
    case 'GET_TRACKS_FAILURE':
      return false;
    case 'ADD_TRACKS_DATA':
      return true;
    default:
      return state;
  }
}

const getTracksFailure = (state = false, action) => {
  switch(action.type) {
    case 'GET_TRACKS_PENDING':
      return false;
    case 'GET_TRACKS_SUCCESS':
      return false;
    case 'GET_TRACKS_FAILURE':
      return true;
    case 'ADD_TRACKS_DATA':
      return false;
    default:
      return state;
  }
}

const getFeaturesPending = (state = false, action) => {
  switch(action.type) {
    case 'GET_FEATURES_PENDING':
      return true;
    case 'GET_FEATURES_SUCCESS':
      return false;
    case 'GET_FEATURES_FAILURE':
      return false;
    case 'ADD_AUDIO_FEATURES':
      return false;
    default:
      return state;
  }
}

const getFeaturesSuccess = (state = false, action) => {
  switch(action.type) {
    case 'GET_FEATURES_PENDING':
      return false;
    case 'GET_FEATURES_SUCCESS':
      return true;
    case 'GET_FEATURES_FAILURE':
      return false;
    case 'ADD_AUDIO_FEATURES':
      return true;
    default:
      return state;
  }
}

const getFeaturesFailure = (state = false, action) => {
  switch(action.type) {
    case 'GET_FEATURES_PENDING':
      return false;
    case 'GET_FEATURES_SUCCESS':
      return false;
    case 'GET_FEATURES_FAILURE':
      return true;
    case 'ADD_AUDIO_FEATURES':
      return false;
    default:
      return state;
  }
}

const createPlaylistPending = (state = false, action) => {
  switch(action.type) {
    case 'CREATE_PLAYLIST_PENDING':
      return true;
    case 'CREATE_PLAYLIST_SUCCESS':
      return false;
    case 'CREATE_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
}

const createPlaylistSuccess = (state = false, action) => {
  switch(action.type) {
    case 'CREATE_PLAYLIST_PENDING':
      return false;
    case 'CREATE_PLAYLIST_SUCCESS':
      return true;
    case 'CREATE_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
}

const createPlaylistFailure = (state = false, action) => {
  switch(action.type) {
    case 'CREATE_PLAYLIST_PENDING':
      return false;
    case 'CREATE_PLAYLIST_SUCCESS':
      return false;
    case 'CREATE_PLAYLIST_FAILURE':
      return true;
    default:
      return state;
  }
}

const addTracksToPlaylistPending = (state = false, action) => {
  switch(action.type) {
    case 'ADD_TRACKS_TO_PLAYLIST_PENDING':
      return true;
    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
}

const addTracksToPlaylistSuccess = (state = false, action) => {
  switch(action.type) {
    case 'ADD_TRACKS_TO_PLAYLIST_PENDING':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      return true;
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
}

const addTracksToPlaylistFailure = (state = false, action) => {
  switch(action.type) {
    case 'ADD_TRACKS_TO_PLAYLIST_PENDING':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return true;
    default:
      return state;
  }
}

const fetchStatus = combineReducers({
  getPlaylistsPending,
  getPlaylistsSuccess,
  getPlaylistsFailure,
  getTracksPending,
  getTracksSuccess,
  getTracksFailure,
  getFeaturesPending,
  getFeaturesSuccess,
  getFeaturesFailure,
  createPlaylistPending,
  createPlaylistSuccess,
  createPlaylistFailure,
  addTracksToPlaylistPending,
  addTracksToPlaylistSuccess,
  addTracksToPlaylistFailure
});

const app = combineReducers({
  accessToken,
  playlists,
  userId,
  selectedPlaylist,
  selectedPlaylistTracks,
  audioFeaturesData,
  activeView,
  fetchStatus,
  autoTabSwitch,
  activeTab,
  hoveredTrack,
  animateNextChartDraw,
  filters,
  newPlaylistName
});

export default app;
