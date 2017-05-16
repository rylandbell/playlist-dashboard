import {getTracksToSave} from './helper';

const fetchCalls = {};

function renewAuth() {
  console.log('renewAuth runs');
  this.handleAuthRequest();
}

fetchCalls.handleAuthRequest = function() {
  console.log('handleAuthRequest runs');
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

//get list of current user's playlists
fetchCalls.getPlaylists = function(store) {
  store.dispatch({
    type: 'GET_PLAYLISTS_PENDING'
  });

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken
    },
  }
  fetch('https://api.spotify.com/v1/me/playlists?limit=50', requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_PLAYLISTS_DATA',
        data: res
      });
    })
    .catch(err => {
      store.dispatch({
        type: 'GET_PLAYLISTS_FAILURE'
      });
      console.log(err);
    });
}

//get track info for a given playlist
fetchCalls.getTracks = function(store, data) {
  store.dispatch({
    type: 'GET_TRACKS_PENDING'
  });

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
        this.handleAuthRequest();
        throw new Error(res.statusText);
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
    .catch(err => {
      console.log('getTracks error: ', err);
      store.dispatch({
        type: 'GET_TRACKS_FAILURE'
      });
      renewAuth.bind(this)
    });
}

//get audio features given an array of tracks
fetchCalls.getTrackFeatures = function(store, tracks) {
  store.dispatch({
    type: 'GET_FEATURES_PENDING'
  });

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
        this.handleAuthRequest();
        throw new Error(res.statusText);
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
    .catch(err => {
      console.log('getTrackFeatures error: ', err);
      store.dispatch({
        type: 'GET_FEATURES_FAILURE'
      });
      renewAuth.bind(this)
    });
}

fetchCalls.handleSavePlaylist = function(store, name) {
  this.createNewPlaylist(store, name, this.addTracksToPlaylist);
}

fetchCalls.createNewPlaylist = function(store, name, callback) {
  store.dispatch({
    type: 'CREATE_PLAYLIST_PENDING'
  });
  const requestBody = {
    name: name,
    public: false,
    collaborative: false
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken,
      "Content-Type": 'applicatiown/json'
    },
    body: JSON.stringify(requestBody)
  };
  const userId = store.getState().userId;

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'CREATE_PLAYLIST_SUCCESS'
      });
      this.addTracksToPlaylist(store, res.id)
    })
    .catch(err => {
      console.log('createNewPlaylist error: ', err);
      store.dispatch({
        type: 'CREATE_PLAYLIST_FAILURE'
      });
      renewAuth.bind(this)
    });
}

fetchCalls.addTracksToPlaylist = function(store, playlistId) {
  store.dispatch({
    type: 'ADD_TRACKS_TO_PLAYLIST_PENDING'
  });

  const tracksToSave = getTracksToSave(store);
  const trackURIArray = tracksToSave.map(track => track.track.uri);;

  const requestBody = {
    uris: trackURIArray,
    position: 0
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.getState().accessToken,
      "Content-Type": 'applicatiown/json'
    },
    body: JSON.stringify(requestBody)
  };
  const userId = store.getState().userId;

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: 'ADD_TRACKS_TO_PLAYLIST_SUCCESS'
      });
    })
    .catch(err => {
      console.log('addTracksToPlaylist error: ', err);
      store.dispatch({
        type: 'ADD_TRACKS_TO_PLAYLIST_FAILURE'
      });
      renewAuth.bind(this)
    });
}



export default fetchCalls;