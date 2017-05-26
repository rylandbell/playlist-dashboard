import React, { Component } from 'react';
import ExploreTracksRegion from './ExploreTracksRegion';
import Sidebar from './Sidebar/Sidebar';
import Instructions from '../../Utilities/Instructions/Instructions';
import Message from '../../Utilities/Message/Message';
import './AuthView.css';

class AuthView extends Component {

  //fetch playlists when AuthView first mounts
  componentDidMount() {
    const state = this.props.reduxState;
    const playlistsLoaded = state.playlists && state.playlists.length > 0;
    const getPlaylistsFailure = state.fetchStatus.getPlaylistsFailure;
    const shouldGetPlaylists = !playlistsLoaded && !getPlaylistsFailure;
    
    if (shouldGetPlaylists) {
      this.props.getPlaylists();
    }
  }
  
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
      dataLoaded: <ExploreTracksRegion {...this.props} />,
      none: <Instructions {...this.props} />
    }

    return (
      <div className="auth-view__wrapper">
        <Sidebar {...this.props} />
        <div className="auth-view__explore-tracks-region">
          {viewEnum[loadingStatus]}
        </div>
      </div>
    );
  }
}

export default AuthView;

