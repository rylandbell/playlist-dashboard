import React from 'react';
import ExploreTracksView from './ExploreTracksView';
import Instructions from '../../../Blocks/Instructions/Instructions';
import Message from '../../../Blocks/Message/Message';
import './MainRegion.css';

const MainRegion = ({badAuthToken, selectedPlaylistTracks, selectedPlaylistAudioFeatures, fetchStatus, fullState}) => {
  const tracksLoaded = selectedPlaylistTracks && selectedPlaylistTracks.length > 0;
  const featuresLoaded = selectedPlaylistAudioFeatures && selectedPlaylistAudioFeatures.length > 0;
  const dataLoaded = tracksLoaded && featuresLoaded;
  const fetchPending = fetchStatus.getTracksPending || fetchStatus.getFeaturesPending;
  const fetchFailure = fetchStatus.getTracksFailure || fetchStatus.getFeaturesFailure;

  let loadingStatus;
  
  if (badAuthToken) {
    loadingStatus = 'badAuthToken'
  } else if (fetchPending) {
    loadingStatus = 'pending';
  } else if (fetchFailure) {
    loadingStatus = 'failure';
  } else if (dataLoaded) {
    loadingStatus = 'dataLoaded';
  } else {
    loadingStatus = 'none';
  }

  const viewEnum = {
    pending: <Message classList="big" loading={true} text="Loading tracks data... " />,
    failure: <Message classList="big" error={true} text="Error: failed to load tracks data." />,
    dataLoaded: <ExploreTracksView selectedPlaylistTracks={selectedPlaylistTracks} selectedPlaylistAudioFeatures={selectedPlaylistAudioFeatures} fullState={fullState} />,
    badAuthToken: <Message classList="big" error={true} text="Refreshing authorization token..." />,
    none: <Instructions />
  }

  return (
    <div className="main-region">
      {viewEnum[loadingStatus]}
    </div>
  );
}

export default MainRegion;

