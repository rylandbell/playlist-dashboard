import * as reducers from '../ui';

describe('UI reducers', () => {
  describe('hoveredTrackId', () => {
    const initState = reducers.hoveredTrackId(undefined, { type: 'INIT' });

    it('should return the ID of the hovered track', () => {
      const action = { type: 'HOVER_ON_TRACK', data: { id: 'test' } };
      expect(reducers.hoveredTrackId(initState, action)).toMatchSnapshot();
    });

    it('should return null with CLEAR_HOVERED_TRACK action type', () => {
      const action = { type: 'CLEAR_HOVERED_TRACK' };
      expect(reducers.hoveredTrackId(initState, action)).toMatchSnapshot();
    });
  });

  describe('activeSidebarTab', () => {
    const initState = reducers.activeSidebarTab(undefined, { type: 'INIT' });

    it("should return the action's data for SET_ACTIVE_TAB actions", () => {
      const action = { type: 'SET_ACTIVE_TAB', data: 'test' };
      expect(reducers.activeSidebarTab(initState, action)).toMatchSnapshot();
    });

    it('should return "filters" for SELECT_PLAYLIST actions with forceTabSwitch ', () => {
      const action = { type: 'SELECT_PLAYLIST', forceTabSwitch: true };
      expect(reducers.activeSidebarTab(initState, action)).toMatchSnapshot();
    });

    it('should return the state for SELECT_PLAYLIST actions without forceTabSwitch ', () => {
      const action = { type: 'SELECT_PLAYLIST' };
      expect(reducers.activeSidebarTab(initState, action)).toMatchSnapshot();
    });
  });

  describe('autoSidebarTabSwitch', () => {
    const initState = reducers.autoSidebarTabSwitch(undefined, {
      type: 'INIT'
    });

    it('should always return false for SELECT_PLAYLIST actions', () => {
      const action = { type: 'SELECT_PLAYLIST' };
      expect(reducers.autoSidebarTabSwitch(initState, action)).toEqual(false);
    });
  });

  describe('newPlaylistName', () => {
    const initState = reducers.newPlaylistName(undefined, { type: 'INIT' });

    it('should return action data for CHANGE_NAME_TEXT actions', () => {
      const action = { type: 'CHANGE_NAME_TEXT', data: { name: 'test' } };
      expect(reducers.newPlaylistName(initState, action)).toMatchSnapshot();
    });

    it('should prepend "Modified: " to action data for SELECT_PLAYLIST actions', () => {
      const action = { type: 'SELECT_PLAYLIST', data: { name: 'test' } };
      expect(reducers.newPlaylistName(initState, action)).toMatchSnapshot();
    });
  });

  describe('animateNextChartDraw', () => {
    const initState = reducers.animateNextChartDraw(undefined, {
      type: 'INIT'
    });

    it('should return false for STOP_ANIMATING_CHART actions', () => {
      const action = { type: 'STOP_ANIMATING_CHART' };
      expect(reducers.animateNextChartDraw(initState, action)).toEqual(false);
    });

    it('should return true for ADD_FEATURES_DATA actions', () => {
      const action = { type: 'ADD_FEATURES_DATA' };
      expect(reducers.animateNextChartDraw(initState, action)).toEqual(true);
    });
  });
});
