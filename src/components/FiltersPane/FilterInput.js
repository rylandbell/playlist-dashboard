import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import { Range, Handle } from 'rc-slider';
import ChartedFeatureCheckbox from './ChartedFeatureCheckbox';
import FeatureInfoTooltip from './FeatureInfoTooltip';

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
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

    const rangeOptions = {
      min: filterData.min,
      max: filterData.max,
      step: (filterData.max - filterData.min)/50,
      defaultValue: [filterData.min, filterData.max],
      value: currentValue,
      className: "filters__range",
      onChange: this.onChange,
    }

    return (
      <div className="filters__filter noselect">
        <h4>{filterData.displayName}&nbsp;
          <FeatureInfoTooltip 
            filter={filterData}
            filterIndex={filterIndex}
            {...this.props}
          />
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
            <img className="img-responsive center-block filters__filter-icon" src={`/img/${filterData.name}.png`} alt={`${filterData.displayName} icon`} />
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