import React, { Component } from 'react';
import TracksTableRow from './TracksTableRow';

class SelectPlaylistsTable extends Component {
  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const features = this.props.reduxState.audioFeatures;
    const filterValues = this.props.reduxState.filters;

    function filterByFeatures(track, index) {
      if (!features || features.length < 1) {
        return true;
      }
      const danceabilityPasses = features[index].danceability >= filterValues.danceability[0] && features[index].danceability <= filterValues.danceability[1];
      return danceabilityPasses;
    }

    const filteredTracks = tracks.filter(filterByFeatures);
    const filteredFeatures = features.filter(filterByFeatures);

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
            {filteredTracks.map((track, index) => 
              <TracksTableRow key={track.track.id} track={track.track} features={filteredFeatures[index]} {...this.props} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;