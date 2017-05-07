import React, { Component } from 'react';
import './SelectFiltersView.css';
import FiltersList from './FiltersList';
import SelectedPlaylists from './SelectedPlaylists';

class SelectPlaylistsView extends Component {
  render() {
    return (
      <div className="select-filters__view">
        <h3 className="text-center">Select Filters View </h3>
        <SelectedPlaylists {...this.props}/>
        <FiltersList {...this.props}/>
        <button className="btn btn-primary center-block">Create Filtered Playlist</button>
      </div>
    );
  }
}

export default SelectPlaylistsView;