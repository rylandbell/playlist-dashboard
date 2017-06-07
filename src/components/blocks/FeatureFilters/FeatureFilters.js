import React from 'react';
import { connect } from 'react-redux';

import FilterInput from './FilterInput';
import {
  updateFeatureFilter,
  startDraggingFeatureSlider,
  stopDraggingFeatureSlider,
  toggleChartedFeature
} from '../../../actions/actions';
import { getFeaturesData } from '../../../selectors/features';

import './FeatureFilters.css';
import 'rc-slider/assets/index.css';

const mapStateToProps = state => {
  return {
    features: getFeaturesData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterChange: (featureIndex, inputValue) => {
      dispatch(updateFeatureFilter(featureIndex, inputValue));
    },
    handleStartDraggingFeatureSlider: featureIndex => {
      dispatch(startDraggingFeatureSlider(featureIndex));
    },
    handleStopDraggingFeatureSlider: () => {
      dispatch(stopDraggingFeatureSlider());
    },
    handleChartedFeaturesToggle: (featureIndex, newValue) => {
      dispatch(toggleChartedFeature(featureIndex, newValue));
    }
  };
};

const FeatureFilters = ({
  features,
  handleFilterChange,
  handleStartDraggingFeatureSlider,
  handleStopDraggingFeatureSlider,
  handleChartedFeaturesToggle
}) =>
  <div className="feature-filters__pane">
    {features.map((feature, index) =>
      <FilterInput
        key={index}
        featureIndex={index}
        featureData={feature}
        handleFilterChange={handleFilterChange}
        handleStartDraggingFeatureSlider={handleStartDraggingFeatureSlider}
        handleStopDraggingFeatureSlider={handleStopDraggingFeatureSlider}
        handleChartedFeaturesToggle={handleChartedFeaturesToggle}
      />
    )}
  </div>;

const FeatureFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(FeatureFilters);

export default FeatureFiltersContainer;
