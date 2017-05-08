import React, { Component } from 'react';
import TracksTableRow from './TracksTableRow';

class SelectPlaylistsTable extends Component {
  // componentDidMount() {
  //   if (!this.props.reduxState.hasReceivedPlaylists) {
  //     this.props.getPlaylists();
  //   }
  // }

  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    return (
      <div className="playlists__table">
        <table className="table table-condensed">
          <tbody>
            {tracks.map(track => 
              <TracksTableRow key={track.track.id} track={track.track} {...this.props} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;