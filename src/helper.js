export {filterByFeatures, getTracksToSave};

function filterByFeatures(track, index, array, passedReduxState) {
  // console.log(track, index, array, passedReduxState);
  const state = passedReduxState || this.props.reduxState;
  const features = state.audioFeaturesData;
  const filters = state.filters;

  //don't do any filtering before features data loads
  if (!features || features.length < 1) {
    return true;
  }

  const passesAllFilters = filters.reduce(
    (accumulator, filter) => {
      if (!filter.isActive) {
        return true;
      }
      
      let filterName = filter.name;
      let passesFilter = features[index][filterName] >= filter.currentValue[0] && features[index][filterName] <= filter.currentValue[1];
      return passesFilter && accumulator;
    },
    true
  );

  return passesAllFilters;
}

function getTracksToSave(store) {
  const state = store.getState();
  const { selectedPlaylistTracks } = state;
  const filteredTracks = selectedPlaylistTracks.filter(
    (track, index, arr) => filterByFeatures(track, index, arr, state)
  );
  // const filteredTracksUris = filteredTracks.map(track => track.uri)
  // console.log(filteredTracks[0].track.name);
  return filteredTracks;
}