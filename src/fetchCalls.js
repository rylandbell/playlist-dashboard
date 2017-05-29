import { getPlaylistsPending, getPlaylistsFailure, badAuthToken, addPlaylistsData } from './actions';
import {getFilteredTracks} from './selectors/filteredTracks'; 

const fetchCalls = {};

fetchCalls.handleAuthRequest = function() {
  console.log('handleAuthRequest runs');
  const clientID = '74436b5dd9624f8782f138387e69daaf';
  const redirectURI = window.location.href.split('#')[0].slice(0,-1);
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
fetchCalls.getPlaylists = function(dispatch, accessToken) {
  dispatch(getPlaylistsPending());

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
  }
  fetch('https://api.spotify.com/v1/me/playlists?limit=50', requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        dispatch(badAuthToken());
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      dispatch(addPlaylistsData(res));
    })
    .catch(err => {
      dispatch(getPlaylistsFailure());
      console.log('getPlaylists Error:', err);
    });
}

//get track info for a given playlist
fetchCalls.getTracks = function(dispatch, accessToken, data) {
  dispatch({
    type: 'GET_TRACKS_PENDING'
  });

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
  }

  const userId = data.ownerId;
  const playlistId = data.id;
  const playlistURI = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;

  fetch(playlistURI, requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        dispatch(badAuthToken());
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'GET_TRACKS_SUCCESS'
      });
      dispatch({
        type: 'ADD_TRACKS_DATA',
        data: res.items
      });
      this.getTrackFeatures(dispatch, accessToken, res.items);
    })
    .catch(err => {
      console.log('getTracks error: ', err);
      dispatch({
        type: 'GET_TRACKS_FAILURE'
      });
    });
}

//get audio features given an array of tracks
fetchCalls.getTrackFeatures = function(dispatch, accessToken, tracks) {
  dispatch({
    type: 'GET_FEATURES_PENDING'
  });

  //get track list from Spotify, dispatch to Redux store:
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
  }

  const trackIds = tracks.map(track => track.track.id).join(',');
  const featuresURI = `https://api.spotify.com/v1/audio-features?ids=${trackIds}`;

  fetch(featuresURI, requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        dispatch(badAuthToken());
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'ADD_AUDIO_FEATURES',
        data: res.audio_features
      });
    })
    .catch(err => {
      console.log('getTrackFeatures error: ', err);
      dispatch({
        type: 'GET_FEATURES_FAILURE'
      });
    });
}

fetchCalls.handleSavePlaylist = function(dispatch, accessToken, userId, name, fullState) {
  this.createNewPlaylist(dispatch, accessToken, userId, name, fullState);
}

fetchCalls.createNewPlaylist = function(dispatch, accessToken, userId, name, fullState) {
  dispatch({
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
      Authorization: 'Bearer ' + accessToken,
      "Content-Type": 'applicatiown/json'
    },
    body: JSON.stringify(requestBody)
  };

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        dispatch(badAuthToken());
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'CREATE_PLAYLIST_SUCCESS'
      });
      this.addTracksToPlaylist(dispatch, accessToken, userId, res.id, fullState)
    })
    .catch(err => {
      console.log('createNewPlaylist error: ', err);
      dispatch({
        type: 'CREATE_PLAYLIST_FAILURE'
      });
    });
}

fetchCalls.addTracksToPlaylist = function(dispatch, accessToken, userId, playlistId, fullState) {
  dispatch({
    type: 'ADD_TRACKS_TO_PLAYLIST_PENDING'
  });

  const tracksToSave = getFilteredTracks(fullState);
  const trackURIArray = tracksToSave.map(track => track.uri);;

  const requestBody = {
    uris: trackURIArray,
    position: 0
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      "Content-Type": 'applicatiown/json'
    },
    body: JSON.stringify(requestBody)
  };

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, requestOptions)
    .then(res => {
      if (!res.ok && res.status === 401) {
        dispatch(badAuthToken());
        this.handleAuthRequest();
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'ADD_TRACKS_TO_PLAYLIST_SUCCESS'
      });
    })
    .catch(err => {
      console.log('addTracksToPlaylist error: ', err);
      dispatch({
        type: 'ADD_TRACKS_TO_PLAYLIST_FAILURE'
      });
    });
}

export default fetchCalls;