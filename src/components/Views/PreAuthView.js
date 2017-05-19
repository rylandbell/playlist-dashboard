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
            <div className="col-md-12">
              <h3>What are Audio Features?</h3>
              <div className="lead">Spotify's music analysis algorithms assign every track a score for features like Danceability and Instrumentalness.</div>
            </div>
          </div>
          {/*<div className="row">
            <div className="col-md-2">
              <img className="img-responsive center-block pre-auth-view__img" src="danceability.png" alt="Danceability" />
              <p className="text-center pre-auth-view__caption">Danceability</p>
            </div>
            <div className="col-md-2">
              <img className="img-responsive center-block pre-auth-view__img" src="energy.png" alt="Energy" />
              <p className="text-center pre-auth-view__caption">Energy</p>
            </div>
            <div className="col-md-2">
              <img className="img-responsive center-block pre-auth-view__img" src="valence.png" alt="Positivity" />
              <p className="text-center pre-auth-view__caption">Positivity</p>
            </div>
            <div className="col-md-2">
              <img className="img-responsive center-block pre-auth-view__img" src="acousticness.png" alt="Acousticness" />
              <p className="text-center pre-auth-view__caption">Acousticness</p>
            </div>
            <div className="col-md-2">
              <img className="img-responsive center-block pre-auth-view__img" src="instrumentalness.png" alt="Instrumentalness" />
              <p className="text-center pre-auth-view__caption">Instrumentalness</p>
            </div>
            <div className="col-md-2">
              <img className="img-responsive center-block pre-auth-view__img" src="liveness.png" alt="Liveness" />
              <p className="text-center pre-auth-view__caption">Liveness</p>
            </div>
          </div>*/}
          <div className="row">
            <div className="col-md-12">
              <h3>Filter Your Playlists</h3>
              <div className="lead">Refine your playlists by setting an allowed range for any number of features. Heading to the gym? Look for high-energy, high-danceability tracks. Want to focus? Look for tracks with a high instrumentalness score. </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>Save the Result</h3>
              <div className="lead">Filter your Spotify playlists by features like danceability and instrumentalness. </div>
            </div>
          </div>

          <hr />
          <div className="lead text-center">
            Want to try it? Let's start by connecting to your Spotify account.
          </div>
          <button onClick={this.onClick} type="button" className="btn btn-primary btn-lg center-block">
            
            <span className="fa fa-lg fa-spotify" />&nbsp;&nbsp;Connect to Spotify
          </button>
        </div>
      </div>
    );
  }
}

export default PreAuthView;