import React, { Component } from 'react';

class SelectPlaylistsListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handlePlaylistSelect(this.props.playlist, this.props.reduxState.autoSidebarTabSwitch);
  }

  render() {
    const playlist = this.props.playlist;
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;
    const classList = (selectedPlaylist && playlist.id === selectedPlaylist.id) ? "playlists__item list-group-item active" : "playlists__item list-group-item"

    return (
      <a className={classList} onClick={this.onClick}>
        {playlist.name}
      </a>
    );
  }
}

export default SelectPlaylistsListItem;