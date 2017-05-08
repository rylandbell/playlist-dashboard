import React, { Component } from 'react';

class InstrumentalFilter extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.handleInstrumentalChange(e.target.value);
  }

  render() {
    const selectedValue = this.props.reduxState.filters.instrumentalFilter;
    return (
      <div className="filters__filter-section">
        <p>Instrumentals:</p>
        <div className="text-center">
          <div onClick={this.onClick} className="btn-group" role="group" aria-label="...">
            <button type="button" className={"btn btn-default btn-sm " + (selectedValue==="noInstrumentals" ? "active" : "")} value="noInstrumentals">No Instrumentals</button>
            <button type="button" className={"btn btn-default btn-sm " + (selectedValue==="noFilter" ? "active" : "")} value="noFilter">Don't Filter</button>
            <button type="button" className={"btn btn-default btn-sm " + (selectedValue==="onlyInstrumentals" ? "active" : "")} value="onlyInstrumentals">Only Instrumentals</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InstrumentalFilter;