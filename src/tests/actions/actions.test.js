import * as actions from '../../actions/actions';

const testData = { data: 'test' };
const testFeatureIndex = 0;
const testFilterValue = [0, 1];

describe('General actions', () => {
  it('should create an action to select a playlist', () => {
    expect(actions.selectPlaylist(testData, true)).toMatchSnapshot();
  });

  it('should create an action to select a nav tab', () => {
    expect(actions.setActiveTab('testTabName')).toMatchSnapshot();
  });

  it('should create an action to change playlist name input text', () => {
    expect(actions.changeNameText('testInput')).toMatchSnapshot();
  });

  it("should create an action to update a feature filter's range value", () => {
    expect(
      actions.updateFeatureFilter(testFeatureIndex, testFilterValue)
    ).toMatchSnapshot();
  });

  it('should create an action to indicate that a feature slider is being dragged', () => {
    expect(
      actions.startDraggingFeatureSlider(testFeatureIndex)
    ).toMatchSnapshot();
  });

  it('should create an action to indicate that a feature slider has stopped being dragged', () => {
    expect(actions.stopDraggingFeatureSlider()).toMatchSnapshot();
  });

  it('should create an action to toggle whether a feature is drawn in chart', () => {
    expect(
      actions.toggleChartedFeature(testFeatureIndex, false)
    ).toMatchSnapshot();
  });

  it('should create an action to indicate that a track row is hovered', () => {
    expect(actions.hoverOnTrack(testData)).toMatchSnapshot();
  });

  it('should create an action to indicate that the cursor has left the tracks table', () => {
    expect(actions.clearHoveredTrack()).toMatchSnapshot();
  });

  it('should create an action to stop animating the chart', () => {
    expect(actions.stopAnimatingChart()).toMatchSnapshot();
  });
});
