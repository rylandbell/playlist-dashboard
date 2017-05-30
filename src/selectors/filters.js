//combine unchanging data about filters with their current state

import { createSelector } from 'reselect';
import { initialFilters } from '../constants/initialFilters';

const getFilterValues = (state) => state.filterValues;

export const getFilters = createSelector(
  [ getFilterValues ],
  (stateFilters) => {
    return stateFilters.map(stateFilter => {

      // find the corresponding filter in initialFilters (look for name match):
      const match = initialFilters.find(initialFilter => initialFilter.name === stateFilter.name);
      return {...stateFilter, ...match};
    });
  }
)