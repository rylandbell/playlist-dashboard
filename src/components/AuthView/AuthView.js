import React, { Component } from 'react';
import ExploreTracksRegion from './ExploreTracksRegion';
import Sidebar from './Sidebar/Sidebar';
import Message from '../Message';
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
      dataLoaded: <ExploreTracksRegion {...this.props} />,
      none: <div className="lead"> Select a playlist to get started. </div>
    }

    return (
      <div className="auth-view__wrapper">
        <div className="container-fluid">
          <div className="row">
            <Sidebar {...this.props} />
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 auth-view__explore-tracks-region">
              {viewEnum[loadingStatus]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthView;

