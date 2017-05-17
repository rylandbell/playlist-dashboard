import React, { Component } from 'react';

class TrackInfo extends Component {
  render() {
    const shouldRenderTooltip = (this.props.payload && this.props.payload.length > 0);
    return (
      shouldRenderTooltip ? 
        (
          <div className="chart__track-info">
            <p className="desc">{this.props.payload[0].payload.name}</p>
          </div>
        ) : 
        null
    );
  }
}

export default TrackInfo;