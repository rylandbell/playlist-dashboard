import React, { Component } from 'react';
import SelectPlaylistsListItem from './SelectPlaylistsListItem';

class SelectPlaylistsListGroup extends Component {
  componentDidMount() {
    if (!this.props.reduxState.hasReceivedPlaylists) {
      this.props.getPlaylists();
    }
  }

  render() {
    return (
      <div className="list-group playlists__group">
        {this.props.reduxState.playlists.map(list => 
          <SelectPlaylistsListItem key={list.id} playlist={list} {...this.props} />
        )}
      </div>
    );
  }
}

export default SelectPlaylistsListGroup;