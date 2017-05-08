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
    const features = this.props.reduxState.audioFeatures;
    return (
      <div className="tracks__table">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Title</th>
              <th>Danceability</th>
              <th>Instrumentalness</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => 
              <TracksTableRow key={track.track.id} track={track.track} features={features[index]} {...this.props} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;