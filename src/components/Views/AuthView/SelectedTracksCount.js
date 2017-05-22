import React, { Component } from 'react';

class ExporeTracks extends Component {
  render() {
    //only count tracks with non-null features data
    const allTracksCount = this.props.featuresData.filter(track => !!track).length;
    const filteredTracksCount = this.props.filteredTracks.length;

    return (
      <div className="row auth-view__selected-tracks-count-wrapper">
        <div className="auth-view__selected-tracks-count pull-right">{`${filteredTracksCount} of ${allTracksCount} Selected`}</div>
      </div>
    );
  }
}

export default ExporeTracks;

