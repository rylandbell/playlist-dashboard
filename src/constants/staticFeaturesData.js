export const staticFeaturesData = [
  {
    name: 'danceability',
    displayName: 'Danceability',
    shortName: 'Dance',
    min: 0,
    max: 1,
    color: 'hsl(194, 66%, 61%)',
    dimColor: 'hsl(194, 46%, 21%)',
    description:
      'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.'
  },
  {
    name: 'energy',
    displayName: 'Energy',
    shortName: 'Energy',
    min: 0,
    max: 1,
    color: 'hsl(2, 64%, 58%)',
    dimColor: 'hsl(2, 44%, 18%)',
    description:
      'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.'
  },
  {
    name: 'valence',
    displayName: 'Positivity',
    shortName: 'Pos',
    min: 0,
    max: 1,
    color: 'hsl(120, 39%, 54%)',
    dimColor: 'hsl(120, 19%, 14%)',
    description:
      'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).'
  },
  {
    name: 'popularity',
    displayName: 'Popularity',
    shortName: 'Pop',
    min: 0,
    max: 1,
    color: 'hsl(24, 79%, 49%)',
    dimColor: 'hsl(24, 59%, 19%)',
    description:
      'The popularity of a track is a value between 0 and 1. It is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.'
  },
  {
    name: 'acousticness',
    displayName: 'Acousticness',
    shortName: 'Acous',
    min: 0,
    max: 1,
    color: 'hsl(35, 84%, 62%)',
    dimColor: 'hsl(35, 64%, 17%)',
    description:
      'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.'
  },
  {
    name: 'instrumentalness',
    displayName: 'Instrumentalness',
    shortName: 'Inst',
    min: 0,
    max: 1,
    color: 'hsl(0, 0%, 92%)',
    dimColor: 'hsl(0, 0%, 22%)',
    description:
      'Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.'
  }
  // {
  //   name: 'liveness',
  //   displayName: 'Liveness',
  //   shortName: 'Live',
  //   min: 0,
  //   max: 1,
  //   color: '#DF691A',
  //   description: 'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.'
  // },
];
