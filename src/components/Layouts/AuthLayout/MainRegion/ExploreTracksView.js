import React, { Component } from 'react';
import Tracks from '../../../Blocks/Tracks/Tracks';
import Chart from '../../../Blocks/Chart/Chart';
import PlaylistHeading from '../../../Blocks/PlaylistHeading/PlaylistHeading';
import {filterByFeatures} from '../../../../helper';

class ExploreTracksView extends Component {
  render() {
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const featuresData = this.props.reduxState.selectedPlaylistAudioFeatures;
    const allFilters = this.props.reduxState.filters;

    const filteredTracks = tracks.filter(filterByFeatures.bind(this));
    const filteredFeaturesData = featuresData.filter(filterByFeatures.bind(this));

    return (
      <div className="main-region__explore-tracks-flexbox">
        <div className="main-region__playlist-heading-row">
          <div>
            <PlaylistHeading filteredTracks={filteredTracks} featuresData={featuresData} {...this.props} />
          </div>
        </div>
        <div className="main-region__tracks-row">
          <Tracks allFilters={allFilters} filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} /> 
        </div>
        <div className="main-region__chart-row">
          <Chart filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} {...this.props} />
        </div>
      </div>
    );
  }
}

export default ExploreTracksView;

