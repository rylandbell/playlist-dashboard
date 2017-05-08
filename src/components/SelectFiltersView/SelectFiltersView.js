import React, { Component } from 'react';
import './SelectFiltersView.css';
import DanceFilter from './DanceFilter';
import InstrumentalFilter from './InstrumentalFilter';
import SelectedPlaylists from './SelectedPlaylists';

class SelectPlaylistsView extends Component {
  render() {
    return (
      <div className="select-filters__view">
        <h3 className="text-center">Select Filters View </h3>
        <SelectedPlaylists {...this.props}/>
        <div className="select-filters__filters">
          <h4>Filters:</h4>
          <InstrumentalFilter {...this.props} />
          <DanceFilter {...this.props} />
        </div>
        <button className="btn btn-primary center-block">Create Filtered Playlist</button>
      </div>
    );
  }
}

export default SelectPlaylistsView;