import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';
import MainRegion from './MainRegion/MainRegion';
import './AuthLayout.css';

class AuthLayout extends Component {

  //fetch playlists when AuthLayout first mounts
  componentDidMount() {
    const {getPlaylistsSuccess, getPlaylistsPending, getPlaylistsFailure} = this.props.fetchStatus;

    //only fetch if no prior attempt has been made
    const shouldGetPlaylists = !getPlaylistsSuccess && !getPlaylistsFailure && !getPlaylistsPending;
    
    if (shouldGetPlaylists) {
      this.props.getPlaylists();
    }
  }
  
  render() {
    return (
      <div className="auth-layout__container">
        <Sidebar 
          activeSidebarTab={this.props.activeSidebarTab}
          mediaType={this.props.mediaType}
        />
        <MainRegion 
          badAuthToken={this.props.badAuthToken}
          fetchStatus={this.props.fetchStatus}
          tracks={this.props.tracks}
          filteredTracks={this.props.filteredTracks}
        />
      </div>
    );
  }
}

export default AuthLayout;
