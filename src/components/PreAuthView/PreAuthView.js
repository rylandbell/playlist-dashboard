import React, { Component } from 'react';
import './PreAuthView.css';

const clientID = '74436b5dd9624f8782f138387e69daaf';
const redirectURI = 'http://localhost:3000';
const scopes = ['playlist-read-private','playlist-modify-private'];

const authURI = 'https://accounts.spotify.com/authorize?'
  + 'client_id=' + clientID
  + '&redirect_uri=' + encodeURIComponent(redirectURI)
  + '&response_type=token'
  + '&scope=' + scopes.join('%20')
  + '&show-dialog=true';

class PreAuthView extends Component {
  handleClick() {
    window.location = authURI;
  }

  render() {
    return (
      <div className="pre-auth__view">
        <h3>First, you should authorize this app to access your Spotify account:</h3>
        <button onClick={this.handleClick} type="button" className="btn btn-primary center-block">Authorize</button>
      </div>
    );
  }
}

export default PreAuthView;