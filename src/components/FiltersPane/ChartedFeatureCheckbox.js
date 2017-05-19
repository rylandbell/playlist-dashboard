import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

class ChartedFeatureCheckbox extends Component {
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
      <label className="checkbox-inline chart___checkbox hidden-xs" >
        <Tooltip
          placement="right"
          overlay="Include in chart"
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          style={{fontWeight: 'bold'}}
        >
          <span className={"fa fa-line-chart " + filter.name + ' ' + (filter.isGraphed ? 'is-graphed' : '')} aria-hidden="true"></span>
        </Tooltip>
        <input className="hidden" type="checkbox" checked={filter.isGraphed} value={filter.name} onChange={this.onChange} /> 
        {/*<span style={{fontWeight: 'bold'}}>Show in Chart</span>*/}
      </label>
    );
  }

}

export default ChartedFeatureCheckbox;