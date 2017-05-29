import React from 'react';
import { connect } from 'react-redux';
import { hoverOnTrack, clearHoveredTrack } from '../../../actions';

import TracksTable from './TracksTable';
import './Tracks.css';

const mapStateToProps = (state) => {
  return {
    fetchStatus: state.fetchStatus,
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleTrackRowHover: track => {dispatch(hoverOnTrack(track))},
    handleMouseLeavesTracksTable: () => {dispatch(clearHoveredTrack())}
  }
}

const Tracks = ({fetchStatus, filters, filteredTracks, handleTrackRowHover, handleMouseLeavesTracksTable}) => {
  const loadingData = fetchStatus.getTracksPending || fetchStatus.getFeaturesPending;
  
  return (
    <div className="tracks__pane">
      {loadingData ? 
        null :
        <TracksTable 
          filters={filters}
          filteredTracks={filteredTracks}
          handleTrackRowHover={handleTrackRowHover}
          handleMouseLeavesTracksTable={handleMouseLeavesTracksTable}
        />
      }
    </div>
  );
}

const TracksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks)

export default TracksContainer;