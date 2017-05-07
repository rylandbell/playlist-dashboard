import React, { Component } from 'react';
import SelectPlaylistsRow from './SelectPlaylistsRow';

class SelectPlaylistsTable extends Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    return (
      <div className="select-playlists__table">
        <table className="table">
          <tbody>
            {this.props.reduxState.playlists.map(list => 
              <SelectPlaylistsRow key={list.id} name={list.name} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;