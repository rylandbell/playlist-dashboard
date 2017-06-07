//combine unchanging data about features with their current state

import { createSelector } from 'reselect';
import { staticFeaturesData } from '../constants/staticFeaturesData';

const getFeaturesFromStore = state => state.features;

export const getFeaturesData = createSelector([getFeaturesFromStore], stateFeatures => {
  return stateFeatures.map(stateFeature => {
    // find the corresponding feature in staticFeaturesData (look for name match):
    const match = staticFeaturesData.find(
      feature => feature.name === stateFeature.name
    );
    return { ...stateFeature, ...match };
  });
});
