import React, { Component } from 'react';
import './PreAuthView.css';

import Instructions from '../../Utilities/Instructions/Instructions';

class PreAuthView extends Component {
  render() {
    return (
      <Instructions {...this.props} />
    );
  }
}

export default PreAuthView;
