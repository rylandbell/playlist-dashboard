import { getAudioFeatures } from '../actions';

export const userFlowMiddleware = ({ dispatch }) => next => action => { 
  
  switch (action.type) {
    case 'ADD_TRACKS_DATA': 
      dispatch(getAudioFeatures(action.payload.items));
      break;
    default:
      break;
  };

  next(action);
}
