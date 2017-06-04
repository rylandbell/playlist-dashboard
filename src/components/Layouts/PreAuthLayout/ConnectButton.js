import React, { Component } from 'react';

class ConnectButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleAuthRequest();
  }

  render() {
    return (
      <div>
        <br />
        <div className="lead text-center">
          Let's start by connecting to your Spotify account.
        </div>
        <button
          onClick={this.onClick}
          type="button"
          className="btn btn-lg center-block pre-auth-layout__connect-btn"
        >
          <span className="fa fa-lg fa-spotify" />&nbsp;&nbsp;Connect to Spotify
        </button>
      </div>
    );
  }
}

export default ConnectButton;
