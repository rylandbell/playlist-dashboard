import React, { Component } from 'react';
import TracksTable from './TracksTable';
import './TracksPane.css';

class TracksPane extends Component {
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
      <div className="col-xs-12 tracks__pane">
        <div className="row">
          <div className="col-xs-12">
            <h4 className="clearfix">{selectedPlaylist.name}
              <button onClick={this.onClickChange} className="btn btn-primary btn-xs tracks__change-playlist-btn">Change</button>
              <button onClick={this.onClickSave} className="btn btn-primary btn-xs tracks__change-playlist-btn">Save Filtered Tracks to New Playlist</button>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TracksTable {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default TracksPane;