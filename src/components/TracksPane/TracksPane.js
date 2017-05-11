import React, { Component } from 'react';
import TracksTable from './TracksTable';
import './TracksPane.css';

class TracksPane extends Component {
  render() {
    return (
      <div className="col-xs-12 tracks__pane">
        <div className="row">
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h4>{this.props.reduxState.selectedPlaylist.name}</h4>
            <TracksTable {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default TracksPane;