import React, { Component } from 'react';
import TracksPane from '../TracksPane/TracksPane';
import ChartPane from '../ChartPane/ChartPane';
import {filterByFeatures} from '../../helper';

class ExporeTracks extends Component {
  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const featuresData = this.props.reduxState.audioFeaturesData;
    const allFilters = this.props.reduxState.filters;

    const filteredTracks = tracks.filter(filterByFeatures.bind(this));
    const filteredFeaturesData = featuresData.filter(filterByFeatures.bind(this));

    //only count tracks with non-null features data
    const allTracksCount = featuresData.filter(track => !!track).length;
    const filteredTracksCount = filteredTracks.length;

    return (
      <div>
        <div className="row">
          <TracksPane allFilters={allFilters} filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} /> 
        </div>
        <div className="selected-tracks-count pull-right">{`${filteredTracksCount} of ${allTracksCount} Selected`}</div>
        <div className="row">
          <ChartPane filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} />
        </div>
      </div>
    );
  }
}

export default ExporeTracks;

