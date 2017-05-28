import React, { Component } from 'react';
import './PreAuthLayout.css';

import Instructions from '../../Blocks/Instructions/Instructions';

class PreAuthLayout extends Component {
  render() {
    return (
      <div className="pre-auth-layout">
        <Instructions />
      </div>
    );
  }
}

export default PreAuthLayout;
