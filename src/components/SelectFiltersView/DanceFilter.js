import React, { Component } from 'react';
import { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

class DanceFilter extends Component {
  render() {
    const danceFilterMin = this.props.reduxState.filters.danceFilter[0];
    const danceFilterMax = this.props.reduxState.filters.danceFilter[1];
    const DanceabilityOptions = {
      min: 0,
      max: 1,
      step: .05,
      marks: {
        0: 'Not Danceable',
        1: 'Most Danceable'
      },
      defaultValue: [danceFilterMin, danceFilterMax],
      className: "select-filters__range",
      onChange: this.props.handleDanceChange
    }

    return (
      <div className="select-filters__filter-section">
        <p>Danceability:</p>
        <Range {...DanceabilityOptions} />
      </div>
    );
  }
}

export default DanceFilter;