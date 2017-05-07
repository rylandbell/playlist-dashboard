import React, { Component } from 'react';
import SelectPlaylistsTable from './SelectPlaylistsTable';
import './SelectPlaylistsView.css';

class SelectPlaylistsView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleViewChange('selectFilters');
  }

  render() {
    return (
      <div className="select-playlists__view">
        <h3 className="text-center">Choose playlists to filter:</h3>
        <SelectPlaylistsTable {...this.props} />
        <button onClick={this.onClick} className="btn btn-primary center-block">Next: Choose Filters</button>
      </div>
    );
  }
}

export default SelectPlaylistsView;