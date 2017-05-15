import React, { Component } from 'react';
import TracksTable from './TracksTable';
import './TracksPane.css';

class TracksPane extends Component {
  render() {
    const fetchStatus = this.props.reduxState.fetchStatus;
    const loadingData = fetchStatus.getTracksPending || fetchStatus.getFeaturesPending;
    return (
      <div className="col-xs-12 tracks__pane">
        <div className="row">
          {loadingData ? 
            <h4 className="text-center">Loading tracks data...</h4> :
            <div className="col-xs-12">
              <h4>{this.props.reduxState.selectedPlaylist.name}</h4>
              <TracksTable {...this.props} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default TracksPane;