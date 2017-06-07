export function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  return hashParams;
}

export function getPlaylistDuration(tracksArray) {
  const total_ms = tracksArray.reduce((accumulator, track) => {
    return accumulator + track.duration_ms;
  }, 0);

  const total_min = Math.round(total_ms / (1000 * 60));

  const duration = {
    hr: Math.floor(total_min / 60),
    min: Math.floor(total_min % 60)
  };
  return duration;
}

//takes a track, compares its audio features and the current feature filter values, returns true if the track passes all filters
export function filterByFeatures(trackIndex, tracks, features) {
  const passesAllFeatureFilters = features.reduce((accumulator, feature) => {
    if (!feature.isActive) {
      return true;

      //return false if the track doesn't have a value for the given feature
    } else if (tracks[trackIndex][feature.name] === undefined) {
      return false;
    }

    let featureName = feature.name;
    let passesFeatureFilter =
      tracks[trackIndex][featureName] >= feature.currentValue[0] &&
      tracks[trackIndex][featureName] <= feature.currentValue[1];
    return passesFeatureFilter && accumulator;
  }, true);

  return passesAllFeatureFilters;
}
