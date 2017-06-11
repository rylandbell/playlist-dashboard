import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Message from "../Message";

describe('Message component', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Message />, div);
  });

  it('shallow render matches snapshot', () => {
    const props = {
      classList: "test class list",
      text: "Test message text",
      success: true,
      error: true,
      loading: true
    };
    const tree = toJson(shallow(<Message {...props} />));
    expect(tree).toMatchSnapshot();
  });
});