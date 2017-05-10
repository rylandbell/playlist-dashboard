import React, { Component } from 'react';

class ChartFilterCheckbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const filterIndex = this.props.filterIndex;
    const newValue = e.target.checked;
    this.props.handleChartedFeaturesToggle(filterIndex, newValue);
  }

  render() {
    const filter = this.props.filter;
    return (
      <label className="checkbox-inline" >
        <input type="checkbox" checked={filter.isGraphed} value={filter.name} onChange={this.onChange} /> 
        <span style={{color: filter.color, fontWeight: 'bold'}}>{filter.displayName}</span>
      </label>
    );
  }
}

export default ChartFilterCheckbox;