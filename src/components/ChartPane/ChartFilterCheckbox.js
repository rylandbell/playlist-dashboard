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
      <label className="checkbox-inline chart___checkbox" >
        <span className={"fa fa-line-chart " + filter.name + ' ' + (filter.isGraphed ? 'is-graphed' : '')} aria-hidden="true"></span>
        <input className="hidden" type="checkbox" checked={filter.isGraphed} value={filter.name} onChange={this.onChange} /> 
        {/*<span style={{fontWeight: 'bold'}}>Show in Chart</span>*/}
      </label>
    );
  }

}

export default ChartFilterCheckbox;