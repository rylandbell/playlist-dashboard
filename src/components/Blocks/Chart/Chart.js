import React from 'react';
import { connect } from 'react-redux';
import { stopAnimatingChart } from '../../../actions';

import './Chart.css';
import FeaturesLineChart from './FeaturesLineChart';

const mapStateToProps = (state) => {
  return {
    animateNextChartDraw: state.animateNextChartDraw,
    filters: state.filters,
    hoveredTrackRow: state.hoveredTrackRow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    stopAnimatingChart: () => {dispatch(stopAnimatingChart())}
  }
}

const Chart = (props) => (
  <div className="chart__pane">
    <FeaturesLineChart
      {...props}
    />
  </div>
);

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)

export default ChartContainer;