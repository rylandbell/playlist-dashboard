import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import MainRegion from './MainRegion/MainRegion';
import './AuthLayout.css';

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
          tracks={this.props.tracks}
          audioFeatures={this.props.audioFeatures}
          fullState={this.props.fullState}
        />
      </div>
    );
  }
}

export default AuthLayout;
