import React, { Component } from 'react';
import './Chart.css';
import FeaturesLineChart from './FeaturesLineChart';

class Chart extends Component {
  render() {
    return (
      <div className="chart__pane">
        <FeaturesLineChart {...this.props} />
      </div>
    );
  }
}

export default Chart;