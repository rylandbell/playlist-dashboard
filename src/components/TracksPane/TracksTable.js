import React, { Component } from 'react';
import TracksTableRow from './TracksTableRow';
import {filterByFeatures} from '../../helper';

class SelectPlaylistsTable extends Component {
  constructor(props) {
    super(props);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseLeave() {
    this.props.handleMouseLeavesTracksTable();
  }

  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const features = this.props.reduxState.audioFeaturesData;
    const allFilters = this.props.reduxState.filters;
    // const graphedFilters = allFilters.filter(x => x.isGraphed);

    const filteredTracks = tracks.filter(filterByFeatures.bind(this));
    const filteredFeaturesData = features.filter(filterByFeatures.bind(this));

    return (
      <div className="tracks__table">
        <table className="table table-condensed table-hover" onMouseLeave={this.onMouseLeave}>
          <thead>
            <tr>
              <th>Track</th>
              {allFilters.map(filter => <th className="text-right" key={filter.name} >{filter.displayName}</th>)}
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map((track, index) => 
              <TracksTableRow key={track.track.id + track.added_at + index} track={track} featuresData={filteredFeaturesData[index]} {...this.props} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectPlaylistsTable;