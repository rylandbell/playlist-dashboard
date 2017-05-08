import React, { Component } from 'react';
import TracksTable from './TracksTable';
// import './TracksPane.css';

class TracksPane extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleViewChange('selectFilters');
  }

  render() {
    return (
      <div className="tracks__pane">
        <h4 className="text-center">Tracks:</h4>
        <TracksTable {...this.props} />
      </div>
    );
  }
}

export default TracksPane;