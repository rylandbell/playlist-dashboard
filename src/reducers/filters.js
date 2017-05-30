const filtersInitial = [
  {
    name: 'danceability',
    isActive: true,
    isGraphed: true,
    showReferenceLine: false,
    currentValue: [0,1],
  },
  {
    name: 'energy',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
  },
  {
    name: 'valence',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
  },
  {
    name: 'popularity',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
  },
  {
    name: 'acousticness',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
  },
  {
    name: 'instrumentalness',
    isActive: true,
    isGraphed: false,
    showReferenceLine: false,
    currentValue: [0,1],
  },
  // {
  //   name: 'liveness',
  //   isActive: true,
  //   isGraphed: false,
  //   showReferenceLine: false,
  //   currentValue: [0,1],
  // },
];

export const filterValues = (state = filtersInitial, action) => {
  let targetFilter, updatedFilter;
  switch(action.type) {
    case 'UPDATE_FILTER':
      targetFilter = Object.assign({}, state[action.filterIndex]);
      updatedFilter = Object.assign(targetFilter, {currentValue: action.data});
      return [
        ...state.slice(0, action.filterIndex),
        updatedFilter,
        ...state.slice(action.filterIndex + 1)
      ];
    case 'TOGGLE_CHARTED_FEATURE':
      return state.map( (filter, index) => {
        if (index === action.filterIndex) {
          return Object.assign(filter, {showReferenceLine: false, isGraphed: action.newValue})
        } else {
          return Object.assign({}, filter, {showReferenceLine: false});
        }
      });
    case 'START_DRAGGING_FEATURE_SLIDER':
      return state.map( (filter,index) => {
        if (index === action.filterIndex) {
          return Object.assign({}, filter, {showReferenceLine: true, isGraphed: true});
        } else {
          return Object.assign(filter);
        }
      });
    case 'STOP_DRAGGING_FEATURE_SLIDER':
      return state.map( filter => Object.assign({}, filter, {showReferenceLine: false}));
    case 'SELECT_PLAYLIST':
      return state.map( filter => Object.assign(filter, {showReferenceLine: false}) );
    default:
      return state;
  }
}