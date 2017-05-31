import React from 'react';
import { connect } from 'react-redux';

import { selectPlaylist, getTracks } from '../../../actions';
import Message from '../../Blocks/Message/Message';
import SelectPlaylistsListGroup from './SelectPlaylistsListGroup';
import './Playlists.css';

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
    fetchStatus: state.fetchStatus,
    playlists: state.playlists,
    selectedPlaylist: state.selectedPlaylist,
    autoSidebarTabSwitch: state.ui.autoSidebarTabSwitch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlaylistSelect: (accessToken, playlist, forceTabSwitch) => {
      dispatch(selectPlaylist(playlist, forceTabSwitch));
      dispatch(getTracks(playlist.ownerId, playlist.id));
    }
  }
}

const Playlists = ({accessToken, fetchStatus, playlists, selectedPlaylist, autoSidebarTabSwitch, handlePlaylistSelect}) => {

  if (fetchStatus.getPlaylistsPending) { 
    return <Message loading={true} text="Loading playlist data... " />;
  } else if (fetchStatus.getPlaylistsFailure) {
    return  <Message error={true} text="Error loading playlist data. Check your internet connection and try again." />;
  }

  return (
    <div className="playlists__pane">
      <SelectPlaylistsListGroup 
        accessToken={accessToken} 
        playlists={playlists}
        selectedPlaylist={selectedPlaylist}
        autoSidebarTabSwitch={autoSidebarTabSwitch}
        handlePlaylistSelect={handlePlaylistSelect}  />
    </div>
  );
}

const PlaylistsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists)

export default PlaylistsContainer;