export const getPlaylists = () => ({
  type: 'API',
  payload: {
    url: 'https://api.spotify.com/v1/me/playlists?limit=50',
    method: 'GET',
    success: 'GET_PLAYLISTS_SUCCESS',
    failure: 'GET_PLAYLISTS_FAILURE',
    pending: 'GET_PLAYLISTS_PENDING'
  }
});

export const getTracks = (userId, playlistId) => ({
  type: 'API',
  payload: {
    url: `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
    method: 'GET',
    success: 'GET_TRACKS_SUCCESS',
    failure: 'GET_TRACKS_FAILURE',
    pending: 'GET_TRACKS_PENDING'
  }
});

export const getAudioFeatures = tracks => {
  const trackIds = tracks.map(track => track.track.id).join(',');
  return {
    type: 'API',
    payload: {
      url: `https://api.spotify.com/v1/audio-features?ids=${trackIds}`,
      method: 'GET',
      success: 'GET_FEATURES_SUCCESS',
      failure: 'GET_FEATURES_FAILURE',
      pending: 'GET_FEATURES_PENDING'
    }
  };
};

export const createPlaylist = (userId, name) => ({
  type: 'API',
  payload: {
    url: `https://api.spotify.com/v1/users/${userId}/playlists`,
    method: 'POST',
    body: {
      name: name,
      public: false,
      collaborative: false
    },
    success: 'CREATE_PLAYLIST_SUCCESS',
    failure: 'CREATE_PLAYLIST_FAILURE',
    pending: 'CREATE_PLAYLIST_PENDING'
  }
});

export const addTracksToPlaylist = (userId, playlistId, tracksToSave) => {
  const trackURIArray = tracksToSave.map(track => track.uri);
  return {
    type: 'API',
    payload: {
      url: `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      method: 'POST',
      body: {
        uris: trackURIArray,
        position: 0
      },
      success: 'ADD_TRACKS_TO_PLAYLIST_SUCCESS',
      failure: 'ADD_TRACKS_TO_PLAYLIST_FAILURE',
      pending: 'ADD_TRACKS_TO_PLAYLIST_PENDING'
    }
  };
};
