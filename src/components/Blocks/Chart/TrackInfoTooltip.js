import React, { Component } from 'react';

class TrackInfoTooltip extends Component {
  render() {
    const shouldRenderTooltip =
      this.props.payload && this.props.payload.length > 0;

    return (
      shouldRenderTooltip &&
      <div className="chart__track-info-tooltip">
        <p className="desc">{this.props.payload[0].payload.name}</p>
      </div>
    );
  }
}

export default TrackInfoTooltip;
