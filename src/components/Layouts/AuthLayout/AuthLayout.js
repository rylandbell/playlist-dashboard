import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import MainRegion from './MainRegion/MainRegion';
import './AuthLayout.css';

class AuthLayout extends Component {

  //fetch playlists when AuthLayout first mounts
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
    return (
      <div className="auth-layout__container">
        <Sidebar {...this.props} />
        <MainRegion {...this.props} />
      </div>
    );
  }
}

export default AuthLayout;

