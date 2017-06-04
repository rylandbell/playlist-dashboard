import { createSelector } from 'reselect';
import { filterByFeatures } from '../helper';

const getTracks = state => state.tracks;
const getFilters = state => state.filterValues;

export const getFilteredTracks = createSelector(
  [getTracks, getFilters],
  (tracks, filters) =>
    tracks.filter((track, index) => filterByFeatures(index, tracks, filters))
);
