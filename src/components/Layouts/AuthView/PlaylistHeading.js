import React, { Component } from 'react';

class PlaylistHeading extends Component {
  render() {
    const userId = this.props.reduxState.userId;
    const playlistOwnerId = this.props.reduxState.selectedPlaylist.owner.id;
    const idMatch = userId === playlistOwnerId;
    return (
      <h3 className="tracks__heading"> {this.props.reduxState.selectedPlaylist.name}
        {idMatch ? null: <small>&nbsp;by {playlistOwnerId}</small>}
      </h3>
    );
  }
}

export default PlaylistHeading;

