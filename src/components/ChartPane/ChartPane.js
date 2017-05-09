import React, { Component } from 'react';
// import TracksTable from './TracksTable';
import './ChartPane.css';
import FeaturesLineChart from './FeaturesLineChart';

class TracksPane extends Component {
  render() {
    return (
      <div className="col-xs-12 chart__pane">
        {/*<select className="form-control chart__filter-select center-block">
          <option>Danceability</option>
          <option>Instrumentalness</option>
          <option>Valence</option>
        </select>*/}
        <h4 className="clearfix">Danceability:</h4>
        <FeaturesLineChart {...this.props} />
      </div>
    );
  }
}

export default TracksPane;