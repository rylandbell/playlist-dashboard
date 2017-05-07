import React, { Component } from 'react';

class SelectPlaylistsRow extends Component {
  render() {
    return (
      <tr className="select-playlists__row"> 
        <td>{this.props.name}</td>
        <td><span className="glyphicon glyphicon-plus" /></td>
      </tr>
    );
  }
}

export default SelectPlaylistsRow;