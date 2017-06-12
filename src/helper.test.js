export const testTracksData = [
  {
    danceability: 0.78,
    energy: 0.51,
    key: 7,
    loudness: -9.955,
    mode: 1,
    speechiness: 0.0604,
    acousticness: 0.00076,
    instrumentalness: 0.792,
    liveness: 0.119,
    valence: 0.609,
    tempo: 135.016,
    type: "audio_features",
    id: "4rzfv0JLZfVhOhbSQ8o5jZ",
    uri: "spotify:track:4rzfv0JLZfVhOhbSQ8o5jZ",
    track_href: "https://api.spotify.com/v1/tracks/4rzfv0JLZfVhOhbSQ8o5jZ",
    analysis_url:
      "https://api.spotify.com/v1/audio-analysis/4rzfv0JLZfVhOhbSQ8o5jZ",
    duration_ms: 376000,
    time_signature: 4
  },
  {
    danceability: 0.177,
    energy: 0.0342,
    key: 4,
    loudness: -31.513,
    mode: 1,
    speechiness: 0.0381,
    acousticness: 0.979,
    instrumentalness: 0.826,
    liveness: 0.0806,
    valence: 0.0286,
    tempo: 137.85,
    type: "audio_features",
    id: "64IL0ZrOV7F6BDPm5fhfUa",
    uri: "spotify:track:64IL0ZrOV7F6BDPm5fhfUa",
    track_href: "https://api.spotify.com/v1/tracks/64IL0ZrOV7F6BDPm5fhfUa",
    analysis_url:
      "https://api.spotify.com/v1/audio-analysis/64IL0ZrOV7F6BDPm5fhfUa",
    duration_ms: 730067,
    time_signature: 4
  },
  {
    danceability: 0.53,
    energy: 0.829,
    key: 7,
    loudness: -7.014,
    mode: 1,
    speechiness: 0.0361,
    acousticness: 0.0537,
    instrumentalness: 0.88,
    liveness: 0.106,
    valence: 0.948,
    tempo: 134.99,
    type: "audio_features",
    id: "4Cy0NHJ8Gh0xMdwyM9RkQm",
    uri: "spotify:track:4Cy0NHJ8Gh0xMdwyM9RkQm",
    track_href: "https://api.spotify.com/v1/tracks/4Cy0NHJ8Gh0xMdwyM9RkQm",
    analysis_url:
      "https://api.spotify.com/v1/audio-analysis/4Cy0NHJ8Gh0xMdwyM9RkQm",
    duration_ms: 401440,
    time_signature: 4
  },
  {
    danceability: 0.508,
    energy: 0.07,
    key: 2,
    loudness: -33.178,
    mode: 0,
    speechiness: 0.0758,
    acousticness: 0.591,
    instrumentalness: 0.0726,
    liveness: 0.0807,
    valence: 0.197,
    tempo: 114.767,
    type: "audio_features",
    id: "6hvFrZNocdt2FcKGCSY5NI",
    uri: "spotify:track:6hvFrZNocdt2FcKGCSY5NI",
    track_href: "https://api.spotify.com/v1/tracks/6hvFrZNocdt2FcKGCSY5NI",
    analysis_url:
      "https://api.spotify.com/v1/audio-analysis/6hvFrZNocdt2FcKGCSY5NI",
    duration_ms: 358760,
    time_signature: 4
  },
  {
    danceability: 0.347,
    energy: 0.25,
    key: 2,
    loudness: -7.657,
    mode: 1,
    speechiness: 0.0336,
    acousticness: 0.934,
    instrumentalness: 0.000345,
    liveness: 0.118,
    valence: 0.0505,
    tempo: 122.318,
    type: "audio_features",
    id: "2E2znCPaS8anQe21GLxcvJ",
    uri: "spotify:track:2E2znCPaS8anQe21GLxcvJ",
    track_href: "https://api.spotify.com/v1/tracks/2E2znCPaS8anQe21GLxcvJ",
    analysis_url:
      "https://api.spotify.com/v1/audio-analysis/2E2znCPaS8anQe21GLxcvJ",
    duration_ms: 176093,
    time_signature: 4
  }
];

const testFeatureValues = [
  {
    name: 'danceability',
    isActive: true,
    isGraphed: true,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0.5, 1]
  },
  {
    name: 'energy',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'valence',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'acousticness',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  },
  {
    name: 'instrumentalness',
    isActive: true,
    isGraphed: false,
    isDim: false,
    sortBy: false,
    showReferenceLine: false,
    currentValue: [0, 1]
  }
];

import { getPlaylistDuration, filterByFeatures } from "./helper";

describe("helper functions", () => {
  describe("getPlaylistDuration", () => {
    const testTracks = [
      { duration_ms: 12345 },
      { duration_ms: 9992433 },
      { duration_ms: 534534 },
      { duration_ms: 99 },
      { duration_ms: 88888 }
    ];

    it("should return the combined length of tracks, in hours and minutes", () => {
      expect(getPlaylistDuration(testTracks)).toMatchSnapshot();
    });
  });

  describe("filterByFeatures", () => {
    it("should return true if a track passes all feature filters", () => {
      expect(filterByFeatures(0, testTracksData, testFeatureValues)).toEqual(true);
    });
    
    it("should return false if a track fails a single feature filter", () => {
      expect(filterByFeatures(1, testTracksData, testFeatureValues)).toEqual(false);
    });

    it("should return true if a feature has isActive=false", () => {
      const testInactiveFeatures = testFeatureValues.slice();
      testInactiveFeatures[0].currentValue = [0,0];
      testInactiveFeatures[0].isActive = false;
      expect(filterByFeatures(1, testTracksData, testInactiveFeatures)).toEqual(true);
    });

    it("should return false if a track has no value for a feature", () => {
      const testTracksWithMissingFeature = testTracksData.slice();
      testTracksWithMissingFeature[0].energy = undefined;
      expect(filterByFeatures(0, testTracksWithMissingFeature, testFeatureValues)).toEqual(false);
    });
  });
});
