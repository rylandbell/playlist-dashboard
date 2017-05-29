import { setAccessToken } from './actions';

export function dispatchAccessToken(dispatch) {
  const params = getHashParams();
  let data = "";
  if (params && params.access_token) {
    data = params.access_token;
  }
  dispatch(setAccessToken(data));
}

//takes a track, looks up its audio features and the current filter values, checks if the track passes all filters
export function filterByFeatures(trackIndex, passedReduxState) {

  const state = passedReduxState || this.props.reduxState;
  const features = state.audioFeatures;
  const filters = state.filters;

  //don't do any filtering before features data loads
  if (!features || features.length < 1 ) {
    return true;
  }

  //eliminate tracks without available features data:
  if (!features[trackIndex]) {
    return false;
  }

  const passesAllFilters = filters.reduce(
    (accumulator, filter) => {
      if (!filter.isActive) {
        return true;
      }
      
      let filterName = filter.name;
      let passesFilter = features[trackIndex][filterName] >= filter.currentValue[0] && features[trackIndex][filterName] <= filter.currentValue[1];
      return passesFilter && accumulator;
    },
    true
  );

  return passesAllFilters;
}

export function getTracksToSave(fullState) {
  const { tracks } = fullState;
  const filteredTracks = tracks.filter(
    (track, index) => filterByFeatures(index, fullState)
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

export function getPlaylistDuration (tracksArray) {
  const total_ms = tracksArray.reduce(
    (accumulator, track) => {
      return accumulator + track.duration_ms;
    },
    0
  );

  const total_min = Math.round(total_ms / (1000 * 60));

  const duration = {
    hr: Math.floor(total_min / 60),
    min: Math.floor(total_min % 60)
  }
  return duration;
}