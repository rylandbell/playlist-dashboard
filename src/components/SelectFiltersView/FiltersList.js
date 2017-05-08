import React, { Component } from 'react';
import { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

class FiltersList extends Component {
  render() {
    const DanceabilityOptions = {
      min: 0,
      max: 1,
      step: .05,
      marks: {
        0: 'Not Danceable',
        1: 'Most Danceable'
      },
      defaultValue: [0,1],
      className: "select-filters__range"
    }

    return (
      <div className="select-filters__filters">
        <h4>Filters:</h4>
        <div className="select-filters__filter-section">
          <p>Instrumentals:</p>
          <div className="text-center">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">No Instrumentals</button>
              <button type="button" className="btn btn-default active">Don't Filter</button>
              <button type="button" className="btn btn-default">Only Instrumentals</button>
            </div>
          </div>
        </div>
        <div className="select-filters__filter-section">
          <p>Danceability:</p>
          <Range {...DanceabilityOptions} />
        </div>
      </div>
    );
  }
}

export default FiltersList;