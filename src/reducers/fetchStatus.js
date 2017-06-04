export const getPlaylistsPending = (state = false, action) => {
  switch (action.type) {
    case 'GET_PLAYLISTS_PENDING':
      return true;
    case 'GET_PLAYLISTS_SUCCESS':
      return false;
    case 'GET_PLAYLISTS_FAILURE':
      return false;
    default:
      return state;
  }
};

export const getPlaylistsSuccess = (state = false, action) => {
  switch (action.type) {
    case 'GET_PLAYLISTS_PENDING':
      return false;
    case 'GET_PLAYLISTS_SUCCESS':
      return true;
    case 'GET_PLAYLISTS_FAILURE':
      return false;
    default:
      return state;
  }
};

export const getPlaylistsFailure = (state = false, action) => {
  switch (action.type) {
    case 'GET_PLAYLISTS_PENDING':
      return false;
    case 'GET_PLAYLISTS_SUCCESS':
      return false;
    case 'GET_PLAYLISTS_FAILURE':
      return true;
    default:
      return state;
  }
};

export const getTracksPending = (state = false, action) => {
  switch (action.type) {
    case 'GET_TRACKS_PENDING':
      return true;
    case 'GET_TRACKS_SUCCESS':
      return false;
    case 'GET_TRACKS_FAILURE':
      return false;
    default:
      return state;
  }
};

export const getTracksSuccess = (state = false, action) => {
  switch (action.type) {
    case 'GET_TRACKS_PENDING':
      return false;
    case 'GET_TRACKS_SUCCESS':
      return true;
    case 'GET_TRACKS_FAILURE':
      return false;
    default:
      return state;
  }
};

export const getTracksFailure = (state = false, action) => {
  switch (action.type) {
    case 'GET_TRACKS_PENDING':
      return false;
    case 'GET_TRACKS_SUCCESS':
      return false;
    case 'GET_TRACKS_FAILURE':
      return true;
    default:
      return state;
  }
};

export const getFeaturesPending = (state = false, action) => {
  switch (action.type) {
    case 'GET_FEATURES_PENDING':
      return true;
    case 'GET_FEATURES_SUCCESS':
      return false;
    case 'GET_FEATURES_FAILURE':
      return false;
    default:
      return state;
  }
};

export const getFeaturesSuccess = (state = false, action) => {
  switch (action.type) {
    case 'GET_FEATURES_PENDING':
      return false;
    case 'GET_FEATURES_SUCCESS':
      return true;
    case 'GET_FEATURES_FAILURE':
      return false;
    default:
      return state;
  }
};

export const getFeaturesFailure = (state = false, action) => {
  switch (action.type) {
    case 'GET_FEATURES_PENDING':
      return false;
    case 'GET_FEATURES_SUCCESS':
      return false;
    case 'GET_FEATURES_FAILURE':
      return true;
    default:
      return state;
  }
};

export const createPlaylistPending = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST_PENDING':
      return true;
    case 'CREATE_PLAYLIST_SUCCESS':
      return false;
    case 'CREATE_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
};

export const createPlaylistSuccess = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST_PENDING':
      return false;
    case 'CREATE_PLAYLIST_SUCCESS':
      return true;
    case 'CREATE_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
};

export const createPlaylistFailure = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST_PENDING':
      return false;
    case 'CREATE_PLAYLIST_SUCCESS':
      return false;
    case 'CREATE_PLAYLIST_FAILURE':
      return true;
    default:
      return state;
  }
};

export const addTracksToPlaylistPending = (state = false, action) => {
  switch (action.type) {
    case 'ADD_TRACKS_TO_PLAYLIST_PENDING':
      return true;
    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
};

export const addTracksToPlaylistSuccess = (state = false, action) => {
  switch (action.type) {
    case 'ADD_TRACKS_TO_PLAYLIST_PENDING':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      return true;
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return false;
    default:
      return state;
  }
};

export const addTracksToPlaylistFailure = (state = false, action) => {
  switch (action.type) {
    case 'ADD_TRACKS_TO_PLAYLIST_PENDING':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      return false;
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      return true;
    default:
      return state;
  }
};
