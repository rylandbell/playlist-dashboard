import React, { Component } from 'react';
import './ChartPane.css';
import FeaturesLineChart from './FeaturesLineChart';

class ChartPane extends Component {
  render() {
    return (
      <div className="chart__pane">
        <FeaturesLineChart {...this.props} />
      </div>
    );
  }
}

export default ChartPane;