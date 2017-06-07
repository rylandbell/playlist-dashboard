import React from 'react';
import { connect } from 'react-redux';
import { stopAnimatingChart } from '../../../actions/actions';
import { getFeaturesData } from '../../../selectors/features';

import './Chart.css';
import FeaturesLineChart from './FeaturesLineChart';

const mapStateToProps = state => {
  return {
    animateNextChartDraw: state.ui.animateNextChartDraw,
    features: getFeaturesData(state),
    hoveredTrackId: state.ui.hoveredTrackId,
    mediaType: state.browser.mediaType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stopAnimatingChart: () => {
      dispatch(stopAnimatingChart());
    }
  };
};

const Chart = props =>
  <div className="chart__pane">
    <FeaturesLineChart {...props} />
  </div>;

const ChartContainer = connect(mapStateToProps, mapDispatchToProps)(Chart);

export default ChartContainer;
