import React, { Component } from 'react';
import SelectPlaylistsRow from './SelectPlaylistsRow';

class SelectPlaylistsTable extends Component {
  componentDidMount() {
    if (!this.props.reduxState.hasReceivedPlaylists) {
      this.props.getPlaylists();
    }
  }

  render() {
    return (
      <div className="playlists__table">
        <table className="table table-condensed table-hover">
          <tbody>
            {this.props.reduxState.playlists.map(list => 
              <SelectPlaylistsRow key={list.id} playlist={list} {...this.props} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;