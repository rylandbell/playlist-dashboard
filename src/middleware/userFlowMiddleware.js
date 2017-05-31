import { getAudioFeatures, addTracksData, addPlaylistsData, addFeaturesData } from '../actions';

export const userFlowMiddleware = ({ dispatch }) => next => action => { 
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
    default:
      break;
  };

  next(action);
}
