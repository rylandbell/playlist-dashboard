import React, { Component } from 'react';
import TracksTable from './TracksTable';
import './TracksPane.css';

class TracksPane extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handlePlaylistSelect(null);
  }

  render() {
    return (
      <div className="col-xs-12 tracks__pane">
        <div className="row">
          <div className="col-xs-12">
            <h4 className="clearfix">{this.props.reduxState.selectedPlaylist.name}
              <button onClick={this.onClick} className="btn btn-primary btn-xs tracks__change-playlist-btn">Change</button>
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