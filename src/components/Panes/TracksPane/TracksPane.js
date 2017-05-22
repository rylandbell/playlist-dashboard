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
            null :
            <div className="col-xs-12">
              {/*<h3 className="tracks__heading"> {this.props.reduxState.selectedPlaylist.name} </h3>*/}
              <TracksTable {...this.props} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default TracksPane;