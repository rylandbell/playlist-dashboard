import React, { Component } from 'react';
import FilterInput from './FilterInput';

import './FiltersPane.css';
import 'rc-slider/assets/index.css';

class FiltersPane extends Component {
  render() {
    const filters = this.props.reduxState.filters;
    return (
      <div className="filters__pane">
        {filters.map((filter,index) => <FilterInput key={index} filterIndex={index} filterData={filter} {...this.props} />)}
      </div>
    );
  }
}

export default FiltersPane;