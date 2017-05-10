import React, { Component } from 'react';
import ChartFilterCheckbox from './ChartFilterCheckbox';

class ChartControls extends Component {
  render() {
    const activeFilters = this.props.reduxState.filters.filter (x => x.isActive);
    return (
      <div className="text-center">
        <div className="chart__controls-well">
          {activeFilters.map((filter, index) =>
            <ChartFilterCheckbox 
              key={filter.name}
              filter={filter}
              filterIndex={index}
              {...this.props}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ChartControls;