import { getAudioFeatures, addTracksToPlaylist, getPlaylists } from '../actions/api';
import {addTracksData, addPlaylistsData, addFeaturesData} from '../actions/data';
import {authRequest} from '../actions/auth';
import {getFilteredTracks} from '../selectors/filteredTracks'; 

export const userFlowMiddleware = ({ dispatch, getState }) => next => action => { 
  const state = getState();

  switch (action.type) {
    case 'GET_PLAYLISTS_SUCCESS': 
      dispatch(addPlaylistsData(action.payload));
      break;

    case 'GET_TRACKS_SUCCESS': 
      dispatch(addTracksData(action.payload));
      break;

    case 'GET_FEATURES_SUCCESS': 
      dispatch(addFeaturesData(action.payload));
      break;

    case 'ADD_TRACKS_DATA': 
      dispatch(getAudioFeatures(action.payload.items));
      break;

    case 'CREATE_PLAYLIST_SUCCESS':
      dispatch(addTracksToPlaylist(
        state.auth.userId,
        action.payload.id,
        getFilteredTracks(state) 
      ));
      break;

    case 'ADD_TRACKS_TO_PLAYLIST_SUCCESS':
      dispatch(getPlaylists());
      break; 

    //disallow save requests while previous request pending:
    case 'API':
      if (action.payload.success === 'CREATE_PLAYLIST_SUCCESS') {
        if (state.fetchStatus.createPlaylistPending || state.fetchStatus.addTracksToPlaylist) {
          console.log('caught it');
          return;
        }
      }
      break;

    //auto-request a new auth token if API returns 401 error
    case 'GET_PLAYLISTS_FAILURE':
    case 'GET_TRACKS_FAILURE':
    case 'GET_FEATURES_FAILURE':
    case 'CREATE_PLAYLIST_FAILURE':
    case 'ADD_TRACKS_TO_PLAYLIST_FAILURE':
      if (action.payload === 401) {
        dispatch(authRequest());
      }
      break;

    default:
      break;
  };

  next(action);
}
