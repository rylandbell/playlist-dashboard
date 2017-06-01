export const playlists = (state = [], action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      return action.payload.items
        .map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          ownerId: playlist.owner.id
        }));
    default:
      return state;
  }
}

export const selectedPlaylist = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_PLAYLIST':
      return {...action.data};
    default:
      return state;
  }
}