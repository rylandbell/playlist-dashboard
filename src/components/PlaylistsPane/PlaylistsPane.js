import React, { Component } from 'react';
import SelectPlaylistsTable from './SelectPlaylistsTable';
import './PlaylistsPane.css';

class PlaylistsPane extends Component {
  render() {
    return (
      <div className="playlists__pane">
        <h4 className="text-center">Choose a playlist:</h4>
        <SelectPlaylistsTable {...this.props} />
      </div>
    );
  }
}

export default PlaylistsPane;