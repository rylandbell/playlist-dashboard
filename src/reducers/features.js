const initialFeatureValues = [
  {
    name: 'danceability',
    isActive: true,
    isGraphed: true,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'energy',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'valence',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'popularity',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'acousticness',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'instrumentalness',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
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

export const features = (state = initialFeatureValues, action) => {
  let targetFeature, updatedFeature;
  switch (action.type) {
    case 'UPDATE_FEATURE_FILTER':
      targetFeature = state[action.featureIndex];
      updatedFeature = { ...targetFeature, currentValue: action.data };
      return [
        ...state.slice(0, action.featureIndex),
        updatedFeature,
        ...state.slice(action.featureIndex + 1)
      ];
    case 'TOGGLE_CHARTED_FEATURE':
      return state.map((feature, index) => {
        if (index === action.featureIndex) {
          return { ...feature, isGraphed: action.newValue };
        } else {
          return feature;
        }
      });
    case 'START_DRAGGING_FEATURE_SLIDER':
      return state.map((feature, index) => {
        if (index === action.featureIndex) {
          return { ...feature, showReferenceLine: true, isGraphed: true };
        } else {
          return { ...feature, isDim: true };
        }
      });
    case 'STOP_DRAGGING_FEATURE_SLIDER':
      return state.map(feature => ({
        ...feature,
        showReferenceLine: false,
        isDim: false
      }));
    case 'SORT_BY_FEATURE':
      return state.map(feature => {
        if (feature.name === action.payload.featureName) {
          
          // cycle through 'ascending', 'descending', false:
          let newSortByValue
          if (feature.sortBy === 'ascending') {
            newSortByValue = 'descending';
          } else if (feature.sortBy === 'descending') {
            newSortByValue = false;
          } else {
            newSortByValue = 'ascending';
          }

          return {...feature, sortBy: newSortByValue};

        //set all other features to unsorted:
        } else {
          return {...feature, sortBy: false};
        }
      });
    default:
      return state;
  }
};
