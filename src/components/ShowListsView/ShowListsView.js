import React, { Component } from 'react';
import './ShowListsView.css';

class ShowListsView extends Component {
  handleClick() {
    // window.location = authURI;
  }

  componentDidMount() {
    console.log('mount up!');
  }

  render() {
    return (
      <div className="ShowListsView">
        <h3>I found an access token!</h3>
      </div>
    );
  }
}

export default ShowListsView;