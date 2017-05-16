import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import { Range, Handle } from 'rc-slider';
import ChartedFeatureCheckbox from './ChartedFeatureCheckbox';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={true}
      placement="bottom"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};

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
    const filterIndex = this.props.filterIndex;
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
      <div className="filters__filter noselect">
        <h4>{filterData.displayName}&nbsp;
          <span className="glyphicon glyphicon-stats pull-right hidden" />
          <div className="filters__checkbox-container pull-right">
            <ChartedFeatureCheckbox 
              filter={filterData}
              filterIndex={filterIndex}
              {...this.props}
            />
          </div>
        </h4>
        <div className="flex-container">
          <div className="filters__flex-left">
            <img className="img-responsive center-block filters__filter-icon" src={`/${filterData.name}.png`} alt={`${filterData.displayName} icon`} />
          </div>
          <div className="filters__flex-right">
            <Range handle={handle} {...rangeOptions} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Filter;