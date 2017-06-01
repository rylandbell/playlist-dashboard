import React from 'react';
import { connect } from 'react-redux';

import FilterInput from './FilterInput';
import { updateFilter, startDraggingFeatureSlider, stopDraggingFeatureSlider, toggleChartedFeature } from '../../../actions/actions';
import {getFilters} from '../../../selectors/filters';

import './Filters.css';
import 'rc-slider/assets/index.css';

const mapStateToProps = (state) => {
  return {
    filters: getFilters(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilterChange: (filterIndex, inputValue) => {dispatch(updateFilter(filterIndex, inputValue))},
    handleStartDraggingFeatureSlider: filterIndex => {dispatch(startDraggingFeatureSlider(filterIndex))},
    handleStopDraggingFeatureSlider: () => {dispatch(stopDraggingFeatureSlider())},
    handleChartedFeaturesToggle: (filterIndex, newValue) => {dispatch(toggleChartedFeature(filterIndex, newValue))}
  }
}

const Filters = ({filters, handleFilterChange, handleStartDraggingFeatureSlider, handleStopDraggingFeatureSlider, handleChartedFeaturesToggle}) => (
  <div className="filters__pane">
    {filters.map((filter,index) => 
      <FilterInput 
        key={index} 
        filterIndex={index} 
        filterData={filter}
        handleFilterChange={handleFilterChange}
        handleStartDraggingFeatureSlider={handleStartDraggingFeatureSlider}
        handleStopDraggingFeatureSlider={handleStopDraggingFeatureSlider}
        handleChartedFeaturesToggle={handleChartedFeaturesToggle}
      />
    )}
  </div>
);

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default FiltersContainer;