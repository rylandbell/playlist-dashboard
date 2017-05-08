import React, { Component } from 'react';
import TracksTableRow from './TracksTableRow';

class SelectPlaylistsTable extends Component {
  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const features = this.props.reduxState.audioFeatures;
    const filters = this.props.reduxState.filters;

    function filterByFeatures(track, index) {

      //don't do any filtering before features data loads
      if (!features || features.length < 1) {
        return true;
      }

      const filterBooleans = [];
      for (let key in filters) {
        if (filters.hasOwnProperty(key)) {
          let passesFilter = features[index][key] >= filters[key][0] && features[index][key] <= filters[key][1];
          filterBooleans.push(passesFilter);
        }
      }

      const passesFilters = filterBooleans.reduce(
        (accumulator, currentValue) => accumulator && currentValue,
        true
      )

      return passesFilters;
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
              <TracksTableRow key={track.track.id + track.added_at + index} track={track.track} features={filteredFeatures[index]} {...this.props} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;