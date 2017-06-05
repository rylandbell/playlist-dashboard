export const selectPlaylist = (data, forceTabSwitch) => ({
  type: 'SELECT_PLAYLIST',
  forceTabSwitch: forceTabSwitch,
  data: data
});

export const setActiveTab = data => ({
  type: 'SET_ACTIVE_TAB',
  data: data.substring(4)
});

export const changeNameText = data => ({
  type: 'CHANGE_NAME_TEXT',
  data: data
});

export const sortByFeature = featureName => ({
  type: 'SORT_BY_FEATURE',
  payload: {
    featureName: featureName
  }
})

export const updateFilter = (filterIndex, inputValue) => ({
  type: 'UPDATE_FILTER',
  filterIndex: filterIndex,
  data: inputValue
});

export const startDraggingFeatureSlider = filterIndex => ({
  type: 'START_DRAGGING_FEATURE_SLIDER',
  filterIndex: filterIndex
});

export const stopDraggingFeatureSlider = () => ({
  type: 'STOP_DRAGGING_FEATURE_SLIDER'
});

export const toggleChartedFeature = (filterIndex, newValue) => ({
  type: 'TOGGLE_CHARTED_FEATURE',
  filterIndex: filterIndex,
  newValue: newValue
});

export const hoverOnTrack = track => ({
  type: 'HOVER_ON_TRACK',
  data: track
});

export const clearHoveredTrack = () => ({
  type: 'CLEAR_HOVERED_TRACK'
});

export const stopAnimatingChart = () => ({
  type: 'STOP_ANIMATING_CHART'
});
