import React, { Component } from 'react';

class SelectedPlaylists extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleViewChange('selectPlaylists');
  }

  render() {
    const selectedPlaylists = this.props.reduxState.playlists.filter(list => list.selected);
    return (
      <div className="filters__selected-playlists">
        <h4>Selected Playlists:</h4>
        <ul>
          {selectedPlaylists.map(list => <li key={list.id}>{list.name}</li>)}
        </ul>
        <button type="button" onClick={this.onClick} className="btn btn-default">Edit List</button>
      </div>
    );
  }
}

export default SelectedPlaylists;