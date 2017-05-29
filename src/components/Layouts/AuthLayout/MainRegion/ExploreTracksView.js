import React from 'react';
import Tracks from '../../../Blocks/Tracks/Tracks';
import Chart from '../../../Blocks/Chart/Chart';
import PlaylistHeading from '../../../Blocks/PlaylistHeading/PlaylistHeading';
import {filterByFeatures} from '../../../../helper';

const ExploreTracksView = ({tracks, audioFeatures, fullState}) => {
  const featuresData = audioFeatures;

  const filteredTracks = tracks.filter((track, index) => filterByFeatures.bind(this)(index, fullState));
  const filteredFeaturesData = featuresData.filter((track, index) => filterByFeatures.bind(this)(index, fullState));

  return (
    <div className="main-region__explore-tracks-flexbox">
      <div className="main-region__playlist-heading-row">
        <div>
          <PlaylistHeading filteredTracks={filteredTracks} featuresData={featuresData} />
        </div>
      </div>
      <div className="main-region__tracks-row">
        <Tracks filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} /> 
      </div>
      <div className="main-region__chart-row">
        <Chart filteredTracks={filteredTracks} filteredFeaturesData={filteredFeaturesData} />
      </div>
    </div>
  );
}

export default ExploreTracksView;