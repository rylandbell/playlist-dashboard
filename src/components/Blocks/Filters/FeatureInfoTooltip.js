import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const FeatureInfoTooltip = ({filter}) => (
  <span className="hidden-xs">
    <Tooltip
      placement="right"
      overlay={filter.description}
      overlayClassName="filters__feature-info-tooltip"
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <div className="fa fa-question-circle"></div>
    </Tooltip>
  </span>
);

export default FeatureInfoTooltip;