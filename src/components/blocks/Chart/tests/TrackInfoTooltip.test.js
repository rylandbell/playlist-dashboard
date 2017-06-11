import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import TrackInfoTooltip from "../TrackInfoTooltip";

describe("TrackInfoTooltip component", () => {
  const props = {
    payload: [
      {
        payload: { name: "testName" }
      }
    ]
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TrackInfoTooltip {...props} />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<TrackInfoTooltip {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
