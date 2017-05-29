import { createSelector } from 'reselect';
import { filterByFeatures } from '../helper';

const getTracks = (state) => state.tracks;
const getFilters = (state) => state.filters;

export const getFilteredTracks = createSelector(
  [ getTracks, getFilters ],
  (tracks, filters) => {
    return tracks.filter((track, index) => filterByFeatures.bind(this)(index, tracks, filters));
    }
)
