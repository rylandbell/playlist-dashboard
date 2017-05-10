import React, { Component } from 'react';
import { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const filterIndex = this.props.filterIndex;
    this.props.handleFilterChange(filterIndex, value);
  }

  render() {
    const filterData = this.props.filterData;
    const currentValue = filterData.currentValue;

    // const marks = {};
    // marks[filterData.min] = {
    //   label: filterData.min,
    //   style: {color: '#ebebeb'}
    // };
    // marks[filterData.max] = {
    //   label: filterData.max,
    //   style: {color: '#ebebeb'}
    // };

    const rangeOptions = {
      min: filterData.min,
      max: filterData.max,
      step: (filterData.max - filterData.min)/50,
      // marks: marks,
      defaultValue: [filterData.min, filterData.max],
      value: currentValue,
      className: "filters__range",
      onChange: this.onChange,
    }

    return (
      <div className="filters__filter">
        <div className="flex-container">
          <div className="filters__flex-left">
            <img className="img-responsive center-block filters__filter-icon" src={`/${filterData.name}.png`} alt={`${filterData.displayName} icon`} />
          </div>
          <div className="filters__flex-right">
            <h5 className="text-center">{filterData.displayName}</h5>
            <Range {...rangeOptions} />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;