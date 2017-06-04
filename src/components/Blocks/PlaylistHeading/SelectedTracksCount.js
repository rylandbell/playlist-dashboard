import React from 'react';
import { getPlaylistDuration } from '../../../helper.js';

const SelectedTracksCount = ({ tracks, filteredTracks }) => {
  //only count tracks with non-null features data
  const allTracksCount = tracks.filter(track => !!track).length;
  const filteredTracksCount = filteredTracks.length;
  const duration = getPlaylistDuration(filteredTracks);

  let durationPhrase = '';
  if (duration.hr && duration.hr > 0) {
    durationPhrase += `${duration.hr} hr `;
  }
  durationPhrase += `${duration.min} min`;

  return (
    <div>
      <span className="playlist-heading__tracks-count">{`${filteredTracksCount} of ${allTracksCount} songs, ${durationPhrase}`}</span>
    </div>
  );
};

export default SelectedTracksCount;
