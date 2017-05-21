import React, { Component } from 'react';
import TracksPane from '../../TracksPane/TracksPane';
import ChartPane from '../../ChartPane/ChartPane';
import SelectedTracksCount from './SelectedTracksCount';
import {filterByFeatures} from '../../../helper';

class ExploreTracksRegion extends Component {
  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const featuresData = this.props.reduxState.audioFeaturesData;
    const allFilters = this.props.reduxState.filters;

    const filteredTracks = tracks.filter(filterByFeatures.bind(this));
    const filteredFeaturesData = featuresData.filter(filterByFeatures.bind(this));

    return (
      <div>
        <div className="row">
          <TracksPane allFilters={allFilters} filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} /> 
        </div>
        <SelectedTracksCount filteredTracks={filteredTracks} featuresData={featuresData} {...this.props} />
        <div className="row">
          <ChartPane filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} />
        </div>
      </div>
    );
  }
}

export default ExploreTracksRegion;

