import React, { Component } from 'react';

class SelectPlaylistsListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handlePlaylistSelect(this.props.playlist);
  }

  render() {
    const playlist = this.props.playlist;
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;
    const trClassList = (selectedPlaylist && playlist.id === selectedPlaylist.id) ? 'playlists__row playlists__row--active' : 'playlists__row'
    const spanClassList = playlist.selected ? 'glyphicon glyphicon-ok' : 'glyphicon';

    return (
      <a className="list-group-item playlists__item" onClick={this.onClick}>
        {playlist.name}
      </a>
    );
  }
}

export default SelectPlaylistsListItem;