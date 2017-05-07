import React, { Component } from 'react';

class SelectedPlaylists extends Component {
  render() {
    const selectedPlaylists = this.props.reduxState.playlists.filter(list => list.selected);
    return (
      <div className="select-filters__selected-playlists">
        <h4>Selected Playlists:</h4>
        <ul>
          {selectedPlaylists.map(list => <li key={list.id}>{list.name}</li>)}
        </ul>
        <button type="button" className="btn btn-default">Edit List</button>
      </div>
    );
  }
}

export default SelectedPlaylists;