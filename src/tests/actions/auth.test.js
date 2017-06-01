import * as actions from '../../actions/auth';

const testTracksArray = [{track: {id: 1}}, {track: {id: 2}}];

describe('Authorization actions', () => { 
  it('should create an action to request an auth token', () => {
    expect(actions.authRequest()).toMatchSnapshot();
  });

  it('should create an action to add an auth token to the store', () => {
    expect(actions.setAccessToken('testToken')).toMatchSnapshot();
  });
});
