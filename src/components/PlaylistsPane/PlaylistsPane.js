import React, { Component } from 'react';
import SelectPlaylistsTable from './SelectPlaylistsTable';
import './PlaylistsPane.css';

class PlaylistsPane extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleViewChange('selectFilters');
  }

  render() {
    return (
      <div className="playlists__pane">
        <h4 className="text-center">Choose a playlist:</h4>
        <SelectPlaylistsTable {...this.props} />
        {/*<button onClick={this.onClick} className="btn btn-primary center-block">Next: Choose Filters</button>*/}
      </div>
    );
  }
}

export default PlaylistsPane;