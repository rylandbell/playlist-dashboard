import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import ChartContainer, { Chart } from "../Chart";
import { testFeaturesData, testFilteredTracks } from "./test-data";

describe("Chart component", () => {
  const props = {
    animateNextChartDraw: true,
    features: testFeaturesData,
    filteredTracks: testFilteredTracks,
    hoveredTrackId: "testTrackId",
    mediaType: "small"
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Chart {...props} />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<Chart {...props} />));
    expect(tree).toMatchSnapshot();
  });
});

// describe("ChartContainer component", () => {
//   const props = {
//     animateNextChartDraw: true,
//     features: testFeaturesData,
//     filteredTracks: testFilteredTracks,
//     hoveredTrackId: "testTrackId",
//     mediaType: "small"
//   };

//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<ChartContainer {...props} />, div);
//   });

//   it("shallow render matches snapshot", () => {
//     const tree = toJson(shallow(<ChartContainer {...props} />));
//     expect(tree).toMatchSnapshot();
//   });
// });