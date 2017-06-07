import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

class ChartedFeatureCheckbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const featureIndex = this.props.featureIndex;
    const newValue = e.target.checked;
    this.props.handleChartedFeaturesToggle(featureIndex, newValue);
  }

  render() {
    const feature = this.props.feature;
    return (
      <label className="feature-filters__checkbox pull-right">
        <Tooltip
          placement="right"
          overlay="Include in chart"
          arrowContent={<div className="rc-tooltip-arrow-inner" />}
        >
          <span
            className={
              'fa fa-lg fa-line-chart ' +
              (feature.isGraphed ? feature.name : 'inactive')
            }
            aria-hidden="true"
          />
        </Tooltip>
        <input
          className="hidden"
          type="checkbox"
          checked={feature.isGraphed}
          value={feature.name}
          onChange={this.onChange}
        />
      </label>
    );
  }
}

export default ChartedFeatureCheckbox;
