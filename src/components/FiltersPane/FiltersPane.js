import React, { Component } from 'react';
// import DanceFilter from './DanceFilter';
// import InstrumentalFilter from './InstrumentalFilter';
import FilterInput from './FilterInput';

import './FiltersPane.css';
import 'rc-slider/assets/index.css';

const filters = [
  {
    name: 'Danceability',
    min: 0,
    max: 1
  },
  {
    name: 'Instrumentalness',
    min: 0,
    max: 1
  }
]

class FiltersPane extends Component {
  render() {
    return (
      <div className="filters__pane">
        <div className="filters__filters">
          <h4>Filters:</h4>
          {filters.map((filter,index) => <FilterInput key={index} options={filter} {...this.props} />)}
        </div>
      </div>
    );
  }
}

export default FiltersPane;