import React, { Component } from 'react';
import './PreAuthView.css';

class PreAuthView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleAuthRequest();
  }

  render() {
    return (
      <div className="pre-auth-view">
        <div className="container pre-auth-view__container">
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">
                <img src="chart.png" alt="Charts" />
                <div className="caption">
                  <h3>Visualize.</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <img className="img-responsive" src="filters.png" alt="Filters" />
                <div className="caption">
                  <h4>Filter.</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <img src="..." alt="..." />
                <div className="caption">
                  <h3>Save.</h3>
                </div>
              </div>
            </div>
          </div>
          <button onClick={this.onClick} type="button" className="btn btn-primary center-block">Authorize</button>
        </div>
      </div>
    );
  }
}

export default PreAuthView;