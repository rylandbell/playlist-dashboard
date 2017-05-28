import React, { Component } from 'react';

class SelectPlaylistsListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handlePlaylistSelect(this.props.accessToken, this.props.playlist, this.props.autoSidebarTabSwitch);
  }

  render() {
    const playlist = this.props.playlist;
    const selectedPlaylist = this.props.selectedPlaylist;
    const playlistIsSelected = selectedPlaylist && (playlist.id === selectedPlaylist.id);

    const classList = playlistIsSelected ?
      "playlists__item list-group-item active" :
      "playlists__item list-group-item";

    return (
      <a className={classList} onClick={this.onClick}>
        {playlist.name}
      </a>
    );
  }
}

export default SelectPlaylistsListItem;