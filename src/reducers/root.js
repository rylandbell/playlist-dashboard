import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';

import * as fetchStatusReducers from './fetchStatus';
import * as uiReducers from './ui';
import * as authReducers from './auth';
import { features } from './features';
import { playlists, selectedPlaylist } from './playlists';
import { tracks } from './tracks';

export const fetchStatus = combineReducers(fetchStatusReducers);
export const ui = combineReducers(uiReducers);
export const auth = combineReducers(authReducers);
export { features, playlists, selectedPlaylist, tracks };
export const browser = responsiveStateReducer;
