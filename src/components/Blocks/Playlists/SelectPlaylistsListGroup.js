import React from 'react';
import SelectPlaylistsListItem from './SelectPlaylistsListItem';

const SelectPlaylistsListGroup = ({
  playlists,
  selectedPlaylist,
  autoSidebarTabSwitch,
  handlePlaylistSelect,
  mediaType
}) => {
  const mappedPlaylists = playlists.map(list =>
    <SelectPlaylistsListItem
      key={list.id}
      playlist={list}
      selectedPlaylist={selectedPlaylist}
      autoSidebarTabSwitch={autoSidebarTabSwitch}
      handlePlaylistSelect={handlePlaylistSelect}
      mediaType={mediaType}
    />
  );

  return playlists.length > 0
    ? <div className="list-group">{mappedPlaylists}</div>
    : <p>No playlists found for this account.</p>;
};

export default SelectPlaylistsListGroup;
