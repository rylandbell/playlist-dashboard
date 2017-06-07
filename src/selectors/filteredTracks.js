import { createSelector } from "reselect";
import { filterByFeatures } from "../helper";

const getTracks = state => state.tracks;
const getFeaturesData = state => state.features;

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
  [getTracks, getFeaturesData],
  (tracks, features) => {
    const sortedFeature = features.find(feature => feature.sortBy);
    if (sortedFeature) {
      return tracks
      .filter((track, index) => filterByFeatures(index, tracks, features))
      .sort((trackA, trackB) => sortByFeatures(trackA, trackB, sortedFeature))
    } else {
      return tracks
      .filter((track, index) => filterByFeatures(index, tracks, features))
    }
  }
);
