import React, { Component } from 'react';

class ExporeTracks extends Component {
  render() {
    const getPlaylistDuration = tracksArray => {
      const total_ms = tracksArray.reduce(
        (accumulator, track) => {
          return accumulator + track.track.duration_ms;
        },
        0
      );

      const total_min = Math.round(total_ms / (1000 * 60));

      const duration = {
        hr: Math.floor(total_min / 60),
        min: Math.floor(total_min % 60)
      }
      return duration;
    }

    //only count tracks with non-null features data
    const allTracksCount = this.props.featuresData.filter(track => !!track).length;
    const filteredTracksCount = this.props.filteredTracks.length;
    const duration = getPlaylistDuration(this.props.filteredTracks);

    let durationPhrase = "";
    if (duration.hr && duration.hr > 0) {
      durationPhrase += `${duration.hr} hr `;
    }
    durationPhrase += `${duration.min} min`;

    return (
      <div>
        <span className="auth-view__selected-tracks-count">{`${filteredTracksCount} of ${allTracksCount} songs, ${durationPhrase}`}</span>
      </div>
    );
  }
}

export default ExporeTracks;

