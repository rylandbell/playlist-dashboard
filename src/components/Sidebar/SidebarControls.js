import React, { Component } from 'react';

class SidebarControls extends Component {
  constructor(props) {
    super(props);
    this.onClickChange = this.onClickChange.bind(this);
  }

  onClickChange() {
    this.props.handlePlaylistSelect(null);
  }

  render() {
    return (
      <div className="playlist-actions">
        <button onClick={this.onClickChange} className="btn btn-primary btn-xs tracks__change-playlist-btn">Change Playlist</button>
      </div>
    );
  }
}

export default SidebarControls;