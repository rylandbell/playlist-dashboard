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

const app = combineReducers({
  accessToken,
  playlists
});

// const app = (state = false, action) => {
//   switch (action.type) {
//     case 'ANYTHING':
//       return state;
//     default:
//       return state;
//   }
// }

export default app;
