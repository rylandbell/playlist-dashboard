import React, { Component } from 'react';

class TracksTableHeadCell extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleColumnHeadingClick(this.props.feature.name);
  }

  render() {
    return (
      <th className="text-center hidden-xs" onClick={this.onClick}>
        {this.props.feature.shortName}
      </th>
    );
  }
}

export default TracksTableHeadCell;
