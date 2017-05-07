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

const app = combineReducers({
  accessToken,
  playlists
});

export default app;
