import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import TracksTableHeadCell from "../TracksTableHeadCell";
import { testFeaturesData, testFilteredTracks } from "./test-data";

describe("TracksTableHeadCell component", () => {
  const props = {
  feature: testFeaturesData[0],
  handleColumnHeadingClick: () => {}
};

  it("renders without crashing", () => {
    const parentNode = document.createElement("tr");
    ReactDOM.render(<TracksTableHeadCell {...props} />, parentNode);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<TracksTableHeadCell {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
