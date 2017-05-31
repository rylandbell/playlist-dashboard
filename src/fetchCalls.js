import { badAuthToken } from './actions';
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