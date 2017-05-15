import React, { Component } from 'react';
import Message from '../Message';
// import SelectPlaylistsTable from './SelectPlaylistsTable';
import SelectPlaylistsListGroup from './SelectPlaylistsListGroup';
import './PlaylistsPane.css';

class PlaylistsPane extends Component {
  render() {
    const getPlaylistsPending = this.props.reduxState.fetchStatus.getPlaylistsPending;
    return (
      <div>
        {getPlaylistsPending ? 
          <Message classList="" loading={true} text="Loading playlist data... " {...this.props} /> : 
          <div className="playlists__pane">
            <SelectPlaylistsListGroup {...this.props} />
          </div>
        }
      </div>
    );
  }
}

export default PlaylistsPane;