import * as reducers from '../../reducers/auth';

describe('Authorization reducers', () => {
  describe('accessToken', () => {
    const initState = reducers.accessToken(undefined, {
      type: 'INIT'
    });

    it('should return action data for SET_ACCESS_TOKEN actions', () => {
      const action = { type: 'SET_ACCESS_TOKEN', data: 'test-token' };
      expect(reducers.accessToken(initState, action)).toEqual('test-token');
    });
  });

  describe('authStatus', () => {
    const initState = reducers.authStatus(undefined, {
      type: 'INIT'
    });

    it('should return falsy when action data missing', () => {
      const action = { type: 'SET_ACCESS_TOKEN' };
      expect(reducers.authStatus(initState, action)).toBeFalsy();
    });

    it('should return falsy for empty string data', () => {
      const action = { type: 'SET_ACCESS_TOKEN', data: '' };
      expect(reducers.authStatus(initState, action)).toBeFalsy();
    });

    it('should return true for non-empty string data', () => {
      const action = { type: 'SET_ACCESS_TOKEN', data: 'test-token' };
      expect(reducers.authStatus(initState, action)).toBeTruthy();
    });
  });

  describe('badAuthToken', () => {
    const initState = reducers.badAuthToken(undefined, {
      type: 'INIT'
    });

    it('should return falsy when payload is not 401', () => {
      const action = { type: 'GET_PLAYLISTS_FAILURE', payload: 403 };
      expect(reducers.badAuthToken(initState, action)).toBeFalsy();
    });

    it('should return truthy when payload is 401', () => {
      const action = { type: 'GET_PLAYLISTS_FAILURE', payload: 401 };
      expect(reducers.badAuthToken(initState, action)).toBeTruthy();
    });
  });

  describe('userId', () => {
    const initState = reducers.userId(undefined, {
      type: 'INIT'
    });

    it('should return the correct substring of the payload\'s href', () => {
      const action = { type: 'ADD_PLAYLISTS_DATA', payload: {href: 'abc/def/ghi/jkl/mno/pqr/stu' }};
      expect(reducers.userId(initState, action)).toEqual('pqr');
    });
  });
});
