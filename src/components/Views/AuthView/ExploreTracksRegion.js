import React, { Component } from 'react';
import TracksPane from '../../Panes/TracksPane/TracksPane';
import ChartPane from '../../Panes/ChartPane/ChartPane';
import PlaylistHeading from './PlaylistHeading';
import SelectedTracksCount from './SelectedTracksCount';
import {filterByFeatures} from '../../../helper';

class ExploreTracksRegion extends Component {
  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const featuresData = this.props.reduxState.selectedPlaylistAudioFeatures;
    const allFilters = this.props.reduxState.filters;

    const filteredTracks = tracks.filter(filterByFeatures.bind(this));
    const filteredFeaturesData = featuresData.filter(filterByFeatures.bind(this));

    return (
      <div className="auth-view__explore-tracks-flexbox">
        <div className="auth-view__playlist-title-row">
          <div>
            <PlaylistHeading {...this.props} />
            <SelectedTracksCount filteredTracks={filteredTracks} featuresData={featuresData} {...this.props} />
          </div>
        </div>
        <div className="auth-view__tracks-row">
          <TracksPane allFilters={allFilters} filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} /> 
        </div>
        <div className="auth-view__chart-row">
          <ChartPane filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} />
        </div>
      </div>
    );
  }
}

export default ExploreTracksRegion;

