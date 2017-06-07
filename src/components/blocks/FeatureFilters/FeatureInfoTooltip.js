import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const FeatureInfoTooltip = ({ feature }) =>
  <span className="hidden-xs">
    <Tooltip
      placement="right"
      overlay={feature.description}
      overlayClassName="feature-filters__feature-info-tooltip"
      arrowContent={<div className="rc-tooltip-arrow-inner" />}
    >
      <div className="fa fa-question-circle" />
    </Tooltip>
  </span>;

export default FeatureInfoTooltip;
