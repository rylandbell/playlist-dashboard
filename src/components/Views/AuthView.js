import React, { Component } from 'react';
import TracksPane from '../TracksPane/TracksPane';
import ChartPane from '../ChartPane/ChartPane';
import Sidebar from '../Sidebar/Sidebar';
import './AuthView.css';

class AuthView extends Component {
  render() {
    const state = this.props.reduxState;
    const tracksLoaded = state.selectedPlaylistTracks && state.selectedPlaylistTracks.length > 0;
    const featuresLoaded = state.audioFeaturesData && state.audioFeaturesData.length > 0;
    const dataLoaded = tracksLoaded && featuresLoaded;
    return (
      <div>
        <Sidebar {...this.props} />
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 not-sidebar">
          <div className="row">
            {dataLoaded ? 
              <TracksPane {...this.props} /> :
              null
            }
          </div>
          <div className="row">
            {dataLoaded ? 
              <ChartPane {...this.props} /> :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AuthView;

