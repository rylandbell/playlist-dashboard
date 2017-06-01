import { getAudioFeatures, addTracksData, addPlaylistsData, addFeaturesData, addTracksToPlaylist } from '../actions';
import {getFilteredTracks} from '../selectors/filteredTracks'; 

export const userFlowMiddleware = ({ dispatch, getState }) => next => action => { 
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
        getState().auth.userId,
        action.payload.id,
        getFilteredTracks(getState()) 
      ));
      break;

    default:
      break;
  };

  next(action);
}
