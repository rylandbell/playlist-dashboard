export const playlists = (state = [], action) => {
  switch (action.type){
    case 'ADD_PLAYLISTS_DATA':
      return action.payload.items
        .map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          ownerId: playlist.owner.id,
          images: playlist.images
        }));
    default:
      return state;
  }
}

export const selectedPlaylist = (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_PLAYLIST':
      return {...action.data};
    default:
      return state;
  }
}