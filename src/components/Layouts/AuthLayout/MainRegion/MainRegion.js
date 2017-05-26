import React, { Component } from 'react';
import ExploreTracksView from './ExploreTracksView';
import Instructions from '../../../Blocks/Instructions/Instructions';
import Message from '../../../Blocks/Message/Message';
import './MainRegion.css';

class MainRegion extends Component {
  
  render() {
    const state = this.props.reduxState;
    const tracksLoaded = state.selectedPlaylistTracks && state.selectedPlaylistTracks.length > 0;
    const featuresLoaded = state.selectedPlaylistAudioFeatures && state.selectedPlaylistAudioFeatures.length > 0;
    const dataLoaded = tracksLoaded && featuresLoaded;
    const fetchPending = state.fetchStatus.getTracksPending || state.fetchStatus.getFeaturesPending;
    const fetchFailure = state.fetchStatus.getTracksFailure || state.fetchStatus.getFeaturesFailure;

    let loadingStatus;
    
    if (fetchPending) {
      loadingStatus = 'pending';
    } else if (fetchFailure) {
      loadingStatus = 'failure';
    } else if (dataLoaded) {
      loadingStatus = 'dataLoaded';
    } else {
      loadingStatus = 'none';
    }

    const viewEnum = {
      pending: <Message classList="big" loading={true} text="Loading tracks data... " {...this.props} />,
      failure: <Message classList="big" error={true} text="Error: failed to load tracks data." {...this.props} />,
      dataLoaded: <ExploreTracksView {...this.props} />,
      none: <Instructions {...this.props} />
    }

    return (
      <div className="main-region">
        {viewEnum[loadingStatus]}
      </div>
    );
  }
}

export default MainRegion;
