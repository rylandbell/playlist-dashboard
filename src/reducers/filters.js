const filtersInitial = [
  {
    name: 'danceability',
    isActive: true,
    isGraphed: true,
    isDim: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'energy',
    isActive: true,
    isGraphed: false,
    isDim: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'valence',
    isActive: true,
    isGraphed: false,
    isDim: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'popularity',
    isActive: true,
    isGraphed: false,
    isDim: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'acousticness',
    isActive: true,
    isGraphed: false,
    isDim: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'instrumentalness',
    isActive: true,
    isGraphed: false,
    isDim: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  }
  // {
  //   name: 'liveness',
  //   isActive: true,
  //   isGraphed: false,
  // isDim: false,
  //   showReferenceLine: false,
  //   currentValue: [0,1],
  // },
];

export const filterValues = (state = filtersInitial, action) => {
  let targetFilter, updatedFilter;
  switch (action.type) {
    case 'UPDATE_FILTER':
      targetFilter = state[action.filterIndex];
      updatedFilter = { ...targetFilter, currentValue: action.data };
      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    case 'TOGGLE_CHARTED_FEATURE':
      return state.map((filter, index) => {
        if (index === action.filterIndex) {
          return { ...filter, isGraphed: action.newValue };
        } else {
          return filter;
        }
      });
    case 'START_DRAGGING_FEATURE_SLIDER':
      return state.map((filter, index) => {
        if (index === action.filterIndex) {
          return { ...filter, showReferenceLine: true, isGraphed: true };
        } else {
          return { ...filter, isDim: true };
        }
      });
    case 'STOP_DRAGGING_FEATURE_SLIDER':
      return state.map(filter => ({
        ...filter,
        showReferenceLine: false,
        isDim: false
      }));
    case 'SELECT_PLAYLIST':
      return state.map(filter => ({ ...filter, showReferenceLine: false }));
    default:
      return state;
  }
};
