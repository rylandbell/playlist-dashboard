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

const receivedPlaylists = (state = false, action) => {
  switch(action.type) {
    case 'ADD_PLAYLISTS_DATA':
      return true;
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

const filtersInitial = {
  danceability: [0,1],
  instrumental: [0,1]
}

const filters = (state = filtersInitial, action) => {
  switch(action.type) {
    case 'UPDATE_FILTER':
      const updatedFilter = {};
      updatedFilter[action.name] = action.data;
      return Object.assign({}, state, updatedFilter);
    default:
      return state;
  }
}

// const filters = combineReducers({
//   instrumental,
//   danceability
// })

const app = combineReducers({
  accessToken,
  playlists,
  selectedPlaylist,
  activeView,
  receivedPlaylists,
  filters
});

export default app;
