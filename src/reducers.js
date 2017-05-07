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
    case 'TOGGLE_PLAYLIST_SELECT':
      const playlists = state.slice();
      const chosen = playlists.find(playlist => playlist.id === action.id);
      chosen.selected ? chosen.selected = false : chosen.selected = true;
      return playlists;
    default:
      return state;
  }
}

const activeView = (state = "preAuth", action) => {
  switch (action.type){
    case 'GOTO_PRE_AUTH_VIEW':
      return "preAuth";
    case 'GOTO_SELECT_PLAYLIST_VIEW':
      return "selectPlaylist";
    case 'GOTO_SELECT_FILTERS_VIEW':
      return "selectFilters";
    case 'SET_ACCESS_TOKEN':
      const isToken = action.data && action.data.length > 0;
      const view = isToken ? "selectPlaylist" : "preAuth";
      return view;
    default:
      return state;
  }
}

const app = combineReducers({
  accessToken,
  playlists,
  activeView
});

export default app;
