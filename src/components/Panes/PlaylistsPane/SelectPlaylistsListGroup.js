import React, { Component } from 'react';
import SelectPlaylistsListItem from './SelectPlaylistsListItem';

class SelectPlaylistsListGroup extends Component {
  render() {
    const playlists = this.props.reduxState.playlists;

    const mappedPlaylists = playlists.map(list => 
      <SelectPlaylistsListItem key={list.id} playlist={list} {...this.props} />
    );
    return (
      playlists.length > 0 ? 
        (<div className="list-group">
          {mappedPlaylists}
        </div>)
        : <p>No playlists found for this account.</p>
    );
  }
}

export default SelectPlaylistsListGroup;