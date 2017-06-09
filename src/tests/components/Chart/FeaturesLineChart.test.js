import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import FeaturesLineChart from "../../../components/blocks/Chart/FeaturesLineChart";
import { testFeaturesData, testFilteredTracks } from "./test-data";

describe("FeaturesLineChart component", () => {
  const props = {
    animateNextChartDraw: true,
    stopAnimatingChart: () => true,
    features: testFeaturesData,
    filteredTracks: testFilteredTracks,
    hoveredTrackId: "testTrackId",
    mediaType: "small"
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FeaturesLineChart {...props} />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<FeaturesLineChart {...props} />));
    expect(tree).toMatchSnapshot();
  });

  describe("componentWillUpdate", () => {
    xit('should run passed function exactly when animateNextChartDraw is true', () => {
      const wrapper = shallow(<FeaturesLineChart {...props} />);
      expect(wrapper.instance().componentWillUpdate()).toEqual(true);
    });
  });
});
