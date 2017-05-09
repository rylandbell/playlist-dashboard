import React, { Component } from 'react';

class ChartControls extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.handleChartedFeaturesToggle(e.target.value);
  }

  render() {
    const chartedFeatures = this.props.reduxState.chartedFeatures;
    return (
      <div className="text-center">
        <div className="chart__controls-well" onClick={this.onClick}>
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox1" checked={chartedFeatures.danceability} value="danceability"/> Danceability
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox2" checked={chartedFeatures.instrumentalness} value="instrumentalness"/> Instrumentalness
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox3" checked={chartedFeatures.valence} value="valence"/> Valence
          </label>
        </div>
      </div>
    );
  }
}

export default ChartControls;