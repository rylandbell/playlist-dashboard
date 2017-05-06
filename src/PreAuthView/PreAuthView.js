import React, { Component } from 'react';
import './PreAuthView.css';

class PreAuthView extends Component {
  render() {
    return (
      <div className="PreAuthView">
        <h3>You should authorize this app to access your Spotify account:</h3>
        <button type="button" className="btn btn-default">Authorize</button>
      </div>
    );
  }
}

export default PreAuthView;