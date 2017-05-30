export const setAccessToken = data => (
  {
    type: 'SET_ACCESS_TOKEN',
    data: data
  }
);

export const selectPlaylist = (data, forceTabSwitch) => (
  {
    type: 'SELECT_PLAYLIST',
    forceTabSwitch: forceTabSwitch,
    data: data
  }
)

export const setActiveTab = data => (
  {
    type: 'SET_ACTIVE_TAB',
    data: data.substring(4)
  }
);

export const changeNameText = data => (
  {
    type: 'CHANGE_NAME_TEXT',
    data: data
  }
);

export const updateFilter = (filterIndex, inputValue) => (
  {
    type: 'UPDATE_FILTER',
    filterIndex: filterIndex,
    data: inputValue
  }
);

export const startDraggingFeatureSlider = filterIndex => (
  {
    type: 'START_DRAGGING_FEATURE_SLIDER',
    filterIndex: filterIndex
  }
);

export const stopDraggingFeatureSlider = () => (
  {
    type: 'STOP_DRAGGING_FEATURE_SLIDER'
  }
);

export const toggleChartedFeature = (filterIndex, newValue) => (
  {
    type: 'TOGGLE_CHARTED_FEATURE',
    filterIndex: filterIndex,
    newValue: newValue
  }
);

export const hoverOnTrack = track => (
  {
    type: 'HOVER_ON_TRACK',
    data: track
  }
);

export const clearHoveredTrack = () => (
  {
    type: 'CLEAR_HOVERED_TRACK',
  }
);

export const stopAnimatingChart = () => (
  {
    type: 'STOP_ANIMATING_CHART',
  }
);

export const badAuthToken = () => (
  {
    type: 'BAD_AUTH_TOKEN'
  }
);

export const addPlaylistsData = (data) => (
  {
    type: 'ADD_PLAYLISTS_DATA',
    data: data
  }
);

export const addTracksData = (data) => (
  {
    type: 'ADD_TRACKS_DATA',
    data: data
  }
);

export const getPlaylistsPending = () => (
  {
    type: 'GET_PLAYLISTS_PENDING'
  }
);

export const getPlaylistsFailure = () => (
  {
    type: 'GET_PLAYLISTS_FAILURE'
  }
);

export const getTracksPending = () => (
  {
    type: 'GET_TRACKS_PENDING'
  }
);

export const getTracksSuccess = () => (
  {
    type: 'GET_TRACKS_SUCCESS'
  }
);

export const getTracksFailure = () => (
  {
    type: 'GET_TRACKS_FAILURE'
  }
);