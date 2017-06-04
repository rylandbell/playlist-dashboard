import React from 'react';
import Tracks from '../../../blocks/Tracks/Tracks';
import Chart from '../../../blocks/Chart/Chart';
import PlaylistHeading from '../../../blocks/PlaylistHeading/PlaylistHeading';

const ExploreTracksView = ({ tracks, filteredTracks }) =>
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
  </div>;

export default ExploreTracksView;
