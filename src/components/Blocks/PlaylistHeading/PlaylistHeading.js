import React, { Component } from 'react';
import SelectedTracksCount from './SelectedTracksCount';

import './PlaylistHeading.css';

class PlaylistHeading extends Component {
  render() {
    const userId = this.props.reduxState.userId;
    const playlistOwnerId = this.props.reduxState.selectedPlaylist.owner.id;
    const idMatch = userId === playlistOwnerId;
    return (
      <div>
        <h3 className="playlist-heading__title"> {this.props.reduxState.selectedPlaylist.name}
          {idMatch ? null: <small>&nbsp;by {playlistOwnerId}</small>}
        </h3>
        <SelectedTracksCount {...this.props} />
      </div>
    );
  }
}

export default PlaylistHeading;

