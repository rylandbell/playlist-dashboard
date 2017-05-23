import React, { Component } from 'react';
import playlistImg from './img/playlist.png';
import filterImg from './img/filter.png';
import saveImg from './img/save.png';

class Instructions extends Component {
  render() {
    return (
      <div>
        <div className="auth-view__instructions-wrapper">
          <table className="auth-view__instructions">
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
                  <div className="lead">Refine your playlists by setting an allowed range for any number of features. Heading to the gym? Look for high-energy, high-danceability tracks. Want to focus? Look for tracks with a high instrumentalness score.</div>
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
        </div>
        <br />
        <div className="lead text-center">
          Let's start by connecting to your Spotify account.
        </div>
        <button type="button" className="btn btn-lg center-block pre-auth-view__btn">
          
          <span className="fa fa-lg fa-spotify" />&nbsp;&nbsp;Connect to Spotify
        </button>
      </div>
    );
  }
}

export default Instructions;

