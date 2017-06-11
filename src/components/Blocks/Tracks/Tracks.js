import React from 'react';
import { connect } from 'react-redux';
import { hoverOnTrack, clearHoveredTrack, sortByFeature } from '../../../actions/actions';
import { getFeaturesData } from '../../../selectors/features';

import TracksTable from './TracksTable';
import './Tracks.css';

const mapStateToProps = state => {
  return {
    fetchStatus: state.fetchStatus,
    features: getFeaturesData(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTrackRowHover: track => {
      dispatch(hoverOnTrack(track));
    },
    handleMouseLeavesTracksTable: () => {
      dispatch(clearHoveredTrack());
    },
    handleColumnHeadingClick: featureName => {
      dispatch(sortByFeature(featureName));
    }
  };
};

export const Tracks = ({
  fetchStatus,
  features,
  filteredTracks,
  handleTrackRowHover,
  handleMouseLeavesTracksTable,
  handleColumnHeadingClick
}) => {
  const loadingData =
    fetchStatus.getTracksPending || fetchStatus.getFeaturesPending;

  return (
    <div className="tracks__pane">
      {loadingData
        ? null
        : <TracksTable
            features={features}
            filteredTracks={filteredTracks}
            handleTrackRowHover={handleTrackRowHover}
            handleMouseLeavesTracksTable={handleMouseLeavesTracksTable}
            handleColumnHeadingClick={handleColumnHeadingClick}
          />}
    </div>
  );
};

const TracksContainer = connect(mapStateToProps, mapDispatchToProps)(Tracks);

export default TracksContainer;
