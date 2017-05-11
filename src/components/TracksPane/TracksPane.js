import React, { Component } from 'react';
import TracksTable from './TracksTable';
import PlaylistActions from './PlaylistActions';
import './TracksPane.css';

class TracksPane extends Component {
  render() {
    return (
      <div className="col-xs-12 tracks__pane">
        <div className="row">
          <div className="col-xs-12">
            <PlaylistActions {...this.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TracksTable {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default TracksPane;