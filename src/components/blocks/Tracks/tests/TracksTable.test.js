import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import TracksTable from "../TracksTable";
import { testFeaturesData, testFilteredTracks } from "./test-data";

describe("TracksTable component", () => {
  const props = {
  features: testFeaturesData,
  filteredTracks: testFilteredTracks,
  handleTrackRowHover: () => {},
  handleMouseLeavesTracksTable: () => {},
  handleColumnHeadingClick: () => {}
};

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TracksTable {...props} />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<TracksTable {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
