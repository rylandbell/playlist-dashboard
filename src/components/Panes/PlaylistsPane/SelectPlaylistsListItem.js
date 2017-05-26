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
    const classList = (selectedPlaylist && playlist.id === selectedPlaylist.id) ? "list-group-item playlists__item active" : "list-group-item playlists__item"

    return (
      <a className={classList} onClick={this.onClick}>
        {playlist.name}
      </a>
    );
  }
}

export default SelectPlaylistsListItem;