import React from 'react';
import { connect } from 'react-redux';
import { stopAnimatingChart } from '../../../actions/actions';
import {getFilters} from '../../../selectors/filters';

import './Chart.css';
import FeaturesLineChart from './FeaturesLineChart';

const mapStateToProps = (state) => {
  return {
    animateNextChartDraw: state.ui.animateNextChartDraw,
    filters: getFilters(state),
    hoveredTrackId: state.ui.hoveredTrackId,
    browser: state.browser
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