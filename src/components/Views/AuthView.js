import React, { Component } from 'react';
import ExploreTracks from './ExploreTracks';
import Sidebar from '../Sidebar/Sidebar';
import Message from '../Message';
import './AuthView.css';

class AuthView extends Component {
  render() {
    const state = this.props.reduxState;
    const tracksLoaded = state.selectedPlaylistTracks && state.selectedPlaylistTracks.length > 0;
    const featuresLoaded = state.audioFeaturesData && state.audioFeaturesData.length > 0;
    const dataLoaded = tracksLoaded && featuresLoaded;
    const fetchPending = state.fetchStatus.getTracksPending || state.fetchStatus.getFeaturesPending;

    let loadingStatus;
    
    if (fetchPending) {
      loadingStatus = 'pending';
    } else if (dataLoaded) {
      loadingStatus = 'dataLoaded';
    } else {
      loadingStatus = 'none';
    }

    const viewEnum = {
      pending: <Message classList="big" loading={true} text="Loading tracks data... " {...this.props} />,
      dataLoaded: <ExploreTracks {...this.props} />,
      none: <h4> Choose a playlist. </h4>
    }

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 not-sidebar">
          {viewEnum[loadingStatus]}
          
        </div>
      </div>
    );
  }
}

export default AuthView;

