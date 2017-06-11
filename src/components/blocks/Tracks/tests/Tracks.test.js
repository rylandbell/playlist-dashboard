import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Tracks } from "../Tracks";
import { testFeaturesData, testFilteredTracks } from "./test-data";

describe("Tracks component", () => {
  const props = {
  fetchStatus: {getTracksPending: false, getFeaturesPending: false},
  features: testFeaturesData,
  filteredTracks: testFilteredTracks,
  handleTrackRowHover: () => {},
  handleMouseLeavesTracksTable: () => {},
  handleColumnHeadingClick: () => {}
};

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tracks {...props} />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<Tracks {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
