import * as actions from '../../actions/data';

const testData = { data: 'test' };

describe('Data-adding actions', () => {
  it('should create an action to add fetched playlist data to store', () => {
    expect(actions.addPlaylistsData(testData)).toMatchSnapshot();
  });

  it('should create an action to add fetched tracks data to store', () => {
    expect(actions.addTracksData(testData)).toMatchSnapshot();
  });

  it('should create an action to add fetched audio features data to store', () => {
    expect(actions.addFeaturesData(testData)).toMatchSnapshot();
  });
});
