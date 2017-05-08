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
      <div className="col-xs-12 pre-auth__view">
        <h3>First, you should authorize this app to access your Spotify account:</h3>
        <button onClick={this.onClick} type="button" className="btn btn-primary center-block">Authorize</button>
      </div>
    );
  }
}

export default PreAuthView;