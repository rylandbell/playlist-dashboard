import deepFreeze from 'deep-freeze';
import * as reducers from '../tracks';
import {testTracksData, testFeaturesData} from './data';

describe('Tracks reducers', () => {
  const initState = reducers.tracks(undefined, { type: 'INIT' });

  it('should return an empty array after SELECT_PLAYLIST action with data', () => {
    const action = {
      type: 'SELECT_PLAYLIST',
      data: testTracksData
    };

    deepFreeze(action);
    deepFreeze(initState);
    expect(reducers.tracks(initState, action)).toEqual([]);
  });

  it('should return the existing state after SELECT_PLAYLIST action without data', () => {
    const action = {
      type: 'SELECT_PLAYLIST'
    };

    deepFreeze(action);
    deepFreeze(initState);
    expect(reducers.tracks(initState, action)).toEqual([]);
  });

  it('should return a properly mapped array after ADD_TRACKS_DATA action', () => {
    const action = {
      type: 'ADD_TRACKS_DATA',
      payload: testTracksData
    };

    deepFreeze(action);
    deepFreeze(initState);
    expect(reducers.tracks(initState, action)).toMatchSnapshot();
  });

  it('should merge features data with existing tracks data after ADD_FEATURES_DATA action', () => {
    const initState = reducers.tracks([], {type: 'ADD_TRACKS_DATA', payload: testTracksData});

    const action = {
      type: 'ADD_FEATURES_DATA',
      payload: testFeaturesData
    };

    deepFreeze(action);
    deepFreeze(initState);
    expect(reducers.tracks(initState, action)).toMatchSnapshot();
  });

  it('should return existing state data after ADD_FEATURES_DATA action with mismatching data', () => {
    const initState = reducers.tracks([], {type: 'ADD_TRACKS_DATA', payload: testTracksData});

    const action = {
      type: 'ADD_FEATURES_DATA',
      payload: {audio_features: testFeaturesData.audio_features.slice(0,3)}
    };

    deepFreeze(action);
    deepFreeze(initState);
    expect(reducers.tracks(initState, action)).toMatchSnapshot();
  });
});
