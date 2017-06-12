import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import SelectedTracksCount from "../SelectedTracksCount";
import { testFilteredTracks, testTracks } from "./test-data";

describe("SelectedTracksCount component", () => {
  const testProps = {
    filteredTracks: testFilteredTracks,
    tracks: testTracks
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SelectedTracksCount {...testProps} />, div);
  });

  it('shallow render matches snapshot', () => {
    const tree = toJson(shallow(<SelectedTracksCount {...testProps} />));
    expect(tree).toMatchSnapshot();
  });
});
