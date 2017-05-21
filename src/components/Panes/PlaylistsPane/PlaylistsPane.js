import React, { Component } from 'react';
import Message from '../../Utilities/Message/Message';
import SelectPlaylistsListGroup from './SelectPlaylistsListGroup';
import './PlaylistsPane.css';

class PlaylistsPane extends Component {
  render() {
    const getPlaylistsPending = this.props.reduxState.fetchStatus.getPlaylistsPending;
    const getPlaylistsFailure = this.props.reduxState.fetchStatus.getPlaylistsFailure;

    let activeContent = 'showPlaylists';
    if (getPlaylistsPending) { 
      activeContent = 'getPlaylistsPending';
    } else if (getPlaylistsFailure) {
      activeContent = 'getPlaylistsFailure';
    }

    const contentEnum = {
      getPlaylistsPending: <Message loading={true} text="Loading playlist data... " {...this.props} />,
      getPlaylistsFailure: <Message error={true} text="Error loading playlist data. Check your internet connection and try again." {...this.props} />,
      showPlaylists: 
        <div className="playlists__pane">
          <SelectPlaylistsListGroup {...this.props} />
        </div>
    };

    return (
      contentEnum[activeContent]
    );
  }
}

export default PlaylistsPane;