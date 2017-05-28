import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCalls from '../../../fetchCalls';

import Sidebar from './Sidebar/Sidebar';
import MainRegion from './MainRegion/MainRegion';
import './AuthLayout.css';

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
    fetchStatus: state.fetchStatus,
    accessToken: state.accessToken,
    activeSidebarTab: state.activeSidebarTab,
    badAuthToken: state.badAuthToken,
    selectedPlaylistTracks: state.selectedPlaylistTracks,
    selectedPlaylistAudioFeatures: state.selectedPlaylistAudioFeatures,
    fullState: state
  }
}

const mapDispatchToProps = (dispatch, accessToken) => {
  return {
    getPlaylists: (accessToken) => {fetchCalls.getPlaylists(dispatch, accessToken)}
  }
}

class AuthLayout extends Component {

  //fetch playlists when AuthLayout first mounts
  componentDidMount() {
    const playlistsLoaded = this.props.playlists && this.props.playlists.length > 0;
    const getPlaylistsFailure = this.props.fetchStatus.getPlaylistsFailure;
    const shouldGetPlaylists = !playlistsLoaded && !getPlaylistsFailure;
    
    if (shouldGetPlaylists) {
      this.props.getPlaylists(this.props.accessToken);
    }
  }
  
  render() {
    return (
      <div className="auth-layout__container">
        <Sidebar activeSidebarTab={this.props.activeSidebarTab} />
        <MainRegion 
          badAuthToken={this.props.badAuthToken}
          fetchStatus={this.props.fetchStatus}
          selectedPlaylistTracks={this.props.selectedPlaylistTracks}
          selectedPlaylistAudioFeatures={this.props.selectedPlaylistAudioFeatures}
          fullState={this.props.fullState}
        />
      </div>
    );
  }
}

const AuthLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLayout)

export default AuthLayoutContainer;
