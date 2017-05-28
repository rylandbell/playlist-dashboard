import React, { Component } from 'react';

//display '<.01' for tiny decimals, and ' ' for missing values
const formatValueDisplay = value => {
  if (typeof value !== 'number') {
    return ' ';
  } else if (value > 0 && value < .01) {
    return '< .01';
  } else {
    return value.toFixed(2);
  }
}

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
    const filters = this.props.filters;

    return (
      <tr onMouseEnter={this.onMouseEnter}> 
        <td>{track.name}&nbsp;
          <small>{track.artists[0].name}</small>
        </td>
        {filters.map(filter => <td key={filter.name} className="text-center hidden-xs">{formatValueDisplay(featuresData[filter.name])}</td>)}
      </tr>
    );
  }
}

export default TracksTableRow;