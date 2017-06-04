import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

class ChartedFeatureCheckbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const filterIndex = this.props.filterIndex;
    const newValue = e.target.checked;
    this.props.handleChartedFeaturesToggle(filterIndex, newValue);
  }

  render() {
    const filter = this.props.filter;
    return (
      <label className="filters__checkbox pull-right">
        <Tooltip
          placement="right"
          overlay="Include in chart"
          arrowContent={<div className="rc-tooltip-arrow-inner" />}
        >
          <span
            className={
              'fa fa-lg fa-line-chart ' +
              (filter.isGraphed ? filter.name : 'inactive')
            }
            aria-hidden="true"
          />
        </Tooltip>
        <input
          className="hidden"
          type="checkbox"
          checked={filter.isGraphed}
          value={filter.name}
          onChange={this.onChange}
        />
      </label>
    );
  }
}

export default ChartedFeatureCheckbox;
