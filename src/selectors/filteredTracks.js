import { createSelector } from "reselect";
import { filterByFeatures } from "../helper";

const getTracks = state => state.tracks;
const getFilters = state => state.filterValues;

const sortByFeatures = (trackA, trackB, sortedFeature) => {
  const sortedFeatureName = sortedFeature.name;
  const sortedFeatureOrder = sortedFeature.sortBy;
 
  if (sortedFeatureOrder === 'ascending') {
    return trackA[sortedFeatureName] - trackB[sortedFeatureName];
  } else {
    return trackB[sortedFeatureName] - trackA[sortedFeatureName];
  } 
};

export const getFilteredTracks = createSelector(
  [getTracks, getFilters],
  (tracks, filters) => {
    const sortedFeature = filters.find(feature => feature.sortBy);
    if (sortedFeature) {
      return tracks
      .filter((track, index) => filterByFeatures(index, tracks, filters))
      .sort((trackA, trackB) => sortByFeatures(trackA, trackB, sortedFeature))
    } else {
      return tracks
      .filter((track, index) => filterByFeatures(index, tracks, filters))
    }
  }
);
