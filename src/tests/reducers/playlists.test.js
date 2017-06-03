import deepFreeze from 'deep-freeze';
import * as reducers from '../../reducers/playlists';

describe("Playlist reducers", () => {

  describe('playlists', () => {
    const initState = reducers.playlists(undefined, {type: 'INIT'});

    it('should return the data of an ADD_PLAYLIST_DATA action', () => {
      const action = {
        type: 'ADD_PLAYLISTS_DATA', 
        payload: {
          items: [
            {
              id: 'testId',
              name: 'testName',
              owner: {
                id: 'testOwnerId'
              },
              fake: 'fake',
              images: []
            },
            {
              id: 'testId2',
              name: 'testName2',
              owner: {
                id: 'testOwnerId2'
              },
              fake: 'fake',
              images: []
            }
          ]
        }
      };

      deepFreeze(action);
      deepFreeze(initState);
      expect(reducers.playlists(initState, action)).toMatchSnapshot();
    });
  });

  describe('selectedPlaylist', () => {
    const initState = reducers.selectedPlaylist(undefined, {type: 'INIT'});

    it('should return the data of a SELECT_PLAYLIST action', () => {
      const action = {type: 'SELECT_PLAYLIST', data: {id: 'test'}};
      deepFreeze(action);
      deepFreeze(initState);
      expect(reducers.selectedPlaylist(initState, action)).toMatchSnapshot();
    });
  });

});