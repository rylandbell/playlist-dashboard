import React, { Component } from 'react';
import TracksTableHeadCell from './TracksTableHeadCell';

class TracksTableHead extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const features = this.props.filters;

    return (
      <thead>
        <tr>
          <th>Track</th>
          {features.map(feature =>
            <TracksTableHeadCell key={feature.name} feature={feature} handleColumnHeadingClick={this.props.handleColumnHeadingClick}  />
          )}
        </tr>
      </thead>
    );
  }
}

export default TracksTableHead;
