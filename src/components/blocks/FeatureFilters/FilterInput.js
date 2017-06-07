import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import Range from 'rc-slider/lib/Range';
import Handle from 'rc-slider/lib/Handle';

import ChartedFeatureCheckbox from './ChartedFeatureCheckbox';
import FeatureInfoTooltip from './FeatureInfoTooltip';

import acousticness from './img/acousticness.png';
import danceability from './img/danceability.png';
import energy from './img/energy.png';
import instrumentalness from './img/instrumentalness.png';
// import liveness from './img/liveness.png';
import valence from './img/valence.png';
import popularity from './img/popularity.png';

const images = {
  acousticness,
  danceability,
  energy,
  instrumentalness,
  valence,
  popularity
};

const customHandle = props => {
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

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBeforeChange = this.onBeforeChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  onChange(value) {
    const featureIndex = this.props.featureIndex;
    this.props.handleFilterChange(featureIndex, value);
  }

  onBeforeChange(value) {
    this.props.handleStartDraggingFeatureSlider(this.props.featureIndex);
  }

  onAfterChange() {
    this.props.handleStopDraggingFeatureSlider();
  }

  render() {
    const featureData = this.props.featureData;
    const featureIndex = this.props.featureIndex;
    const currentValue = featureData.currentValue;

    const rangeOptions = {
      min: featureData.min,
      max: featureData.max,
      step: (featureData.max - featureData.min) / 50,
      defaultValue: [featureData.min, featureData.max],
      value: currentValue,
      className: 'feature-filters__range',
      onChange: this.onChange,
      onBeforeChange: this.onBeforeChange,
      onAfterChange: this.onAfterChange
    };

    return (
      <div className="feature-filters__filter noselect">
        <span className="feature-filters__feature-name">
          {featureData.displayName}&nbsp;
          <FeatureInfoTooltip feature={featureData} featureIndex={featureIndex} />
          <ChartedFeatureCheckbox
            feature={featureData}
            featureIndex={featureIndex}
            handleChartedFeaturesToggle={this.props.handleChartedFeaturesToggle}
          />
        </span>
        <div className="feature-filters__flex-container">
          <div className="feature-filters__flex-left">
            <img
              className="feature-filters__feature-icon img-responsive center-block"
              src={images[featureData.name]}
              alt={`${featureData.displayName} icon`}
            />
          </div>
          <div className="feature-filters__flex-right">
            <Range handle={customHandle} {...rangeOptions} />
          </div>
        </div>

      </div>
    );
  }
}

export default FilterInput;
