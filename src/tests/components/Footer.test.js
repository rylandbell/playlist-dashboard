import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Footer from "../../components/blocks/Footer/Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
  });

  it("shallow render matches snapshot", () => {
    const tree = toJson(shallow(<Footer />));
    expect(tree).toMatchSnapshot();
  });
});
