const fetchCalls = {};

fetchCalls.getPlaylists = function(store) {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken
    },
  }
  fetch('https://api.spotify.com/v1/me/playlists?limit=50', requestOptions)
    .then(res => res.json())
    .then(res => {
      console.log('fetched playlists: ', res.items);
      store.dispatch({
        type: 'ADD_PLAYLISTS_DATA',
        data: res.items
      });
    })
    .catch(console.log);
}

//get track info for a given playlist
fetchCalls.getTracks = function(store, data) {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken
    },
  }

  const userId = data.owner.id;
  const playlistId = data.id;
  const playlistURI = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;

  fetch(playlistURI, requestOptions)
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_TRACKS_DATA',
        data: res.items
      });
      this.getTrackFeatures(store, res.items);
    })
    .catch(console.log);
}

//get audio features given an array of tracks
fetchCalls.getTrackFeatures = function(store, tracks) {
  console.log('fetched trackssss: ', tracks);
  //get track list from Spotify, dispatch to Redux store:
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken
    },
  }

  const trackIds = tracks.map(track => track.track.id).join(',');
  const featuresURI = `https://api.spotify.com/v1/audio-features?ids=${trackIds}`;

  fetch(featuresURI, requestOptions)
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_AUDIO_FEATURES',
        data: res.audio_features
      });
      console.log('fetched audio features: ', res.audio_features);
    })
    .catch(console.log);
}

export default fetchCalls;