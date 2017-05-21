import React, { Component } from 'react';
import FilterInput from './FilterInput';

import './FiltersPane.css';
import 'rc-slider/assets/index.css';

class FiltersPane extends Component {
  render() {
    const filters = this.props.reduxState.filters;
    return (
      <div className="filters__pane">
        <div className="filters__filters">
          {filters.map((filter,index) => <FilterInput key={index} filterIndex={index} filterData={filter} {...this.props} />)}
        </div>
      </div>
    );
  }
}

export default FiltersPane;