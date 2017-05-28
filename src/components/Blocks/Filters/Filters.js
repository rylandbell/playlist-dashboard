import React from 'react';
import { connect } from 'react-redux';

import FilterInput from './FilterInput';
import { updateFilter, startDraggingFeatureSlider, toggleChartedFeature } from '../../../actions';

import './Filters.css';
import 'rc-slider/assets/index.css';

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilterChange: (filterIndex, inputValue) => {dispatch(updateFilter(filterIndex, inputValue))},
    handleStartDraggingFeatureSlider: filterIndex => {dispatch(startDraggingFeatureSlider(filterIndex))},
    handleChartedFeaturesToggle: (filterIndex, newValue) => {dispatch(toggleChartedFeature(filterIndex, newValue))}
  }
}

const Filters = ({filters, handleFilterChange, handleStartDraggingFeatureSlider, handleChartedFeaturesToggle}) => (
  <div className="filters__pane">
    {filters.map((filter,index) => 
      <FilterInput 
        key={index} 
        filterIndex={index} 
        filterData={filter}
        handleFilterChange={handleFilterChange}
        handleStartDraggingFeatureSlider={handleStartDraggingFeatureSlider}
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