export const accessToken = (state = "", action) => {
  switch (action.type){
    case 'SET_ACCESS_TOKEN':
      return action.data;
    default:
      return state;
  }
}

export const authStatus = (state = false, action) => {
  switch (action.type){
    case 'SET_ACCESS_TOKEN':
      return action.data && action.data.length > 0;
    default:
      return state;
  }
}

export const badAuthToken = (state = false, action) => {
  switch (action.type){
    case 'GET_PLAYLISTS_FAILURE':
    case 'GET_TRACKS_FAILURE':
    case 'GET_FEATURES_FAILURE':
    case 'CREATE_PLAYLIST_FAILURE':
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return action.payload === 401
    default:
      return state;
  }
}

export const userId = (state = "", action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      const href = action.payload.href;
      const userId = href.split('/')[5];
      return userId;
    default:
      return state;
  }
}