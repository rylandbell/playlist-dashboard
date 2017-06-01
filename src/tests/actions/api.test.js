import * as actions from '../../actions/api';

const testTracksArray = [{track: {id: 1}}, {track: {id: 2}}];

describe('API actions', () => { 
  it('should create an action to GET playlists', () => {
    expect(actions.getPlaylists()).toMatchSnapshot();
  });

  it('should create an action to GET tracks, given userId and playlistId', () => {
    expect(actions.getTracks('testUserId', 'testPlaylistId')).toMatchSnapshot();
  });

  it('should create an action to GET audio features, given an array of tracks', () => {
    expect(actions.getAudioFeatures(testTracksArray)).toMatchSnapshot();
  });

  it('should create an action to POST a new, empty playlist, given userId and playlist name', () => {
    expect(actions.createPlaylist('testUserId', 'testName')).toMatchSnapshot();
  });

  it('should create an action to POST tracks to a playlist, given user/playlist IDs and an array of tracks', () => {
    expect(actions.addTracksToPlaylist('testUserId', 'testPlaylistId', testTracksArray)).toMatchSnapshot();
  });

});
