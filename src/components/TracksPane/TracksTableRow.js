import React, { Component } from 'react';

class TracksTableRow extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter() {
    this.props.handleTrackRowHover(this.props.track);
  }

  render() {
    const track = this.props.track.track;
    const featuresData = this.props.featuresData;
    const allFilters = this.props.reduxState.filters;
    // const graphedFilters = this.props.reduxState.filters.filter(x => x.isGraphed);
    return (
      <tr className="tracks__row" onMouseEnter={this.onMouseEnter}> 
        <td>{track.name}&nbsp;
          <small>{track.artists[0].name}</small>
        </td>
        {allFilters.map(filter => <td key={filter.name} className="text-right hidden-xs">{featuresData[filter.name] || '0'}</td>)}
      </tr>
    );
  }
}

export default TracksTableRow;