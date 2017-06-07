import React, { Component } from 'react';
import TracksTableRow from './TracksTableRow';
import TracksTableHead from './TracksTableHead';

class TracksTable extends Component {
  constructor(props) {
    super(props);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseLeave() {
    this.props.handleMouseLeavesTracksTable();
  }

  render() {
    const filteredTracks = this.props.filteredTracks;

    return (
      <table
        className="tracks__table table table-condensed table-hover"
        onMouseLeave={this.onMouseLeave}
      >
        <TracksTableHead features={this.props.features} handleColumnHeadingClick={this.props.handleColumnHeadingClick} />
        <tbody>
          {filteredTracks.map((track, index) =>
            <TracksTableRow
              key={track.id + index}
              track={track}
              features={this.props.features}
              handleTrackRowHover={this.props.handleTrackRowHover}
            />
          )}
        </tbody>
      </table>
    );
  }
}

export default TracksTable;
