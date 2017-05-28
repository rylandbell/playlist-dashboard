import React from 'react';
import { connect } from 'react-redux';

import SelectedTracksCount from './SelectedTracksCount';

import './PlaylistHeading.css';

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    selectedPlaylist: state.selectedPlaylist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const PlaylistHeading = ({userId, selectedPlaylist, filteredTracks, featuresData}) => {
  const playlistOwnerId = selectedPlaylist.owner.id;
  const idMatch = userId === playlistOwnerId;
  return (
    <div>
      <h3 className="playlist-heading__title"> {selectedPlaylist.name}
        {idMatch ? null: <small>&nbsp;by {playlistOwnerId}</small>}
      </h3>
      <SelectedTracksCount featuresData={featuresData} filteredTracks={filteredTracks} />
    </div>
  );
}

const PlaylistHeadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistHeading)

export default PlaylistHeadingContainer;

