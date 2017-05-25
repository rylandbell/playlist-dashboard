import React, { Component } from 'react';
import ConnectButton from './ConnectButton';

import './Instructions.css';
import playlistImg from './img/playlist.png';
import filterImg from './img/filter.png';
import saveImg from './img/save.png';

class Instructions extends Component {
  render() {
    const showButton = this.props.reduxState.activeView === "preAuth";
    return (
      <div className="instructions__wrapper">
        <div className ="instructions">
          <table>
            <tbody>
              <tr>
                <td><img src={playlistImg} alt="playlist icon" /></td>
                <td>
                  <h3> Select a playlist. </h3>
                  <div className="lead">Not sure what to choose? Try Discover Weekly.</div>
                </td>
              </tr>
              <tr>
                <td><img src={filterImg} alt="playlist icon" /></td>
                <td>
                  <h3> Adjust some filters. </h3>
                  <div className="lead">Refine your playlists by setting an allowed range for any number of audio features. Heading to the gym? Look for high-energy, high-danceability tracks. Want to focus? Look for tracks with a high instrumentalness score.</div>
                </td>
              </tr>
              <tr>
                <td><img src={saveImg} alt="playlist icon" /></td>
                <td>
                  <h3> Save the result as a new Spotify playlist. </h3>
                  <div className="lead">Don't worry - the original playlist will not be altered.</div>
                </td>
              </tr>
            </tbody>
          </table>
          {showButton ? <ConnectButton {...this.props} /> : null}
        </div>
      </div>
    );
  }
}

export default Instructions;

