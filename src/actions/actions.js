export const selectPlaylist = (data, forceTabSwitch) => ({
  type: "SELECT_PLAYLIST",
  forceTabSwitch: forceTabSwitch,
  data: data
});

export const setActiveTab = data => ({
  type: "SET_ACTIVE_TAB",
  data: data.substring(4)
});

export const changeNameText = data => ({
  type: "CHANGE_NAME_TEXT",
  data: data
});

export const sortByFeature = featureName => ({
  type: "SORT_BY_FEATURE",
  payload: {
    featureName: featureName
  }
});

export const updateFeatureFilter = (featureIndex, inputValue) => ({
  type: "UPDATE_FEATURE_FILTER",
  featureIndex: featureIndex,
  data: inputValue
});

export const startDraggingFeatureSlider = featureIndex => ({
  type: "START_DRAGGING_FEATURE_SLIDER",
  featureIndex: featureIndex
});

export const stopDraggingFeatureSlider = () => ({
  type: "STOP_DRAGGING_FEATURE_SLIDER"
});

export const toggleChartedFeature = (featureIndex, newValue) => ({
  type: "TOGGLE_CHARTED_FEATURE",
  featureIndex: featureIndex,
  newValue: newValue
});

export const hoverOnTrack = track => ({
  type: "HOVER_ON_TRACK",
  data: track
});

export const clearHoveredTrack = () => ({
  type: "CLEAR_HOVERED_TRACK"
});

export const stopAnimatingChart = () => ({
  type: "STOP_ANIMATING_CHART"
});
