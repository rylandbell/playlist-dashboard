import React, { Component } from 'react';

class SelectPlaylistsRow extends Component {
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
    const trClassList = (selectedPlaylist && playlist.id === selectedPlaylist.id) ? 'select-playlists__row select-playlists__row--active' : 'select-playlists__row'
    const spanClassList = playlist.selected ? 'glyphicon glyphicon-ok' : 'glyphicon';

    return (
      <tr className={trClassList} onClick={this.onClick}> 
        <td>{playlist.name}</td>
        <td>
          <span className={spanClassList} />
        </td>
      </tr>
    );
  }
}

export default SelectPlaylistsRow;