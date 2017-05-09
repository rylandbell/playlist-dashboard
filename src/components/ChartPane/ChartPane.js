import React, { Component } from 'react';
// import TracksTable from './TracksTable';
import './ChartPane.css';
import FeaturesLineChart from './FeaturesLineChart';
import ChartControls from './ChartControls';

class TracksPane extends Component {
  render() {
    return (
      <div className="col-xs-12 chart__pane">
        <ChartControls {...this.props} />
        <FeaturesLineChart {...this.props} />
      </div>
    );
  }
}

export default TracksPane;