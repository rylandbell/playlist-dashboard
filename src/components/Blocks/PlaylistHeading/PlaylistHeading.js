import React from 'react';
import { connect } from 'react-redux';

import SelectedTracksCount from './SelectedTracksCount';

import './PlaylistHeading.css';

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    selectedPlaylist: state.selectedPlaylist,
    tracks: state.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const PlaylistHeading = ({userId, selectedPlaylist, filteredTracks, tracks}) => {
  const playlistOwnerId = selectedPlaylist.ownerId;
  const idMatch = userId === playlistOwnerId;
  return (
    <div>
      <h3 className="playlist-heading__title"> {selectedPlaylist.name}
        {idMatch ? null: <small>&nbsp;by {playlistOwnerId}</small>}
      </h3>
      <SelectedTracksCount tracks={tracks} filteredTracks={filteredTracks} />
    </div>
  );
}

const PlaylistHeadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistHeading)

export default PlaylistHeadingContainer;

