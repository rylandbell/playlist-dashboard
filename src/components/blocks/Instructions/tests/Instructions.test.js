import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Instructions from "../Instructions";

describe("Instructions component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Instructions />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<Instructions />));
    expect(tree).toMatchSnapshot();
  });
});
