import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {PlaylistHeading} from "../PlaylistHeading";
import {testFilteredTracks, testTracks, testSelectedPlaylist} from './test-data';

describe('PlaylistHeading component', () => {
  const testProps = {
  userId: 'abc',
  selectedPlaylist: testSelectedPlaylist,
  filteredTracks: testFilteredTracks,
  tracks: testTracks
}
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PlaylistHeading {...testProps} />, div);
  });

  it('shallow render matches snapshot', () => {
    const tree = toJson(shallow(<PlaylistHeading {...testProps} />));
    expect(tree).toMatchSnapshot();
  });
});