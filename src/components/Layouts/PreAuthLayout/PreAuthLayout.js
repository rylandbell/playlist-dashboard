import React from 'react';
import { connect } from 'react-redux';

import { authRequest } from '../../../actions';
import ConnectButton from './ConnectButton';
import './PreAuthLayout.css';
import spotifyLogo from './Spotify_Logo_RGB_White.png';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthRequest: () => dispatch(authRequest())
  }
}

const PreAuthLayout = ({handleAuthRequest}) => (
  <div className="pre-auth-layout">
    <div className="pre-auth-layout__content">
      <h1>Playlist Dashboard&nbsp;
        <span className="pre-auth-layout__for-spotify">for&nbsp;
          <img src={spotifyLogo} alt="Spotify logo" />
        </span>
      </h1>
      <div className="lead">Spotify algorithmically computes values to describe song features like danceability, instrumentalness, and popularity. Playlist Dashboard lets you graph and filter your playlists by these features.</div>
      <ConnectButton handleAuthRequest = {handleAuthRequest} />
    </div>
  </div>
);

const PreAuthLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreAuthLayout)

export default PreAuthLayoutContainer;
