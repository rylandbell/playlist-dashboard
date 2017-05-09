export {filterByFeatures};

function filterByFeatures(track, index) {
  const features = this.props.reduxState.audioFeaturesData;
  const filters = this.props.reduxState.filters;

  //don't do any filtering before features data loads
  if (!features || features.length < 1) {
    return true;
  }

  const filterBooleans = [];
  for (let key in filters) {
    if (filters.hasOwnProperty(key)) {
      let passesFilter = features[index][key] >= filters[key][0] && features[index][key] <= filters[key][1];
      filterBooleans.push(passesFilter);
    }
  }

  const passesFilters = filterBooleans.reduce(
    (accumulator, currentValue) => accumulator && currentValue,
    true
  )
  return passesFilters;
}