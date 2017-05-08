import React, { Component } from 'react';

class InstrumentalFilter extends Component {
  render() {
    return (
      <div className="select-filters__filter-section">
        <p>Instrumentals:</p>
        <div className="text-center">
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default" value="noInstrumentals">No Instrumentals</button>
            <button type="button" className="btn btn-default" value="noFilter">Don't Filter</button>
            <button type="button" className="btn btn-default" value="onlyInstrumentals">Only Instrumentals</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InstrumentalFilter;