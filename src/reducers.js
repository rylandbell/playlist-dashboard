import { combineReducers } from 'redux';

const accessToken = (state = "", action) => {
  switch (action.type){
    case 'SET_ACCESS_TOKEN':
      return action.data;
    default:
      return state;
  }
}

const app = combineReducers({
  accessToken
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
