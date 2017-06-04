import React from 'react';
import ExploreTracksView from './ExploreTracksView';
import Instructions from '../../../blocks/Instructions/Instructions';
import Message from '../../../blocks/Message/Message';
import './MainRegion.css';

const MainRegion = ({ badAuthToken, tracks, fetchStatus, filteredTracks }) => {
  const tracksLoaded = tracks && tracks.length > 0;
  const featuresLoaded = fetchStatus.getFeaturesSuccess;
  const dataLoaded = tracksLoaded && featuresLoaded;
  const noTracksFound = featuresLoaded && !tracksLoaded;
  const fetchPending =
    fetchStatus.getTracksPending || fetchStatus.getFeaturesPending;
  const fetchFailure =
    fetchStatus.getTracksFailure || fetchStatus.getFeaturesFailure;

  let content;

  if (badAuthToken) {
    content = (
      <Message
        classList="big"
        error={true}
        text="Refreshing authorization token..."
      />
    );
  } else if (fetchPending) {
    content = (
      <Message classList="big" loading={true} text="Loading tracks data... " />
    );
  } else if (fetchFailure) {
    content = (
      <Message classList="big" error={true} text="Error loading tracks." />
    );
  } else if (noTracksFound) {
    content = (
      <Message classList="big" text="No tracks were found for this playlist." />
    );
  } else if (dataLoaded) {
    content = (
      <ExploreTracksView tracks={tracks} filteredTracks={filteredTracks} />
    );
  } else {
    content = <Instructions />;
  }

  return (
    <div className="main-region">
      {content}
    </div>
  );
};

export default MainRegion;
