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
    const filterName = this.props.options.name.toLowerCase();
    this.props.handleFilterChange(filterName, value);
  }

  render() {
    const options = this.props.options;

    const marks = {};
    marks[options.min] = {
      label: options.min,
      style: {color: '#ebebeb'}
    };
    marks[options.max] = {
      label: options.max,
      style: {color: '#ebebeb'}
    };

    const currentValue = this.props.reduxState.filters[options.name.toLowerCase()];

    const rangeOptions = {
      min: options.min,
      max: options.max,
      step: (options.max - options.min)/20,
      marks: marks,
      defaultValue: [options.min, options.max],
      value: currentValue,
      className: "filters__range",
      onChange: this.onChange
    }

    return (
      <div className="filters__filter well">
        <h5>{options.name}:</h5>
        <Range {...rangeOptions} />
      </div>
    );
  }
}

export default Filter;