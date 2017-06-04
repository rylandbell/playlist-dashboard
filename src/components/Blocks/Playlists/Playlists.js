import React from 'react';
import { connect } from 'react-redux';

import { selectPlaylist } from '../../../actions/actions';
import { getTracks } from '../../../actions/api';
import Message from '../../blocks/Message/Message';
import SelectPlaylistsListGroup from './SelectPlaylistsListGroup';
import './Playlists.css';

const mapStateToProps = state => {
  return {
    fetchStatus: state.fetchStatus,
    playlists: state.playlists,
    selectedPlaylist: state.selectedPlaylist,
    autoSidebarTabSwitch: state.ui.autoSidebarTabSwitch,
    badAuthToken: state.auth.badAuthToken,
    mediaType: state.browser.mediaType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePlaylistSelect: (playlist, forceTabSwitch, mediaType) => {
      const smallScreen = mediaType === 'extraSmall' || mediaType === 'small';
      const shouldTabSwitch = smallScreen || forceTabSwitch;
      dispatch(selectPlaylist(playlist, shouldTabSwitch));
      dispatch(getTracks(playlist.ownerId, playlist.id));
    }
  };
};

const Playlists = ({
  fetchStatus,
  playlists,
  selectedPlaylist,
  autoSidebarTabSwitch,
  badAuthToken,
  mediaType,
  handlePlaylistSelect
}) => {
  if (fetchStatus.getPlaylistsPending) {
    return <Message loading={true} text="Loading playlist data... " />;
  } else if (badAuthToken) {
    return <Message text="Refreshing authorization token..." />;
  } else if (fetchStatus.getPlaylistsFailure) {
    return (
      <Message
        error={true}
        text="Error loading playlist data. Check your internet connection and try again."
      />
    );
  }

  return (
    <div className="playlists__pane">
      <SelectPlaylistsListGroup
        playlists={playlists}
        selectedPlaylist={selectedPlaylist}
        autoSidebarTabSwitch={autoSidebarTabSwitch}
        handlePlaylistSelect={handlePlaylistSelect}
        mediaType={mediaType}
      />
    </div>
  );
};

const PlaylistsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Playlists
);

export default PlaylistsContainer;
