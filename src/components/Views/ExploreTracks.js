import React, { Component } from 'react';
import TracksPane from '../TracksPane/TracksPane';
import ChartPane from '../ChartPane/ChartPane';

class ExporeTracks extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <TracksPane {...this.props} /> 
        </div>
        <div className="row">
          <ChartPane {...this.props} />
        </div>
      </div>
    );
  }
}

export default ExporeTracks;

