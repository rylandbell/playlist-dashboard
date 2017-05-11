import React, { Component } from 'react';
// import SelectPlaylistsTable from './SelectPlaylistsTable';
import SelectPlaylistsListGroup from './SelectPlaylistsListGroup';
import './PlaylistsPane.css';

class PlaylistsPane extends Component {
  render() {
    return (
      <div className="playlists__pane">
        <SelectPlaylistsListGroup {...this.props} />
      </div>
    );
  }
}

export default PlaylistsPane;