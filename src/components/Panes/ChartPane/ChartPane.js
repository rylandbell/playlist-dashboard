import React, { Component } from 'react';
import './ChartPane.css';
import FeaturesLineChart from './FeaturesLineChart';

class ChartPane extends Component {
  render() {
    return (
      <div className="hidden-xs col-sm-12 chart__pane">
        <FeaturesLineChart {...this.props} />
      </div>
    );
  }
}

export default ChartPane;