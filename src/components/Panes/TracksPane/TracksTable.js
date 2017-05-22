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
    const allFilters = this.props.allFilters;
    const filteredTracks = this.props.filteredTracks;
    const filteredFeaturesData = this.props.filteredFeaturesData;

    return (
      <div className="tracks__scroll-window">
        <table className="tracks__table table table-condensed table-hover" onMouseLeave={this.onMouseLeave}>
          <thead>
            <tr>
              <th>Track</th>
              {allFilters.map(filter => <th className="text-center hidden-xs" key={filter.name} >{filter.shortName}</th>)}
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