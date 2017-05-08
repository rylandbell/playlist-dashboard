import React, { Component } from 'react';
import './SelectFiltersPane.css';
import DanceFilter from './DanceFilter';
import InstrumentalFilter from './InstrumentalFilter';

class SelectPlaylistsView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handlePlaylistSelect(null);
  }

  render() {
    return (
      <div className="select-filters__view">
        <div className="select-filters__filters">
          <h4>{this.props.reduxState.selectedPlaylist.name}</h4>
          <button onClick={this.onClick} className="btn btn-primary btn-sm">Change Playlist</button>
          <hr />
          <InstrumentalFilter {...this.props} />
          <DanceFilter {...this.props} />
        </div>
      </div>
    );
  }
}

export default SelectPlaylistsView;