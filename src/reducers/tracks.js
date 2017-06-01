export const tracks = (state = [], action) => {
  switch (action.type){
    case 'SELECT_PLAYLIST':
      return action.data ? [] : state;
    case 'ADD_TRACKS_DATA':
      return action.payload.items
        .map(data => ({
          id: data.track.id,
          name: data.track.name,
          artist: data.track.artists[0].name,
          duration_ms: data.track.duration_ms,
          popularity: data.track.popularity ? data.track.popularity/100 : 0,
          uri: data.track.uri
        }));
    case 'ADD_FEATURES_DATA':
      const features = action.payload.audio_features;
      return state.map((stateData, index) => {
        if (features[index] && (stateData.id === features[index].id)) {
          return {...stateData, 
            danceability: features[index].danceability,
            energy: features[index].energy,
            valence: features[index].valence,
            acousticness: features[index].acousticness,
            liveness: features[index].liveness,
            instrumentalness: features[index].instrumentalness
          }
        } else {
          console.log('ID mismatch');
          return state;
        }
      });
    default:
      return state;
  }
}