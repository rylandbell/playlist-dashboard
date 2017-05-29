import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const featureDescriptions = {
  danceability: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.',
  energy: 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.',
  valence: 'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).',
  acousticness: 'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.',
  liveness: 'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.',
  instrumentalness: 'Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.',
  popularity: 'The popularity of a track is a value between 0 and 1. It is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.'
}

const FeatureInfoTooltip = ({filter}) => (
  <span className="hidden-xs">
    <Tooltip
      placement="right"
      overlay={featureDescriptions[filter.name]}
      overlayClassName="filters__feature-info-tooltip"
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <div className="fa fa-question-circle"></div>
    </Tooltip>
  </span>
);

export default FeatureInfoTooltip;