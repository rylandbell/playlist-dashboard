import * as reducers from "../../reducers/fetchStatus";

const pendingReducers = [
  { name: "getPlaylistsPending", actionPrefix: "GET_PLAYLISTS" },
  { name: "getTracksPending", actionPrefix: "GET_TRACKS" },
  { name: "getFeaturesPending", actionPrefix: "GET_FEATURES" },
  { name: "createPlaylistPending", actionPrefix: "CREATE_PLAYLIST" },
  { name: "addTracksToPlaylistPending", actionPrefix: "ADD_TRACKS_TO_PLAYLIST" }
];

const successReducers = [
  { name: "getPlaylistsSuccess", actionPrefix: "GET_PLAYLISTS" },
  { name: "getTracksSuccess", actionPrefix: "GET_TRACKS" },
  { name: "getFeaturesSuccess", actionPrefix: "GET_FEATURES" },
  { name: "createPlaylistSuccess", actionPrefix: "CREATE_PLAYLIST" },
  { name: "addTracksToPlaylistSuccess", actionPrefix: "ADD_TRACKS_TO_PLAYLIST" }
];

const failureReducers = [
  { name: "getPlaylistsFailure", actionPrefix: "GET_PLAYLISTS" },
  { name: "getTracksFailure", actionPrefix: "GET_TRACKS" },
  { name: "getFeaturesFailure", actionPrefix: "GET_FEATURES" },
  { name: "createPlaylistFailure", actionPrefix: "CREATE_PLAYLIST" },
  { name: "addTracksToPlaylistFailure", actionPrefix: "ADD_TRACKS_TO_PLAYLIST" }
];

describe("fetchStatus reducers", () => {
  pendingReducers.forEach(reducer => {
    describe(reducer.name, () => {
      const initState = reducers[reducer.name](undefined, { type: "INIT" });

      it("should return true for the corresponding pending action", () => {
        const action = { type: `${reducer.actionPrefix}_PENDING` };
        expect(reducers[reducer.name](initState, action)).toEqual(true);
      });

      it("should return false for the corresponding success action", () => {
        const action = { type: `${reducer.actionPrefix}_SUCCESS` };
        expect(reducers[reducer.name](initState, action)).toEqual(false);
      });

      it("should return false for the corresponding failure action", () => {
        const action = { type: `${reducer.actionPrefix}_FAILURE` };
        expect(reducers[reducer.name](initState, action)).toEqual(false);
      });
    });
  });

  successReducers.forEach(reducer => {
    describe(reducer.name, () => {
      const initState = reducers[reducer.name](undefined, { type: "INIT" });

      it("should return false for the corresponding pending action", () => {
        const action = { type: `${reducer.actionPrefix}_PENDING` };
        expect(reducers[reducer.name](initState, action)).toEqual(false);
      });

      it("should return true for the corresponding success action", () => {
        const action = { type: `${reducer.actionPrefix}_SUCCESS` };
        expect(reducers[reducer.name](initState, action)).toEqual(true);
      });

      it("should return false for the corresponding failure action", () => {
        const action = { type: `${reducer.actionPrefix}_FAILURE` };
        expect(reducers[reducer.name](initState, action)).toEqual(false);
      });
    });
  });

  failureReducers.forEach(reducer => {
    describe(reducer.name, () => {
      const initState = reducers[reducer.name](undefined, { type: "INIT" });

      it("should return false for the corresponding pending action", () => {
        const action = { type: `${reducer.actionPrefix}_PENDING` };
        expect(reducers[reducer.name](initState, action)).toEqual(false);
      });

      it("should return false for the corresponding success action", () => {
        const action = { type: `${reducer.actionPrefix}_SUCCESS` };
        expect(reducers[reducer.name](initState, action)).toEqual(false);
      });

      it("should return true for the corresponding failure action", () => {
        const action = { type: `${reducer.actionPrefix}_FAILURE` };
        expect(reducers[reducer.name](initState, action)).toEqual(true);
      });
    });
  });
});