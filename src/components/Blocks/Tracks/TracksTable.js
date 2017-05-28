import React, { Component } from 'react';
import TracksTableRow from './TracksTableRow';

class SelectPlaylistsTable extends Component {
  constructor(props) {
    super(props);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseLeave() {
    this.props.handleMouseLeavesTracksTable();
  }

  render() {
    const filters = this.props.filters;
    const filteredTracks = this.props.filteredTracks;
    const filteredFeaturesData = this.props.filteredFeaturesData;

    return (
      <table className="tracks__table table table-condensed table-hover" onMouseLeave={this.onMouseLeave}>
        <thead>
          <tr>
            <th>Track</th>
            {filters.map(filter => <th className="text-center hidden-xs" key={filter.name} >{filter.shortName}</th>)}
          </tr>
        </thead>
        <tbody>
          {filteredTracks.map((track, index) => 
            <TracksTableRow 
              key={track.track.id + track.added_at + index} 
              track={track} 
              featuresData={filteredFeaturesData[index]}
              filters={this.props.filters}
              handleTrackRowHover={this.props.handleTrackRowHover}
            />
          )}
        </tbody>
      </table>
    );
  }
}

export default SelectPlaylistsTable;