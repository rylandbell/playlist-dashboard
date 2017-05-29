import React from 'react';
import Tracks from '../../../Blocks/Tracks/Tracks';
import Chart from '../../../Blocks/Chart/Chart';
import PlaylistHeading from '../../../Blocks/PlaylistHeading/PlaylistHeading';
import {filterByFeatures} from '../../../../helper';

const ExploreTracksView = ({tracks, fullState}) => {

  const filteredTracks = tracks.filter((track, index) => filterByFeatures.bind(this)(index, fullState));

  return (
    <div className="main-region__explore-tracks-flexbox">
      <div className="main-region__playlist-heading-row">
        <div>
          <PlaylistHeading filteredTracks={filteredTracks} />
        </div>
      </div>
      <div className="main-region__tracks-row">
        <Tracks filteredTracks={filteredTracks} /> 
      </div>
      <div className="main-region__chart-row">
        <Chart filteredTracks={filteredTracks} />
      </div>
    </div>
  );
}

export default ExploreTracksView;