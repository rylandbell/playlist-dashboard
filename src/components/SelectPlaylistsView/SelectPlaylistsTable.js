import React, { Component } from 'react';
import SelectPlaylistsRow from './SelectPlaylistsRow';

class SelectPlaylistsTable extends Component {
  componentDidMount() {
    if (!this.props.reduxState.receivedPlaylists) {
      this.props.getPlaylists();
    }
  }

  render() {
    return (
      <div className="select-playlists__table">
        <table className="table">
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