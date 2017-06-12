import deepFreeze from "deep-freeze";
import * as reducers from "../features";

describe("Features reducers", () => {
  const initState = reducers.features(undefined, {
    type: "INIT"
  });

  it("should update filter value for a single feature with UPDATE_FEATURE_FILTER actions", () => {
    const action = {
      type: "UPDATE_FEATURE_FILTER",
      featureIndex: 0,
      data: [0.1, 0.2]
    };

    deepFreeze(initState);
    deepFreeze(action);

    expect(reducers.features(initState, action)).toMatchSnapshot();
  });

  it("should update isCharted value for a single feature with TOGGLE_CHARTED_FEATURE actions", () => {
    const action = {
      type: "TOGGLE_CHARTED_FEATURE",
      featureIndex: 2,
      newValue: true
    };

    deepFreeze(initState);
    deepFreeze(action);

    expect(reducers.features(initState, action)).toMatchSnapshot();
  });

  it("should showReferenceLine for a single feature, and set all other featuers to isDim, with START_DRAGGING_FEATURE_SLIDER actions", () => {
    const action = {
      type: "START_DRAGGING_FEATURE_SLIDER",
      featureIndex: 4
    };

    deepFreeze(initState);
    deepFreeze(action);

    expect(reducers.features(initState, action)).toMatchSnapshot();
  });

  it("should set all isDim and showReferenceLine values to false for a single feature with STOP_DRAGGING_FEATURE_SLIDER actions", () => {
    //first send a START_DRAGGING action to update the state
    const action1 = {
      type: "START_DRAGGING_FEATURE_SLIDER",
      featureIndex: 4
    };
    const draggingState = reducers.features(initState, action1);

    const action2 = {
      type: "STOP_DRAGGING_FEATURE_SLIDER"
    };

    deepFreeze(draggingState);
    deepFreeze(action2);

    expect(reducers.features(draggingState, action2)).toMatchSnapshot();
  });

  it('feature\'s sortBy value should go from false to \"ascending\" for SORT_BY_FILTER actions', () => {
    const action = {
      type: "SORT_BY_FEATURE",
      payload: {
        featureName: 'energy'
      }
    };

    deepFreeze(initState);
    deepFreeze(action);

    expect(reducers.features(initState, action)).toMatchSnapshot();
  });

  it('feature\'s sortBy value should go from \"ascending\" to \"descending\" for SORT_BY_FILTER actions', () => {
    const action = {
      type: "SORT_BY_FEATURE",
      payload: {
        featureName: 'energy'
      }
    };

    //apply the action once before testing to set sortBy to "ascending";
    const ascendingState = reducers.features(initState, action);
    deepFreeze(ascendingState);
    deepFreeze(action);

    expect(reducers.features(ascendingState, action)).toMatchSnapshot();
  });

  it('feature\'s sortBy value should go from \"descending\" to false for SORT_BY_FILTER actions', () => {
    const action = {
      type: "SORT_BY_FEATURE",
      payload: {
        featureName: 'energy'
      }
    };

    //apply the action twice before testing to set sortBy to "ascending";
    const ascendingState = reducers.features(initState, action);
    const descendingState = reducers.features(ascendingState, action);
    deepFreeze(descendingState);
    deepFreeze(action);

    expect(reducers.features(descendingState, action)).toMatchSnapshot();
  });

  it('features not included in payload should have sortBy values set to false for SORT_BY_FILTER actions', () => {
    const action1 = {
      type: "SORT_BY_FEATURE",
      payload: {
        featureName: 'energy'
      }
    };
    const sortedState = reducers.features(initState, action1);

    const action2 = {
      type: "SORT_BY_FEATURE",
      payload: {
        featureName: 'popularity'
      }
    };

    deepFreeze(sortedState);
    deepFreeze(action2);

    expect(reducers.features(sortedState, action2)).toMatchSnapshot();
  });
});
