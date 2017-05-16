import React, { Component } from 'react';
import './ChartPane.css';
import FeaturesLineChart from './FeaturesLineChart';

class TracksPane extends Component {
  render() {
    return (
      <div className="col-xs-12 chart__pane">
        <FeaturesLineChart {...this.props} />
      </div>
    );
  }
}

export default TracksPane;