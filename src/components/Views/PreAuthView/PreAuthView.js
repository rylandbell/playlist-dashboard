import React, { Component } from 'react';
import './PreAuthView.css';

import Instructions from '../../Utilities/Instructions/Instructions';

class PreAuthView extends Component {
  render() {
    return (
      <div className="pre-auth-view">
        <Instructions {...this.props} />
      </div>
    );
  }
}

export default PreAuthView;
