import React, { Component } from 'react';
// import TracksTable from './TracksTable';
import './ChartPane.css';
import FeaturesLineChart from './FeaturesLineChart';

class TracksPane extends Component {
  render() {
    return (
      <div className="col-xs-12 chart__pane">
        <div className="center-block">     
          <FeaturesLineChart {...this.props} />
        </div>
      </div>
    );
  }
}

export default TracksPane;