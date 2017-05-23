import React, { Component } from 'react';
import TracksTable from './TracksTable';
import './TracksPane.css';

class TracksPane extends Component {
  render() {
    const fetchStatus = this.props.reduxState.fetchStatus;
    const loadingData = fetchStatus.getTracksPending || fetchStatus.getFeaturesPending;
    
    return (
      <div className="tracks__pane">
        {loadingData ? 
          null :
          <TracksTable {...this.props} />
        }
      </div>
    );
  }
}

export default TracksPane;