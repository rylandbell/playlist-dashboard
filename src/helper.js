export function filterByFeatures(track, index, array, passedReduxState) {

  const state = passedReduxState || this.props.reduxState;
  const features = state.selectedPlaylistAudioFeatures;
  const filters = state.filters;

  //don't do any filtering before features data loads
  if (!features || features.length < 1 ) {
    return true;
  }

  //eliminate tracks without available features data:
  if (!features[index]) {
    return false;
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

export function getTracksToSave(fullState) {
  const { selectedPlaylistTracks } = fullState;
  const filteredTracks = selectedPlaylistTracks.filter(
    (track, index, arr) => filterByFeatures(track, index, arr, fullState)
  );

  return filteredTracks;
}

export function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  e = r.exec(q);
  while ( e ) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q)
  }
  return hashParams;
}