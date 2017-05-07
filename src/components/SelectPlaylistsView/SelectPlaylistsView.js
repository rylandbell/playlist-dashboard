import React, { Component } from 'react';
import SelectPlaylistsTable from './SelectPlaylistsTable';
import './SelectPlaylistsView.css';

class SelectPlaylistsView extends Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    return (
      <div className="select-playlists__view">
        <h3 className="text-center">Choose playlists to filter:</h3>
        <SelectPlaylistsTable {...this.props} />
        <button className="btn btn-primary center-block">Next: Choose Filters</button>
      </div>
    );
  }
}

export default SelectPlaylistsView;