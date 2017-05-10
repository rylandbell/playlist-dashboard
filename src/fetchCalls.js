const fetchCalls = {};

function renewAuth() {
  this.handleAuthRequest();
}

fetchCalls.handleAuthRequest = function() {
  const clientID = '74436b5dd9624f8782f138387e69daaf';
  const redirectURI = 'http://localhost:3000';
  const scopes = ['playlist-read-private','playlist-modify-private'];

  const authURI = 'https://accounts.spotify.com/authorize?'
    + 'client_id=' + clientID
    + '&redirect_uri=' + encodeURIComponent(redirectURI)
    + '&response_type=token'
    + '&scope=' + scopes.join('%20')
    + '&show-dialog=true';
  window.location = authURI;
}

fetchCalls.getPlaylists = function(store) {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken
    },
  }
  fetch('https://api.spotify.com/v1/me/playlists?limit=50', requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_PLAYLISTS_DATA',
        data: res.items
      });
    })
    .catch(renewAuth.bind(this));
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
    .then(res => {
      if (!res.ok && res.status === 401) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_TRACKS_DATA',
        data: res.items
      });
      this.getTrackFeatures(store, res.items);
    })
    .catch(renewAuth.bind(this));
}

//get audio features given an array of tracks
fetchCalls.getTrackFeatures = function(store, tracks) {
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
    .then(res => {
      if (!res.ok && res.status === 401) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_AUDIO_FEATURES',
        data: res.audio_features
      });
    })
    .catch(renewAuth.bind(this));
}

export default fetchCalls;