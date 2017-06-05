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
    let sortIndicator;
    if (this.props.feature.sortBy === 'ascending') {
      sortIndicator = <span className="fa fa-sort-asc" />
    } else if (this.props.feature.sortBy === 'descending') {
      sortIndicator = <span className="fa fa-sort-desc" />
    } else {
      sortIndicator = <span className="transparent fa fa-sort-desc" />
    }

    return (
      <th className="tracks__table-head-cell text-center hidden-xs noselect" onClick={this.onClick}>
        {this.props.feature.shortName}&nbsp;
        {sortIndicator}
      </th>
    );
  }
}

export default TracksTableHeadCell;
