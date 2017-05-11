import React, { Component } from 'react';

class PlaylistActions extends Component {
  constructor(props) {
    super(props);
    this.onClickChange = this.onClickChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickChange() {
    this.props.handlePlaylistSelect(null);
  }

  onClickSave() {
    this.props.handleSavePlaylist('test save' + new Date());
  }

  render() {
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;
    return (
      <div className="playlist-actionss">
        <h4 className="clearfix">{selectedPlaylist.name}
          <button onClick={this.onClickSave} className="btn btn-primary btn-xs tracks__change-playlist-btn pull-right">Save...</button>
        </h4>
      </div>
    );
  }
}

export default PlaylistActions;